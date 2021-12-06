---
title: "数据导入与导出"
description: 本小节主要介绍如何进行 MongoDB 数据导入和导出。 
keyword: MongoDB 数据导入和导出；数据导入；数据导出
weight: 30
collapsible: false
draft: false
---


在云服务器中支持通过 MongoDB Shell 客户端访问 MongoDB Cluster，并支持进行数据导入和导出。

MongoDB 官方提供的以下两组导入导出工具：

- [mongodump](https://docs.mongodb.com/manual/reference/program/mongodump/) 与 [mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/) 

- [mongoexport](https://docs.mongodb.com/manual/reference/program/mongoexport/) 与 [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/)

本小节主要介绍 MongoDB 官方导入/导出工具的简要使用命令。

## mongodump 与 mongorestore

mongodump 与 mongorestore 是对整个数据进行导出或导入，操作数据格式是 BSON 格式，对大量数据进行多 dump 和 restore 操作时具备更高效率。

**mongodump 导出命令**
  
```
mongodump --host <mongos_ip>:27018 -u <userName> -p  --authenticationDatabase=admin --db=<dbName> -o /data/dump_test
```

**mongorestore 导入命令**

```
mongorestore --host <mongos_ip>:27018 -u <userName> -p  --authenticationDatabase=admin --dir=/data/dump_test
```

## mongoexport 与 mongoimport

mongoexport 与 mongoimport 是对单个集合进行导出导入，通常使用 ，操作数据格式是 JSON 格式，数据导出后具备较高的可读性。

**mongoexport 导出命令**

```
mongoexport --host <mongos_ip>:27018 -u <userName> -p  --authenticationDatabase=admin --db=<dbName> --collection=test -o /data/export_test.json
```

**mongoimport 导入命令**

```
mongoimport --host <mongos_ip>:27018 -u <userName> -p  --authenticationDatabase=admin --db=<dbName> --collection=test --file=/data/export_test.json
```
