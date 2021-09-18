---
title: "Grafana 监控"
description: 本小节主要介绍在 grafana 查看 RadonDB 服务监控指标。 
keywords: RadonDB 监控指标
weight: 50
collapsible: false
draft: false
---

集群中有监控节点时，通过浏览器登录 Grafana 可视化图形监控界面，可实时监控 RadonDB 服务状态。

本小节主要介绍如何登录 Grafana 查看服务监控。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 RadonDB 集群，且集群状态为**活跃**。
- 已创建监控节点和监控账号，且节点状态为**活跃**。
- 已部署 Grafana。

> **注意**
> 
> -部署 Grafana 的服务器，需与 RadonDB 集群在同一 VPC 私有网络环境下。
> 
> -若不在同一 VPC 私有网络，建议使用[边界路由器](../../../../../network/border_router/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**方式打通网络，避免因数据库服务信息暴露，造成数据泄漏风险。

## 操作步骤

### 步骤一：获取监控地址和账号

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 RadonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**监控节点信息**页签，即可查看监控访问地址和账号。

 <img src="../../../_images/monitoring_addr.png" alt="监控信息" style="zoom:50%;" />

### 步骤二：查看监控信息

1. 在浏览器通过监控地址访问 Grafana 监控平台。
2. 输入监控账号和密码，登录监控平台。
3. （可选）初次登录后，点击左侧导航条的 **search** 查看 **dashboards**。
4. 分别点击服务或资源监控项，展开详细的监控信息。

![监控访问](../../../_images/search_dashbords.png)

![SQL 节点仪表盘](../../../_images/radon_dashboards.png)

![存储节点仪表盘](../../../_images/xenon_dashboards.png)

![集群资源仪表盘](../../../_images/node_dashboards.png)
