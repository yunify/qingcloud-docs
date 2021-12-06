---
title: "查看集群信息"
description: 本小节主要介绍如何查看 MongoDB 集群信息。 
keyword: 集群信息,集群状态,MongoDB,文档数据库,数据库
weight: 10
collapsible: false
draft: false
---


MongoDB 集群创建成功后，可在 AppCenter 查看集群信息，包括集群基本属性、租赁信息、节点信息、配置参数、告警配置、备份信息等。

本小节主要介绍如何查看集群信息。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群查看权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。

   可查看当前区域集群列表，以及集群基本信息。

    <img src="../../../_images/cluster_list.png" alt="集群列表" style="zoom:100%;" />

3. 选择目标集群，点击目标集群 ID，进入集群详情页面。

    可查看集群各详细信息，以及执行集群的各项功能管理操作。

4. 当在对集群执行操作后，可在集群详情页面左下侧，查看集群操作日志。

   <img src="../../../_images/operate_log.png" alt="操作日志" style="zoom:50%;" />

### 基本属性

在集群详情页面左侧**基本属性**区域，可查看集群基本状态、版本信息、节点数量、网络信息等。

点击下拉栏图标，展开集群操作列表，可查看集群服务功能。

<img src="../../../_images/basic_info.png" alt="基本属性" style="zoom:50%;" />

### 服务端口信息

在集群详情页面左侧**服务端口信息**区域，可查看 MongoDB、 Zabbix Agent2、Caddy、Node Exporter、MongoDB Exporter等端口信息。

- MongoDB 端口：MongoDB 服务端口。

- Zabbix Agent2 端口：Zabbix 监控服务端口。

- Caddy 端口：Caddy 日志服务端口。

- Node Exporter 端口：Node Exporter 监控服务端口。

- MongoDB Exporter 端口：MongoDB Exporter 监控服务端口。

<img src="../../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

### 节点列表

在**节点**页面，可查看集群各节点的 ID、服务状态、监控信息、资源配置等。

<img src="../../../_images/node_list.png" alt="节点" style="zoom:50%;" />

### 配置参数

在**配置参数**页面，可查看集群性能优化配置参数项。

> **注意**
> 
> 修改后将导致自动重启集群的参数，请在业务低峰时进行修改。

<img src="../../../_images/config_list.png" alt="配置参数" style="zoom:50%;" />

### 监控告警

在**告警**页面，可以查看集群告警配置信息，及时掌握集群的资源和服务状况。

<img src="../../../_images/alarm_list.png" alt="监控告警" style="zoom:50%;" />

### 备份

在**备份**页面，可以查看集群备份列表信息，可查看集群列表和**备份链**结构示意图，以及可从备份创建新集群。

<img src="../../../_images/backup_list.png" alt="备份信息" style="zoom:50%;" />

### 连接 URL

在**连接 URL**页面，可以查看 MongoDB 访问 URL。

<img src="../../../_images/conne_url.png" alt="连接 URL" style="zoom:50%;" />

### 特性兼容版本

在**特性兼容版本**页面，可以查看 MongoDB 特性兼容的版本。

<img src="../../../_images/mongodb_version.png" alt="特性兼容版本" style="zoom:50%;" />

### 节点状态

在**节点状态**页面，可以查看集群节点主从状态、优先级。

- 节点类型包括 `PRIMARY` 和 `SENCONDARY`
  
  `PRIMARY`表示数据库主节点。

  `SENCONDARY`表示数据库从节点。

- **优先级** 表示节点参与选主的优先级。数值越大优先级越高。

- **Hidden** 表示节点是否隐藏。隐藏节点不参与选举，优先级永远为0，主要作用做数据迁移和备份。

<img src="../../../_images/node_status.png" alt="节点状态" style="zoom:50%;" />

### 租赁信息

在集群详情页面左侧**租赁信息**区域，可以查看集群当前计费信息。
