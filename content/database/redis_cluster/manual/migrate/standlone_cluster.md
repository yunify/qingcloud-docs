---
title: "Redis Standlone 迁移到 Redis Cluster"
weight: 2
draft: false
keywords: QingCloud，Redis Cluster，数据库，redis 迁移
---

 Redis 提供了从 Redis Standalone (包括 2.8.17 版本) 迁移数据到 Redis Cluster　的工具 `redis-trib.rb`。

- [Redis 4.x](http://download.redis.io/releases/redis-4.0.6.tar.gz) 

- [Redis 5.x](http://download.redis.io/releases/redis-5.0.3.tar.gz) 

  > 在 Redis 5.x 包执行 shell 命令时需添加 `--copy` 或者 `--cluster-copy` 参数，否则会导致仅迁移数据而不是复制数据。


1. 下载 Redis 包。

2. 解压 Redis 4.x 包。

3. 在 Redis `src` 目录， 执行以下命令:　

   **Redis 4.x**

   ```shell
   ./redis-trib.rb import --from 192.168.100.11:6379　192.168.100.20:6379 --copy
   ```

   **Redis 5.x**

   ```shell
   ./redis-cli --cluster import 192.168.100.20:6379 --cluster-from 192.168.100.11:6379 --cluster-copy
   ```

   其中： Redis Standalone 的主节点 IP 为 192.168.100.11，端口为 6379。Redis Cluster 其中一个节点的 IP 为 192.168.100.20，端口为 6379。

##

