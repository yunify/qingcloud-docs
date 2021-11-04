---
title: "如何配置安全策略"
description: 介绍如何为 Redis 配置完全策略。
draft: false
weight: 2
enableToc: false
keywords: Redis Cluster 安全策略

---

为更好的保护数据安全，建议您为 Redis Cluster 配置以下安全策略：

- 配置密码：为 Redis Cluster的默认账号 **default** 设置密码，则客户端在连接 Redis 以及执行操作命令时需要验证密码。
- 配置 TLS 加密：关闭明文端口，将 TLS 加密端口设置成 6379，并让 Cluster 通信使用加密端口，以避免数据被泄漏和篡改。

## 设置密码

- **创建 Redis Cluster 实例时设置**

  创建 Redis Cluster 实例时，将同步创建一个默认用户：**default**，并且可在创建时设置密码（对应的服务环境参数为**requirepass**）。如下图所示。

  <img src="../../_images/set_passwd_1.png" alt="设置密码" style="zoom:50%;" />

  > **说明**
  >
  > 若创建时未进行密码设置，则默认无密码。

- **通过修改参数配置进行设置**

  您还可以通过**参数配置**页面进行密码设置。具体方法可参考[配置集群参数](/database/redis_cluster/manual/cfginstance/paramconfig/)。

  <img src="../../_images/set_passwd_2.png" alt="设置密码" style="zoom:50%;" />

##  设置 TLS 加密

具体配置方法请参见[配置 TLS 加密](../../best-practices/tls_config/)。

