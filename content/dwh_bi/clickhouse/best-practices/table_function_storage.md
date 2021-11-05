---
title: "导入和导出数据（s3Cluster）"
description: 本小节主要介绍如何通过表函数方式，导入导出数据。 
keywords: ClickHouse 导入和导出数据；表函数，table function
weight: 10
collapsible: false
draft: false
---



ClickHouse 通过创建表函数 [s3Cluster Table Function](https://clickhouse.com/docs/en/sql-reference/table-functions/s3Cluster/) 语句，具有与外部系统集成的能力。

通过表函数 `s3Cluster Table Function` 语句，允许用户将数据从其他数据源导入/导出，包括 MySQL Server、ODBC/JDBC 连接、文件，以及 S3 等。

本小节主要介绍如何编写 S3 表函数，导入和导出数据。

## 前提条件

- 已创建 ClickHouse 集群，且集群状态为**活跃**。
- 已创建对象存储，并获取对象存储地址。
  
  > **注意**
  > 
  > 对象存储服务与集群需在同一区域；若不在同一区域，可通过[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。

- 已创建并获取 API 密钥。

## 编写 S3 表函数

基本语法如下：

```sql
s3(path, [access_key_id, secret_access_key,] format, structure, [compression])
```

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| path |  S3 协议的对象存储路径地址。<li>必须以 ‘/’ 结尾。 |
| format  | 数据格式。|
| structure |  表的结构。<li>输入格式为`“column1_name column1_type，column2_name column2_type，…”；`。 |
| compression  | （可选）文件压缩方式，默认且唯一可选 `gzip`。|

## 将 ClickHouse 数据导入 S3

基本语法示例如下。

```bash
$ echo "INSERT INTO FUNCTION s3(
'http://s3.gd2.qingstor.com/bucket-01/ck-cpu/cpu.csv',
'{access_key_id}',
'{secret_access_key}',
'CSV',
'表结构') SELECT * FROM cpu;" | curl 'http://<ClickHouse 用户名>:<ClickHouse 密码>@<高可用 IP>:8123/' --data-binary @-
```

## 从 S3 导入数据到 ClickHouse

基本语法示例如下。

```bash
$ echo "INSERT INTO ontime SELECT * FROM s3(
'http://s3.gd2.qingstor.com/bucket-01/ck-ontime/ontime.csv',
'{access_key_id}',
'{secret_access_key}',
'CSV',
'表结构');" | curl 'http://<ClickHouse 用户名>:<ClickHouse 密码>@<高可用 IP>:8123/' --data-binary @-
```
