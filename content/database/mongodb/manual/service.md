---
title: "服务功能"
description: 本小节主要介绍 QingCloud MongoDB 基准测试。 
keywords: mongodb 基准测试, 
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---

点开基本属性旁边的下拉按钮，可以看到提供的服务功能。

![](../../_images/feature.png)


## 配置参数

这里列出了可以修改并持久化的配置参数。修改配置参数将会使集群重启，请在业务低峰时进行修改。

> _MongoDB 4.0.3 - QingCloud 1.2.0_ 之后的版本新增了 Caddy 服务替代老版本的 FTP 服务，配置参数中默认为您配置用户名为 caddy，密码为 caddy，您可以修改配置参数来配置您的用户名和密码，该相关配置不会导致 mongod 服务重启。

> _MongoDB 4.0.3 - QingCloud 1.3.0_ 新增了 zabbix-agent 服务，您可以将其加入您的 zabbix-server 方便统一管理，您可以通过修改配置参数来配置 zabbix-agent 的启停，该相关配置不会导致 mongod 服务重启。

![](../../_images/env.png)


## 连接 URL

_MongoDB 4.0.3 - QingCloud 1.2.0_ 版本新增了「连接 URL」一栏，您可以直接复制该 URL 并将其中的 `password` 修改为您的连接密码，`database` 修改为您需要连接的数据库即可。

> 在 shell 中通过该 URL 连接时需要在 `&` 前添加转义符 `\`。

![](../../_images/connection_url.png)
