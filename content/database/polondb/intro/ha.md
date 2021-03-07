---
title: "高可用性"
description: Test description
draft: false
weight: 9
enableToc: false
keyword: PolonDB, QingCloud, 数据库
---



* PolonDB 默认采用半同步模式

  当集群正常时，采用同步模式运行。当备机出现异常时，会自动转换成异步模式。当备机恢复正常时，再次自动转换为同步模式。

* 使用异步模式

  设置参数 `synchronous_commit = local` 可以变成异步模式。

  > 异步模式的数据安全性比较低，有数据丢失风险

