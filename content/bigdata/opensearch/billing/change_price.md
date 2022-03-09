---
title: "费用变更"
description: 本小节主要介绍 OpenSearch 费用变更说明。 
keyword: 费用变更,OpenSearch
weight: 20
collapsible: false
draft: false
---

在您使用 OpenSearch 过程中，以下场景将会发生费用变更：

- 变更配置：包括增加节点、删除节点、扩容节点规格、缩容节点规格。
- 更改云服务器类型：OpenSearch 集群支持将集群节点类型从低配主机类型升级为高配主机类型。
- 变更计费模式：从**按需计费**变更为**包年/包月**，或从**包年/包月**变更为**按需计费**。

## 变更配置

在创建 OpenSearch 集群时，有多种资源类型供您选择，您可以根据业务实际情况选择合适的节点资源。当集群创建成功后，您也可以对节点数量和规格进行变更。变更配置成功后，将会按照变更后的配置进行计费。

- [新增节点](../../manual/node_lifecycle/create_node)或[删除节点](../../manual/node_lifecycle/delete_node)：根据增减的节点个数和节点角色，实例资源的费用会相应变更。
- [扩容节点](../../manual/node_lifecycle/capacity_expansion)或[缩容节点](../../manual/node_lifecycle/capacity_expansion)：扩容或缩容已有节点的 CPU、内存，扩容节点容量，实例资源的费用会相应变更。

> **说明**
> 
> - 不支持缩容节点容量。
> 
> - 对于包年/包月的集群：变更配置不会改变集群到期时间。变更配置后，增加/退回的费用为 **从当前时间到集群到期时间之间的费用**。

## 更改云服务器类型

[更改云服务器类型](../../manual/cluster_lifecycle/switch_node_mode)仅支持从低配主机类型升级为高配主机类型，系统会根据调整之后的主机类型收取相应的费用。

## 变更计费模式

变更计费模式有如下两种场景：

- 从按需计费变更为包年/包月：包年/包月模式可以享受更大的价格优惠。
- 从包年/包月变更为按需计费：按需计费相比包年/包月单价更高，但使用更灵活。  

|<span style="display:inline-block;width:100px">源计费模式</span> |<span style="display:inline-block;width:100px">目标计费模式</span>|<span style="display:inline-block;width:330px">操作说明</span>|
|:----|:----|:----|
|   按需计费     | 包年/包月  |  执行[修改计费模式](../../manual/cluster_lifecycle/switch_billing_mode)操作，变更立即生效，您需一次性支付包年/包月的费用。  |
|   包年/包月    | 按需计费   |  <li>执行[修改计费模式](../../manual/cluster_lifecycle/switch_billing_mode)操作，服务到期后，集群将按照按需计费模式进行收费。<li>执行[退订](../../manual/cluster_lifecycle/unsubscribe)操作，选择**是否销毁资源**为`否`，操作成功后，系统将费用退订至您的账户中，集群立即按照按需计费模式进行收费。 |
