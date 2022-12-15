---
title: "OpenSearch 能管理用户资源配额吗？"
description: 本小节主要介绍 OpenSearch 用户配额。 
keyword: 常见问题,OpenSearch,用户配额
weight: 10
collapsible: false
draft: false
---

OpenSearch 和 ElasticSearch 目前都没有提供直接的工具来设置用户配额。

但可以**通过 Index Management 和 Notifications 功能实现“磁盘配额管理”**：

* **Index Management** 负责索引生命周期管理，监控索引的主分片大小，并执行相应动作。
* **Notifications** 负责执行通知。

详细操作请参见[管理索引主分片磁盘空间](#管理索引主分片磁盘空间)。

## 背景信息

在多用户场景下，为了防止用户过度消耗资源，包括磁盘占用、处理队列等，防止个别用户行为影响整个 OpenSearch 集群性能和可用性，拟为用户设置配额。

OpenSearch Dashboards 中的 Tenant 是一个逻辑空间，用于存放 dashboard 的资源，包括索引模板、可视化、仪表板等。Tenant 只能控制角色是否能访问 dashboard 的资源，不能通过 Tenant 来控制用户配额。

## 管理索引主分片磁盘空间

示例场景：

**用户**：user1   
**权限设置**：能访问以 `user1-*` 命名的索引。   
**配置示例**：
* 当 user1-xxx 索引的主分片占用磁盘空间达到 50G 时，把该索引切换为只读并发出通知。

   <img src="/bigdata/opensearch/_images/faq_quota.png" alt="" style="zoom:60%;" />

* 当 user1-xxx 索引的主分片占用磁盘空间达到 40G 时，发出通知。

   <img src="/bigdata/opensearch/_images/faq_quota01.png" alt="" style="zoom:60%;" />

> **注意**
> 
> 通过该方式可以管理索引主分片磁盘空间，但有如下**局限性**：
> * 角色配置时，配置角色请限制创建索引的数量（可能不符合实际需求）。如果对用户能够创建的索引数量没有限制，则也可能无法有效地管理磁盘空间。
> * 不能管理副本分片的磁盘大小：使用 Index Management 只能监控索引的主分片大小，而不是索引主分片+副本分片的大小，当副本设置很大时，仍然会造成磁盘占用过大。
