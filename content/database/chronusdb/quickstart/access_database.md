---
title: "连接数据库"
description: 本小节主要介绍如何快速访问 ChronusDB 数据库。 
keywords: ChronusDB 实例, 访问数据库
weight: 20
collapsible: false
draft: false
---


ChronusDB on QingCloud 可选用 Docker 、客户端、curl 等方式连接集群和导入数据。

## 前提条件

- 已创建 ChronusDB 集群，且集群状态为**活跃**。
- 已获取可登录数据库账号和密码。
- 已获取集群连接信息。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问数据库](#访问数据库)。

### 获取连接信息

> **注意**
> 
> 由于集群采用无主构架，建议直接使用节点 IP 管理集群，以便可以更加灵活的控制集群的负载。

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **时序数据库 ChronusDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**服务端口信息**模块，获取集群高可用 IP。
   
   <img src="../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

5. 在**节点**页签，可获取各节点 IP。

   <img src="../../_images/check_node.png" alt="节点" style="zoom:100%;" />

### 访问数据库

- 使用 curl 访问。

   ``` shell
   echo 'SELECT 1' | curl 'http://数据库账号名:密码@高可用IP:端口' -d @-
   ```

- 使用 curl 向导入数据。

   ``` shell
   cat visits_v1.tsv | curl 'http://数据库账号名:密码@高可用IP:端口/?query=INSERT+INTO+datasets.visits_v1+FORMAT+FORMAT+TSV' --data-binary @-
   ```
