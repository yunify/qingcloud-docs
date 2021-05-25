---
title: "基准测试"
description: 本小节主要介绍 QingCloud MongoDB 基准测试。 
keywords: mongodb 基准测试, 
data: 2021-05-14T00:38:25+09:00
weight: 90
collapsible: false
draft: false
---

通过 [Yahoo! Cloud Serving Benchmark](https://github.com/brianfrankcooper/YCSB/tree/master/mongodb) 工具套件进行基准测试，本小节主要以下提供不同硬盘配置的测试结果，仅供参考。

> - YCSB 不支持用户名密码登录，以下基准测试示例，为在关闭认证后测试结果。由于安全原因，MongoDB 认证默认禁止关闭，建议在实际性能评估时以模拟正式场景为准。
> - 对 8核16G 和 16核32G 通过同时运行两个 YCSB 实例进行基准测试。两个 YCSB 实例实际上并不能压满 MongoDB 的性能，OPS 测试值仅供参考。

## 1核2G 100G 超高性能型硬盘

```shell
./bin/ycsb load mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 193602.0
[OVERALL], Throughput(ops/sec), 5165.2358963233855
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 254871.0
[OVERALL], Throughput(ops/sec), 3923.553483919316
```

## 2核4G 100G 超高性能型硬盘

```shell
./bin/ycsb load mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 73817.0
[OVERALL], Throughput(ops/sec), 13547.014915263422
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 122344.0
[OVERALL], Throughput(ops/sec), 8173.674230039887
```

## 4核8G 100G 超高性能型硬盘

```shell
./bin/ycsb load mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 40768.0
[OVERALL], Throughput(ops/sec), 24529.042386185243
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 47416.0
[OVERALL], Throughput(ops/sec), 21089.92745064957
```

## 8核16G 100G 超高性能型硬盘

```shell
./bin/ycsb load mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 35088.0
[OVERALL], Throughput(ops/sec), 28499.772001823985
```

```shell
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 50013.0
[OVERALL], Throughput(ops/sec), 19994.80135164857
```

```shell
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 51555.0
[OVERALL], Throughput(ops/sec), 19396.76074095626
```

## 16核32G 100G 超高性能型硬盘

```shell
./bin/ycsb load mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 33882.0
[OVERALL], Throughput(ops/sec), 29514.196328433976
```

```shell
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 37720.0
[OVERALL], Throughput(ops/sec), 26511.134676564157
```

```shell
./bin/ycsb run mongodb-async -s -P workloads/workloada -p operationcount=1000000 -p recordcount=1000000 -threads 100 -p mongodb.url="mongodb://192.168.100.26/ycsb"
[OVERALL], RunTime(ms), 38600.0
[OVERALL], Throughput(ops/sec), 25906.73575129534
```