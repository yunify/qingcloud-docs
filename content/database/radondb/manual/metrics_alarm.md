---
title: "监控指标和告警"
description: 本小节主要介绍如何管理 RadonDB 监控指标和告警。 
keywords: radondb 监控指标,监控告警
data: 2021-05-14T00:38:25+09:00
weight: 50
collapsible: false
draft: false
---


## 监控指标

这里为每个节点都提供了资源监控和服务监控。 SQL 节点的服务监控统计了当前连接数、慢查询数、查询数量和写入查询，存储节点的服务监控统计了 SHOW GLOBAL STATUS 中的信息，可用于定位分析数据库的性能。部分监控项示例如下：

![CPU利用率](../../_images/cpu_monitor.png)

![硬盘 IOPS](../../_images/iops_monitor.png)

![当前线程连接数](../../_images/threads_connected.png)

![提交事务数](../../_images/commit_monitor.png)

![写入查询](../../_images/write_monitor.png)

![行锁定](../../_images/lock_monitor.png)

## 查看监控节点信息

展示监控节点的账号、邮箱、权限和访问地址。

![账号](../../_images/display_grafana.png)

## 管理监控账号

### 添加监控账号

要创建新监控账号时，需要指定账号、邮箱（选填）、权限和密码。

![添加监控账号](../../_images/add_grafana_user.png)

## 删除监控账号

这里填写要删除的监控账号。

![删除监控账号](../../_images/del_grafana_user.png)

### 监控访问

集群中有监控节点时，通过浏览器输入访问地址（可在[监控节点信息](./#监控节点信息)中查看），输入监控账户和密码即可登录图形界面，查看实时监控数据。

> 注意：需要在同一 VPC 下云服务器上的浏览器来访问，或通过[QingCloud VPN 服务](https://docs.qingcloud.com/product/network/vpn.html#vpn)（位于 VPC 网络中的管理配置标签页下）来访问。不要通过端口转发的方式将服务暴露到公网，避免对数据库服务造成重大影响！

![监控访问](../../_images/search_dashbords.png)

![SQL 节点仪表盘](../../_images/radon_dashboards.png)

![存储节点仪表盘](../../_images/xenon_dashboards.png)

![集群资源仪表盘](../../_images/node_dashboards.png)

**注解**：初次登录后，点击左侧导航条的 search 查看 dashboards，点击即可看到详细的监控信息。

## 监控告警

可以对集群节点配置告警策略，及时掌握集群的资源和服务状况。

![监控告警](../../_images/alarm.png)
