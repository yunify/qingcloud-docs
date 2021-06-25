---
title: "星型拓扑 ipsec 隧道搭建"
description:
draft: false
weight: 1
---

## 项目背景

客户业务分布在多个可用区，想要通过 ipsec 隧道的方式来实现多可用区内网互通。


## 网络现状

### 北京3区 VPC (vpc-pek3)
公网IP：139.198.27.92
私有网络：192.168.0.0/24
vm1：192.168.0.5

### 上海1区 VPC (vpc-sh1)
公网IP：139.198.175.48
私有网络：172.16.0.0/24
vm2：172.16.0.2

### 广东2区 VPC (vpc-gd2)
公网IP：139.198.123.198
私有网络：172.26.0.0/24
vm3：172.26.0.2

## 实现目的
vpc-pek3 作为星形拓扑中心节点，来实现 vm1和 vm2互通，vm1和 vm3互通，vm2和 vm3互通

## 配置步骤
### 1、vpc-pek3配置2条隧道
隧道1：pek3-sh1  
本地网络为：192.168.0.0/24，172.26.0.0/24
目标网络：172.16.0.0/24
![](../_images/ipsec_start_topology2.png)
![](../_images/ipsec_start_topology3.png)

隧道2：pek3-gd2  
本地网络为：192.168.0.0/24，172.16.0.0/24
目标网络：172.26.0.0/24
![](../_images/ipsec_start_topology4.png)
![](../_images/ipsec_start_topology5.png)

### 2、vpc-sh1配置1条隧道
隧道1：sh1-pek3  
本地网络为：172.16.0.0/24
目标网络：192.168.0.0/24，172.26.0.0/24
![](../_images/ipsec_start_topology6.png)
![](../_images/ipsec_start_topology7.png)

### 3、vpc-gd2配置1条隧道
隧道1：gd2-pek3  
本地网络为：172.26.0.0/24
目标网络：192.168.0.0/24，172.16.0.0/24
![](../_images/ipsec_start_topology8.png)
![](../_images/ipsec_start_topology9.png)

## 验证结果
1、vm1-vm2可 ping 通，vm1-vm3可 ping 通
```
[root@i-ojv17nyb ~]# ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.5  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 2402:e7c0:0:1800:ffff:ffff:fffe:fffc  prefixlen 128  scopeid 0x0<global>
        inet6 fe80::5054:9eff:fe5c:d5ed  prefixlen 64  scopeid 0x20<link>
        ether 52:54:9e:5c:d5:ed  txqueuelen 1000  (Ethernet)
        RX packets 2674  bytes 329567 (321.8 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2397  bytes 392917 (383.7 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@i-ojv17nyb ~]# ping 172.16.0.2
PING 172.16.0.2 (172.16.0.2) 56(84) bytes of data.
64 bytes from 172.16.0.2: icmp_seq=1 ttl=60 time=29.5 ms
64 bytes from 172.16.0.2: icmp_seq=2 ttl=60 time=29.6 ms
64 bytes from 172.16.0.2: icmp_seq=3 ttl=60 time=29.8 ms
64 bytes from 172.16.0.2: icmp_seq=4 ttl=60 time=29.8 ms

[root@i-ojv17nyb ~]# ping 172.26.0.2
PING 172.26.0.2 (172.26.0.2) 56(84) bytes of data.
64 bytes from 172.26.0.2: icmp_seq=1 ttl=60 time=32.5 ms
64 bytes from 172.26.0.2: icmp_seq=2 ttl=60 time=34.7 ms
64 bytes from 172.26.0.2: icmp_seq=3 ttl=60 time=32.4 ms
64 bytes from 172.26.0.2: icmp_seq=4 ttl=60 time=32.5 ms
```

2、vm2-vm3可 ping 通
```
[root@i-cog1yjbd ~]# ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.16.0.2  netmask 255.255.255.0  broadcast 172.16.0.255
        inet6 fe80::5054:99ff:feb8:6636  prefixlen 64  scopeid 0x20<link>
        ether 52:54:99:b8:66:36  txqueuelen 1000  (Ethernet)
        RX packets 327  bytes 26244 (25.6 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 294  bytes 23177 (22.6 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@i-cog1yjbd ~]# ping 172.26.0.2
PING 172.26.0.2 (172.26.0.2) 56(84) bytes of data.
64 bytes from 172.26.0.2: icmp_seq=1 ttl=59 time=61.1 ms
64 bytes from 172.26.0.2: icmp_seq=2 ttl=59 time=61.3 ms
64 bytes from 172.26.0.2: icmp_seq=3 ttl=59 time=61.4 ms
64 bytes from 172.26.0.2: icmp_seq=4 ttl=59 time=61.6 ms
```

