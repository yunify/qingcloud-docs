---
title: "mongodump 与 mongorestore 方式"
description: 本小节主要介绍如何通过 mongodump 与 mongorestore 方式导入和导出数据。 
keyword: mongodump,mongorestore,数据导入,数据导出 
weight: 30
collapsible: false
draft: false
---

MongoDB 支持使用 [mongodump](https://docs.mongodb.com/manual/reference/program/mongodump/) 和 [mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/) 工具，实现 MongoDB 数据迁移。

- `mongodump` 是一个数据导出工具，可以将 MongoDB 中的数据导出。
- `mongorestore` 是一个数据导入工具，可以将 `mongodump` 导出的数据导入到 MongoDB 中，实现 MongoDB 数据的恢复。

本小节主要简单介绍通过 MongoDB 工具导入和导出数据方法。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB 集群，且集群状态为**活跃**。
- 已安装 `mongodump` 和 `mongorestore` 工具。

    > **注意**
    > 
    > 数据导入和导出期间，需确保安装工具的服务器与两个 MongoDB 集群之间网络畅通。
    > 
    > 当安装工具的服务器与两个 MongoDB 集群之间网络不通时，可使用[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 操作命令

执行如下命令，可将数据在两个数据库之间迁移。

```shell
$ mongodump --archive --username=<username_cluster1> --password=<password_cluster1> --authenticationDatabase=admin --host=<node_ip_cluster1> --db=<db_name_cluster1> 

| mongorestore --archive --username=<username_cluster2> --password=<password_cluster2> --authenticationDatabase=admin --host=<node_ip_cluster2> --db=<db_name_cluster2>
```

以下示例，将集群 A 的数据导入到集群 B 中。

```shell
$ mongodump --archive --username=user001 --password=Pwd00001 --authenticationDatabase=admin --host=192.168.110.101 --db=db1 

| mongorestore --archive --username=user002 --password=Pwd00002 --authenticationDatabase=admin --host=192.168.110.102 --db=db2
```

其中：

- 集群 A 用户名为 `user001`，密码为 `Pwd00001`，节点 IP 为 `192.168.110.101`，验证数据库为 `admin`，导出数据库minor为 `db1`。

- 集群 B 用户名为 `user002`，密码为 `Pwd00002`，节点 IP 为 `192.168.110.102`，验证数据库为 `admin`，导入数据库名为 `db2`。
