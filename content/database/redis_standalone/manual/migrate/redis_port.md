---
title: "redis-port 工具方式"
description: 本小节主要介绍如何使用 redis-port 工具迁移数据。 
keyword: 数据迁移,redis-port,Redis,Redis Standalone,数据库
weight: 15
draft: false
---


[redis-port](https://github.com/CodisLabs/redis-port) 是一款开源的数据批量传输工具，主要用于 Redis 节点间的数据库同步。

- dump：生成缓存快照，将缓存数据导出为 RDB 文件。
- decode：解析 RDB 文件，查看数据分布情况。
- restore：将 RDB 文件恢复（导入）。
- sync：将数据同步。

本小节主要介绍如何使用 redis-port 工具迁移数据。

## 约束限制

- 由于 redis-port 暂不仅支持 RDB Version 9。故 redis-port 仅适用于 Redis 4.x 及以前版本 **源集群** 的数据迁移。

## 前提条件

- Redis Standalone 集群状态为**活跃**。
- 已获取远端 Redis 数据库信息。
- 已创建用于安装 redis-port 工具的服务器。

> **注意**
> 
> 安装 redis-port 的服务器与 Redis之间的网络需保持通畅。
> 
> 若安装 redis-port 的服务器与 Redis 之间网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Redis 关键信息暴露等风险。

## 安装 redis-port

下载并解压 [redis_port](https://github.com/CodisLabs/redis-port/releases) 工具，可直接使用，无需编译。

```shell
wget https://github.com/CodisLabs/redis-port/releases/download/v2.0-beta/redis-port-v2.0-beta-go1.10.1-linux.tar.gz
tar -xvf redis-port-v2.0-beta-go1.10.1-linux.tar.gz
```

## 方式一：同步数据

执行如下命令，将源 Redis 的数据迁移至 Redis Standalone。

```shell
./redis-sync -m <password>@<源 Redis 地址:端口号> -t <目标 Redis 地址:6379>
```

其中：

- `目标 Redis 地址`为 Redis Standalone 集群任意节点 IP。
- `password` 为集群用户密码。

迁移提示完成100%，即可终止程序。

```shell
$ ~/redis-port/redis-port-v2.0-beta-go1.10.1-linux # 
$ ./redis-sync -m 172.22.4.7:6379-t 172.22.4.16:6379
2022/01/13 11:54:52 sync.go:76: [INFO] sync: master = "172.22.4.7:6379", target = "172.22.4.16:6379"
2022/01/13 11:54:52 sync.go:103: [INFO] +
2022/01/13 11:54:53 sync.go:105: [INFO] -
2022/01/13 11:54:53 sync.go:103: [INFO] +
2022/01/13 11:54:54 sync.go:109: [INFO] sync: runid = "628f499fa08c5575a36e96e360ba9785df907fba", offset = 167408
2022/01/13 11:54:54 sync.go:110: [INFO] sync: rdb file = 44980187 (42.90mb)
2022/01/13 11:54:54 sync.go:208: [INFO] sync: (r/f,s/f,s) = (read,rdb.forward,rdb.skip/rdb.forward,rdb.skip)
2022/01/13 11:54:55 sync.go:250: [INFO] sync: rdb = 44980187 - [ 28.66%]   (r/f,s/f,s)=(4525564/101216,0/0,0)    ~  (4.32mb/-,-/-,-)  ~  speed=(4.32mb/101216,0/0,0)
2022/01/13 11:54:56 sync.go:250: [INFO] sync: rdb = 44980187 - [ 39.44%]   (r/f,s/f,s)=(9375228/212349,0/0,0)    ~  (8.94mb/-,-/-,-)  ~  speed=(4.62mb/111133,0/0,0)
2022/01/13 11:54:57 sync.go:250: [INFO] sync: rdb = 44980187 - [ 49.64%]   (r/f,s/f,s)=(13962748/317799,0/0,0)   ~  (13.32mb/-,-/-,-)     ~  speed=(4.38mb/105450,0/0,0)
2022/01/13 11:54:58 sync.go:250: [INFO] sync: rdb = 44980187 - [ 61.01%]   (r/f,s/f,s)=(19074556/431463,0/0,0)   ~  (18.19mb/-,-/-,-)     ~  speed=(4.88mb/113664,0/0,0)
2022/01/13 11:54:59 sync.go:250: [INFO] sync: rdb = 44980187 - [ 73.24%]   (r/f,s/f,s)=(24579580/557670,0/0,0)   ~  (23.44mb/-,-/-,-)     ~  speed=(5.25mb/126207,0/0,0)
2022/01/13 11:55:00 sync.go:250: [INFO] sync: rdb = 44980187 - [ 81.99%]   (r/f,s/f,s)=(28511740/648490,0/0,0)   ~  (27.19mb/-,-/-,-)     ~  speed=(3.75mb/90820,0/0,0)
2022/01/13 11:55:01 sync.go:250: [INFO] sync: rdb = 44980187 - [ 92.77%]   (r/f,s/f,s)=(33361404/757012,0/0,0)   ~  (31.82mb/-,-/-,-)     ~  speed=(4.62mb/108522,0/0,0)
2022/01/13 11:55:02 sync.go:250: [INFO] sync: rdb = 44980187 - [100.00%]   (r/f,s/f,s)=(38079996/864711,0/0,0)   ~  (36.32mb/-,-/-,-)     ~  speed=(4.50mb/107699,0/0,0)
2022/01/13 11:55:03 sync.go:250: [INFO] sync: rdb = 44980187 - [100.00%]   (r/f,s/f,s)=(42929660/976820,0/0,0)   ~  (40.94mb/-,-/-,-)     ~  speed=(4.62mb/112109,0/0,0)
```

## 方式二：RDB 文件恢复数据

> **注意**
> 
> - **从 RDB 文件恢复数据**前，请先手动备份目标集群数据，因为从 RDB 文件恢复数据会覆盖目标集群的数据，且不可恢复。  
> - 目标集群的内存配置需要跟源集群一致或者更大，否则容易造成数据丢失。  
> - 当恢复的数据量较大时，恢复的时间可能会较长，请耐心等待。数据恢复期间禁止一切操作，防止干扰数据加载。  

### 导出源集群 RDB 文件

> **注意**
> 
> 导出 RDB 文件前，请确保数据已全部写入 RDB 文件。

执行如下命令，导出源 Redis 集群 RDB 文件。

```shell
./redis-dump -n 3 -m <password>@<源 Redis 地址:端口号> -o <xxx-file.rdb>
```

其中：

- 参数 `-n` 表示允许多个 CPU 并行处理数据导入。

### 上传 RDB 文件至目标集群

执行如下命令，导入 RDB 文件至目标集群，并恢复数据。

```shell
./redis-restore -n <N> -i <xxx-file.rdb> -t <password>@<目标 Redis 地址:6379> [--unixtime-in-milliseconds="yyyy-MM-dd hh:mm:ss"] [--db={DB_number}]
```

其中：

- 参数 `db` 表示可以单独导入文件中的指定 DB 编号里的缓存数据。
- 参数 `-n` 表示允许多个 CPU 并行处理数据导入。

### 数据验证

命令执行完成后，访问目标集群 Redis，执行 info 命令，校验数据是否成功导入。
