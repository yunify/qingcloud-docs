---
title: "测试方法"
description: 本小节主要介绍 Redis 的性能测试方法。
weight: 6
collapsible: false
draft: false
keywords: redis cluster, 性能测试, 测试方法
---

本文介绍使用 redis-benchmark 进行 Redis Cluster 性能测试的具体方法。

## 前提条件

已创建 Redis Cluster 实例。

## 测试步骤

1. 创建云服务器，云服务器选择与 Redis Cluster 实例相同可用区、VPC、私有网络和安全组。

   

2. 在云服务器上[安装 redis-benchmark](../test_tool/#下载和安装工具)。

3. 创建并配置证书。具体操作请参见[TLS 加密配置](../../best-practices/tls_config/)。

   > **说明**
   >
   > 本步骤仅在需要启用 TLS 连接进行加密端口性能测试时需要执行，若未配置 TLS 加密端口，仅测试明文端口执行性能，则跳过本步骤，直接执行步骤4。

4. 在云服务器上执行测试命令。

   ```
   redis-benchmark -h {IP} -p {Port} -a {password} -n {nreqs} -r {randomkeys} -c {connect_number} -d {datasize} -t {command} --cluster --tls --cert {cert_file_path} --key {key_file_path} --cacert {cacert_file_path}
   ```

   >**说明**
   >
   >以上参数中，**\-\-tls**、**\-\-key**、**\-\-cert** 及 **\-\-cacert** 仅在需要启用 TLS 进行加密端口性能测试时需要。

具体参数说明见下表。

| <span style="display:inline-block;width:80px">参数</span> | 参数说明                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| **-h**                                                    | Redis Cluster 实例的内网连接地址。请参见[获取连接地址](../../quickstart/cnect_redis/#获取连接地址)。 |
| **-p**                                                    | Redis Cluster 实例的服务端口，默认为 6379，若启用了 TLS，则为 TLS 端口。 |
| **-a**                                                    | Redis Cluster 实例的密码。无密码时可不填写。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>   如果是使用默认账号，直接填写`<password>`即可。如果是新创建的账号，则填写`<user>:<password>`。例如：账号为`test`，密码为`redis@123`，则填写 `test:redis@123`。</div> |
| **-n**                                                    | 测试的总请求数量，可设置较大的值以持续压测。                 |
| **-r**                                                    | 使用随机 key 数量，即使用多少个不同 key。                    |
| **-c**                                                    | 并发的客户端连接数量。                                       |
| **-d**                                                    | SET 或 GET 所操作的值的数据大小，单位为字节（Byte）。        |
| **-t**                                                    | 需要执行的测试命令，如set、get                               |
| **\-\-threads**                                           | 启动多线程压测，并指定线程个数。                             |
| **\-\-cluster**                                           | 启用集群模式压测，测试整个集群。                             |
| **\-\-tls**                                               | 启用安全 TLS 连接。                                          |
| **\-\-cert**                                              | 用于进行身份验证的客户端证书。                               |
| **\-\-key**                                               | 用于进行身份验证的私钥文件。                                 |
| **\-\-cacert**                                            | 用于验证的 CA 证书文件。                                     |



