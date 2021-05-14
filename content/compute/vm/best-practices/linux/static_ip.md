---
title: "Linux云服务器配置静态IP"
date: 2021-03-27T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

## 问题背景：

**● 网络配置默认为DHCP模式，如果您需要将网络配置修改为Static静态模式，可参考本文进行操作。**



## 1.准备设置

●**关闭私有网络DHCP，再开启DHCP 设置获取范围，将需设置IP设置在DHCP自动获取的范围外，避免系统HDCP分配时将设置的静态IP分配，导致网络故障。**

示例为：Cento 7.5 操作系统

 ![ip_](../../_images/ip_1.png )

 ![ip_](../../_images/ip_2.png)


## 2.配置静态IP

●**登录云服务器，执行以下命令，查看实例的IP地址和子网掩码**

```
ip a   或者   ifconfig
```
 ![ip_](../../_images/ip_3.png)

●**编辑网卡文件，将BOOTPROTO的值修改为static，并将以上步骤中记录的IP地址、网关信息、子网掩码填写到该配置文件中，保存并退出**

```
vi /etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
NM_CONTROLLED=no
IPADDR=192.168.100.251
NETMASK=255.255.255.0
GATEWAY=192.168.100.1 

```
 ![ip_](../../_images/ip_4.png)

**●执行下面命令，重启网卡服务**
```
systemctl restart network
```

**●检查网卡获取静态IP信息，并测试IP连通性**

 ![ip_](../../_images/ip_5.png)