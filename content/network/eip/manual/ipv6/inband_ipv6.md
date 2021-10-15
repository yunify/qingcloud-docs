---
title: "内部绑定公网 IP"
description: test
date: 2021-05-26T15:08:56+09:00
weight: 20
draft: false
---

## 操作场景

手动申请静态的公网 IPv6 地址，然后在云服务器中配置静态 IPv6 并与网络同步路由信息。

## 前提条件

- 已创建开启 IPv6 的VPC网络及私有网络。具体操作可参见[创建支持 IPv4/ IPv6 双栈的网络](/network/eip/quickstart/ipv6_quick_start/#创建支持-ipv4-ipv6-双栈的网络)。

- 已在 IPV6 私有网络中创建支持 IPv6 自动化配置的云服务器。具体操作可参见[创建云服务器并加入到启用IPv6的私有网络](/network/eip/quickstart/ipv6_quick_start/#创建云服务器并加入到启用-ipv6-的私有网络)。

## 操作步骤

### 申请 IPv6 公网 IP 并分配给云服务器

1. 登录 WEB 控制台，在顶部菜单栏中点击**产品与服务**，选择 **网络** > **公网 IP** 。

2. 点击**公网 IPv6** 页签，进入到公网IPv6的管理页面。

3. 点击**申请**。如果为境内可用区，将弹出实名认证和备案提示，点击**继续申请 IPv6 地址**（境外可用区不会有该提示）。

4. 填写公网 IPv6 信息。

   <img src="../../../_images/ipv6_add.png" style="zoom:70%;" />

   - 名称：为您申请的 IPV6 地址取个名字，方便记忆与使用。可选。
   - 模式：计费模式，可以选择**按带宽计费**或**按流量计费**。
   - 带宽上限：输入所需要的互联网带宽。
   - IP 组：使用默认设置。
   - 备案： ICP 备案。若您打算做公开的网站，在中国大陆需要备案。
   - 数量：输入所需要的 IPv6 地址个数。

   > **说明**：
   >
   > 带宽上限是指云服务器互联网访问的带宽，云服务器与云服务器之间的内网带宽与云服务器规格有关，云服务器规格越高，内网带宽越高，详情请参阅 [云服务器](/compute/vm/intro/instance/)。
   >
   > 若您需要 ICP 备案， 那么您申请到的公网 IPv6 需要完成政府备案后才可以使用； 若您不需要 ICP 备案，那么申请到的公网 IPv6 可以立刻开始使用。

5. 点击**提交**，完成申请。
6. 在**公网 IPv6** 页面，右键点击上述申请的公网 IPv6，选择**分配到云服务器**。
7. 选择需要绑定的云服务器，点击**提交**。

### 配置 IPv6 公网 IP

完成申请 IPv6 公网 IP 并分配给云服务器后，登录云服务器使用 `ip -a`命令可查看到云服务器内多出一块还未分配 IP 地址的网卡，您需要为这块网卡配置 IP地址。

![](../../../_images/IPv6_inbind_nic.png)

下面以镜像 CentOS 7.5 / CentOS 6.8 / Ubuntu 18.04 及 Windows Server 2008/2012/2016 为例，介绍如何配置 IPv6 弹性 IP。在`[Your IPv6 Address]`处请填入您在平台申请并绑定到云服务器的 IPv6 地址

#### Centos 7.5

1.修改网卡配置。

```
[root@ipv6-eip ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth1

TYPE=Ethernet
NAME=eth1
DEVICE=eth1
ONBOOT=yes
BOOTPROTO=static
NM_CONTROLLED=yes
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_FAILURE_FATAL=no
IPV6ADDR=[Your IPv6 Address]/128
```

2.在目录 /etc/NetworkManager/dispatcher.d 下增加网络控制脚本。

```
[root@ipv6-eip ~]# cd /etc/NetworkManager/dispatcher.d
[root@ipv6-eip dispatcher.d]# vi interface-up-hook.sh 
#!/bin/sh

RUN="yes"
if [ "${RUN}" != "yes" ]; then
exit 0
fi

if [ "${NM_DISPATCHER_ACTION}" != "up" ]; then
exit 0
fi

interface=${DEVICE_IFACE}

sysctl -w net.ipv6.conf.${interface}.accept_ra=1 
sysctl -w net.ipv6.conf.${interface}.accept_ra_defrtr=1

```

3.执行脚本，然后重启网卡 eth1。

```
[root@ipv6-eip dispatcher.d]# chmod +x interface-up-hook.sh
[root@ipv6-eip dispatcher.d]# ifdown eth1
[root@ipv6-eip dispatcher.d]# ifup eth1

```

4.查看您的 IP 和 ping6 测试网路的畅通情况。

>**说明**：
>
>`ping6` 是 Linux 对 IPv6 网络探测的命令。

![](../../../_images/IPv6_inbind_nic_2.png)

#### Centos 6.8

1.修改网卡配置

```
[root@ipv6-eip ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth1

TYPE=Ethernet
NAME=eth1
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
NM_CONTROLLED=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=[Your IPv6 Address]/128
```

2.启动网卡

```
[root@ipv6-eip dispatcher.d]# ifup eth1

```


3.查看您的 IP 和 ping6 测试网路的畅通情况

![](../../../_images/IPv6_inbind_nic_2.png)

#### Ubuntu 18.04

1.编辑/etc/network/interfaces文件，添加 eth1 的静态 IPv6 地址配置


```

auto eth1
iface eth1 inet6 static
  address 2402:e7c0:0:80::1
  netmask 128

```

2.将配置文件保存之后，使用如下命令将配置应用到网卡 eth1。

```
[root@ipv6-eip-ubuntu ~]# sudo ifup eth1

```

3.查看您的 IP 和 ping6 测试网路的畅通情况。

#### Debian Buster 10.6

1.编辑/etc/network/interfaces文件，添加 eth1 的静态 IPv6 地址配置

```
auto eth1
iface eth1 inet6 static
  address 2402:e7c0:400:80::41
  netmask 128
```

2.将配置文件保存之后，使用如下命令将配置应用到网卡 eth1。

```
root@i-pvr20syg:~# ifup eth1
```

3.查看您的 IP 和 ping6 测试网路的畅通情况。

```
root@i-pvr20syg:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 52:54:99:c0:74:87 brd ff:ff:ff:ff:ff:ff
    inet 10.120.75.15/24 brd 10.120.75.255 scope global dynamic eth0
       valid_lft 81981sec preferred_lft 81981sec
    inet6 fe80::5054:99ff:fec0:7487/64 scope link 
       valid_lft forever preferred_lft forever
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 52:54:99:12:48:d2 brd ff:ff:ff:ff:ff:ff
    inet6 2402:e7c0:400:80::41/128 scope global 
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:99ff:fe12:48d2/64 scope link 
       valid_lft forever preferred_lft forever
```

```
root@i-pvr20syg:~# ping6 www.taobao.com
PING www.taobao.com(240e:cf:9000:1::3fb (240e:cf:9000:1::3fb)) 56 data bytes
64 bytes from 240e:cf:9000:1::3fb (240e:cf:9000:1::3fb): icmp_seq=1 ttl=49 time=64.1 ms
64 bytes from 240e:cf:9000:1::3fb (240e:cf:9000:1::3fb): icmp_seq=2 ttl=49 time=63.10 ms
64 bytes from 240e:cf:9000:1::3fb (240e:cf:9000:1::3fb): icmp_seq=3 ttl=49 time=64.1 ms
64 bytes from 240e:cf:9000:1::3fb (240e:cf:9000:1::3fb): icmp_seq=4 ttl=49 time=64.0 ms
64 bytes from 240e:cf:9000:1::3fb (240e:cf:9000:1::3fb): icmp_seq=5 ttl=49 time=64.1 ms
^C
--- www.taobao.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 9ms
rtt min/avg/max/mdev = 63.990/64.061/64.129/0.167 ms
```
如有其它 Linux 发行版的需求，欢迎您通过提工单来技术交流。

#### Windows Server 2008/2012/2016

1.禁用 IPv6 随机标识。

```
C:\Users\Administrator>netsh
netsh>interface ipv6
netsh interface ipv6>set global randomizeidentifiers=disabled
确定。

```

2.配置静态 IPv6 地址。

![](../../../_images/IPv6_inbind_ip_windows_0.png)


此时 Windows Server 应具备2个网卡，其中没有 IPv4 地址的是用于连接 IPv6 网络的网卡

![](../../../_images/IPv6_inbind_ip_windows_1.png)

点击 IPv6 网卡的属性

![](../../../_images/IPv6_inbind_ip_windows_2.png)

修改 IPv6 网卡的 IPv6 协议属性

![](../../../_images/IPv6_inbind_ip_windows_3.png)

Windows Server 默认自动获取 IPv6 地址，这里需要修改成指定 IPv6 地址的方式，然后填入在控制台中申请并绑定的 IPv6 地址。

![](../../../_images/IPv6_inbind_ip_windows_4.png)

3.测试 IPv6 网络。

通过浏览器访问 IPv6 only 的网站，或者通过 ping ipv6 地址测试网络的连通性。

