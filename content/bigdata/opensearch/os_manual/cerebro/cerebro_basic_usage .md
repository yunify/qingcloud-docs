---
title: "Cerebro 基本用法"
description: 本小节主要介绍 Cerebro 基本使用示例。
keyword: 使用 Cerebro,查看集群状态, OpenSearch,搜索引擎
weight: 20
collapsible: false
draft: false
---

Cerebro 启用成功后，可通过 Cerebro 可视化管理平台管理集群、索引、快照等。更多 Cerebro 使用和功能介绍，请参见 [Cerebro](https://github.com/lmenezes/cerebro)。

本小节主要介绍 Cerebro 基本使用方法。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已开启 Cerebro 功能。

## 基本用法

### 查看集群状态

- overview
  
  在 **overview** 页面，可以索引视角查看集群状态。可查看分片在节点的分配情况，实线方框是主分片，虚线方框是副本分片，内部数字表示分片序号。  
  - 列框的每一列代表一个索引，包含索引名称、分片与副本设置、文档数量、占用磁盘等信息。   
  - 列框的每一行代表一个集群节点，主要包含节点信息，包含节点属性、 JVM 堆内存、磁盘、CPU、负载等使用情况。  

  <img src="../../../_images/cerebro_index.png" alt="cerebro index" style="zoom:50%;" />

- nodes

  在 **nodes** 页面，可以节点视角查看集群状态。可查看节点的负载情况，包含负载、 CPU 百分比、堆内存百分比、磁盘使用百分比、运行时间等。  
  - 列框的每一行代表一个集群节点，包含节点名称、属性、JVM 版本、ES 版本。  
  - 列框上方是节点角色过滤条件，包括 master、data、ingest、coordinating 等角色类型。

  <img src="../../../_images/cerebro_nodes.png" alt="cerebro nodes" style="zoom:50%;" />

### 集群配置管理

点击 **more** > **cluster settings**，进入集群配置管理页面，可管理基本配置，并可查看集群静态配置。
 
<img src="../../../_images/cerebro_clustersetting.png" alt="cerebro cluster settings" style="zoom:50%;" />

### 索引管理

- 创建索引
  
  点击 **more** > **create index**，进入索引创建页面。可创建新索引，也可基于已有索引创建索引。

  <img src="../../../_images/cerebro_create_index.png" alt="cerebro create index" style="zoom:50%;" />

- 修改与删除索引
  
  在 **overview** 页面，展开索引的操作列，分别点击 **index settings** 或 **delete index**。

  <img src="../../../_images/cerebro_index_mgt.png" alt="cerebro index" style="zoom:50%;" />

- 修改与删除索引
  
  在 **overview** 页面，展开索引的操作列，分别点击 **index settings** 或 **delete index**。

  <img src="../../../_images/cerebro_index_mgt.png" alt="cerebro index" style="zoom:50%;" />

### 备份与恢复

- 快照仓库管理
  
  点击 **more** > **repositories**，进入仓库管理页面。可查看当前已有仓库，并可创建新仓库。

  <img src="../../../_images/cerebro_repositories.png" alt="cerebro repositories" style="zoom:50%;" />

- 快照管理
  
  在 **more** > **snapshot**，进入快照管理页面。可查看当前已有 snapshot，并可创建新 snapshot。

  <img src="../../../_images/cerebro_isnapshot.png" alt="cerebro snapshot" style="zoom:50%;" />
