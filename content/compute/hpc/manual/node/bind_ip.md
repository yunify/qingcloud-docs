---
title: "节点绑定/解绑公网 IP"
linkTitle: "节点绑定/解绑公网 IP"
description: 本章节介绍如何绑定/解绑公网 IP
keyword: 云计算, 青云, QingCloud, HPC，节点绑定/解绑公网 IP
draft: false
weight: 50
---

本章节介绍如何绑定/解绑公网 IP。

## 前提条件

已创建共享集群（HPC 集群）或者专属集群（EHPC 集群）。

## 申请公网 IP

HPC 和 EHPC 集群仅支持**外部绑定**模式的公网 IP，因此申请公网 IP 地址时，绑定方式需要选择**外部绑定**模式。

1. 选择**产品与服务** > **网络服务** > **公网 IP**，进入**公网 IP** 页面。

   ![um_cluster_pub_ip](../../../_images/um_cluster_pub_ip.png)

2. 点击**申请**，申请公网 IP。

   <img src="../../../_images/um_cluster_pub_ip_win.png" style="zoom:50%;" />

3. 输入公网 IP 名称和带宽上限，**绑定方式**选择**外部绑定**。其他参数采用默认值即可。

4. 点击**提交**，完成公网 IP 申请。系统会自动为您分配公网 IP 地址。

## 绑定公网 IP

1. 选择**产品与服务** > **计算** > **高性能计算 HPC**，默认进入**高性能计算 HPC**的**集群管理**页面。
   ![cluster_manage](../../../_images/cluster_manage.png)

2. 点击已创建完成的集群 ID，进入集群详情页面，选择**节点列表**，进入**节点列表**页面，点击待绑定公网 IP 的节点所在行的“更多操作”<img src="../../../_images/more_operation.png" style="zoom:50%;" />，选择**绑定公网 IP**。

   ![um_bind_pub_ip](../../../_images/um_bind_pub_ip.png)

3. 在弹出的**绑定公网 IP**窗口，选择申请完成的公网 IP，点击**确定**即可。

   <img src="../../../_images/um_cluster_bind_ip_win.png" style="zoom:50%;" />

## 对公网 IP 进行安全放行

给其中一个登录节点绑定公网 IP，会给所有节点绑定集群默认防火墙。防火墙内的所有节点可以互相通信，当所有节点没有 EIP 时，防火墙自动解绑。

1. 选择**产品与服务** > **安全服务** > **安全组**，进入**安全组**页面。

2. ![um_cluster_security](../../../_images/um_cluster_security.png)

3. 点击集群安全组 ID，进入集群安全组详细信息页面。

4. 点击**添加规则**，配置相关参数。

5. 输入规则名称，并在窗口右侧点击 **ssh**，系统自动填充**起始端口**。

   ![um_cluster_security_rule](../../../_images/um_cluster_security_rule.png)

6. 点击**应用修改**，使添加的规则生效。


## 解绑公网 IP

1. 点击已创建完成的集群 ID，进入集群详情页面，选择**节点列表**，进入**节点列表**页面，点击待解绑公网 IP 的节点所在行的<img src="../../../_images/more_operation.png" style="zoom:50%;" />，选择**解绑公网 IP**。

   ![um_bind_ip_unbind](../../../_images/um_bind_ip_unbind.png)

2. 在弹出的解绑公网 IP 的提示窗口中点击**确定**即可。
