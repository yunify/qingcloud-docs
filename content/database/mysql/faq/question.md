---
title: "产品咨询"
description: 本小节主要介绍 MySQL Plus 产品功能常见问题。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,产品功能,产品问题
weight: 05
collapsible: false
draft: false
---

## MySQL Plus 支持审计服务吗?

支持。

MySQL Plus 新形态从 1.0.1 版本开始支持审计功能。

使用审计功能可在[配置参数](../../manual/config_para/modify_para)中，修改 `Audit_log_policy`、`Audit_log_format`、`Audit_log_rotate_on_size`、`Audit_log_rotations`等参数，配置审计策略。

## MySQL 主节点和从节点的作用分别是什么？

**主节点**可读可写，**从节点**只可读。

## MySQL 高可用读 IP、高可用写 IP、高可用Proxy IP的作用分别是什么？

- **高可用读IP**可将请求在多个从节点和主节点（可配置是否分发给主节点）之间进行负载分发，以提高数据库的查询性能；发生从节点故障，会自动从高可用读IP列表里面摘掉故障节点IP，不影响业务查询。

- **高可用写IP**可以在主节点发生故障时自动切换到新的主节点上，提供高可用机制，以减少故障时间。

  建议写业务连接高可用写IP，读业务连接高可用读IP。

- **高可用Proxy IP**必须有Proxy节点才能使用，Proxy会根据读写、只读请求将负载分别分发到主、从节点。

## 集群 IP 分配规则？

- 自动分配 IP：读写 IP 是从255往0分配，节点 IP 从0开始往255分配。
- 手动指定 IP：指定被占用的 IP。
  
  高可用写 IP、高可用读 IP、高可用 ProxyIP 挂在网卡上。

## 为什么高可用 Proxy IP 不可用？

MySQL Plus 将预留高可用 Proxy IP，但需集群中必须有 Proxy 节点才能使用。

## 读写请求是否负载到主节点？

MySQL Plus 有高可用写 IP 和 高可用读 IP。

- 高可用写 IP 可支持读写功能。

- 高可用读 IP 仅支持读功能。

当参数 `Load_read_requests_to_master` 为 **NO** 则读请求不负载到主节点。当参数 `Load_read_requests_to_master` 为 **YES** 则读请求负载到主节点。
