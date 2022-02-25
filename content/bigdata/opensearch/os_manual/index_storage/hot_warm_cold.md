---
title: "分层存储"
description: 本小节主要介绍 OpenSearch 索引分层存储。
keyword: 搜索分析,热-温-冷索引迁移，冷热温索引,冷热索引分层,索引分层,索引分层存储
weight: 05
collapsible: false
draft: false
---

**热-温-冷**架构即基于时间创建索引（index）和索引分层存储结构，支持通过命令把温/冷索引从 **OpenSearch 热节点** 迁移到相应的节点。**热-温-冷**架构，常用于在大规模数据分析场景（例如时间数据分析场景），以提高索引的处理效率，以及降低海量数据存储成本。

OpenSearch 集群默认为索引默认存储在 **热节点**，您需首先确认 OpenSearch 各节点属性，再执行命令将`热节点`上索引迁移至 `冷/温节点`，实现索引分层管理。

本小节主要介绍**热-温-冷**架构，以及如何迁移索引至 OpenSearch 冷/温节点。

## 架构简介

- Master 节点

  负责处理集群管理和状态，提高了整体稳定性。Master 节点不保存索引，也不参与搜索和索引操作，不会被长 GC 干扰，负载可以保持在较低水平，能极大提高集群的稳定性。

- 热节点
  
  负责处理集群中所有索引，承担最频繁的写入和查询操作。由于索引是 CPU 和 i/o 密集型操作，对计算和存储服务器的性能要求比较高，如超高性能主机及硬盘。
  
  在**配置参数** > **OpenSearch 节点（热）**页面中 **node.attr.data（热）**参数指向 OpenSearch **热-温-冷**架构，默认值为`hot`。

- 温/冷节点
  
  负责处理只读索引，会接收少量的查询请求。温/冷节点可以配置一般性能的资源，通常配备通用本地磁盘。
  
  在**配置参数** > **OpenSearch 节点（温/冷）**页面中 **node.attr.data（温）**和 **node.attr.data（冷）**参数指向 OpenSearch **热-温-冷**架构，默认值为`warm` 和 `cold`。

![hot-warm-cold-arch](../../../_images/hot_warm_cold_arch.png)

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已获得 Dashboard 登录账号和密码。

## 操作步骤

### 配置热/冷/温节点

OpenSearch 节点 **node.attr.data** 参数，定义了冷、温、热节点属性，可用作**热-温-冷**架构配置。

- 冷、温、热节点 **node.attr.data** 属性标签默认为值为 `cold`、`warm`、`hot`。
- 您也可以在配置参数页面，自定义节点配置属性。

1. 登录管理控制台，选择目标 **OpenSearch 服务**，进入集群详情页面。
2. 在**节点**页签，查看集群 OpenSearch 节点角色类型，确认是否存在 `冷/温节点`。  
   若无 `冷/温节点` ，请先[新增节点](../../../manual/node_lifecycle/create_node)。  
3. 在**配置参数**页签，分别选择 **OpenSearch 节点（热）**、**OpenSearch 节点（冷）**、**OpenSearch 节点（温）**参数类型，查看和修改节点配置属性。

  <img src="../../../_images/hot_value.png" alt="查看热节点属性" style="zoom:50%;" />  

  <img src="../../../_images/warm_value.png" alt="查看温节点属性" style="zoom:50%;" />  

  <img src="../../../_images/cold_value.png" alt="查看冷节点属性" style="zoom:50%;" />  

### 将索引迁移至冷/温节点

登录 Dashboard 管理控制台，在 **Dev Tools** 的 Console 中分别执行以下命令，迁移索引至`冷/温节点`。

- **迁移至`温节点`**

  以迁移名为 `last-month` 的 index 为例。

  ```bash
  PUT /last-month/_settings
  {
    "index.routing.allocation.require.data": "warm"
  }
  ```

- **迁移至`冷节点`**

  以迁移名为 `last-year` 的 index 为例。

  ```bash
  PUT /last-year/_settings
  {
    "index.routing.allocation.require.data": "cold"
  }
  ```
