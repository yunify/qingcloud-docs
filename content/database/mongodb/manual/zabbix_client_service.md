---
title: "Zabbix-Agent 服务管理"
description: 本小节主要介绍如何管理 Zabbix-Agent 服务。 
keywords: mongodb Zabbix-Agent 服务, 
data: 2021-05-14T00:38:25+09:00
weight: 65
collapsible: false
draft: false
---




_MongoDB 4.0.3 - QingCloud 1.3.0_ 版本新增了 zabbix-agent 服务（3.4 版本），方便您采用 zabbix-server 统一管理各个集群的监控信息，zabbix-agent 服务的控制见**配置参数**，启动服务后，用户只需要在 zabbix-server 的 web 界面添加云服务器即可，为了实现多维数据监控，我们提供了 [监控模板](https://releases-qs.pek3a.qingstor.com/zabbix/zbx_mongodb_templates.xml?response-content-disposition=attachment)，只需将该模板导入到 zabbix-server 即可使用。

**配置参数**中 **zabbix-server 地址**填写的格式不正确，会导致 zabbix-agent 的不正确启停，该项的填写格式可参考 [配置文件](https://www.zabbix.com/documentation/3.4/manual/appendix/config/zabbix_agentd) 中的  **Server** 配置项。

![](../../_images/zabbix_agent.png)

