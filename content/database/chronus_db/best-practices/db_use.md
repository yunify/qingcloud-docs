---
title: "ChronusDB 使用方法"
description: Test description
weight: 3
---

作为分布式时序数据库，ChronusDB 支持：

> * 数据副本功能。
> * 分布式存储功能。

如果希望使用这些功能，需要在建立表的时候指定不同的表引擎。

|ChronusDB 功能|表引擎|
|:--:|--:|
|无数据副本|MergeTree|
|多数据副本|ReplicatedMergeTree|
|分布式存储|Disdtributed|

## ChronusDB 使用示例
如果希望使用 ChronusDB 的分布式存储数据能力，需要使用 `Distributed` + `MergeTree`/`ReplicateMergeTree` 引擎。数据分布方式分为两类：

* 逻辑一致：数据内容完全一致，数据存储格式不完全一致。
* 物理一致：数据内容完全一致，数据存储格式完全一致

逻辑一致需要 `MergeTree` + `Distributed` 引擎配合完成。逻辑一致分布式功能使用示例如下：

```bash
# 创建数据库
$ echo 'CREATE DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 创建 MergeTree 引擎的本地表
$ echo 'CREATE TABLE test.t_local
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
) ENGINE MergeTree() PARTITION BY toYYYYMM(EventDate) ORDER BY (CounterID, EventDate) ' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 创建逻辑一致分布式表
$ echo "CREATE TABLE test.t_logical_Distributed
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
)
ENGINE = Distributed(logical_consistency_cluster, test, t_local, CounterID)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 向逻辑一致分布式表中插入数据
$ echo "INSERT INTO test.t_logical_Distributed VALUES ('2019-01-16 00:00:00', 1, 1),('2019-02-10 00:00:00',2, 2),('2019-03-10 00:00:00',3, 3)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-

$ echo "'2019-04-10 00:00:00', 4, 4), ('2019-05-10 00:00:00', 5, 5)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_logical_Distributed+VALUES(' --data-binary @-

$ echo "('2019-06-10 00:00:00', 6, 6)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_logical_Distributed+VALUES' --data-binary @-

# 读取逻辑一致分布式表中数据
$ curl 'http://default:ck123@139.198.190.141:8123/?query=SELECT+*+FROM+test.t_logical_Distributed'
2019-05-10 00:00:00	5	5
2019-01-16 00:00:00	1	1
2019-03-10 00:00:00	3	3
2019-06-10 00:00:00	6	6
2019-04-10 00:00:00	4	4
2019-02-10 00:00:00	2	2

# 支持 HTTP 请求中含有带参数的查询
$ curl -sS "http://default:ck123@139.198.190.141:8123/?param_id=2" -d "SELECT * FROM test.t_logical_Distributed WHERE UserID = {id:UInt8}"
2019-02-10 00:00:00	2	2

# 删除逻辑一致分布式表
$ echo 'DROP TABLE test.t_logical_Distributed' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 删除本地表
$ echo 'DROP TABLE test.t_local' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 删除数据库
echo 'DROP DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

```

物理一致需要 `ReplicatedMergeTree` + `Distributed` 引擎配合完成。物理一致分布式功能使用示例如下：

```bash
# 创建数据库
$ echo 'CREATE DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 创建 ReplicatedMergeTree 引擎的本地表
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

# 创建物理一致分布式表
$ echo "CREATE TABLE test.t_physical_Distributed
(
    EventDate DateTime,
    CounterID UInt32,
    UserID UInt32
)
ENGINE = Distributed(physical_consistency_cluster, test, t_local, CounterID)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 向物理一致分布式表中插入数据
$ echo "INSERT INTO test.t_physical_Distributed VALUES ('2019-01-16 00:00:00', 1, 1),('2019-02-10 00:00:00',2, 2),('2019-03-10 00:00:00',3, 3)" | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-

$ echo "'2019-04-10 00:00:00', 4, 4), ('2019-05-10 00:00:00', 5, 5)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_physical_Distributed+VALUES(' --data-binary @-

$ echo "('2019-06-10 00:00:00', 6, 6)" | curl 'http://default:ck123@139.198.190.141:8123/?query=INSERT+INTO+test.t_physical_Distributed+VALUES' --data-binary @-

# 读取物理一致分布式表中数据
$ curl 'http://default:ck123@139.198.190.141:8123/?query=SELECT+*+FROM+test.t_physical_Distributed'
2019-05-10 00:00:00	5	5
2019-01-16 00:00:00	1	1
2019-03-10 00:00:00	3	3
2019-06-10 00:00:00	6	6
2019-04-10 00:00:00	4	4
2019-02-10 00:00:00	2	2

# 支持 HTTP 请求中含有带参数的查询
$ curl -sS "http://default:ck123@139.198.190.141:8123/?param_id=2" -d "SELECT * FROM test.t_physical_Distributed WHERE UserID = {id:UInt8}"
2019-02-10 00:00:00	2	2

# 删除物理一致分布式表
$ echo 'DROP TABLE test.t_physical_Distributed' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 删除本地表
$ echo 'DROP TABLE test.t_local' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

# 删除数据库
echo 'DROP DATABASE test' | curl 'http://default:ck123@139.198.190.141:8123/' --data-binary @-
192.168.0.35	9090	0		0	0

```
