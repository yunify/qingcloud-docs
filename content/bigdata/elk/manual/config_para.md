---
title: "配置参数"
description: 本小节主要介绍如何修改 ELK 配置参数。 
keywords: hbase 修改账号；
weight: 20
collapsible: false
draft: false
---

在 AppCenter 集群管理控制台，支持修改 ELK 集群的配置参数。

本小节主要介绍如何修改 ELK 集群的配置参数。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ELK 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 切换到 `Elasticsearch节点`、`Kibana节点` 或 `Logstash 节点`，点击**修改属性**，公共参数**值**进入可编辑状态。
   
   ![env_modify](../../images/env_modify.png)

6. 参考配置参数取值范围和描述，修改参数值。
7. 确认参数信息无误后，点击**保存**，返回参数列表页面。

> **说明**：
>
> 在修改 Elasticsearch、Logstash 节点相关配置后需手动重启。
