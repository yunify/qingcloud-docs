---
title: "大型 PostgreSQL 数据库迁移"
description: 本小节主要介绍如何迁移大型数据到 PolonDB 数据库。 
keywords: polondb 迁入数据
weight: 15
collapsible: false
draft: false
---

大型 PostgreSQL 数据库迁移，**可以不间断源数据库的业务**，平滑的迁移到 PolonDB 集群中。

> **注意**
> 
> 数据迁移期间，需暂停源数据库与 PolonDB 数据库，请在业务低峰期进行数据迁移，避免数据丢失。

## 约束限制

- 仅针对 PostgreSQL 10 及以上版本，或 PostgreSQL 9.4 以上版本，并安装 logical_decode 插件的数据库。
- 在迁移过程中源数据库不支持 DDL 操作，仅支持 DML 和 TRUNCATE 操作。
- 建议需要迁移的表拥有主键。
- 无主键的表在源数据中执行 `alter table xx replica identity full ` 语句。

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

4. 在 PolonDB 集群获取 `qingcloud_decoding.so` 的动态库。
   
   > **注意**
   > 
   > 请提工单或联系技术支持获取动态库，技术支持将根据当前数据库环境，配备唯一标识的动态库供您使用。

5. 在 PostgreSQL 源数据库，将动态库存储到 PostgreSQL 的 lib 目录中。

6. 在 PostgreSQL 源数据库，设置源数据库参数，并重启数据库。

    ```sql
     -- postgresql.conf
     wal_level=logical
     -- pg_hba.conf
     host	all		all		0.0.0.0/0		md5
     host	replication	all		0.0.0.0/0		md5
    ```

7. 在 AppPCenter 集群管理，启动 PostgreSQL 迁移。

   1. 登录 QingCloud 管理控制台。
   2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 PolonDB**，进入集群管理页面。
   3. 点击目标集群 ID，进入集群详情页面。
   4. 在**基本属性**模块，点击集群操作下拉菜单。
   5. 展开下拉菜单，点击**启动 PG 迁移**。
   6. 配置迁移信息，详细参数请参见[迁移参数说明](#pg-迁移参数说明)。
   7. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   <img src="../../../_images/image-StartPGMigrate.png" alt="启动 PG 迁移" style="zoom:50%;" />

8.  检验数据正确和完整性。

9.  根据应用特征手动设置序列值。

10. 测试应用，迁移完成，迁移应用，启动应用。

11. 在 AppPCenter 集群管理，停止 PostgreSQL 迁移。

    1. 登录 QingCloud 管理控制台。
    2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 PolonDB**，进入集群管理页面。
    3. 点击目标集群 ID，进入集群详情页面。
    4. 在**基本属性**模块，点击集群操作下拉菜单。
    5. 展开下拉菜单，点击**停止 PG 迁移**。
    6. 确认配置信息无误后，点击**提交**，返回节点列表页面。

    <img src="../../../_images/image-FinishPGMigrate.png" alt="停止 PG 迁移" style="zoom:50%;" />

### PG 迁移参数说明

|参数    |说明    |
|:----  |:----   |
|角色    | 选择**协调器**。|
|需要同步的表   |  <li>`*`代表同步该库下所有的表。 <li>`public.*`代表同步 public 模式下所有的表。 <li>`public.aa, public.bb` 代表同步这两个表。|
|源端数据库名   |  输入源端数据库名。|
|不需要同步的表   |   <li>`*`代表没有不需要同步的表。 <li>`public.*`代表不同步 public 模式下所有的表。 <li>`public.aa, public.bb` 代表不同步这两个表。|
|源端数据库用户   |  用户需是超级用户或是拥有 `replica` 角色权限的用户。推荐使用**超级用户**。|
|源端数据库用户密码   |  输入源端数据库用户密码。|
|源端数据库地址   |  输入源端数据库地址。|
|源端数据库端口   |  输入源端数据库端口。|
|此集群数据库名   |  迁移到 PolonDB 的数据库名。|
