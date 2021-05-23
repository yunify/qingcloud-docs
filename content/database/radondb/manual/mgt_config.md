---
title: "配置参数管理"
description: 本小节主要介绍如何执行 RadonDB 性能测试。 
keywords: radondb 性能测试,
data: 2021-05-14T00:38:25+09:00
weight: 40
collapsible: false
draft: false
---




## 查看配置参数

这里列出了可以修改并持久化的配置参数。没有标注会重启服务的那些参数，都可以在服务运行时修改，对服务没有影响。

![配置参数](../../_images/env.png)

**注解**：会自动重启服务的参数已经在描述中说明，请在业务低峰时进行修改。

## 部分参数说明

-  `Ftp_user` 和 `Ftp_password`，点击同步日志后，需使用该账号下载节点上的日志，`Ftp_user` 在集群创建后不支持修改。
- `audit-mode` 写审计日志的策略，提供 `None`、`Audit-Read`、`Audit-Write` 和 `Audit-Read-Write` 四种策略，默认为 `NONE`，此时不会记录审计日志。
- `twopc-enable` 分布式事务开关，默认开启。
- `load-balance` 存储节点读写分离开关。默认开启，读请求会路由到存储节点的高可用读 vip。
- `shard-count` 默认 hash 分表数，可选择 8、16、32、64，默认 16。
