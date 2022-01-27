---
title: "连接 Redis"
description: 本小节主要介绍连接 Redis 实例。 
keywords: 访问 redis 实例，redis 部署
description: 本小节主要介绍如何快速连接 Redis。 
keywords: 访问 Redis,连接 Redis,键值数据库
weight: 10
collapsible: false
draft: false
---

`redis-cli` 是原生 Redis 自带的命令行工具，通过 redis-cli 连接到 Redis 实例，进行数据管理。

Redis Standalone 支持多种连接方式，本小节将为您介绍如何使用 redis-cli 连接 Redis 实例。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为**活跃**。
- 已安装 redis-cli 工具，且安装 redis-cli 的服务器与 Redis 之前网络畅通。
  
## 步骤 1：获取连接信息

Redis Standalone 实例创建完成后，您可以在 Redis Standalone 的节点管理页面，查看到 Redis 节点的 IP 地址，此 IP 地址即为连接地址，连接任意一个主节点均可。

1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。
2. 在**节点实时角色**页签，获取 `master` 节点的 IP 地址。

   <img src="../../_images/node_role.png" alt="角色详情" style="zoom:50%;" />

3. 在**服务端口信息**模块，获取 Redis 服务端口或 TLS 端口。
   
   <img src="../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

## 步骤 2：访问 Redis

1. 参考[通过 redis-cli 方式连接 Redis](../../manual/mgt_connect/access_redis_cli)，编译 Redis 源码，并安装 redis-cli 工具。
2. 进入 `src` 目录，执行访问命令或操作命令。

    ```shell
   ./redis-cli -h <node_IP> -p <Port> -a <password> --tls --cert <cert_file_path> --key <key_file_path> --cacert <cacert_file_path>
   ```

   >**说明**
   >
   > 以上参数中，**\-\-tls**、**\-\-key**、**\-\-cert** 及 **\-\-cacert** 仅在需要启用 TLS 加密认证时填写。
   >
   > TLS 加密说明，请参见 [TLS 加密](../../manual/data_security/tls_config)。

### 命令参数说明

| <span style="display:inline-block;width:80px">参数</span> | 参数说明                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| -h                                                   | Redis Standalone 实例的节点 IP 地址。 |
| -p                                                   | Redis Standalone 实例的服务端口。数据库端口默认为 6379。若启用了 TLS，则为 TLS 端口，默认为 6479。 |
| -a                                                   | Redis Standalone 实例的用户帐号密码。无密码时可不填写。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>   如果是使用 **default** 账号，直接填写`<password>`即可。如果是新创建的账号，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `test:redis@123`。</div> |
| --tls                                             | 启用安全 TLS 连接。                                          |
| --cert                                          | 用于进行身份验证的客户端证书。                               |
| --key                                            | 用于进行身份验证的私钥文件。                                 |
| --cacert                                          | 用于验证的 CA 证书文件。   |

## 连接示例

- 查询主节点的角色。

   ```shell
   $ ./redis-cli -h 192.168.2.47 info replication
   # Replication
   role:master
   connected_slaves:2
   slave0:ip=192.168.2.47,port=6379,state=online,offset=436236,lag=1
   slave1:ip=192.168.2.46,port=6379,state=online,offset=436236,lag=1
   master_replid:9582e5f0afd04a972fc5c01014a4767bc1efb225
   master_replid2:0000000000000000000000000000000000000000
   master_repl_offset:436373
   second_repl_offset:-1
   repl_backlog_active:1
   repl_backlog_size:1048576
   repl_backlog_first_byte_offset:1
   repl_backlog_histlen:436373
   ```

- 插入一个 Key value 对。

   ```shell
   $ ./redis-cli -h <node_IP> set a b
    OK
   ```

- 获取 Key 的 value。

   ```shell
   $ ./redis-cli -h <node_IP> get a
   "b"
   ```
