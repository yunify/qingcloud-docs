---
title: "HBase PE 测试"
description: 本小节主要介绍 HBase PE 使用指南。 
keywords: HBase pe,
weight: 20
collapsible: false
draft: false
---


 
通过 HBase 自带的性能测试工具 PerformanceEvaluation 来测试 HBase 集群的随机写、顺序写、increment、append、随机读、顺序读、scan等操作的性能情况。测试过程中需要先写后读保证测试表中有数据。

测试结果中会有每个线程操作的耗时。

## 操作命令

- 测试随机写，预分区10个 region，使用多线程代替 MapReduce 的方式来并发随机写操作，10个线程，每个线程写10000行。

```shell
  cd /opt/hbase
  bin/hbase pe --nomapred --rows=10000 --presplit=10 randomWrite 10
```

- 测试顺序写，预分区10个 region，使用多线程代替 MapReduce 的方式来并发顺序写操作，10个线程，每个线程写10000行。
  
```shell
  cd /opt/hbase
  bin/hbase pe --nomapred --rows=10000 --presplit=10 sequentialWrite 10
```

- 测试基于 row 的自增操作，使用多线程代替 MapReduce 的方式来并发自增操作，10个线程，每个线程 increment 10000次。

```shell
  cd /opt/hbase
  bin/hbase pe --rows=10000 --nomapred increment 10
```

- 测试基于 row 的追加操作，使用多线程代替 MapReduce 的方式来并发追加操作，10个线程，每个线程 append 10000次。

```shell
  cd /opt/hbase
  bin/hbase pe --rows=10000 --nomapred append 10
```

- 测试随机读，使用多线程代替 MapReduce 的方式来并发随机读操作，10个线程，每个线程读10000行。

```shell
  cd /opt/hbase
  bin/hbase pe --nomapred --rows=10000 randomRead 10
```

- 测试顺序读，使用多线程代替 MapReduce 的方式来并发顺序读操作，10个线程，每个线程读10000行。

```shell
  cd /opt/hbase
  bin/hbase pe --nomapred --rows=10000 sequentialRead 10
```

- 测试范围 scan 操作，使用多线程代替 MapReduce 的方式来并发范围 scan 操作，10个线程，每个线程 scan 10000次，每次范围返回最大100行。。

```shell
  cd /opt/hbase
  bin/hbase pe --rows=10000 --nomapred scanRange100 10
```
