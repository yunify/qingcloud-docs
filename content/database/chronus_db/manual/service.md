---
title: "服务功能"
description: test
weight: 4
draft: false
---


## 添加账号

要创建新账号时，需要指定账号密码和授权访问的网络。

![添加账号](../../_images/add_user.png)

## 修改账号

要修改已有账号时，需要指定账号密码和授权访问的网络。

![修改账号](../../_images/modify_user.png)

## 删除账号

这里填写要删除的账号名。

![删除账号](../../_images/del_user.png)

## 增删节点

可以根据需要增加集群节点，需要注意的是为了尽快的完成增加节点操作，让计算资源更快的被集群应用，增加节点的过程不会对原有数据迁移。

![新增节点](../../_images/add_nodes.png)

> **注解：**
>
> 1.「ChronusDB on QingCloud」在增加节点时，不支持对数据的重新分布。
>
> 2.「ChronusDB on QingCloud」暂不支持对集群进行删除节点操作。

## 扩容集群

可以对一个运行中的数据库服务进行在线扩容，调整CPU/内存/磁盘空间大小。

![扩容集群](../../_images/scale.png)

**注解**：扩容需要在开机状态下进行，扩容时链接会有短暂中断，请在业务低峰时进行。

## 监控

这里提供了每台主机的资源监控和服务监控。服务监控统计了一些用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。资源监控统计了主机的资源信息，如: CPU使用率、硬盘IOPS情况等，可用于查看系统性能是否到达瓶颈。

![查询数](../../_images/queries_monitor.png)

![HTTP连接数](../../_images/http_connections_monitor.png)

![活跃读锁](../../_images/active_read_lock_monitor.png)

![CPU利用率](../../_images/cpu_monitor.png)

![硬盘 IOPS](../../_images/iops_monitor.png)



