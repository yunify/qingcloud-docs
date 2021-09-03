---
title: "Linux系统下查看系统用户登录记录"
date: 2021-04-09T21:37:25+09:00
description: Test description
weight: 30
draft: false
enableToc: false

---

## 背景信息

如需查看Linux系统用户登录记录，可参考下面方法。

##  相关命功能如下所示

**who命令显示当前登录用户的信息**

```
[root@i-xxxxxxx ~]# who
root     pts/0        2021-04-10 14:07 (192.168.xxx.xxxx)

```

**w命令显示当前登录的用户名并显示该用户当前执行的任务**

```
[root@i-xxxxxxx ~]# w
 14:11:22 up 4 min,  1 user,  load average: 2.43, 1.45, 0.61
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    192.168.255.254  14:07    2.00s  0.04s  0.00s w

```

**users命令显示当前登录的用户名**

```
[root@i-xxxxxxxx~]# users
root

```

**last命令显示当前与过去登录系统的用户信息**

```
[root@i-xxxxxxxx ~]# lastb
root     tty1                          Wed Apr  7 10:19 - 10:19  (00:00)    
root     tty1                          Thu Apr  1 09:58 - 09:58  (00:00)    

btmp begins Thu Apr  1 09:58:34 2021

```

**lastlog命令显示用户最后一次登录的信息**

```
[root@i-xxxxxxxx ~]# lastlog
用户名           端口     来自             最后登陆时间
root             pts/0    192.168.255.254  六 4月 10 14:07:20 +0800 2021
bin                                        **从未登录过**
daemon                                     **从未登录过**
adm                                        **从未登录过**
lp                                         **从未登录过**
sync                                       **从未登录过**
shutdown                                   **从未登录过**
halt                                       **从未登录过**
mail                                       **从未登录过**

```

**secure文件查看登录记录**

```
[root@i-xxxxxxxx ~]# cat /var/log/secure
Apr 10 14:07:15 i-71lpe3fm polkitd[486]: Acquired the name org.freedesktop.PolicyKit1 on the system bus
Apr 10 14:07:16 i-71lpe3fm sshd[864]: Server listening on 0.0.0.0 port 22.
Apr 10 14:07:16 i-71lpe3fm sshd[864]: Server listening on :: port 22.
Apr 10 14:07:19 i-71lpe3fm sshd[1004]: Accepted password for root from 192.168.255.254 port 55696 ssh2
Apr 10 14:07:19 i-71lpe3fm sshd[1004]: pam_unix(sshd:session): session opened for user root by (uid=0)

```

