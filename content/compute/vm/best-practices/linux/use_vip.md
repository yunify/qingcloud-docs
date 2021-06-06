---
title: "虚拟 VIP 如何使用"
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

虚拟 IP（Virtul_IP）是 VPC 网络中的一种 IP 地址，通常用于不同云服务器之间的切换，达到高可用的需求。本文为您介绍如何使用高可用虚拟 IP 。

## 使用方法

1.在 VPC 的私有网络中申请一个 VIP ，将这个 IP 从该网段中隔离出来，防止其它资源使用这个 IP

![use_vip01](../../_images/use_vip01.jpg)

![use_vip02](../../_images/use_vip02.png)

2.在云服务器上面安装 keepalived

```
yum install keepalived
```

3.配置 keepalived 参数

```
vi /etc/keepalived/keepalived.conf
```

主服务器配置如下

```
! Configuration File for keepalived

global_defs {
    router_id lb01     #标识信息
}

vrrp_instance VI_1 {
    state MASTER                      #主为MASTER，备为BACKUP
    priority 150                      #优先级，主的参数要比备的参数大
    interface eth0                    #绑定的网卡
    virtual_router_id 50              #同一个虚拟的路由
    advert_int 1                      #心跳的间隔时间
    authentication {
        auth_type PASS      #两个云服务器之间的密语
        auth_pass 1111          #心跳密码
}
    virtual_ipaddress {
        192.168.1.100     #虚拟IP地址（可以绑定多个虚拟IP地址）
    }
}
```

备服务器配置如下

```
! Configuration File for keepalived

global_defs {
    router_id lb01     #标识信息
}

vrrp_instance VI_1 {
    state BACKUP                      #主为MASTER，备为BACKUP
    priority 140                      #优先级，主的参数要比备的参数大
    interface eth0                    #绑定的网卡
    virtual_router_id 50              #同一个虚拟的路由
    advert_int 1                      #心跳的间隔时间
    authentication {
        auth_type PASS      #两个云服务器之间的密语
        auth_pass 1111          #心跳密码
}
    virtual_ipaddress {
        192.168.1.100     #虚拟IP地址（可以绑定多个虚拟IP地址）
    }
}
```

4.启动 keepalived 

```
systemctl start keepalived
```

5.使用 ip a 命令查看网卡是否绑定了虚拟 IP 

![use_vip02](../../_images/use_vip03.jpg)

注意：如果云服务器绑定了安全组，则需要在安全组中放行 VRRP 协议