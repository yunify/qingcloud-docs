---
title: "关闭云主机内部防火墙"
date: 2020-03-07T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 背景

用户已在青云控制台安全组添加指定端口的安全组下行规则，主机上服务状态也是运行正常，但是无法使用公网或内网IP进行访问主机。

## 介绍

本文档将介绍不同操作系统或系统版本下，如何关闭主机内部防火墙的操作步骤，如您按文档操作后仍无法解决，请[提交工单](https://console.qingcloud.com/tickets/)处理。

## 具体操作

### CentOS6关闭主机内部防火墙

> 示例为CentOS 6.8操作步骤，CentOS6版本操作系统内部默认的防火墙为iptables

**1、查看主机内部防火墙是否开启**
可通过执行命令service iptables status 查看内部防火墙开启状态，如果返回结果中包含规则信息，则表示内部防火墙是开启状态

```shell
[root@i-bhn0ys6l ~]# service iptables status
Table: filter
Chain INPUT (policy ACCEPT)
num  target     prot opt source               destination         
1    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED 
2    ACCEPT     icmp --  0.0.0.0/0            0.0.0.0/0           
3    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           
4    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0           state NEW tcp dpt:22 
5    REJECT     all  --  0.0.0.0/0            0.0.0.0/0           reject-with icmp-host-prohibited 

Chain FORWARD (policy ACCEPT)
num  target     prot opt source               destination         
1    REJECT     all  --  0.0.0.0/0            0.0.0.0/0           reject-with icmp-host-prohibited 

Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination         
```
**2、关闭主机内部防火墙（临时）**
使用命令service iptables stop来关闭主机内部防火墙

```shell
[root@i-bhn0ys6l ~]# service iptables stop
iptables: Setting chains to policy ACCEPT: filter          [  OK  ]
iptables: Flushing firewall rules:                         [  OK  ]
iptables: Unloading modules:                               [  OK  ]
```
**3、永久关闭防火墙**
由于主机重启，开机时会默认启动防火墙服务，可以使用chkconfig iptables off命令来永久关闭

```shell
[root@i-bhn0ys6l ~]# chkconfig iptables off
```

### CentOS7关闭主机内部防火墙

> 示例为CentOS 7.2操作步骤，CentOS7版本操作系统内部默认的防火墙为firewalld

**1、查看主机内部防火墙是否开启**
可通过执行命令systemctl status firewalld 查看内部防火墙开启状态，如果返回结果显示Active: active (running)，则表示内部防火墙是开启状态

```shell
[root@i-3lioycgh ~]# systemctl status firewalld
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; disabled; vendor preset: enabled)
   Active: active (running) since Wed 2021-02-03 16:52:59 CST; 1 months 1 days ago
     Docs: man:firewalld(1)
 Main PID: 13809 (firewalld)
   CGroup: /system.slice/firewalld.service
           └─13809 /usr/bin/python2 -Es /usr/sbin/firewalld --nofork --nopid

Feb 03 16:52:58 i-3lioycgh systemd[1]: Starting firewalld - dynamic firewall daemon...
Feb 03 16:52:59 i-3lioycgh systemd[1]: Started firewalld - dynamic firewall daemon.      
```
**2、关闭主机内部防火墙（临时）**
使用命令systemctl stop firewalld 来关闭主机内部防火墙

```shell
[root@i-3lioycgh ~]# systemctl stop firewalld 
```
**3、永久关闭防火墙**
由于主机重启，开机时会默认启动防火墙服务，可以使用systemctl disable firewalld命令来永久关闭

```shell
[root@i-3lioycgh ~]# systemctl disable firewalld
```

### Ubuntu关闭主机内部防火墙

> 示例为Ubuntu 18.04操作步骤，Ubuntu 系统默认已安装ufw

**1、查看主机内部防火墙是否开启**
可通过执行命令sudo ufw status 查看内部防火墙开启状态，如果返回结果显示Status: active，则表示内部防火墙是开启状态

```shell
ubuntu@i-fcbqwhmk:~$ sudo ufw status
Status: active
```
**2、关闭主机内部防火墙**
使用命令sudo ufw disable来关闭主机内部防火墙

```shell
ubuntu@i-fcbqwhmk:~$ sudo ufw disable
Firewall stopped and disabled on system startup
```

### Windows关闭主机内部防火墙

> 示例为Windows Server 2019操作步骤，Windows主机内部防火墙关闭位置相同

**1、打开Windows主机控制面板，查看方式切换为：大图标，进入”Windows Defender 防火墙“**
![](../_images/close_firewall_1.png)

**2、查看主机内部防火墙状态（启用状态）**
![](../_images/close_firewall_2.png)

**3、关闭Windows防火墙**
![](../_images/close_firewall_3.png)
![](../_images/close_firewall_4.png)

**4、查看主机内部防火墙状态（关闭状态）**
![](../_images/close_firewall_5.png)