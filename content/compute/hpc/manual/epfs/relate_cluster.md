---
title: "挂载集群"
linkTitle: "挂载集群"
description: 本章节介绍如何挂载集群
keyword: 云计算, 青云, QingCloud, EHPC，挂载集群
draft: false
weight: 20
---

已经创建的挂载点仅能在创建 HPC 或 EHPC 集群时进行挂载。

## 前提条件

已创建文件存储。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **高性能计算 HPC**，默认进入**高性能计算 HPC** 的**集群管理**页面。

   ![relate_cluster_1](../../../_images/relate_cluster_1.png)

3. 点击**创建集群**。

   - 共享集群（HPC 集群）

     在**申请共享集群**窗口中找到**基本参数**。

     ![relate_cluster_2](../../../_images/relate_cluster_2.png)

   - 专属集群（EHPC 集群）

     在**创建专属集群**窗口中找到**高级参数**中的**存储配置**。
  
     ![relate_cluster_1](../../../_images/relate_cluster_3.png)

4. 在 **NAS 挂载点**下拉列表中，选择已创建的 NAS 挂载点。

5. 挂载点选择完成后，以及其他参数配置完成后，完成集群创建即可。
