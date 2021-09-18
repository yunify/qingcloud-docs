---
title: "Hint"
description: 本小节主要介绍 RadonDB 支持的 Hint 语法。 
keywords: radondb SQL 集,
weight: 50
collapsible: false
draft: false
---



在 Hint 语法上， RadonDB 与 MySQL 兼容。

## 流式读取

查询结果集比较大时，可通过流式读取方式获取数据。不支持复杂查询。

- 方式一：执行 `set @@SESSION.radon_streaming_fetch='ON'` 开启流式读取，查询语句执行完成后执行 `set @@SESSION.radon_streaming_fetch='OFF'` 关闭流式读取。

- 方式二：通过在查询语句中加 hint `/*+ streaming */` 的方式流式读取。

**示例**

```sql
mysql> select /*+ streaming */ * from t1;
Empty set (0.00 sec)
```

## 读写分离

配置参数 `load-balance` 为 1 时，默认查询会从存储节点的高可用读 IP 获取数据，可能因从节点延时而无法获取实时数据。

支持通过加 hint `/*+ loadbalance=0 */` 方式强制从存储节点高可用写 IP 查询数据；
若为 `/*+ loadbalance=1 */` 则强制从高可用读 IP 查询。

**示例**

```sql
mysql> select /*+ loadbalance=0 */ * from t1;
Empty set (0.00 sec)

mysql> select /*+ loadbalance=1 */ * from t1;
Empty set (0.00 sec)
```
