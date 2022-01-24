---
title: "测试方法"
description: 本小节主要介绍 Redis Standalone 的性能测试方法。
keyword: Redis Standalone,性能测试,测试方法
weight: 30
collapsible: false
draft: false

---

本文介绍使用 redis-benchmark 进行 Redis Standalone 性能测试的具体方法。

## 测试步骤

1. [创建云服务器](/compute/vm)，配置云服务器与 Redis Standalone 集群在相同可用区、VPC、私有网络和安全组。

2. 在云服务器上[安装 redis-benchmark](../test_tool/#下载和安装工具)。

3. （可选）创建并配置证书。具体操作请参见[TLS 加密](../../manual/data_security/tls_config/)。

   > **说明**
   >
   > 在需要启用 TLS 连接进行加密端口性能测试时，需配置 TLS 加密。

4. 在云服务器上执行测试命令。

   ```shell
   redis-benchmark -h <node_IP> -p <Port> -a <password> -n <nreqs> -r <randomkeys> -c <connect_number> -d <datasize> -t <command> --cluster --tls --cert <cert_file_path> --key <key_file_path> --cacert <cacert_file_path>
   ```

   >**说明**
   >
   > 以上参数中，**\-\-tls**、**\-\-key**、**\-\-cert** 及 **\-\-cacert** 仅在需要启用 TLS 加密认证时填写。

### 命令参数说明

| <span style="display:inline-block;width:80px">参数</span> | 参数说明                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| -h                                                   | Redis Standalone 实例的内网连接地址。 |
| -p                                                   | Redis Standalone 实例的服务端口。数据库端口默认为 6379。若启用了 TLS，则为 TLS 端口，默认为 6479。 |
| -a                                                   | Redis Standalone 实例的用户帐号密码。无密码时可不填写。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>   如果是使用 **default** 账号，直接填写`<password>`即可。如果是新创建的账号，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `test:redis@123`。</div> |
| -n                                                   | 测试的总请求数量，可设置较大的值以持续压测。                 |
| -r                                                   | 使用随机 Key 数量，即使用多少个不同 Key。                    |
| -c                                                   | 并发的客户端连接数量。                                       |
| -d                                                   | SET 或 GET 所操作的值的数据大小，单位为字节（Byte）。        |
| -t                                                  | 需要执行的测试命令，如 set、get。                              |
| --threads                                         | 启动多线程压测，并指定线程个数。                             |
| --cluster                                         | 启用集群模式压测，测试整个集群。                             |
| --tls                                             | 启用安全 TLS 连接。                                          |
| --cert                                          | 用于进行身份验证的客户端证书。                               |
| --key                                            | 用于进行身份验证的私钥文件。                                 |
| --cacert                                          | 用于验证的 CA 证书文件。   |

## 测试指标

Redis Standalone 性能测试指标如下：

| <span style="display:inline-block;width:220px">指标</span> | <span style="display:inline-block;width:500px">说明</span> |
| --------------------- | ------------------------ |
| QPS                     | 表示每秒处理的读写操作数，单位为次/秒。                    |
