# coding=utf-8
import os
import json
import sys
import time
from optparse import OptionParser
from threading import Thread

SERVER_CODE = r'''# coding=utf-8
import select
import socket

import time
from Queue import Queue
from threading import Thread

ADDRESS = ('%s', 8080)


class LogThread(Thread):
    def __init__(self):
        super(LogThread, self).__init__()
        self.msg_queue = Queue(maxsize=10000)

    def run(self):
        f = open('./client_test.log', mode='w')
        while True:
            msg = self.msg_queue.get()
            f.write(msg + '\n')

    def add_msg(self, msg):
        self.msg_queue.put(msg)


class Server(object):
    def __init__(self):
        self.connections = {}

    def start(self):
        logthr = LogThread()
        logthr.setDaemon(True)
        logthr.start()
        server_sock = socket.socket()
        server_sock.setblocking(False)
        server_sock.bind(ADDRESS)
        server_sock.listen(128)

        epoll_obj = select.poll()
        epoll_obj.register(server_sock.fileno(), select.EPOLLIN | select.EPOLLOUT | select.EPOLLERR)

        stop_time = time.time() + 2400
        while stop_time - time.time() > 0:
            events = epoll_obj.poll()
            # print(events)

            for fd, event in events:
                if fd == server_sock.fileno():
                    conn, address = server_sock.accept()
                    conn.setblocking(False)
                    epoll_obj.register(conn.fileno(), select.EPOLLIN)
                    self.connections[conn.fileno()] = conn
                else:
                    if event & select.EPOLLIN:
                        data = self.connections[fd].recv(1024)
                        msg = data.decode("utf-8")
                        if msg == "end" or not data:
                            self.connections[fd].close() 
                            epoll_obj.unregister(fd) 
                            del self.connections[fd]
                        else:
                            logthr.add_msg(msg)
                    elif event & select.EPOLLOUT:
                        pass
                    elif event & select.EPOLLERR:
                        self.connections[fd].close()
                        epoll_obj.unregister(fd)
                        del self.connections[fd]
        server_sock.close()


s = Server()
s.start()
'''

CLIENT_CODE = r'''#coding=utf-8
import random
import socket
import time
from Queue import Queue
import threading
import traceback

SERVERS = [%s]
MAX_THR = 25000
STEP = 21
max_count = MAX_THR
step_count = 500
lock = threading.RLock()

class LogThread(threading.Thread):
    def __init__(self):
        super(LogThread, self).__init__()
        self.msg_queue = Queue(maxsize=10000)

    def run(self):
        f = open('./client_test.log', mode='w')
        while True:
            msg = self.msg_queue.get()
            f.write(msg + '\n')

    def add_msg(self, msg):
        self.msg_queue.put(msg)


class ClientHandler(threading.Thread):

    def __init__(self, id, logthr):
        super(ClientHandler, self).__init__()
        self.id = id
        self.logthr = logthr

    def run(self):
        try:
            client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            server = random.sample(SERVERS, 1)[0]
            server_addr = (server, 8080)
            client_sock.connect(server_addr)
            for r in range(0, STEP):
                start_time = time.time()
                if r == STEP - 1:
                    msg = 'end'
                else:
                    msg = 'test client'
                client_sock.send(msg.encode())
                recv_data = client_sock.recv(1024)
                self.logthr.add_msg("thread {} clent received msg：{}".format(self.id, recv_data))
                if time.time() - start_time < 60:
                    time.sleep(60 + start_time - time.time())
            client_sock.close()
        except Exception as e:
            info = traceback.format_exc()
            self.logthr.add_msg("thread {} exception：{}".format(self.id, info))
        finally:
            try:
                lock.acquire()
                global max_count
                max_count = max_count - 1
            finally:
                lock.release()


class Main(object):
    def __init__(self):
        pass

    def start(self):
        logthr = LogThread()
        logthr.setDaemon(True)
        logthr.start()
        step = MAX_THR / step_count
        for i in range(step):
            for j in range(step_count):
                t = ClientHandler(i * step_count + j, logthr)
                t.start()
            time.sleep(2)
        global max_count
        while max_count > 0:
            time.sleep(1)
        logthr.add_msg('exited')


m = Main()
m.start()
'''.decode('utf-8')


def exec_cmd(cmd):
    try:
        val = os.popen(cmd)
        print cmd
        return val
    except Exception as e:
        print ('exec cmd {} failed'.format(e.message))
        return None


def get_instance_infos(tag_id):
    results = exec_cmd('/pitrix/cli/describe-instances -T %s -f /pitrix/conf/client.yaml' % tag_id)
    result_json = get_json_data(results)
    instance_list = result_json['instance_set']
    return instance_list


def get_json_data(results):
    need_datas = []
    start = False
    for line in results.readlines():
        if line.startswith('recv'):
            line = line.replace('recv:', '')
            start = True
        if start and '0' != line:
            need_datas.append(line)
    s = ''.join(need_datas)
    val = json.loads(s)
    return val


