---
title: "Redis Exporter 服务 "
description: 本小节主要介绍如何管理 Redis Standalone 的 Redis Exporter 监控服务。 
keyword: Redis Exporter 监控服务,监控服务
weight: 60
collapsible: false
draft: false
---


Prometheus 是一套开源的监控系统，以较低的系统资源要求，可实现了丰富的自定义和灵活的查询。Grafana 是一个跨平台的开源的度量分析和可视化工具，可以将采集的数据可视化呈现。

为了实现多维监控数据库，Redis Standalone 支持启用 Redis Exporter 监控服务，通过对接 Prometheus 和 Grafana 提供节点服务状态监控。

-  Redis Standalone 集成 redis_exporter 支持 Prometheus 标准 Exporter 监控指标。详细监控指标项，请参见 [Metrics in Prometheus](https://docs.redis.com/latest/rs/administering/monitoring-metrics/prometheus-metrics-definitions/)。

- Redis Standalone 默认关闭 Redis Exporter 监控服务。

- Redis Standalone 默认监控端口为 9121。

本小节主要介绍如何启动和关闭 Redis Exporter 监控服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为**活跃**。
- 已安装 Prometheus 和 Grafana，且已获取 Prometheus 和 Grafana 用户和密码。

   > **注意**
   > 
   > 安装 Prometheus 和 Grafana 的服务器与 Redis 之间的网络通畅。
   > 
   > 若安装 Prometheus 和 Grafana 的服务器与 Redis 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Redis 关键信息暴露等风险。

## 启动 Redis Exporter 服务

启动 Redis Exporter 服务，需先在 AppCenter 启用服务客户端，并在 Prometheus 添加数据源配置数据库相应参数，才能正常启用 Redis Exporter 监控服务。

### 开启 Redis Exporter 服务

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Enable redis-Exporte**参数值为`是`。

   并设置 Redis Exporter 端口，默认为 `9121`。

6. 点击**保存**，确认启用服务。

   <img src="../../../_images/enable_exporter.png" alt="启动 Redis Exporter 服务" style="zoom:50%;" />

### 配置 Redis Exporter 监控

参考 [Redis Enterprise Software Integration with Prometheus](https://docs.redis.com/latest/rs/administering/monitoring-metrics/prometheus-integration/)，添加 Redis 节点为数据源。成功添加数据源后，即可在 Grafana 查看节点资源监控信息。

## 关闭 Redis Exporter 服务

若无需 Redis Exporter 服务时，可在 AppCenter 确认关闭服务。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 设置**Enable redis-Exporte**参数值为`否`，确认关闭服务。
6. 点击**保存**，关闭服务。
