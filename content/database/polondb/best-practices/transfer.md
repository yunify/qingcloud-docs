---
title: "迁移数据到 PolonDB"
description: 本小节主要介绍如何迁移数据到 QingCloud PolonDB 数据库。 
keywords: polondb 迁入数据
data: 2021-05-14T00:38:25+09:00
weight: 4
collapsible: false
draft: false
---

## 小型 PostgreSQL 数据库迁移

针对小型 PostgreSQL 数据库环境，可选择`pg_dump / pg_restore` 迁移方式，迁移到 PolonDB 集群中。

> 注意：
> 
> 数据迁移期间，需停机时间，请在业务低峰期进行数据迁移，避免数据丢失。

1. 创建数据库用户和创建数据库，请参见[高阶使用](../advanced_operation)。

2. 从源数据库中保存数据库结构。

    ```shell
    pg_dump \ 
    --format = plain \ 
       --schema-only \ 
       --file = schema.sql \ 
       --schema = target_schema \ (可选)
       postgres：// user：pass @ host ：5432 / db
    ```

3. 使用 `psql` 连接到 PolonDB 集群，并创建结构。

    ```
    \ i  schema.sql
    ```

4. 运行 `create_distributed_table` 和 `create_reference_table` 语句，创建数据库对象。
   
   > 若收到有关外键的错误，通常是由于操作顺序。可以先删除外键，然后重新添加它们。

5. 将应用程序置于维护模式，并禁用对源数据库的任何其他写入。

6. 使用 `pg_dump` 将源数据库中的数据保存到磁盘。

    ```shell
    pg_dump \ 
       --format = custom \ 
       --data-only \ 
       --file = data.dump \ 
       --schema = target_schema \ （可选）
       postgres：// user：pass @ host ：5432 / db
    ```

7. 使用 `pg_restore` 导入 PolonDB。

    ```shell
    pg_restore   \ 
       --host = host \ 
       --dbname = dbname \ 
       --username = username \
       data.dump
    ```

8. 测试应用。

9. 迁移完成，启动应用。

## 大型 PostgreSQL 数据库迁移

大型数据库迁移，**可以不间断源数据库的业务**，平滑的迁移到 PolonDB 集群中。

> **大型 PostgreSQL 数据库迁移**仅针对 PostgreSQL 10 及以上版本，或 PostgreSQL 9.4 以上版本并安装 logical_decode 插件。
>

> **注意：**
>   
> - 在迁移过程中源数据库不可以进行 DDL 操作，只可以进行 DML 和 TRUNCATE 操作。
> - 建议需要迁移的表拥有主键。
> - 无主键的表在源数据中执行 `alter table xx replica identity full ` 语句。

1. 创建数据库对象，参考[小型 PostgreSQL 数据库迁移](#小型-postgresql-数据库迁移)的 `create_distributed_table` 内容。

2. 连通源数据库与 PolonDB 集群之间的网络，确保 PolonDB 集群可以连接到源数据库。

3. 获取 `qingcloud_decoding.so` 的动态库，并存储到 PostgreSQL 的 lib 目录中。
   > 请提工单或联系技术支持获取动态库，技术支持将根据当前数据库环境，配备唯一标识的动态库供您使用。

4. 设置源数据库参数，并重启数据库。

    ```sql
     -- postgresql.conf
     wal_level=logical
     -- pg_hba.conf
     host	all		all		0.0.0.0/0		md5
     host	replication	all		0.0.0.0/0		md5
    ```

5. 在 APPCenter 集群管理，打开待迁移 PostgreSQL 实例详情页，启动 PostgreSQL 迁移。

   ![image-StartPGMigrate](../../_images/image-StartPGMigrate.png)

   |参数    |说明    |
   |:----|:----|
   |角色   |选择**协调器**。|
   |需要同步的表   |`*`代表同步该库下所有的表。 `public.*`代表同步 public 模式下所有的表。 `public.aa, public.bb` 代表同步这两个表。|
   |源端数据库名   |输入源端数据库名。|
   |不需要同步的表   |`*`代表没有不需要同步的表。 `public.*`代表不同步 public 模式下所有的表。 `public.aa, public.bb` 代表不同步这两个表。|
   |源端数据库用户   |用户需是超级用户或是拥有 `replica` 角色权限的用户。**超级用户更方便些**。|
   |源端数据库用户密码   |输入源端数据库用户密码。|
   |源端数据库地址   |输入源端数据库地址。|
   |源端数据库端口   |输入源端数据库端口。|
   |此集群数据库名   |迁移到 PolonDB 的数据库名。|
  
6. 检验数据正确性。

7. 根据应用特征手动设置序列值。

8. 测试应用。

9. 迁移完成，迁移应用，启动应用。

10. 停止 PostgreSQL 迁移。

    ![image-FinishPGMigrate](../../_images/image-FinishPGMigrate.png)

## PostgreSQL 大对象迁移

含有大对象表的迁移，参考[小型 PostgreSQL 数据库迁移](#小型-postgresql-数据库迁移) 方法进行。
