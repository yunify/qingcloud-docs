---
title: "产品版本"
description: 本小节主要介绍 RadonDB 版本规格。 
keywords: RadonDBL, QingCloud, 版本规格
weight: 30
collapsible: false
draft: false
---


QingCloud RadonDB 基于 MySQL 5.7版本构建 Radon 内核，并自研 Xenon 集群高可用工具。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:240px">内核版本</span>|<span style="display:inline-block;width:300px">版本说明</span> |
|:----|:----|:----|
| 1.1.4   |<li>MySQL 5.7.29-32 <li>Radon v1.1.4 <li>Xenon v1.1.4   |<li>SQL 节点 Radon 版本升级至 v1.1.4。<li>存储节点 Xenon 版本升级至 v1.1.4。<li>新增 `Lower-case-table-names` 配置参数，支持开启或关闭大小写敏感。 | 
| 1.1.3 |  <li>MySQL 5.7.29-32  <li>Radon v1.1.3 <li>Xenon v1.1.3  |<li>新增基于 prometheus 和 grafana 的监控节点，支持通过 Grafana 仪表盘查看监控数据。<li>支持添加、删除和展示监控账号。 |
