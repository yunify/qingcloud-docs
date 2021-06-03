---
title: "strongswan与VPC共同搭建隧道"
linkTitle: "strongswan与VPC共同搭建隧道"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 5
---

## 项目介绍

客户业务在往青云迁移的过程中，因为两边的数据需要同步，所以需要建立站点到站点ipsec隧道，由于本地IDC设备不支持vpn服务，所以采用自建ipsec的方式互联，采用的是strongswan的方式，以下是模拟客户业务环境，成功搭建ipsec隧道的案例，供参考。

### qingcloud ap2a （vpc自身具备ipsec服务）

私有网络  172.25.100.0/24

公网ip     139.198.120.221



### pek3  vm信息（模拟本地IDC机房服务器）

私有ip  172.20.100.180

公网ip   139.198.13.15

私有网络 172.20.100.0/24



### 最终需要实现

172.25.100.0/24<==>172.20.100.0/24

### 1、pek3区的vm需要安装strongswan ，采用以下命令

```
sudo apt update
sudo apt install strongswan strongswan-pki
```



### 2、配置内核参数

```
$ cat >> /etc/sysctl.conf << EOF
echo net.ipv4.ip_forward = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
EOF
 
$ sysctl -p /etc/sysctl.conf
```



### 3、生成预共享秘钥

```
root@i-y862i3l9:~# openssl rand -base64 16
oCTYi71l0ZU7WcRgLYaspg==
```

### 4、pek3 vm的隧道环境配置参数

#### <1、配置预共享秘钥

```
root@i-y862i3l9:~# cat /etc/ipsec.secrets
# This file holds shared secrets or RSA private keys for authentication.
 
# RSA private key for this host, authenticating it to any other host
# which knows the public part.
#本地公网出口IP   #对端公网出口IP     #双方约定的秘钥
139.198.121.220 139.198.13.15 : PSK "oCTYi71l0ZU7WcRgLYaspg=="
```

#### <2、配置 ipsec.conf的配置

```
# defined by QingCloud
 
version 2.0
include /etc/ipsec.d/*.conf
 
config setup
    cachecrls=yes
    strictcrlpolicy=yes   
    plutostderrlog=/var/log/ipsec.log
     
conn %default
    rekey=yes
    authby=secret
    auto=start
    type=tunnel
    keyexchange=ikev1
    pfs=no
    dpddelay=15
    dpdtimeout=60
    dpdaction=restart
    #nat_traversal=yes
 
conn toap2a
    authby=secret
    left=172.20.100.180
    leftid=139.198.13.15
    leftsubnet=172.20.100.0/24
    right=139.198.121.220
    rightsubnet=172.25.100.0/24
    ike=3des-md5-modp1536!
    esp=3des-md5-modp1536!
    ikelifetime=1h
    lifetime=8h
    auto=start
 
可以参考官方文档的配置
https://www.strongswan.org/testing/testresults/ikev2/net2net-cert/moon.ipsec.conf
```



### 5、ap2a vpc的环境配置（vpc自身具备ipsec服务）

<img src="../homer/strongswan_01.png" width="60%" height="100%">

ipsec.conf的配置如下

```
# defined by QingCloud
 
version 2.0
include /etc/ipsec.d/*.conf
 
config setup
    listen=10.160.1.49
    protostack=netkey
    nat_traversal=yes
    keep_alive=60
    virtual_private=
    oe=off
    # debug
    #plutodebug="all"
    # log
    #plutoopts="--perpeerlog"
    #plutostderrlog=/var/log/ipsec.log
     
conn %default
    rekey=yes
    authby=secret
    auto=start
    type=tunnel
    keyexchange=ike
    phase2=esp
    pfs=yes
    dpddelay=15
    dpdtimeout=60
    dpdaction=restart
 
 
conn 139.198.13.15
    left=10.160.1.49
    leftid=139.198.121.220
    leftsubnets={172.25.10.0/24}
    right=139.198.13.15
    rightid=139.198.13.15
    rightsubnets={172.20.100.0/24}
    ike=3des-md5;modp1536
    phase2alg=3des-md5;modp1536
    pfs=no
    ikev2=no
```

### 6、启动strongswan服务

```
systemctl start strongswan
systemctl enable strongswan
```



### 7、查看服务端口监听

