---
title: "同城多活测试"
description: 本小节主要介绍 Redis Standalone 同城多活。 
keywords: redis standalone 同城多活,多可用区测试
data: 2021-05-14T00:38:25+09:00
weight: 90
collapsible: false
draft: false
---

同城多活测试，即同城多可用区测试。

## 测试方法

本次测试的集群版本为 _Redis Standalone v4.0.9_ ，下载对应的 [Redis 版本](http://download.redis.io/releases/redis-4.0.9.tar.gz) 解压，并编译安装，使用 `src` 目录下的 redis-benchmark 对 Redis Standalone 集群做测试。

`./redis-benchmark -h <目标节点ip> -n 200000 -c 100 -q`

因为 Redis 的读写操作均在主节点进行，所以本次的测试的「目标节点 IP 」为主节点 IP。

## 测试环境

|集群     | CPU  | 内存 |     区      | 主节点所在区 |
| :----------| :--| :--| :---------| :----------|
|    测试vm    |  2   |  4G  |    pek3b    |      无      |
| 单可用区集群 |  2   |  2G  |    pek3b    |    pek3b     |
| 多可用区集群 |  2   |  2G  | pek3b/3c/3d |    pek3d     |

## 测试结果

|命令| 单可用区QPS平均值 | 多可用区QPS平均值 | 比值  |
| :--------------------------------| :---------------| :---------------| :---|
|                INCR                |       42887       |       31806       | 1.35  |      |
| LPUSH (needed to benchmark LRANGE) |       43465       |       31602       | 1.38  |      |
|            PING_INLINE             |       43347       |       32143       | 1.35  |      |
|                SPOP                |       43167       |       32749       | 1.32  |      |
|                SET                 |       42888       |       31387       | 1.37  |      |
|             PING_BULK              |       42746       |       32543       | 1.31  |      |
|           MSET (10 keys)           |       36024       |       27601       | 1.31  |      |
|                GET                 |       43106       |       32560       | 1.32  |      |
|                RPOP                |       43370       |       31323       | 1.38  |      |
|                HSET                |       41941       |       30592       | 1.37  |      |
|                LPOP                |       42403       |       31475       | 1.35  |      |
|               RPUSH                |       43177       |       31293       | 1.38  |      |
|                SADD                |       43476       |       32611       | 1.33  |      |
|               LPUSH                |       43224       |       31373       | 1.38  |      |
|  LRANGE_100 (first 100 elements)   |       27299       |       24763       |  1.1  |      |
|  LRANGE_300 (first 300 elements)   |       13265       |       12879       | 1.03  |      |
|  LRANGE_500 (first 450 elements)   |       10316       |       10274       |   1   |      |
|  LRANGE_600 (first 600 elements)   |       8332        |       8458        | 0.99  |      |
|               ping值               |       0.25        |       2.85        | 11.61 |      |
