---
title: "ChronusDB 使用示例"
description: 本小节主要介绍 QingCloud ChronuDB 创建数据库、创建表、查询数据、删除表等。 
keywords: chronusdb 创建数据库,创建表,删除表,查询表 
weight: 10
collapsible: false
draft: false
---

作为分布式时序数据库，ChronusDB 在建立表的时候，通过指定不同的表引擎，实现**数据副本**和**分布式存储**功能。

|ChronusDB 功能|表引擎|
|:--:|:--:|
|无数据副本|MergeTree|
|多数据副本|ReplicatedMergeTree|
|分布式存储|Disdtributed|

使用 ChronusDB 的分布式存储数据能力，需要使用 `Distributed` + `MergeTree`/`ReplicateMergeTree` 引擎。数据分布方式分为以下两类。

* 逻辑一致：数据内容完全一致，数据存储格式不完全一致。
* 物理一致：数据内容完全一致，数据存储格式完全一致。

## 数据逻辑一致分布式

逻辑一致需要 `MergeTree` + `Distributed` 引擎配合完成。

### 创建数据库

```bash
$ echo 'CREATE DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 创建本地表

创建 MergeTree 引擎的本地表。

```bash
$ echo 'CREATE TABLE test.t_local
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
) ENGINE MergeTree() PARTITION BY toYYYYMM(EventDate) ORDER BY (CounterID, EventDate) ' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 创建分布式表

创建逻辑一致分布式表。

```bash
$ echo "CREATE TABLE test.t_logical_Distributed
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
)
ENGINE = Distributed(logical_consistency_cluster, test, t_local, CounterID)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 插入数据

向逻辑一致分布式表中插入数据。

```bash
$ echo "INSERT INTO test.t_logical_Distributed VALUES ('2019-01-16 00:00:00', 1, 1),('2019-02-10 00:00:00',2, 2),('2019-03-10 00:00:00',3, 3)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-

$ echo "'2019-04-10 00:00:00', 4, 4), ('2019-05-10 00:00:00', 5, 5)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_logical_Distributed+VALUES(' --data-binary @-

$ echo "('2019-06-10 00:00:00', 6, 6)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_logical_Distributed+VALUES' --data-binary @-
```

### 读取数据

读取逻辑一致分布式表中数据。

```bash
$ curl 'http://default:ck123@139.198.190.141:8123/?query=SELECT+*+FROM+test.t_logical_Distributed'
2019-05-10 00:00:00	5	5
2019-01-16 00:00:00	1	1
2019-03-10 00:00:00	3	3
2019-06-10 00:00:00	6	6
2019-04-10 00:00:00	4	4
2019-02-10 00:00:00	2	2
```

### HTTP 查询

支持 HTTP 请求中含有带参数的查询。

```bash
$ curl -sS "http://default:ck123@139.198.190.141:8123/?param_id=2" -d "SELECT * FROM test.t_logical_Distributed WHERE UserID = {id:UInt8}"
2019-02-10 00:00:00	2	2
```

### 删除分布式表

删除逻辑一致分布式表。

```bash
$ echo 'DROP TABLE test.t_logical_Distributed' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 删除本地表

```bash
$ echo 'DROP TABLE test.t_local' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 删除数据库

```bash
$ echo 'DROP DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```
## 数据物理一致分布式

物理一致需要 `ReplicatedMergeTree` + `Distributed` 引擎配合完成。

### 创建数据库

```bash
$ echo 'CREATE DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 创建本地表

创建 ReplicatedMergeTree 引擎的本地表。

```bash
$ echo "CREATE TABLE test.t_local
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
)
ENGINE = ReplicatedMergeTree('{namespace}/test/t_local', '{replica}')
PARTITION BY toYYYYMM(EventDate)
ORDER BY (CounterID, EventDate, intHash32(UserID))
SAMPLE BY intHash32(UserID)" | curl 'http://default:ck123@139.198.190.141:8123' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 创建分布式表

创建物理一致分布式表。

```bash
$ echo "CREATE TABLE test.t_physical_Distributed
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
)
ENGINE = Distributed(physical_consistency_cluster, test, t_local, CounterID)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 插入数据

向物理一致分布式表中插入数据。

```bash
$ echo "INSERT INTO test.t_physical_Distributed VALUES ('2019-01-16 00:00:00', 1, 1),('2019-02-10 00:00:00',2, 2),('2019-03-10 00:00:00',3, 3)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-

$ echo "'2019-04-10 00:00:00', 4, 4), ('2019-05-10 00:00:00', 5, 5)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_physical_Distributed+VALUES(' --data-binary @-

$ echo "('2019-06-10 00:00:00', 6, 6)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_physical_Distributed+VALUES' --data-binary @-
```

### 读取数据

读取物理一致分布式表中数据。

```bash
$ curl 'http://default:ck123@139.198.190.141:8123/?query=SELECT+*+FROM+test.t_physical_Distributed'
2019-05-10 00:00:00	5	5
2019-01-16 00:00:00	1	1
2019-03-10 00:00:00	3	3
2019-06-10 00:00:00	6	6
2019-04-10 00:00:00	4	4
2019-02-10 00:00:00	2	2
```

### HTTP 查询

支持 HTTP 请求中含有带参数的查询

```bash
$ curl -sS "http://default:ck123@139.198.190.141:8123/?param_id=2" -d "SELECT * FROM test.t_physical_Distributed WHERE UserID = {id:UInt8}"
2019-02-10 00:00:00	2	2
```

### 删除分布式表

删除物理一致分布式表。

```bash
$ echo 'DROP TABLE test.t_physical_Distributed' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 删除本地表

```bash
$ echo 'DROP TABLE test.t_local' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```

### 删除数据库

```bash
$ echo 'DROP DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0
```
