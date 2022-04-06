---
title: "升级 timescaleDB 插件"
description: 本小节主要介绍如何升级 timescaleDB 插件。 
keyword: 升级集群,PostgreSQL,关系型数据库,数据库
weight: 17
collapsible: false
draft: false

---

TimescaleDB 是一个旨在使 SQL 可扩展以适用于时间序列数据的开源数据库。 它由 PostgreSQL 设计并打包为 PostgreSQL 扩展，提供跨时间和空间的自动分区（分区键）以及完整的 SQL 支持。

本小节主要介绍如何升级 timescaleDB 插件至`1.7.3`版本。

## 约束限制

- 仅支持升级到`PG11-高可用版-1.0.9`及以上版本的集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已更新集群版本到`PG11-高可用版-1.0.9`及以上版本。
- **节点状态**活跃，**节点服务状态**正常。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。

3. 点击目标集群 ID，进入集群详情页面。

4. 使用数据库连接软件（PgAdmin、DBeaver 或直接使用 psql）通过 root 账户连接数据库**高可用写IP**。

   <img src="../../../_images/upgrade_14.png" alt="连接数据库" style="zoom:50%;" />

   如果您正在使用psql，请与-X标志连接，以防止任何命令在.psqlrc会话启动时加载以前的 TimescaleDB 版本，示例如下：

   ```sql
   psql -U <用户名> -h <ip> -p <port> -d <数据库名> -X
   ```

5. 执行如下 SQL 语句更新 timescaleDB 版本至 1.7.3：

   ```sql
   ALTER EXTENSION timescaledb UPDATE TO '1.7.3';
   ```

   <b> `注意：需要将更新语句作为连接数据库后的第一条命令执行，否则执行会报如下错误：`</b>

   <img src="../../../_images/upgrade_15.png" alt="连接数据库" style="zoom:50%;" />