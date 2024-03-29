---
title: "已发布作业"
description: 本小节主要介绍如何管理大数据工作台已发布作业。 
keywords: 大数据工作台,操作指南,运维中心,已发布作业
weight: 10
collapsible: false
draft: false
---

您可以通过已发布作业页面查看作业名称/ID、调度状态、告警状态、开发模式、版本 ID、类型、最近发布时间、关联实例等，并对作业进行调度配置、暂停/恢复、下线等操作。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建并发布实时计算作业。

## 进入已发布作业列表

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**运维中心**，进入运维中心页面。
5. 在左侧导航选择**流式计算运维** > **已发布作业**，进入已发布作业页面。

   <img src="/bigdata/dataomnis/_images/flink_job_realeased.png" alt="已发布作业列表" style="zoom:50%;" />

   在已发布作业管理页面可以查看已发布作业的如下信息。
      
   - **调度状态**：作业的调度状态，包含`调度中`、`已暂停`、`已完成`。
      - 调度中：作业会根据调度策略生成对应的作业实例。
      - 已暂停：作业不会生成新的实例。
      - 已完成：当**调度策略**为`执行一次`时，作业已经生成实例并且实例运行完成时, **调度状态**变为`已完成`；当**调度策略**为`重复执行`时，在调度周期内，已按调度策略完成所有实例的生成，并且所有实例运行完成，**调度状态**变为`已完成`。
   - **作业版本**：此处展示作业的最新版本。
   - **开发模式**：包含`SQL 模式`、`代码开发-JAR 包模式`。
   - **最新发布时间**：作业的最新发布时间。

## 查看作业详情

点击作业名称链接，进入作业详情页面，在该页面可以查看作业的基本信息、关联实例、监控告警信息、开发内容、计算集群、调度信息和依赖资源。

<img src="/bigdata/dataomnis/_images/flink_job_detail.png" alt="查看作业详情" style="zoom:50%;" />

## 查看关联实例

点击操作列的![](/bigdata/dataomnis/_images/icon_more_cluster.png)图标，选择**关联实例**，进入关联实例页面，查看所选作业对应版本的所有实例。

实例**状态**：包括`准备资源`、`运行中`、`失败重试`、`已暂停`、`已终止`、`运行成功`、`运行超时`、`运行失败`。

<img src="/bigdata/dataomnis/_images/flink_job_instance01.png" alt="查看关联实例" style="zoom:50%;" />

<!-- ## 修改作业调度并立即发布调度任务

1. 点击操作列的![](/bigdata/dataomnis/_images/icon_more_cluster.png)图标，选择**调度配置**，进入调度配置页面。
2. 在页面右下角，点击**编辑**。关于参数详细说明请参见[配置作业调度](/bigdata/dataomnis/manual/schedule/time)。
3. 编辑完成后，点击**确定**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/republish_job.png" alt="发布调度任务" style="zoom:50%;" />

4. 根据实际情况选择是否终止**当前作业正在运行中的实例**，如果终止当前作业正在运行中的实例，运行中的作业实例会立即被强制终止。    
5. 点击**发布**，发布作业。         
   系统会根据当前调度配置重新发布作业，生成新的作业版本，并增加新的作业实例。 -->

## 暂停调度作业

暂停调度作业后，相关实例需要手动恢复执行。

1. 在操作列点击**暂停**，弹出暂停作业提示框。
2. 选择是否**同时停止运行中的实例**。
3. 点击**暂停**。

## 恢复调度作业

您可以手动恢复`已暂停`的作业。

1. 在操作列点击**恢复**，弹出恢复作业提示框。
2. 点击**恢复**。

## 下线作业

作业下线，即从调度系统移除作业，下线后相关实例需要手动恢复执行。

1. 在操作列点击**下线**，弹出下线作业提示框。
2. 选择是否**同时停止运行中的实例**。
3. 点击**下线**。