def start_server(instance):
    instance_id = instance['instance_id']
    host_machine = instance['host_machine']
    ip_addr = instance['vxnets'][0]['private_ip']
    tmp_file = './%s' % instance_id
    fd = open(tmp_file, mode='w')
    fd.write(SERVER_CODE % ip_addr)
    fd.close()
    cmd = 'scp %s root@%s:/root/' % (tmp_file, host_machine)
    res = exec_cmd(cmd)
    if res:
        copy_cmd = '''ssh root@{host_machine} "safe-guest-ftp {instance_id} put '/root/{instance_id}' '/root/server.py' 5" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(copy_cmd)
        start_cmd = '''ssh root@{host_machine} "safe-guest-sh {instance_id} 'python /root/server.py &' 1" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(start_cmd)
        rm_cmd = '''ssh root@{host_machine} "rm -f /root/{instance_id}" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(rm_cmd)
        exec_cmd('rm -f %s' % tmp_file)


def start_client(instance, eip_str):
    instance_id = instance['instance_id']
    host_machine = instance['host_machine']
    tmp_file = './%s' % instance_id
    fd = open(tmp_file, mode='w')
    content = CLIENT_CODE % eip_str
    fd.write(content.encode('utf-8'))
    fd.close()
    cmd = 'scp %s root@%s:/root/' % (tmp_file, host_machine)
    res = exec_cmd(cmd)
    if res:
        copy_cmd = '''ssh root@{host_machine} "safe-guest-ftp {instance_id} put '/root/{instance_id}' '/root/client.py' 5" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(copy_cmd)
        start_cmd = '''ssh root@{host_machine} "safe-guest-sh {instance_id} 'python /root/client.py &' 1" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(start_cmd)
        rm_cmd = '''ssh root@{host_machine} "rm -f /root/{instance_id}" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(rm_cmd)
        exec_cmd('rm -f %s' % tmp_file)


def start_service(server_tag, client_tag, client_only=0):
    server_insts = get_instance_infos(server_tag)
    eips = [i['eip']['eip_addr'] for i in server_insts]
    if not client_only:
        for server in server_insts:
            new_task(start_server, server)
        time.sleep(2)
    client_insts = get_instance_infos(client_tag)
    fotmat_eips = []
    for e in eips:
        fotmat_eips.append('\'' + e + '\'')
    eip_str = ','.join(fotmat_eips)
    for client_inst in client_insts:
        new_task(start_client, client_inst, eip_str)


def new_task(task, *args):
    t = Thread(target=task, args=args)
    t.start()


def stop(instance, script_name):
    instance_id = instance['instance_id']
    host_machine = instance['host_machine']
    tmp_file = './%s.stop' % instance_id
    fd = open(tmp_file, mode='w')
    fd.write("ps -ef | grep %s.py|awk '{print $2}'| xargs kill -9" % script_name)
    fd.close()
    cmd = 'scp %s root@%s:/root/%s' % (tmp_file, host_machine, tmp_file)
    res = exec_cmd(cmd)
    if res:
        copy_cmd = '''ssh root@{host_machine} "safe-guest-ftp {instance_id} put '/root/{instance_id}.stop' '/root/stop.sh' 5" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(copy_cmd)
        ch_cmd = '''ssh root@{host_machine} "safe-guest-sh {instance_id} 'chmod +x /root/stop.sh' 1" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(ch_cmd)
        stop_cmd = '''ssh root@{host_machine} "safe-guest-sh {instance_id} './stop.sh' 1" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(stop_cmd)
        rm_cmd = '''ssh root@{host_machine} "rm -f /root/{instance_id}.stop" '''.format(
            host_machine=host_machine,
            instance_id=instance_id
        )
        exec_cmd(rm_cmd)
        exec_cmd('rm -f %s' % tmp_file)


def stop_service(server_tag, client_tag, client_only=0):
    if not client_only:
        server_insts = get_instance_infos(server_tag)
        for server in server_insts:
            new_task(stop, server, 'server')
    client_insts = get_instance_infos(client_tag)
    for client in client_insts:
        new_task(stop, client, 'client')


def _get_opt_parser():
    ''' get option parser '''

    MSG_USAGE = '''%prog [-c "client_tag_id" -s "server_tag_id"] [options] [-f <conf_file>]'''
    opt_parser = OptionParser(MSG_USAGE)

    opt_parser.add_option("-c", "--client_tag_id", action="store", type="string",
                          dest="client_tag_id", help='''client_tag_id''', default="")
    opt_parser.add_option("-o", "--client_only", action="store", type=int,
                          dest="client_only", help='''start client only''', default=0)

    opt_parser.add_option("-s", "--server_tag_id", action="store", type="string",
                          dest="server_tag_id", help='''server_tag_id''', default="")
    opt_parser.add_option("-a", "--action", action="store", type="string",
                          dest="action", help='''start or stop''', default="start")
    return opt_parser


def main(args):
    parser = _get_opt_parser()
    (options, _) = parser.parse_args(args)

    # send request
    action = options.action
    client_tag_id = options.client_tag_id
    server_tag_id = options.server_tag_id
    client_only = options.client_only
    if not (client_tag_id or server_tag_id):
        print '''params 'client_tag_id, server_tag_id' can't be empty'''
        return
    if action == 'start':
        start_service(server_tag_id, client_tag_id, client_only=client_only)
    elif action == 'stop':
        stop_service(server_tag_id, client_tag_id, client_only=client_only)
    else:
        print 'invalid action %s' % action


if __name__ == "__main__":
    main(sys.argv[1:])
