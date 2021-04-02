---
title: "数据库迁移"
description: Test description
weight: 7
---

## 小型 PostgreSQL 数据库迁移

对于可以容忍一点停机时间的小型环境，请使用简单的 pg_dump / pg_restore。

* 创建数据库用户

* 创建数据库


- 从旧数据库中保存数据库结构

```shell
pg_dump \ 
   --format = plain \ 
   --schema-only \ 
   --file = schema.sql \ 
   --schema = target_schema \ (可选)
   postgres：// user：pass @ host ：5432 / db
```

- 使用 psql 连接到 PolonDB 集群并创建结构：

```
\ i  schema.sql
```

- 运行 `create_distributed_table` 和 `create_reference_table` 语句。如果您收到有关外键的错误，通常是由于操作顺序。可以先删除外键，然后重新添加它们。
- 将应用程序置于维护模式，并禁用对旧数据库的任何其他写入。
- 使用 pg_dump 将原始生产数据库中的数据保存到磁盘：

```shell
pg_dump \ 
   --format = custom \ 
   --data-only \ 
   --file = data.dump \ 
   --schema = target_schema \ （可选）
   postgres：// user：pass @ host ：5432 / db
```

- 使用 pg_restore 导入 PolonDB：

```shell
pg_restore   \ 
   --host = host \ 
   --dbname = dbname \ 
   --username = username \
   data.dump
```

- 测试应用。

- 迁移完成，启动应用

## 大型 PostgreSQL 数据库迁移

大型数据库迁移，**可以不间断原旧数据库的中应用**，平滑的迁移到 PolonDB 集群中。

- 参考 `小型 PostgreSQL 数据库迁移` 的 `create_distributed_table` 内容部分创建数据库对象。

  - 在迁移过程中旧数据库不可以进行 DDL 操作，只可以进行 DML 和 TRUNCATE 操作。


  - 建议需要迁移的表拥有主键。


  - 无主键的表在旧数据中执行 `alter table xx replica identity full ` 语句。

- 连通旧数据库与 PolonDB 集群之间的网络，确保 PolonDB 集群可以连接到旧数据库。

- 通过工单或销售人员与我们联系获取 qingcloud_decoding.so 的动态库并存储到 PostgreSQL 的 lib 目录中，我们会适配您当前的环境，提供一个相应版本的动态库，同时也会生成您的唯一标记，该库仅供您使用不可提供给他人。

- 设置旧数据库参数并重启数据库

   ```sql
   -- postgresql.conf
   wal_level=logical
   -- pg_hba.conf
   host	all		all		0.0.0.0/0		md5
   host	replication	all		0.0.0.0/0		md5
   ```

- 启动 PostgreSQL 迁移

   ![image-StartPGMigrate](../../_images/image-StartPGMigrate.png)

   - 需要同步的表

      `*` 代表同步该库下所有的表。 `public.*` 代表同步 public 模式下所有的表。 `public.aa, public.bb` 代表同步这两个表。

   - 源端数据库名

      从源端该库进行迁移。

   - 不需要同步的表

      `*` 代表没有不需要同步的表。 `public.*` 代表不同步 public 模式下所有的表。 `public.aa, public.bb` 代表不同步这两个表。

   - 源端数据库用户

      此用户需是超级用户或是拥有 replica 角色权限的用户。**超级用户更方便些**。

   - 源端数据库用户密码

   - 源端数据库地址

   - 源端数据库端口

   - 此集群数据库名

     迁移到 PolonDB 的该库中。
  
- 检验数据正确性

- 根据应用特征手动设置序列值

- 测试应用

- 迁移完成，迁移应用，启动应用

- 停止 PostgreSQL 迁移

  ![image-FinishPGMigrate](../../_images/image-FinishPGMigrate.png)

> 大型数据库迁移仅针对旧数据库是 PostgreSQL 10 及以上版本，或是 PostgreSQL 9.4 以上版本并安装 logical_decode 插件。
>

## PostgreSQL 大对象迁移

含有大对象表的迁移，参考 `小型 PostgreSQL 数据库迁移` 方法进行。

