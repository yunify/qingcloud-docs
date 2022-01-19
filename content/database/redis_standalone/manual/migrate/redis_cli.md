---
title: "redis-cli 工具方式"
description: 本小节主要介绍如何使用 redis-cli 工具迁移数据。 
keyword: 数据迁移,redis-cli 工具,Redis Standalone,数据库
weight: 10
draft: true
---


[redis-cli](https://redis.io/topics/rediscli) 是 Redis 自带的一个命令行工具，安装 Redis 后即可直接使用 redis-cli 工具。

redis-cli 提供了 RDB 文件导出功能，可以尝试通过 redis-cli 获取 RDB 文件。再通过 redis-port 工具将数据导入到目标 Redis 集群中。

## 约束限制

- 源 Redis 集群必须支持 `SYNC` 命令，因为使用 redis-cli 导出数据依赖 `SYNC` 命令。

## 前提条件

- Redis Standalone 集群状态为**活跃**。
- 已获取远端 Redis 数据库信息。
- 已创建用于安装 redis-cli 工具的服务器。

> **注意**
> 
> 安装 redis-cli 的服务器与 Redis之间的网络需保持通畅。
> 
> 若安装 redis-port 的服务器与 Redis 之间网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Redis 关键信息暴露等风险。

## 安装 redis-cli

1. 下载 Redis 包。

   ```shell
   wget http://download.redis.io/releases/redis-6.2.5.tar.gz
   ```

   - [Redis 5.0.11](http://download.redis.io/releases/redis-5.0.11.tar.gz) 

   - [Redis 6.2.5](http://download.redis.io/releases/redis-6.2.5.tar.gz) 

2. 解压 Redis 包。

    ```shell
    tar -xzf redis-6.2.5.tar.gz
    ```

3. 执行以下命令，进入解压后的目录并编译 Redis 源码文件。

      ```bash
      cd redis-6.2.5
      make
      cd src
      ```

## RDB 文件恢复数据

> **注意**
> 
> - **从 RDB 文件恢复数据**前，请先手动备份目标集群数据，因为从 RDB 文件恢复数据会完全删除目标集群的所有数据，且不可恢复。
> 
> - 为方便迁移，**从 RDB 文件恢复数据**仅适用于单节点目标集群，多节点集群不适用。
> 
> - 目标集群的内存配置需要跟源集群一致或者更大，否则容易造成数据丢失。
> 
> - 当恢复的数据量较大时，恢复的时间可能会较长，请耐心等待。数据恢复期间禁止一切操作，防止干扰数据加载。

### 导出源集群 RDB 文件

> **注意**
> 
> 导出 RDB 文前，请确保数据已全部写入 RDB 文件。

执行如下命令，导出源 Redis 集群 RDB 文件。

```shell
rredis-cli -h <源 Redis 地址> -p <源 Redis 端口号> -a <password> --rdb <xxx-file.rdb>
```

其中：

- `password` 为源 Redis 数据库用户帐号密码。

### 上传 RDB 文件至目标集群

> **注意**
> 
> 为提升传输速率，建议将 RDB 文件压缩后再上传。

借助 redis-port工具，执行如下命令，导入 RDB 文件至目标集群，并恢复数据。

```shell
redis-restore -n <N> -i <xxx-file.rdb> -t <password>@<目标 Redis 地址:6379> [--unixtime-in-milliseconds="yyyy-MM-dd hh:mm:ss"] [--db={DB_number}]
```

其中：

- 参数 `db` 表示可以单独导入文件中的指定 DB 编号里的缓存数据。
- 参数 `-n` 表示允许多个 CPU 并行处理数据导入。

### 数据验证

命令执行完成后，访问目标集群 Redis，执行 info 命令，校验数据是否成功导入。
