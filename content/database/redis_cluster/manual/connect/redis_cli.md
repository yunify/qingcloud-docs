---
title: "Redis-cli 连接"
description: 本小节介绍如何通过 redis-cli 连接 Redis 实例。 
keywords: 连接 redis cluster 实例，redis 部署
weight: 3
collapsible: false
draft: false
---

介绍如何通过 redis-cli 连接 Redis 实例。

## 背景信息

redis-cli 是原生 Redis 自带的命令行工具，您可以在云主机或本地设备上通过 redis-cli 连接 Redis 数据库，进行数据管理。

更多 redis-cli 客户端的使用方法，请参考[https://redis.io/clients](https://redis.io/clients)。

## 前提条件

- 已成功创建 Redis Cluster 实例，且服务状态为“**正常**”。
- 已创建云服务器，云服务器必须与 Redis Cluster 实例在同一个 VPC 网络。
- 如果云服务器为 Linux 系统，该云服务器必须已经安装 gcc 编译环境。
- 已获取 Redis Cluster 实例的连接地址。

## 操作步骤 (Linux 系统)

1. 安装 redis 客户端。

   1. 登录已创建好的云服务器。

   2. 执行以下命令，下载 Redis 客户端源码。

      ```shell
      wget http://download.redis.io/releases/redis-5.0.8.tar.gz
      ```

      > **说明**
      >
      > ▪︎ 请确保您的云服务器能够连接到公网。
      >
      > ▪︎ 本文以 `redis-5.0.8` 版本为例进行介绍，您也可以安装其他版本。具体版本信息，请参见 [Redis官网](https://redis.io/download?spm=a2c4g.11186623.2.14.60885347qNKDfG)。

   3. 执行以下命令，解压 Redis 客户端源码包。

      ```shell
      tar -xzf redis-5.0.8.tar.gz
      ```

   4. 执行以下命令，进入解压后的目录并编译 Redis 源码文件。

      ```bash
      cd redis-5.0.8
      make
      cd src
      ```

      > **注意**：
      >
      > 如果执行 `make` 编译时，报错“zmalloc.h:50:31: fatal error: jemalloc/jemalloc.h: No such file or directory”，请执行 `make MALLOC=libc`。

2. 连接 Redis Cluster 集群实例。

   ```shell
   ./redis-cli -h <redis_instance_address> -p <port> -c
   ```

   ▪︎ `<redis_instance_address>`：表示 Redis Cluster 实例的连接地址，请根据实际地址替换。

   ▪︎ `<port>`：表示 Redis Cluster 实例的端口号，默认为 6379。

   ▪︎ `-c`：连接集群节点时的必选参数。

   连接示例：

   ```
   ./redis-cli -h 192.168.*.* -p 6379 -c
   ```

3. 可选：如果 Redis Cluster 实例设置了访问密码，需要执行以下命令验证密码，校验通过后才可进行缓存数据读写。

   ```
   auth <password>
   ```

   或者 

   ```
   auth <user>:<password>
   ```

   ▪︎ `<user>`：表示账号。

   ▪︎ `<password>`：表示账号的密码。

   > **说明**
   >
   > 如果是使用默认账号，直接填写`<password>`即可。
   >
   > 如果是新创建的账号，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `auth test:redis@123`。
   >
   > 

   验证成功后，返回 **OK**。

   <img src="/database/redis_cluster/_images/redis_conet_ok.png" alt="ok" style="zoom:50%;" />

4. 查看集群节点信息。

   ```
   cluster nodes
   ```

   执行该命令可以查看该实例的所有节点信息，如下所示。

   <img src="/database/redis_cluster/_images/cluster_nodes.png" alt="nodes" style="zoom:50%;" />

## 操作步骤 (Windows 系统)

1. 下载并安装 Windows 版本的 Redis 客户端。

   1. 登录待安装 redis-cli 的 Windows 云服务器。

   2. 单击[这里](https://github.com/MicrosoftArchive/redis/tags)进行下载。

   3. 解压安装包。

   4. 使用 cmd 工具进入解压目录。

      ```shell
      cd /d <path>
      ```

      `<path>`：表示 Redis 客户端的解压目录，例如 `D:\Redis-x64-3.2.100`。

2. 执行以下命令连接 Redis Cluster 实例。

   ```
   redis-cli -h <redis_instance_address> -p <port> -c
   ```

   ▪︎ `<redis_instance_address>`：表示 Redis Cluster 实例的连接地址，请根据实际地址替换。

   ▪︎ `<port>`：表示 Redis Cluster 实例的端口号，默认为 6379。

   ▪︎ `-c`：连接集群节点时的必选参数。

   连接示例：

   ```
   ./redis-cli -h 192.168.*.* -p 6379 -c
   ```

3. 可选：如果Redis Cluster 实例设置了访问密码，需要执行以下命令验证密码，校验通过后才可进行缓存数据读写。

   ```
   auth <password>
   ```

   或者 

   ```
   auth <user>:<password>
   ```

   ▪︎ `<user>`：表示账号。

   ▪︎ `<password>`：表示账号的密码。

   > **说明**
   >
   > 如果是使用默认账号，直接填写`<password>`即可。
   >
   > 如果是新创建的账号，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `auth test:redis@123`。
   >
   > 

   验证成功后，返回 **OK**。

