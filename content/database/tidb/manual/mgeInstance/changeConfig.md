---
title: "更改配置"
description: 本小节主要介绍如何变更TiDB实例的规格配置。 
keyword:   TiDB 实例,TiDB 分布式数据库,实例规格
weight: 10
collapsible: false
draft: false
---

TiDB 实例支持变更实例配置，包括变更实例类型、组件节点数量以及开启或关闭数据容量自动扩容，以满足不同的性能和容量需求。

## 注意事项

- 变更集群配置可能导致服务中断，请在业务低峰时进行。

- 更改限制：

  - 不支持从分析增强型变更为基础型或测试型；
  - 不支持从基础型变更为测试型；
  - 测试型实例不支持更改配置；
  - 不支持降低原有的组件节点数量。

  不同配置的规格性能，请参考[实例类型](../../../intro/instance_type/)。

- 变更配置后，对应的服务费用将发生变化，具体收费标准可参考[费用变更](../../../billing/bill_change/)及[产品定价](../../../billing/price_detail/)。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **分布式数据库 TiDB**，进入 实例列表页面。

3. 在实例列表，点击对应**操作**列的**更改配置**，弹出确认提示框。

   <img src="../../../_images/mdy_configure.png" alt="更改配置" style="zoom:50%;" />

5. 根据实际需求，修改实例类型或组件节点数量。

5. 根据实际需求，开启或关闭**数量容量自动扩容**选项。

   > **说明**
   >
   > 当用户开启自动扩容后，TiKV 节点将按用户数据量增加，同时 TiDB 节点也按配比对应增加。TiDB 与 TiKV 的节点配比为1:3，即每增加三个TiKV 节点，则会增加一个 TiDB 节点。

6. 点击**确认**，返回实例列表页面。

   实例状态变为**更新中**，待状态变为**运行中**，表示配置更新完成。

