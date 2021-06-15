---
title: "Ubuntu 20 配置多网卡方法"
description: Test description
weight: 50
draft: false
enableToc: false

---
## 背景信息

Ubuntu Server 20配置多网卡策略，可参考如下方法。

## 1.检查服务

Ubuntu 在18版本以后加入了 Netplan，如果启用第二个网卡需要在 Netplan 注册。本示例系统版本：Ubuntu Server 20.04.1 LTS 64bit

如果执行 sudo netplan apply 命令出现,如下报错:

```
#  sudo netplan apply

Command 'netplan' not found, but can be installed with:

apt install netplan.io


```

表示没有安装此服务，需要执行更新 apt-get 服务：

```

sudo apt-get update

```

## 2.添加网卡

登录控制台申请网卡，并添加到主机


![图片](../../_images/ubuntu20_1.png)
![图片](../../_images/ubuntu20_2.png)

登录到主机查看网卡 IP 信息，eth1此时没有获取到 IP，需要配置下面网卡信息后才会获取到。

```
 # ip a
 
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:9e:1b:ed:b4 brd ff:ff:ff:ff:ff:ff
    inet 192.168.126.2/24 brd 192.168.126.255 scope global dynamic eth0
       valid_lft 86395sec preferred_lft 86395sec
    inet6 fe80::5054:9eff:fe1b:edb4/64 scope link 
       valid_lft forever preferred_lft forever
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:9e:e1:b8:e6 brd ff:ff:ff:ff:ff:ff
    inet 192.168.126.200/24 brd 192.168.126.255 scope global dynamic eth1
       valid_lft 86395sec preferred_lft 86395sec
    inet6 fe80::5054:9eff:fee1:b8e6/64 scope link 
       valid_lft forever preferred_lft forever

```



## 3.配置网卡文件

执行 cd /etc/netplan 目录，找到 00-installer-config.yaml 文件，如果没有该文件，可创建一份，并配置如下：

```
# cd /etc/netplan

# vim 00-installer-config.yam
network:
 ethernets:
    eth0:
       dhcp4: true
    eth1:
       dhcp4: true
 version: 2

```

执行sudo netplan apply 重启服务，查看网卡 eth1网卡获取 IP 信息

```

 # sudo netplan apply

 # ip a

2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:9e:1b:ed:b4 brd ff:ff:ff:ff:ff:ff
    inet 192.168.126.2/24 brd 192.168.126.255 scope global dynamic eth0
       valid_lft 86399sec preferred_lft 86399sec
    inet6 fe80::5054:9eff:fe1b:edb4/64 scope link 
       valid_lft forever preferred_lft forever
       
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:9e:e1:b8:e6 brd ff:ff:ff:ff:ff:ff
    inet 192.168.126.200/24 brd 192.168.126.255 scope global dynamic eth1
       valid_lft 86399sec preferred_lft 86399sec
    inet6 fe80::5054:9eff:fee1:b8e6/64 scope link 
       valid_lft forever preferred_lft forever

```

内网客户端服务器测试网卡是否正常

```
 # ping 192.168.126.200
PING 192.168.126.200 (192.168.126.200) 56(84) bytes of data.
64 bytes from 192.168.126.200: icmp_seq=1 ttl=64 time=0.302 ms
64 bytes from 192.168.126.200: icmp_seq=2 ttl=64 time=0.393 ms

--- 192.168.126.200 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.302/0.347/0.393/0.049 ms

 # ping 192.168.126.2
PING 192.168.126.2 (192.168.126.2) 56(84) bytes of data.
64 bytes from 192.168.126.2: icmp_seq=1 ttl=64 time=0.327 ms
64 bytes from 192.168.126.2: icmp_seq=2 ttl=64 time=0.409 ms
64 bytes from 192.168.126.2: icmp_seq=3 ttl=64 time=0.475 ms

--- 192.168.126.2 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 0.327/0.403/0.475/0.064 ms
```

