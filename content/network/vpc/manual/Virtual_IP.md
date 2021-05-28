---
title: "使用虚拟 IP "
linkTitle: "虚拟 IP "
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 50

---


虚拟 IP（Virtul_IP）是 VPC 网络中的一种 IP 地址，通常用于不同云服务器之间的切换，例如主从切换。

## 使用场景

虚拟 IP（Virtul_IP）通常和高可用软件如 keepalived 配合使用，应用于搭建高可用主备集群场景。

例如： 用户自己部署负载均衡时，一般业务架构是：负载均衡主节点和备节点之间做 HA，用虚拟 IP（Virtul_IP）作为对外的IP。

## 虚拟IP 管理

青云控制台提供了虚拟 IP 管理功能，用户创建虚拟 IP 后，将在控制台中展示出来虚拟 IP 被占用的情况。


在 VPC 网络和私有网络中，都可以创建虚拟IP

可以展示出当前虚拟 IP 被哪台云服务器占用，并且点击跳转到云服务器详情页

![](../_images/vip_3.png)

![](../_images/vip_4.png)

![](../_images/vip_2.png)

可以随时删除虚拟 IP 而不会影响网络转发，即便当前虚拟 IP 被占用

![](../_images/vip_5.png) 

## 应用操作示例

青云 VPC 网络一直支持虚拟 IP（Virtul_IP）的功能，只需要您采用支持虚拟 IP的软件 (如 keepalived) 就可以将 VPC 内的任何 IP 地址作为虚拟 IP 使用，即便未在青云控制台中指定创建虚拟 IP。

### Keepalived 为例 ( Centos 7.6)

安装 Keepalived 

```
yum install keepalived
```

修改 Keepalived 配置

```
vi /etc/keepalived/keepalived.conf
```

```
! Configuration File for keepalived

global_defs {
    router_id lb01     #标识信息
}

vrrp_instance VI_1 {
    state MASTER
    priority 150                      #优先级
    interface eth0                    #绑定的网卡
    virtual_router_id 50              #同一个虚拟的路由
    advert_int 1                      #心跳的间隔时间
    authentication {
        auth_type PASS      #两个云服务器之间的密语
        auth_pass 1111          #心跳密码
}
    virtual_ipaddress {
        172.16.0.247     #虚拟IP地址（可以绑定多个虚拟IP地址）
    }
}

```

启动 Keepalived 

```
service keepalived start
```

此时可以通过 ip a 命令查看到 VM 的 eth0 网卡多了一个 IP 地址

![](../_images/vip_1.png)

此时说明此云服务器已经占用了虚拟 IP 地址172.16.0.247