```

root@i-y862i3l9:~# netstat -unptl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name   
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      660/systemd-resolve
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      745/sshd           
tcp        0      0 127.0.0.1:6010          0.0.0.0:*               LISTEN      12290/sshd: root@pt
tcp6       0      0 :::22                   :::*                    LISTEN      745/sshd           
tcp6       0      0 ::1:6010                :::*                    LISTEN      12290/sshd: root@pt
udp        0      0 127.0.0.53:53           0.0.0.0:*                           660/systemd-resolve
udp        0      0 0.0.0.0:68              0.0.0.0:*                           683/dhclient       
udp        0      0 0.0.0.0:4500            0.0.0.0:*                           25435/charon       
udp        0      0 0.0.0.0:500             0.0.0.0:*                           25435/charon       
udp6       0      0 :::4500                 :::*                                25435/charon       
udp6       0      0 :::500                  :::*                                25435/charon       
root@i-y862i3l9:~#
```



### 8、启动ipsec服务，并查看隧道连接状态

```
root@i-y862i3l9:~# ipsec start
root@i-y862i3l9:~# ipsec statusall
Status of IKE charon daemon (strongSwan 5.6.2, Linux 4.15.0-121-generic, x86_64):
  uptime: 15 seconds, since Dec 24 12:40:48 2020
  malloc: sbrk 1626112, mmap 0, used 574896, free 1051216
  worker threads: 11 of 16 idle, 5/0/0/0 working, job queue: 0/0/0/0, scheduled: 4
  loaded plugins: charon aes rc2 sha2 sha1 md4 md5 mgf1 random nonce x509 revocation constraints pubkey pkcs1 pkcs7 pkcs8 pkcs12 pgp dnskey sshkey pem openssl fips-prf gmp agent xcbc hmac gcm attr kernel-netlink resolve socket-default connmark stroke updown eap-mschapv2 xauth-generic counters
Listening IP addresses:
  172.20.100.180
Connections:
      toap2a:  172.20.100.180...139.198.121.220  IKEv1, dpddelay=15s
      toap2a:   local:  [139.198.13.15] uses pre-shared key authentication
      toap2a:   remote: [139.198.121.220] uses pre-shared key authentication
      toap2a:   child:  172.20.100.0/24 === 172.25.100.0/24 TUNNEL, dpdaction=restart
Security Associations (1 up, 0 connecting):
      toap2a[1]: ESTABLISHED 15 seconds ago, 172.20.100.180[139.198.13.15]...139.198.121.220[139.198.121.220]
      toap2a[1]: IKEv1 SPIs: 1e2e0d6dd9f2eab1_i* ea820e636b879f8d_r, pre-shared key reauthentication in 47 minutes
      toap2a[1]: IKE proposal: 3DES_CBC/HMAC_MD5_96/PRF_HMAC_MD5/MODP_1536
      toap2a{1}:  INSTALLED, TUNNEL, reqid 1, ESP in UDP SPIs: c79efaad_i 600f945e_o
      toap2a{1}:  3DES_CBC/HMAC_MD5_96/MODP_1536, 0 bytes_i, 0 bytes_o, rekeying in 7 hours
      toap2a{1}:   172.20.100.0/24 === 172.25.100.0/24
```

### 9、测试网络是否联通

```
root@i-y862i3l9:~# ping 172.25.100.2
PING 172.25.100.2 (172.25.100.2) 56(84) bytes of data.
64 bytes from 172.25.100.2: icmp_seq=1 ttl=62 time=37.7 ms
64 bytes from 172.25.100.2: icmp_seq=2 ttl=62 time=37.8 ms
64 bytes from 172.25.100.2: icmp_seq=3 ttl=62 time=37.8 ms
64 bytes from 172.25.100.2: icmp_seq=4 ttl=62 time=37.8 ms
64 bytes from 172.25.100.2: icmp_seq=5 ttl=62 time=37.7 ms
^C
--- 172.25.100.2 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4003ms
rtt min/avg/max/mdev = 37.773/37.812/37.883/0.249 ms
root@i-y862i3l9:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:9e:f1:33:76 brd ff:ff:ff:ff:ff:ff
    inet 172.20.100.180/24 brd 172.20.100.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:9eff:fef1:3376/64 scope link
       valid_lft forever preferred_lft forever
root@i-y862i3l9:~#
```

