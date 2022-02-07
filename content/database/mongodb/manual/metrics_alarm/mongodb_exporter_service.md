---
title: "MongoDB Exporter 监控服务"
description: 本小节主要介绍如何开启或关闭 MongoDB Exporter 监控服务。 
keyword: MongoDB Exporter监控,Prometheus Server,开启 MongoDB Exporter,MongoDB,文档数据库,数据库
weight: 70
collapsible: false
draft: false
---


为了实现多维监控数据库，MongoDB 支持启用 MongoDB Exporter 监控服务，通过对接 Prometheus 和 Grafana 提供节点服务状态监控。  
集成 mongodb_exporter v0.20.9 版本，支持 Prometheus 标准 Exporter 监控指标。详细监控指标项，请参见 [mongodb_exporter](https://github.com/dcu/mongodb_exporter)。

本小节主要介绍如何启动和关闭 MongoDB Exporter 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB 集群，且集群状态为**活跃**。
- 已安装 Prometheus 和 Grafana，且已获取 Prometheus 和 Grafana 用户和密码。

   > **注意**
   > 
   > 安装 Prometheus 和 Grafana 的服务器与 MongoDB 之间的网络通畅。
   > 
   > 若安装 Prometheus 和 Grafana 的服务器与 MongoDB 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 MongoDB 关键信息暴露等风险。

## 启动 MongoDB Exporter 服务

启动 MongoDB Exporter 服务，需先在 AppCenter 启用服务客户端，并在 Prometheus 添加数据源配置数据库相应参数，才能正常启用 MongoDB Exporter 监控服务。

### 开启 MongoDB Exporter 服务
   
1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Mongodb Exporter: 是否开启**参数值为`是`。  
   并设置 MongoDB Exporter 端口，默认为 `9001`。  
6. 点击**保存**，确认启用服务。
   
   <img src="../../../_images/enable_exporter.png" alt="启动 MongoDB Exporter服务" style="zoom:50%;" />

### 配置 MongoDB Exporter 监控

参考 [Prometheus 官方配置指导](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)和 [Grafana 官方配置指导](https://grafana.com/docs/grafana/latest/administration/configuration/)，添加 MongoDB 节点为数据源。成功添加数据源后，即可在 Grafana 查看节点资源监控信息。

**Prometheus 配置信息**

<img src="../../../_images/exporter_prometheus.png" alt="Prometheus 添加数据源" style="zoom:50%;" />

**Grafana 监控信息**

<img src="../../../_images/mongodb_exporter_grafana.png" alt="Grafana 查看监控" style="zoom:50%;" />

通过访问 `http://<Node IP>:<MongoDB Exporter Port>/metrics`，可验证 MongoDB Exporter 监控是否配置成功。

<img src="../../../_images/mongodb_exporter_verify.png" alt="验证 MongoDB Exporter 监控" style="zoom:50%;" />

## 关闭 MongoDB Exporter 服务

若无需 MongoDB Exporter 服务时，可在 AppCenter 确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Mongodb Exporter: 是否开启**参数值为`否`，确认关闭服务。
6. 点击**保存**，关闭服务。
