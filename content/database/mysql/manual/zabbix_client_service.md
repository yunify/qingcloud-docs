---
title: "Zabbix 客户端服务 "
description: test
weight: 80
draft: false
---


为了实现多维监控数据库，QingCloud MySQL Plus 支持启用 Zabbix Agent服务 ( Zabbix 3.4）。

本小节主要介绍如何启动和关闭 Zabbix 客户端服务。

## 启动 Zabbix 客户端服务

1. 在 QingCloud 管理控制台，选择目标集群，点击**启动 zabbix 客户端**，并配置 Zabbix Server 端口和 IP 参数，确认启用服务。

2. 在 Zabbix Server 的 Web 界面，可直接添加主机。并将[监控模板](https://releases-qs.pek3a.qingstor.com/zabbix/zbx_export_templates.xml?response-content-disposition=attachment)到本地导入到 Zabbix Server ，即可成功启动服务。

![启动 Zabbix 客户端服务](../../_images/start_zabbix_agent.png)

## 关闭 Zabbix 客户端服务

若无需 Zabbix Agent 服务时，点击**关闭Zabbix 客户端**，确认关闭服务。

![关闭 Zabbix 客户端服务](../../_images/stop_zabbix_agent.png)