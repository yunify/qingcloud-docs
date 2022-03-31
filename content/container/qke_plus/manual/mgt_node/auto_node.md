---
title: "节点弹性伸缩"
description: 介绍如何配置集群节点自动增加及减少。
draft: false
enableToc: false
keyword: 青云, QingCloud, 云计算, QKE, 节点，自动伸缩
weight: 20
---

您可以使用管理控制台运维工具的[自动伸缩](/operation/autoscaling/)功能，来配置节点弹性伸缩。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **运维与管理** > **自动伸缩**，进入**自动伸缩**页面。

   ![](/container/qke_plus/_images/auto_scaling_service.png)

   您也可以在 QKE 集群的**节点管理**页面，点击**弹性伸缩**进入**自动伸缩**页面。

   ![](/container/qke_plus/_images/auto_scaling_entrance.png)

3. 点击**创建**，弹出**创建自动伸缩策略**窗口。

   ![](/container/qke_plus/_images/auto_node_policy.png)

4. 配置伸缩策略。

   - **名称**：自动伸缩策略名称。

   - **操作类型**：选择`调整应用节点数量`。

   - **资源类型**：选择`集群`。

   - **资源**：选择需要进行自动伸缩的 QKE 集群。

   - **通知列表**：选择接收操作通知的联系人。

5. 点击**提交**。

   自动跳转到规则配置页面，可分别设置增加及减少节点的规则。

   ![](/container/qke_plus/_images/autoscale-node-metric.png)

6. 点击**定义触发条件**，设置**监控周期**及**告警规则**，点击**提交**。

   详细配置说明请参考[自动伸缩操作指南](/operation/autoscaling/manual/autoscaling/)。

7. 点击**定义操作参数**，设置相关参数，点击**提交**。

   配置完成后，当阈值被触发后，相应集群会自动进行节点增删操作，通知列表中的用户会收到通知。

