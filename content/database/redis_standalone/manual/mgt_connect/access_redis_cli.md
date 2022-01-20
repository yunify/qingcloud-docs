---
title: "连接 Redis （redis-cli 方式）"
description: 本小节主要介绍如何连接 Redis Standalone 数据库。 
keyword: 访问,访问数据库,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---



redis-cli 是原生 Redis 自带的命令行工具，您可以在云主机或本地设备上通过 redis-cli 连接 Redis 数据库，进行数据管理。

更多 redis-cli 客户端的使用方法，请参考[https://redis.io/clients](https://redis.io/clients)。

本小节主要介绍如何通过 redis-cli 连接 Redis 实例。

## 前提条件

- 已成功创建 Redis Standalone 实例，且服务状态为**活跃**。
- 已创建云服务器，云服务器必须与 Redis Standalone 实例在同一个 VPC 网络。
  
  若云服务器为 Linux 系统，该云服务器须已经安装 gcc 编译环境。

- 已获取 Redis Standalone 实例的连接地址。

## Linux 系统

1. 安装 Redis 客户端。

   1. 登录已创建好的云服务器。

   2. 执行以下命令，下载 Redis 客户端源码。

      ```shell
      wget http://download.redis.io/releases/redis-6.2.5.tar.gz
      ```

      > **说明**
      >
      > -请确保您的云服务器能够连接到公网。
      >
      > -以 `redis-6.2.5` 版本为例进行介绍，您也可以安装其他版本。更多版本，请参见 [Redis 版本](http://download.redis.io/releases/)。

   3. 执行以下命令，解压 Redis 客户端源码包。

      ```shell
      tar -xzf redis-6.2.5.tar.gz
      ```

   4. 执行以下命令，进入解压后的目录并编译 Redis 源码文件。

      ```bash
      cd redis-6.2.5
      make
      cd src
      ```

      > **注意**
      >
      > 如果执行 `make` 编译时，报错“zmalloc.h:50:31: fatal error: jemalloc/jemalloc.h: No such file or directory”，请执行 `make MALLOC=libc`。

2. 连接 Redis Standalone 集群实例。

   ```shell
   ./src/redis-cli -h <node_IP> -p <Port> --tls --cert <cert_file_path> --key <key_file_path> --cacert <cacert_file_path>
   ```

   - `-h` 表示 Redis Standalone 实例的连接地址，请根据实际地址替换。  
   - `-p` 表示 Redis Standalone 实例的端口号，默认为 6379。
   - `-tls`、`-key`、`-cert` 和 `-cacert` 表示开启 [TLS 加密认证](../../../manual/data_security/tls_config)后，需通过 TLS 方式登录。

   连接示例：

   ```shell
   ./src/redis-cli -h 192.168.*.* -p 6379
   ```

3. （可选） Redis Standalone 实例设置了访问密码，需要执行以下命令验证密码，校验通过后才可进行缓存数据读写。

   ```shell
   auth <password>
   ```

   或者

   ```shell
   auth <user>:<password>
   ```

   -`<user>` 表示账号。

   -`<password>` 表示账号的密码。

   > **说明**
   >
   > 如果是使用默认帐号（**default**），直接填写`<password>`即可。
   >
   > 如果是新创建的 [ACL 帐号](../../../manual/mgt_user/add_user)，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `auth test:redis@123`。

   验证成功后，返回 **OK**。

4. 执行 info 指令，查看实例的所有节点信息。

## Windows 系统

1. 下载并安装 Windows 版本的 Redis 客户端。

   1. 登录待安装 redis-cli 的 Windows 云服务器。

   2. 单击[这里](https://github.com/MicrosoftArchive/redis/tags)进行下载。

   3. 解压安装包。

   4. 使用 cmd 工具进入解压目录。

      ```shell
      cd /d <path>
      ```

      `<path>` 表示 Redis 客户端的解压目录，例如 `D:\Redis-x64-3.2.100`。

2. 执行以下命令连接 Redis Standalone 实例。

   ```shell
   ./src/redis-cli -h <node_IP> -p <port>--tls --cert <cert_file_path> --key <key_file_path> --cacert <cacert_file_path>
   ```

   - `-h` 表示 Redis Standalone 实例的连接地址，请根据实际地址替换。  
   - `-p` 表示 Redis Standalone 实例的端口号，默认为 6379。
   - `-tls`、`-key`、`-cert` 和 `-cacert` 表示开启 [TLS 加密认证](../../../manual/data_security/tls_config)后，需通过 TLS 方式登录。

   连接示例：

   ```shell
   ./src/redis-cli -h 192.168.*.* -p 6379
   ```

3. （可选）若 Redis Standalone 实例设置了访问密码，需要执行以下命令验证密码，校验通过后才可进行缓存数据读写。

   ```shell
   auth <password>
   ```

   或者 

   ```shell
   auth <user>:<password>
   ```

   -`<user>` 表示账号。

   -`<password>` 表示账号的密码。

   > **说明**
   >
   > 如果是使用默认帐号（**default**），直接填写`<password>`即可。
   >
   > 如果是新创建的 [ACL 帐号](../../../manual/mgt_user/add_user)，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `auth test:redis@123`。

   验证成功后，返回 **OK**。
