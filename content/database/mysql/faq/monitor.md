---
title: "监控"
description: 本小节主要介绍 MySQL Plus 监控常见问题。 
keywords: mysql plus 监控问题
weight: 25
collapsible: false
draft: false
---

## AppCenter 提供的 MySQL 服务相关的监控数据是怎么来的?

- 在 MySQL 客户端执行 `show global status\G` ，获取 MySQL 服务(查询, 事务, 锁信息)相关的监控参数。

- 在 MySQL 客户端执行 `show slave status\G` ，获取从库同步相关的监控参数。

## MySQL Plus 支持监控服务吗?

Mysql plus 提供了 Zabbix Agent服务（zabbix 3.4)。

详细使用指导请参见，[Zabbix 客户端服务](../../manual/metrics_alarm/zabbix_client_service)
