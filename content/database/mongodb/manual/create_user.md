---
title: "创建用户"
description: 本小节主要介绍如何创建 MongoDB 用户。 
keyword: 创建用户,添加用户,MongoDB,文档数据库,数据库
weight: 30
collapsible: false
draft: false
---

创建 MongoDB 集群时，默认创建 **root**、**qc_monitor** 用户帐号，默认帐号不支持删除，支持修改默认帐号密码。

- **root** 是 MongoDB 数据库超级用户帐号，具备 `userAdmin` 和 `userAdminAnyDatabase` 权限，包括管理所有数据库用户和所有数据库等权限。
- **qc_monitor** 是 MongoDB 数据库资源监控管理帐号。当开启 Zabbix、MongoDB Exporter 监控服务后，可通过配置 **qc_monitor**，实现资源多维度监控。

MongoDB 暂不支持在线管理数据库用户帐号，您可以选择登录数据库，通过命令方式创建不同权限用户帐号，实现 MongoDB 数据库帐号管理。更多详细说明，请参见 [User Management Commands](https://docs.mongodb.com/manual/reference/command/nav-user-management/)。

本小节主要介绍如何通过命令方式创建数据库用户。

## 前提条件

- 已创建 MongoDB 集群，且集群状态为**活跃**。

## 操作步骤

以下示例以在 `db1` 中，创建一个用户名`test_user1`，密码为`Pwd00001`，具有`readWrite`权限的用户。

1. 使用 `root` 帐号连接数据库。

   ```shell
   $ mongo mongodb://root:Change1Pwd@<node_IP1,node_IP2,node_IP3>/admin?replicaSet=foobar
   ```

2. 执行如下的命令创建用户，更多创建用户参数说明，请参见 [MongoDB createUser](https://docs.mongodb.com/manual/reference/command/createUser/)。

   ```javascript
   $ use db1;
   db.createUser({ user: "test_user1", pwd: "Pwd00001", roles: [ "readWrite" ]});
   ```

3. 创建成功后，通过 `Ctrl+C` 退回到 shell 中。即可以 `test_user1` 用户连接到 `db1`。

   ```shell
   $ mongo mongodb://test_user1:Pwd00001@@<node_IP1,node_IP2,node_IP3>/db1?replicaSet=foobar
   ```
