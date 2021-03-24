---
title: "数据导入和导出"
description: Test description
weight: 3
---

使用 `mongodb-org-tools` 中的工具 `mongodump`, `mongorestore` 可以很方便的执行 MongoDB 数据的导出和导入。

- 使用 `mongodump` 工具可以将 MongoDB 中的数据导出，使用说明可以参考官方文档 https://docs.mongodb.com/manual/reference/program/mongodump/
- 使用 `mongorestore` 工具可以将 `mongodump` 导出的数据导入到 MongoDB 中，使用说明可以参考官方文档 https://docs.mongodb.com/manual/reference/program/mongorestore/

### 在线导入

下面演示如何将`192.168.110.101`的数据直接在线导入到`192.168.110.102`中。在同一个VPC下创建一台云服务器，安装 `mongodb-org-tools` 工具。在命令行中执行以下的命令：

```shell
mongodump --archive --username=user001 --password=Pwd00001 --authenticationDatabase=admin --host=192.168.110.101 --db=db1 | mongorestore --archive --username=user002 --password=Pwd00002 --authenticationDatabase=admin --host=192.168.110.102 --db=db2
```

其中: 使用 `192.168.110.101`的用户`user001`，密码`Pwd00001`，验证数据库`admin`，导出数据库`db1`，导入到`192.168.110.102`的用户`user002`，密码`Pwd00002`，验证数据库`admin`，导入数据库`db2`

