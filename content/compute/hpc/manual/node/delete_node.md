---
title: "删除节点"
linkTitle: "删除节点"
description: 本章节介绍如何删除节点
keyword: 云计算, 青云, QingCloud, HPC，删除节点
draft: false
weight: 70
---

本章节介绍如何删除节点。

## 前提条件

* 已创建共享集群（HPC 集群）或者专属集群（EHPC 集群）。
* HPC 集群仅支持删除登录节点。
* EHPC 集群支持删除登录节点和计算节点。

## 注意事项

- 节点删除后不可恢复，在释放前务必先备份数据。
- 按需付费的所有服务将立即释放。
- 按合约包年包月已经产生扣费的节点将退还剩余周期费用。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，默认进入**高性能计算 HPC** 的**集群管理**页面。 

   ![cluster_manage](../../../_images/cluster_manage.png)


3. 点击已创建完成的集群 ID，进入集群详情页面，选择**节点列表**页签。在**节点列表**页面，点击待删除节点所在行的<img src="../../../_images/more_operation.png" style="zoom:50%;" />，选择**删除**。

   ![delete_node_1](../../../_images/delete_node_1.png)

4. 在弹出的确认删除指定节点的提示框中，点击**确定**即可。
