---
title: "变更私有网络"
description: 本小节介绍如何变更集群部署的私有网络。
weight: 10
collapsible: false
draft: false
keywords: QingCloud，Redis Cluster，私有网络
---

Redis Cluster 支持更换 VPC 网络或私有网络，例如通过该功能将 Redis Cluster 实例的私有网络变更至云服务器实例所属的私有网络，实现云服务器实例与 Redis Cluster 实例间的互连。

## 适用场景

- 变更 VPC 网络：当业务所属的云服务器与 Redis Cluster 实例在不同 VPC 网络无法进行通信时，可以将 Redis Cluster 实例的 VPC 网络切换到云服务器所属的 VPC 网络，以解决无法连接的问题。
- 变更私有网络：当需要将业务相关云服务器与 Redis Cluster 实例规划在同一个网断进行统一管理时，可以将Redis Cluster 实例的私有网络切换到云服务器所属的私有网络。

## 注意事项

- 切换过程将会重启服务，请在业务低峰期操作。
- 切换 VPC 网络或私有网络将导致 IP 地址变更。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**私有网络**。

   <img src="../../../_images/change_net.png" alt="变更网络" style="zoom:50%;" />

4. 选择要加入的 VPC 网络和私有网络。

5. 选择节点 IP。若选择**手动指定**，需要填写 IP 地址。

6. 点击**提交**。集群状态变为**更新中**。

   待集群状态变为**活跃**，则变更完成。

