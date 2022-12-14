---
title: "Citus 集群"
description: 本小节主要介绍如何通过内置的 Citus 插件，将单机 PostgreSQL 数据库扩展成 HTAP 分布式数据库。 
keyword: Citus,PostgreSQL,关系型数据库,数据库
weight: 91
collapsible: false
---

PostgreSQL 内置 Citus 插件，可以将单机 PostgreSQL 数据库集群组建为 Citus 集群，轻松地将单机 PostgreSQL 数据库扩展成了 HTAP 分布式数据库。

Citus 集群由`协调器节点`和`数据节点`组成。   
* **协调器节点**负责 DDL 的管理和集群节点管理。
* **数据节点**负责业务的读写和数据的存储。

## 配置示例

假如两个单机 PostgreSQL 数据库集群的读写 IP 如下：
* 集群 A 读写 IP：192.168.0.253。
* 集群 B 读写 IP：192.168.0.249。

以下步骤主要介绍如何将集群 A 和集群 B 扩展成 Citus 集群。

1. 添加数据库账号。详细操作请参考[添加账号](../mgt_account/create_account/)。
   分别在集群 A 和集群 B 中添加相同的账号（两个集群的账户名、密码、权限需保持完全一致）。
2. 连接集群 A。详细操作请参考[连接集群](../mgt_connect/access_pg/)。
3. 执行以下命令，将集群 B 以`数据节点`的角色，加入`协调器`集群 A 中。

   ```sql
   select citus_add_node('192.168.0.249','5432') 
   ```

4. 执行以下命令，将 tab 表用 id 列创建成分布式表。
   
   ```sql
   select create_distributed_table('tab', 'id') 
   ```
   集群 A 为协调器节点，集群 B 为数据节点的 HTAP 分布式数据库组建完成。
