---
title: "TLS 加密"
description: 本小节主要介绍如何为 Redis 配置 TLS 加密。
keyword: redis-cli,TLS 加密,传输加密,CA 证书,键值数据库,Redis,Redis Standalone,数据库
weight: 05
collapsible: false
draft: false
---


Redis 传输协议 RESP 在 Redis 6.0 及以上版本支持 TLS 传输加密，之前版本仅支持明文传输。TLS 加密具备以下特点：

- 传输数据加密 (message privacy)：encryption 实现加密, 所有信息都加密传输，第三方无法嗅探。
- 保证数据完整性 (message integrity)：通过 MAC 校验机制，一旦被篡改，通信双方会立刻发现。
- 身份认证 (mutual authentication)：客户端与服务端方都要配备同一组 CA 证书，防止身份被冒充。

Redis Standalone 支持客户端和服务端 TLS 加密传输。通过配置 TLS 加密，客户端在连接 Redis 时，通过验证 CA 证书对服务端进行认证，达到加密传输的目的。

- TLS 加密是可选服务。
- 创建 Redis Standalone 集群后，需先通过下载 Redis 6.0.0 以上版本源码包，并在 redis-cli 客户端启动 TLS 和创建 CA 服务证书；再通过配置集群 TLS 参数，指定服务端 TLS 端口、CA 证书等信息。

本小节主要介绍如何配置和验证 TLS 加密。

## 约束限制

- I/O 多线程集群不支持 TLS 加密。
- 仅 Redis 6.* 及以上版本，支持 TLS 加密。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为`活跃`。
- 已在服务器安装 redis-cli 客户端，且服务器与 Redis 之间网络通常。

## 步骤 1：在客户端启用 TLS

为建立 Redis 客户端与服务端的传输加密，需在 redis-cli 客户端启动 TLS 加密。

1. 下载 Redis 源码。

   ```shell
   wget https://download.redis.io/releases/redis-6.2.5.tar.gz
   ```

2. 解压源码包。

   ```shell
   tar xf redis-6.2.5.tar.gz
   ```

3. 进入解压目录。

   ```shell
   cd redis-6.2.5/
   ```

4. 安装依赖包。

   ```shell
   $ apt-get update
   $ apt install make gcc libssl-dev libsystemd-dev tcl tcl-tls
   ```

5. 编译并启用 TLS。

   ```shell
   make BUILD_TLS=yes
   ```

   > **说明**
   > 
   > 执行 `gen-test-certs.sh` 脚本，可修改 TLS 相关参数。

## 步骤 2：在客户端创建证书

为了支持 TLS，Redis 必须配置 X.509 证书和私钥，并需通过配置证书建立客户端与服务端的通讯信任。您需先在 redis-cli 客户端创建 CA 证书，并获取 CA 证书信息。

1. 创建证书。

   ```shell
   ./utils/gen-test-certs.sh
   ```

2. 查看证书文件。

   ```shell
   $ ls ./tests/tls/
   ```

   可以看到生成以下文件。

   ```shell
   ca.crt ca.key ca.txt client.crt client.key openssl.cnf redis.crt redis.dh redis.key server.crt server.key
   ```

3. 获取证书信息。

   -**获取 TLS-Cert 项**

   ```shell
   cat ./tests/tls/redis.crt
   ```

   -**获取 TLS-Key 项**

   ```shell
   cat ./tests/tls/redis.key
   ```

   -**获取 TLS-CA-Cert 项**

   ```shell
   cat ./tests/tls/ca.crt
   ```

   -**获取 TLS-DH-Params 项**

   ```shell
   cat ./tests/tls/redis.dh
   ```

## 步骤 3：修改 TLS 配置参数

获取客户端证书信息后，为正常使用 TLS，您还需要在控制台的**参数配置**页面，配置服务端 TLS 相关参数。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 点击**修改属性**，公共参数**值**进入可编辑状态。
6. 找到 TLS 相关参数，并配置为相应参数值。
   
   参考 [TLS 参数说明](#tls-参数说明)取值范围和描述，修改参数值。

   ![ TLS 配置参数](../../../_images/tls_para.png)

7. 确认参数信息无误后，点击**保存**。

   待集群状态切换为`活跃`，即配置完成。
 
### TlS 参数说明

| 参数       | 参数说明                                                     | 示例                       |
| ------------- | ------------------------------------------------------------ | ----------------------------- |
| 端口          | 明文端口。<br>- 不能与 **TLS-Port**、**Sentinel.TLS-Port** 取同一参数值。<br>- 开启 **TLS-Port** 时，建议设置为`0`。<br>- `0`表示关闭明文端。                            | 0                             |
| TLS-Port      | TLS 加密端口。<br>- 不能与**端口**、**Sentinel.TLS-Port** 取同一参数值。<br>- 不能设置为 80，80端口为 WebConsole 服务占用。                                               | 6379                          |
| Sentinel.TLS-Port   |  Redis 哨兵加密端口。<br>- 不能与**端口**、**TLS-Port** 取同一参数值。<br>- 取值 `0` 表示关闭加密端口。 | 8888                          |
| TLS-Cert      | 证书。 <br>- 配置为 `redis.crt` 文件中的内容 。| - |
| TLS-Key       | 私钥 。 <br>- 配置为 `redis.key` 文件中的内容 。    | - |
| TLS-CA-Cert   | CA 证书。 <br>- 配置为 `ca.crt` 文件中的内容 。        | -  |
| TLS-DH-Params | 密匙交换参数。 <br>- 配置为 `redis.dh` 文件中的内容 。           | - |

## 步骤 4：验证 TLS

在 redis-cli 执行如下命令，验证 TLS 配置：

```shell
./src/redis-cli -h <Redis_IP> -p <TLS-Port> --tls --cert ./tests/tls/redis.crt --key ./tests/tls/redis.key --cacert ./tests/tls/ca.crt Info Server
```

- `<Redis_IP>`：表示 Redis Standalone 节点 IP 或者集群 VIP。
- `<TLS-Port>`：表示 Redis Standalone 集群 TLS 端口号。

回显如下信息，则表示 TLS 配置成功。

```text
redis_version:6.2.5
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:12957d9199f59509
redis_mode:standalone
os:Linux 4.15.0-58-generic x86_64
arch_bits:64
multiplexing_api:epoll
atomicvar_api:c11-builtin
gcc_version:7.5.0
process_id:5186
process_supervised:no
run_id:582101ac9ac0314b265439da67d00854d5d19a70
tcp_port:6379
server_time_usec:1635753556324954
uptime_in_seconds:5395
uptime_in_days:0
hz:10
configured_hz:10
lru_clock:8363604
executable:/opt/redis/current/redis-server
config_file:/data/redis/redis.conf
io_threads_active:0
```
