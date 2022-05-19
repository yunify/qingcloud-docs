---
title: "为后端绑定转发策略"
description: 介绍如何为后端服务器绑定自定义的转发策略。
keyword: 负载均衡器,转发策略,后端服务器
draft: false
weight: 20
---

本文介绍如何为后端服务器绑定自定义的转发策略。

## 操作场景

创建转发策略后，您需要将转发策略与后端服务器器绑定，才能将匹配规则的请求转发到所绑定的后端服务器。

## 前提条件

- 已[创建监听器](/network/loadbalancer/manual/monitor/create_http_monitor/)。

  > **说明**
  >
  > 仅 HTTP/HTTPS/SSL 监听器支持配置转发策略。

- 已[创建转发策略](../create/)。

## 操作步骤

您可以在添加后端服务器时，为服务器绑定转发策略。详细操作，请参见[添加后端服务器](/network/loadbalancer/manual/backends/manage/#添加后端服务器)。

<img src="../../../_images/bind_forward_policy.png" style="zoom:40%;" />



