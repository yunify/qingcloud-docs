---
title: "产品版本"
description: 本小节主要介绍 RadonDB 版本规格。 
keywords: RadonDBL, QingCloud, 版本规格
weight: 30
collapsible: false
draft: false
---


QingCloud RadonDB 基于 MySQL 5.7版本构建 Radon 内核，并自研 Xenon 集群高可用工具。

## 版本历程

### v1.1.4

基于 MySQL 5.7.29-32，Radon v1.1.4，Xenon v1.1.4内核版本构建。

- SQL 节点 Radon 版本升级至 v1.1.4。
- 存储节点 Xenon 版本升级至 v1.1.4。
- 新增 `Lower-case-table-names` 配置参数，支持开启或关闭大小写敏感。

### v1.1.3

基于 MySQL 5.7.29-32，Radon v1.1.3，Xenon v1.1.3内核版本构建。

- 新增基于 Prometheus 和 Grafana 的监控节点，支持通过 Grafana 仪表盘查看监控数据。
- 支持添加、删除和展示监控账号。
