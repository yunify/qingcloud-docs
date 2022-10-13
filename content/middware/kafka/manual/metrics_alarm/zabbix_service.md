---
title: "Zabbix 服务 "
description: 小节主要介绍如何设置 zabbix 监控告警。 
keyword: 云计算,大数据,消息队列,中间件,Kafka 监控指标,Kafka,zabbix,多位监控
weight: 50
collapsible: false
draft: false
---


为了实现多维监控数据库，Kafka 支持启用 Zabbix Agent 服务提供监控服务。

本小节主要介绍如何配置 Zabbix 服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Kafka 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 集群列表页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 点击**修改属性**，公共参数**值**进入可编辑状态。
6. 修改 **zabbix.agent.enable** 为 `true`。
   
   ![修改配置参数](../../../_images/config_zabbix.png)

7.  参考配置参数取值范围和描述，修改参数值。
8.  确认参数信息无误后，点击**保存**，返回参数列表页面。
