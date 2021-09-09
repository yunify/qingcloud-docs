---
title: "小型 PostgreSQL 数据库迁移"
description: 本小节主要介绍如何迁移小型数据到 PolonDB 数据库。 
keywords: polondb 迁入数据
weight: 10
collapsible: false
draft: false
---

针对小型 PostgreSQL 数据库环境，可选择`pg_dump `和`pg_restore` 迁移方式，迁移到 PolonDB 集群中。

> **注意**
> 
> 数据迁移期间，需暂停源数据库与 PolonDB 数据库，请在业务低峰期进行数据迁移，避免数据丢失。

## 前提条件

- 已创建 PolonDB 集群，且集群状态为**活跃**。
- 已创建数据库用户和创建数据库。
- 已安装 pgAdmin 工具。
- 已暂停 PostgreSQL 源数据库的数据写入。
  
> **说明**
> 
> 若 PostgreSQL 源数据库与 PolonDB 集群不在同一 VPC 私有网络，建议使用[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**方式打通网络，避免因数据库服务信息暴露，造成数据泄漏风险。

## 操作步骤

1. 在 PostgreSQL 源数据库，保存数据库结构。

    ```shell
    $ pg_dump \ 
       --format = plain \ 
       --schema-only \ 
       --file = schema.sql \ 
       --schema = target_schema \ (可选)
       postgres：// user：password @ host_ip ：5432 / db_name
    ```

2. 在 PolonDB 集群，使用 `psql` 连接集群，并创建数据库结构。

    ```
    \ i  schema.sql
    ```

3. 在 PolonDB 集群，运行 `create_distributed_table` 和 `create_reference_table` 语句，创建数据库对象。
   
   > **说明**
   > 
   > 若收到有关外键的错误，通常是由于操作顺序有误。可以先删除外键，再重新添加数据库对象。

4. 将应用程序置于维护模式，并禁用对源数据库的任何其他写入。

5. 在 PostgreSQL 源数据库，使用 `pg_dump` 将源数据库中的数据保存到磁盘。

    ```shell
    $ pg_dump \ 
       --format = custom \ 
       --data-only \ 
       --file = data.dump \ 
       --schema = target_schema \ （可选）
       postgres：// user：password @ host_ip ：5432 / db_name
    ```

6. 使用 `pg_restore` 将数据导入 PolonDB。

    ```shell
    $ pg_restore   \ 
       --host = host \ 
       --dbname = dbname \ 
       --username = username \
       data.dump
    ```

7. 测试应用，并验证数据完整性。
   
   确认数据无误后，则迁移完成，可启用 PolonDB 数据库。
