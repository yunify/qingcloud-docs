---
title: "节点添加到队列"
linkTitle: "节点添加到队列"
description: 节点添加到队列
keyword: 云计算, 青云, QingCloud, HPC, EHPC, 节点添加到队列
draft: false
weight: 30
---

若需将不同的计算节点分配给不同的人员使用，可以申请新的队列，将节点添加到此队列来构建队列。

## 前提条件

已创建专属集群 (EHPC 集群)。

## 使用限制

- 仅专属集群 （EHPC 集群）可以申请队列。

- 仅计算节点可添加到队列。

## 新节点添加到队列

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，默认进入**高性能计算 HPC** 的**集群管理**页面。

   ![cluster_manage](../../../_images/cluster_manage.png)

3. 点击已创建完成的 EHPC 集群 ID，进入集群详情页面。 选择**节点列表**页签。

   ![add_to_queue_1](../../../_images/add_to_queue_1.png)

4. 点击**添加节点**，在添加节点窗口，节点类型选择**计算节点**，选择**所属队列**。

   <img src="../../../_images/add_to_queue_2.png" style="zoom:50%;" />

5. 配置完成相关参数，并点击**确定添加**，完成新节点添加到队列操作。

## 节点移动到队列

1. 进入**节点列表**页面。

   ![add_to_queue_3](../../../_images/add_to_queue_3.png)

2. 在计算节点所在行，点击<img src="../../../_images/more_operation.png" style="zoom:50%;" />，选择**移动节点到队列**。

   ![add_to_queue_4](../../../_images/add_to_queue_4.png)

3. 在弹出的移动节点到队列窗口中，选择移动到的队列。

   <img src="../../../_images/add_to_queue_5.png" style="zoom:50%;" />

4. 点击**确认移动**，完成节点移动到队列的操作。

   若界面弹出移动节点到队列成功的提示信息，则说明移动节点到队列成功。
