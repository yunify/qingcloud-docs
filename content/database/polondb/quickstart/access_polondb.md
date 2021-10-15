---
title: "连接数据库"
description: 本小节主要介绍如何连接 PolonDB 数据库。 
keywords: PolonDB 访问,访问数据库
weight: 10
collapsible: false
draft: false
---


PolonDB 支持通过 psql 命令行客户端直接连接，还可以使用图形化的数据库客户端连接。图形化客户端包括 pgAdmin 、DbVisualizer 、DBeaver 等。

PolonDB 推荐使用内网地址连接数据库，确保数据传输速率的同时兼顾数据安全。

本小节主要介绍如何连接 PolonDB 数据库，以终端命令行方式连接数据库。

## 背景介绍

PolonDB 基于 Citus 构建，支持选择协调器节点、高性能节点和高性能只读节点登录。

- 协调器节点

   **协调器节点**可作为运维节点，支持创建用户、创建视图、创建函数，适用于大对象应用场景。

- 高性能节点

   **高性能节点**是拥有超高连接数、超高性能的节点，不支持创建对象，适用于较大并对数据性能要求较高的业务场景。

- 高性能只读节点

   **高性能只读节点**充分发挥 PolonDB 硬件资源的利用率，是拥有数据超高性能的节点，适用于查询和分析数据业务场景。

## 前提条件

- 已获取 QingCloud 管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建 PolonDB 集群，且集群状态为**活跃**。
- 已获取数据库、用户和密码信息。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问数据库](#访问数据库)。

### 获取连接信息

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 PolonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**服务端口信息**模块，获取集群服务端口、高性能节点、协调器节点、高性能只读节点等。

<img src="../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

### 访问数据库
   
通过命令连接方式如下：

```bash
$ psql -U <userName> -h <port> -d <serverName> 
```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|-U           |数据库用户账号名。<br>新建数据库默认账号名 `qingcloud`。      | qingcloud |
|-h          |集群的 VIP。                 |192.168.100.240|
|-d          |数据库名称。 <br>新建数据库默认名称 `qingcloud`。            | qingcloud |
|密码          |数据库用户密码。<br>新建数据库默认账号密码`qingcloud1234`              | qingcloud1234 |
