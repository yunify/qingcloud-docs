# coding=utf-8
import os
import json
import sys
from Queue import Queue
from optparse import OptionParser
from threading import Thread


def exec_cmd(cmd):
    try:
        val = os.popen(cmd)
        return val
    except Exception as e:
        print ('exec cmd {} failed'.format(e.message))
        return None


def get_instance_infos(nfv_id):
    results = exec_cmd('/pitrix/cli/describe-instances -N %s -f /pitrix/conf/client.yaml' % nfv_id)
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


def new_task(task, *args):
    t = Thread(target=task, args=args)
    t.start()


def cal(instance, queue_list):
    instance_id = instance['instance_id']
    host_machine = instance['host_machine']
    copy_cmd = '''ssh root@{host_machine} "safe-guest-sh {instance_id} 'conntrack -L |grep EST| wc -l' 5" '''.format(
        host_machine=host_machine,
        instance_id=instance_id
    )
    ret = exec_cmd(copy_cmd)
    line = ret.readlines()[0]
    queue_list.put((host_machine, line))


def _get_opt_parser():
    ''' get option parser '''

    MSG_USAGE = '''%prog [-n "nfv_id"]'''
    opt_parser = OptionParser(MSG_USAGE)

    opt_parser.add_option("-n", "--nfv_id", action="store", type="string",
                          dest="nfv_id", help='''nfv_id''', default="")
    return opt_parser


def main(args):
    parser = _get_opt_parser()
    (options, _) = parser.parse_args(args)

    # send request
    nfv_id = options.nfv_id
    instances = get_instance_infos(nfv_id)
    size = len(instances)
    queue_list = Queue(maxsize=size)
    for instance in instances:
        new_task(cal, instance, queue_list)
    num = 0
    for i in range(0, size):
        item = queue_list.get()
        print item
        num += int(item[1])
    print 'all', num


if __name__ == "__main__":
    main(sys.argv[1:])
