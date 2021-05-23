---
title: "数据导入和导出"
description: 本小节主要介绍 QingCloud MongoDB 数据导入和导出应用。 
keywords: mongodb 数据导入,数据导出 
data: 2021-05-14T00:38:25+09:00
weight: 2
collapsible: false
draft: false
---

QingCloud MongoDB 通过使用 `mongodb-org-tools` 中的工具 [mongodump](https://docs.mongodb.com/manual/reference/program/mongodump/) 和 [mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/)，实现 MongoDB 数据的导出和导入。

- 使用 `mongodump` 工具可以将 MongoDB 中的数据导出。
- 使用 `mongorestore` 工具可以将 `mongodump` 导出的数据导入到 MongoDB 中。

## 在线导入

以下示例，将`192.168.110.101`的数据在线导入到`192.168.110.102`中。

在同一个 VPC 下创建一台云服务器，安装 `mongodb-org-tools` 工具后，执行以下的命令在线导入数据。

```shell
mongodump --archive --username=user001 --password=Pwd00001 --authenticationDatabase=admin --host=192.168.110.101 --db=db1 | mongorestore --archive --username=user002 --password=Pwd00002 --authenticationDatabase=admin --host=192.168.110.102 --db=db2
```

 > 其中: 
 > 
 > - 使用 `192.168.110.101`的用户 `user001`，密码 `Pwd00001`，验证数据库 `admin`，导出数据库 `db1`。
 > - 导入到`192.168.110.102`的用户 `user002`，密码`Pwd00002`，验证数据库 `admin`，导入数据库 `db2`。
