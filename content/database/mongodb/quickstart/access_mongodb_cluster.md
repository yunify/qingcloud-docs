---
title: "快速访问 MongoDB 集群"
description: 本小节主要介绍如何快速访问 QingCloud MongoDB 集群实例。 
keywords: mongodb 集群访问,
data: 2021-05-14T00:38:25+09:00
weight: 2
collapsible: false
draft: false
---





## 通过 mongo 客户端连接

MongoDB 创建完成之后可以进行连接测试，下载并安装 [mongodb-org-shell](https://docs.mongodb.com/manual/administration/install-on-linux/ )。

在 MongoDB 同一私有网络或跨网络的客户端上测试。现假设客户端和 MongoDB 在同一私有网络，MongoDB 集群有三个节点，IP 地址分别为`192.168.0.23,192.168.0.24,192.168.0.27`， 创建的用户名为`qc_test`，密码为`Pwd00000`，可以通过如下命令连接 MongoDB。

```shell
mongo mongodb://qc_test:Pwd00000@192.168.0.23,192.168.0.24,192.168.0.27/admin?replicaSet=foobar
```

连接成功后将回显以下信息。

```text
foobar:PRIMARY>
```

## 创建用户

创建集群时输入的用户名对应的是 `readWriteAnyDatabase` 权限的普通账号，无法创建用户。如果需要创建用户，请使用 `root` 账号，密码与你输入的密码相同。连接时请使用与集群版本相同或者偏上的版本。

以下示例以在 `db1` 中，创建一个用户名`test_user1`，密码为`Pwd00001`，具有`readWrite`权限的用户。


1. 使用 `root` 账号进行连接。

```shell
mongo mongodb://root:Pwd00001@192.168.0.23,192.168.0.24,192.168.0.27/admin?replicaSet=foobar
```

2. 连接接成功后，执行如下的命令创建用户。

```javascript
use db1;
db.createUser({ user: "test_user1", pwd: "Pwd00001", roles: [ "readWrite" ]});
```

3. 创建成功后，通过 `Ctrl+C` 退回到 shell 中。使用如下命令以 `test_user1` 用户连接到 `db1`。

```shell
mongo mongodb://test_user1:Pwd00001@192.168.0.23,192.168.0.24,192.168.0.27/db1?replicaSet=foobar
```

更多权限管理说明，请参见[Enable Access Control](https://docs.mongodb.com/manual/tutorial/enable-authentication/)。

## 通过代码连接

如果使用代码进行连接，那么 MongoDB 连接命令为 `mongodb://USER:PASSWORD@IP/DB?replicaSet=foobar&authSource=admin`。

其中:

- USER 是创建的用户名。
- PASSWORD 是用户密码。
- IP 是 **replica set** 中的节点 IP，使用逗号分隔，比如 192.168.0.23,192.168.0.24,192.168.0.27。
- DB 是待连接的数据库名。
- replicaSet=foobar 是默认 **replicaSet** 配置，值为 `foobar`。
- authSource=admin 是指定验证数据库为 `admin`。
  
更多参数说明，请参见[Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)。
