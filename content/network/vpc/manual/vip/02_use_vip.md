---
title: "使用虚拟 IP"
keyword: VPC, VPC 网络, 虚拟 IP
description: 介绍如何使用虚拟 IP 搭建高可用主备集群。
draft: false
weight: 50
---

本章节介绍如何在控制台创建高可用虚拟 IP，以及创建后，在第三方软件中如何进行配置等后续操作。

## 创建虚拟 IP

1. 登录管理控制台。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC 网络**，进入**VPC 网络**页面。

3. 找到需要创建虚拟 IP 的 VPC，点击VPC 网络，进入到该 VPC 的私有网络管理页面。

   > **说明**
   >
   > 也可通过**网络** > **私有网络**进入私有网络列表，然后点击目标私有网络，进入该私有网络的详情页面，进行虚拟 IP 创建。

4. 点击**虚拟 IP** 页签，进入虚拟 IP 列表页面。

   ![](../../../_images/505002_vip_list.png)

5. 点击**创建虚拟 IP**，弹出**创建虚拟 IP** 窗口。

   <img src="../../../_images/505002_create_vip.png" style="zoom:50%;" />

6. 输入虚拟 IP 名称、数量及 IP 地址。

7. 点击**提交**，返回**虚拟 IP**页面。

   页面显示已创建的虚拟 IP，**状态**为`未绑定云服务器`。

## 配置虚拟 IP

虚拟 IP 创建后，并非在管理控制台中直接实现绑定，而是需要配合第三方 HA 软件使用，在第三方 HA 软件中，将虚拟 IP 指定为可漂移的 VIP，然后由第三方 HA 软件指定虚拟 IP 要绑定的网卡。

>**说明**
>
>常见的 HA 软件有：Linux 下的 HeartBeat、keepalived、pacemaker，Windows下的 MSCS 等。

以 keepalived 为例 ( Centos 7.6)，配置操作如下：

1. 安装 keepalived。

   ```
   yum install keepalived
   ```

2. 修改 keepalived 配置，在配置文件中指定您创建的虚拟 IP。

   ```
   vi /etc/keepalived/keepalived.conf
   ```

   配置示例如下：

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

3. 启动 keepalived。

   ```
   service keepalived start
   ```

4. 通过 `ip a` 命令查看到云服务器的 eth0 网卡多了一个 IP 地址，说明此云服务器已经占用了该虚拟 IP 地址。

   ![](../../../_images/505002_vip_cfg.png)

6. 在云服务器的 HA 软件中配置了虚拟 IP 后，可以在控制台中查看到该虚拟 IP 的**状态**变更为`已绑定云服务器`。

   ![](../../../_images/505002_vip_used.png)

   

## 释放虚拟 IP

如果不再使用虚拟 IP，可在控制台将其释放。

> **说明**
>
> 仅**状态**为`未绑定云服务器`的虚拟 IP 支持释放。对于`已绑定云服务器`的虚拟 IP，需要先在云服务器的第三方 HA 软件中更改配置文件来解绑虚拟 IP 后，才可在控制台执行释放操作。

1. 在虚拟 IP 列表，找到需要释放的虚拟 IP，点击**操作**列的**释放**，弹出提示框。

   ![](../../../_images/505002_vip_delete.png)

2. 在提示框中，点击**释放**，返回虚拟 IP 列表。

   待释放成功后，虚拟 IP 将从列表中移除。
