---
title: "参数介绍"
description: 本小节主要介绍 ClickHouse 常用配置项。 
keywords: ClickHouse 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 ClickHouse 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 ClickHouse 不可修改配置参数的含义。

## 不可修改参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   用户名  |  -  |  表示新创建数据库用户账号名。<li>默认为 `default`。 |
|   密码 | - |  表示新创建时设置的账号密码。  |
|   副本数量    |  1～3       |   表示集群当前副本数量。<li>集群创建后不可修改。  |
|   HTTP端口      |   0～65535     |   表示 HTTP 端口号码。 <li>默认为 `8123`。<li>集群创建后不可修改。  |
|   允许访问网络列表      |  0~65535     |   表示所有允许访问的网络列表，由分号分割的列表。 <li>默认为 `::/0`，表示允许所有网络可访问。<li>集群创建后不可修改。  |
