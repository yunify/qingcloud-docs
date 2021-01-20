---
title: "服务功能"
description: test
weight: 4
draft: false
---

## 切换私网

您可以在 「基础属性」 栏选择切换私网，之后选择对应的 VPC 网络和私有网络，点击提交即可。

![切换私网](../../_images/change_vxnet.png)

## 更改主机类型

可以更改主机类型，选择相应的节点，选中类型，点击提交。

![更改主机类型](../../_images/change_host_type.png)

### 添加账号

要创建新账号时，需要指定账号密码，支持 database 级别的租户隔离。

![添加账号](../../_images/add_user.png)

## 删除账号

这里填写要删除的账号名。

![删除账号](../../_images/del_user.png)

## 数据重分布

当几个存储节点的数据分布存在不均衡或者添加存储节点后，可以使用该服务对数据进行在线重分布。

![数据重分布](../../_images/rebalance_data.png)

**注解**：清理原数据为 false 时，需要用户在命令行自行执行 `radon cleanup` 清理旧数据。

### 添加监控账号

要创建新监控账号时，需要指定账号、邮箱（选填）、权限和密码。

![添加监控账号](../../_images/add_grafana_user.png)

## 删除监控账号

这里填写要删除的监控账号。

![删除监控账号](../../_images/del_grafana_user.png)

## 监控访问

集群中有监控节点时，通过浏览器输入访问地址（可在[监控节点信息](./#监控节点信息)中查看），输入监控账户和密码即可登录图形界面，查看实时监控数据。

> 注意：需要在同一 VPC 下主机上的浏览器来访问，或通过[青云 VPN 服务](https://docs.qingcloud.com/product/network/vpn.html#vpn)（位于 VPC 网络中的管理配置标签页下）来访问。不要通过端口转发的方式将服务暴露到公网，避免对数据库服务造成重大影响！

![监控访问](../../_images/search_dashbords.png)

![SQL 节点仪表盘](../../_images/radon_dashboards.png)

![存储节点仪表盘](../../_images/xenon_dashboards.png)

![集群资源仪表盘](../../_images/node_dashboards.png)

**注解**：初次登录后，点击左侧导航条的 search 查看 dashboards，点击即可看到详细的监控信息。

## 增删节点

可以根据需要增加 SQL 节点的副本、存储节点、监控节点。增加存储节点则会增加 1 主和 2 副本的主机。

![添加节点](../../_images/add_nodes.png)

## 扩容集群

可以对一个运行中的数据库服务进行在线扩容，资源配置类型选择『自定义』调整 CPU/内存/磁盘空间大小。

![扩容集群](../../_images/scale.png)

**注解**：扩容需要在开机状态下进行，扩容 SQL 节点时链接会有短暂中断，请在业务低峰时进行。

## 同步日志

同步日志可以将审计日志拷贝到 SQL 节点的 FTP 目录，可以在内网将 SQL 节点的审计日志下载到本地进行分析。操作指令为：

```bash
wget ftp:// SQL 节点 IP 地址/audit --ftp-user=ftpuser --ftp-password=ftppassword
```

![同步日志](../../_images/copy_logs.png)

**注解**：审计日志只记录最近一个小时的 SQL 记录。默认情况下不开启审计日志，可在初始化集群时或配置参数里设置开启。

## 自动伸缩

RadonDB 支持自动扩容应用存储空间，详细请参考[自动伸缩](https://docs.qingcloud.com/product/operation/autoscaling)。

![自动伸缩](../../_images/autoscaling_1.png)

![自动伸缩](../../_images/autoscaling_2.png)

![自动伸缩](../../_images/autoscaling_3.png)

![自动伸缩](../../_images/autoscaling_4.png)

## 监控

这里为每个节点都提供了资源监控和服务监控。 SQL 节点的服务监控统计了当前连接数、慢查询数、查询数量和写入查询，存储节点的服务监控统计了 SHOW GLOBAL STATUS 中的信息，可用于定位分析数据库的性能。部分监控项示例如下：

![CPU利用率](../../_images/cpu_monitor.png)

![硬盘 IOPS](../../_images/iops_monitor.png)

![当前线程连接数](../../_images/threads_connected.png)

![提交事务数](../../_images/commit_monitor.png)

![写入查询](../../_images/write_monitor.png)

![行锁定](../../_images/lock_monitor.png)