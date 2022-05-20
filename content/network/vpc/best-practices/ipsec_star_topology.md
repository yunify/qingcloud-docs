---
title: "搭建星型拓扑 IPsec 隧道"
keyword: VPC, VPC 网络, IPSEC 隧道
description: 介绍如何搭建星型拓扑 IPSEC 隧道。
draft: false
weight: 1
---

本文介绍如何通过搭建 IPsec 隧道的方式实现多可用区内网互通。

## 场景示例

客户业务分布在多个可用区，各区域环境信息如下表。本文操作示例以北京 3 区 的 vpc-pek3 作为星形拓扑中心节点，实现 vm1 和 vm2 互通，vm1 和 vm3互通，vm2 和 vm3 互通。

| 区域      | VPC 网络信息                                                 |
| --------- | ------------------------------------------------------------ |
| 北京 3 区 | VPC 名称：vpc-pek3<br/>公网 IP：139.198.27.92<br/>私有网络：192.168.0.0/24<br/>云服务器 vm1：192.168.0.5 |
| 上海 1 区 | VPC 名称：vpc-sh1<br/>公网IP：139.198.175.48<br/>私有网络：172.16.0.0/24<br/>云服务器 vm2：172.16.0.2 |
| 广东 2 区 | VPC 名称：vpc-gd2<br/>公网IP：139.198.123.198<br/>私有网络：172.26.0.0/24<br/>云服务器 vm3：172.26.0.2 |

## 操作步骤

### 步骤一： vpc-pek3 配置 2 条隧道

**隧道信息如下：**

| 隧道名称 | 本地网络                      | 目标网络      |
| -------- | ----------------------------- | ------------- |
| pek3-sh1 | 192.168.0.0/24，172.26.0.0/24 | 172.16.0.0/24 |
| pek3-gd2 | 192.168.0.0/24，172.16.0.0/24 | 172.26.0.0/24 |

**隧道 pek3-sh1 配置完成后：**

- 本地网络：

​	![](../_images/ipsec_start_topology2.png)

- 目标网络

​	![](../_images/ipsec_start_topology3.png)

**隧道 pek3-gd2 配置完成后：**

- 本地网络：

​	![](../_images/ipsec_start_topology4.png)

- 目标网络

​	![](../_images/ipsec_start_topology5.png)

### 步骤二： vpc-sh1 配置 1 条隧道

**隧道信息如下：**

| 隧道名称 | 本地网络      | 目标网络                      |
| -------- | ------------- | ----------------------------- |
| sh1-pek3 | 172.16.0.0/24 | 192.168.0.0/24，172.26.0.0/24 |

**隧道 sh1-pek3 配置完成后：**

- 本地网络：

​	![](../_images/ipsec_start_topology6.png)

- 目标网络

​	![](../_images/ipsec_start_topology7.png)

### 步骤三： vpc-gd2 配置 1 条隧道

**隧道信息如下：**

| 隧道名称 | 本地网络      | 目标网络                      |
| -------- | ------------- | ----------------------------- |
| gd2-pek3 | 172.26.0.0/24 | 192.168.0.0/24，172.26.0.0/24 |

## 验证结果

隧道配置完成后，按照以下步骤进行验证。

1. 在云服务器 vm1 上分别 ping vm2 及 vm3，均可 ping 通。

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

   

3. 在云服务器 vm2 上 ping vm3，可 ping 通。

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

   至此，表示以上可用区已通过 IPsec 隧道实现内网互通。
