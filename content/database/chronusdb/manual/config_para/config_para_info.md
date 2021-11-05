---
title: "参数介绍"
description: 本小节主要介绍 ChronusDB 常用配置项。 
keywords: ChronusDB 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 ChronusDB 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 ChronusDB 不可修改配置参数的含义。

## 不可修改参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   用户名  |  -  |  表示新创建数据库用户账号名。<li>默认为 `default`。<li>集群创建后不可修改。 |
|   密码 | - |  表示新创建时设置的账号密码。<li>集群创建后不可修改。  |
|   副本数量    |  1～3       |   表示集群当前副本数量。<li>集群创建后不可修改。  |
|   HTTP 端口      |  0～65535     |   表示 HTTP 端口号码。 <li>默认为 `8123`。<li>集群创建后不可修改。  |
|   允许访问网络列表      |  0~65535     |   表示所有允许访问的网络列表，由分号分割的列表。 <li>默认为 `::/0`，表示允许所有网络可访问。<li>集群创建后不可修改。  |
|   max_concurrent_queries      |   -1，128～1024       |   表示同时处理请求的最大数量。 <br>- 默认值为-1，表示根据集群初始化 CPU 值动态设定最大请求数。 <br>- CPU 值｜最大请求数默认关系： 1C｜128，2C｜256，4C｜512，8C｜1024, 16C｜1024，32C｜1024。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
