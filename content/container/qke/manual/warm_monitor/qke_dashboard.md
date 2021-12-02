---
title: "配置监控面板"
description: 介绍如何为 QKE 创建单独的监控图表。
draft: false
enableToc: false
weight: 5
keyword: 青云, QingCloud, 云计算, 云监控, Dashboard
---

除了QKE 本身的监控图表外，您还可以使用云监控 CloudSat 的[监控面板 Dashboard](/monitor_service/cloudsat/intro/intro/#dashboard) 功能，为 QKE 创建单独的监控图表。

## 背景信息

云监控的 Dashboard 功能为用户提供自定义查看监控数据、定位异常资源的功能。用户可跨区域、跨资源类型创建自定义监控图表与面板。

关于云监控 CloudSat 的详细介绍及使用指导，请参见[云监控 CloudSat](/monitor_service/cloudsat/intro/intro/)。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **监控服务** > **云监控 CloudSat**，进入**监控概览**页面。

3. 在左侧导航栏，点击 **Dashboard**，进入 Dashboard 面板。

4. 选择面板（若无请创建），点击**创建图表**，弹出**创建监控图表**页面。

   ![](../../../_images/dashboard-monitor.png)

5. 配置监控图表参数。

   **区域**：选择您的 QKE 集群所在区域 。

   **产品类型**：选择`容器平台` > `QKE` > `资源`。

   **监控指标**：点击**添加监控指标**，选择需要监控的指标。QKE 支持选择需要进行自动伸缩的 QKE 集群。

   **选择集群**：选择您需要监控的 QKE 集群。

   **监控实例**：选择需要监控的集群节点。

6. 点击**提交**，返回监控面板。

   面板显示所配置的指标监控图。

   ![](../../../_images/dashboard-monitor-2.png)

