---
title: "配置 TLS 加密"
description: 介绍如何为 Redis 配置 TLS 加密。
weight: 2
collapsible: false
draft: false
keywords: QingCloud, Redis Cluster,  数据库，redis TLS 加密
---

## 应用场景

- 进行数据加密(message privacy)：encryption实现加密, 所有信息都加密传输，第三方无法嗅探。
- 保证数据完整性(message integrity)：通过MAC校验机制，一旦被篡改，通信双方会立刻发现。
- 身份认证(mutual authentication)：客户端与服务端方都要配备同一组证书，防止身份被冒充。

## 前提条件

Redis 从版本 6 开始支持 SSL/TLS，这是一项可选功能，需要在编译时启用。具体操作请参见[启用 TLS](#启用-tls)。

## 约束与限制

TLS 当前不支持 I/O 多线程。

## 启用 TLS

以下操作以 Ubuntu 18.04.5 为例。

1. 下载 Redis 源码。

   ```
   wget https://download.redis.io/releases/redis-6.2.5.tar.gz
   ```

2. 解压源码包。

   ```
   tar xf redis-6.2.5.tar.gz
   ```

1. 进入解压目录。

   ```
   cd redis-6.2.5/
   ```

4. 安装依赖包。

   ```
   apt-get update
   apt install make gcc libssl-dev libsystemd-dev tcl tcl-tls
   ```

5. 编译并启用TLS。

   ```
   make BUILD_TLS=yes
   ```

## 证书配置

为了支持 TLS，Redis 必须配置 X.509 证书和私钥。

1. 创建证书。

   ```
   ./utils/gen-test-certs.sh
   ```

2. 查看证书文件。

   ```
   ls ./tests/tls/
   ```

   可以看到生成以下文件。

   ```
   ca.crt ca.key ca.txt client.crt client.key openssl.cnf redis.crt redis.dh redis.key server.crt server.key
   ```

   其中：

   获取 TLS-Cert 项：

   ```
   cat ./tests/tls/redis.crt
   ```

   获取 TLS-Key 项：

   ```
   cat ./tests/tls/redis.key
   ```

   获取 TLS-CA-Cert 项：

   ```
   cat ./tests/tls/ca.crt
   ```

   获取 TLS-DH-Params 项：

   ```
   cat ./tests/tls/redis.dh
   ```

   

## 修改配置参数

为正常使用 TLS，您还需要在控制台的[参数配置](../../manual/cfginstance/paramconfig/)页面配置 TLS 相关参数。

**注意事项：**

- **端口** 及 **TLS-Port** 不能设置为 80, 因为 80 端口已经被 web 占用。
- **端口** 与 **TLS-Port** 两个端口, 不能设置为同一个值。
- **TLS-Cluster** 设置为 `no` 时：
  - 不得关闭 **端口** (将其设置为0)
  - 不得将 **TLS-Port** 设置为 `端口 +10000`
- **TLS-Cluster** 设置为 `yes` 时：
  - 不得关闭 **TLS-Port** (将其设置为0)
  - 不得将 **端口** 设置为 `TLS-Port +10000`

| 参数项        | 参数说明                                                     | 配置值                        |
| ------------- | ------------------------------------------------------------ | ----------------------------- |
| 端口          | 明文端口，设置为`0`表示关闭明文端                            | 0                             |
| TLS-Port      | TLS 加密端口                                                 | 6379                          |
| TLS-Cluster   | Cluster 通信是否使用加密口<br/>设置为`yes`时 Cluster 通信端口为 `TLS-Port + 10000`<br/>设置为`no`时 Cluster 通信端口为 `端口 + 10000` | yes                           |
| TLS-Cert      | 证书                                                         | 配置为`redis.crt`文件中的内容 |
| TLS-Key       | 私钥                                                         | 配置为`redis.key`文件中的内容 |
| TLS-CA-Cert   | CA 证书                                                      | 配置为`ca.crt`文件中的内容    |
| TLS-DH-Params | 密匙交换参数                                                 | 配置为`redis.dh`文件中的内容  |



## 验证 TLS

执行以下命令进行验证：

```
./src/redis-cli -h <redis_instance_address> -p <TLS-Port> --tls --cert ./tests/tls/redis.crt --key ./tests/tls/redis.key --cacert ./tests/tls/ca.crt Info Server
```

- `<redis_instance_address>`：表示 Redis Cluster 实例的连接地址，请根据实际地址替换。
- `<TLS-Port>`：表示 Redis Cluster 实例的 TLS 端口号。

显示如下信息表示 TLS 配置成功：

```
redis_version:6.2.5
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:12957d9199f59509
redis_mode:cluster
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

