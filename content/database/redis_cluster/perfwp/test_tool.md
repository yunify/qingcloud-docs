---
title: "测试工具"
description: 本小节主要介绍 Redis 性能测试工具。 
weight: 3
collapsible: false
draft: false
keywords: redis cluster, 性能测试, 测试工具
---

## 工具介绍

本次测试使用 [redis-benchmark](https://redis.io/topics/benchmarks?spm=a2c4g.11186623.2.2.7e26e6b7WH9gPU) 进行 Redis Cluster 性能测试。

 redis-benchmark 是 Redis 官方的性能测试工具，可以模拟 N 个客户端同时向 Redis 发送 M 条查询命令的应用场景。 redis-benchmark 工具可通过 Redis 客户端源码获取。

本文测试使用 Redis 6.2.5 的代码进行编译，详情请参见 [Redis 开源项目](https://github.com/redis/redis/releases/)。

>**说明**
>
>为确保支持 redis-benchmark 工具的 **--threads** 及 **TLS** 连接相关参数，自测时请选择 6.0 及以上的Redis版本进行编译。
>



## 下载和安装工具

1. 下载 redis 客户端源码包。

   ```
   wget https://download.redis.io/releases/redis-6.2.5.tar.gz
   ```

2. 解压客户端压缩包。

   ```
   tar xzf redis-6.2.5.tar.gz
   ```

3. 编译源码。

   ```
   cd redis-6.2.5/src
   make BUILD_TLS=yes
   ```

4. 安装工具。

   ```
   make install
   ```

   

