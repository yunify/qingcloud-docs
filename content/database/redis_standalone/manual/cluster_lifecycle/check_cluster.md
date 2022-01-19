---
title: "查看集群信息"
description: 本小节主要介绍如何查看 Redis Standalone 集群信息。 
keyword: 集群信息,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---


Redis Standalone 集群创建成功后，可在 AppCenter 查看集群信息，包括集群基本属性、服务端口信息、租赁信息、节点信息、配置参数、告警配置、备份信息、用户管理ACL、节点实时角色等。

本小节主要介绍如何查看集群信息。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群查看权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。

   可查看当前区域集群列表，以及集群基本信息。

    <img src="../../../_images/cluster.png" alt="集群列表" style="zoom:100%;" />

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

    可查看集群各详细信息，以及执行集群的各项功能管理操作。

4. 当在对集群执行操作后，可在集群详情页面左下侧，查看集群操作日志。

   <img src="../../../_images/operate_log.png" alt="操作日志" style="zoom:50%;" />

### 基本属性

在集群详情页面左侧**基本属性**区域，可查看集群基本状态、版本信息、节点数量、网络信息等。

点击下拉栏图标，展开集群操作列表，可查看集群服务功能。

<img src="../../../_images/basic_info.png" alt="基本属性" style="zoom:50%;" />

### 服务端口信息

在集群详情页面左侧**连接信息**区域，可查看集群服务端口、高可用 IP、监控服务 IP等。

<img src="../../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

### 节点列表

在**节点**页面，可查看集群各节点的 ID、服务状态、监控信息、资源配置等。

<img src="../../../_images/check_node.png" alt="节点" style="zoom:50%;" />

### 配置参数

在**配置参数**页面，可查看集群性能优化配置参数项。

> **注意**
> 
> 部分参数修改后，将影响业务正常运行。这些参数，请在业务低峰期修改。

<img src="../../../_images/config_list.png" alt="配置参数" style="zoom:50%;" />

### 监控告警

在**告警**页面，可以查看集群告警配置信息，及时掌握集群的资源和服务状况。

<img src="../../../_images/alarm_list.png" alt="监控告警" style="zoom:50%;" />

### 备份

在**备份**页面，可以查看集群节点备份状态。

<img src="../../../_images/backup_list.png" alt="备份列表" style="zoom:50%;" />

### 用户管理 ACL

在**用户管理 ACL**页面，可以查看集群用户，以及该用户支持的操作。

> **说明**
> 
> Redis 6.2.5- v1.0.0 及以上版本，支持该模块。

<img src="../../../_images/user_list.png" alt="用户列表" style="zoom:50%;" />

### 节点实时角色

在**节点实时角色**页面，可以查看集群节点当前角色类型。

- `master`表示主节点。
	
- `slave`表示从节点。

<img src="../../../_images/node_role.png" alt="角色详情" style="zoom:50%;" />

### 租赁信息

在集群详情页面左侧**租赁信息**区域，可以查看集群当前计费信息。

<img src="../../../_images/payment_info.png" alt="租赁信息" style="zoom:50%;" />
