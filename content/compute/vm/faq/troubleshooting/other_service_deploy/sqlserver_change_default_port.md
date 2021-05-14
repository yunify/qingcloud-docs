---
title: "如何修改SQL Server默认端口"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false 
---

## 问题背景

SQL Server默认使用1433端口来提供对外访问，1433为高危端口，易被攻击，导致端口可能会被屏蔽。以下将介绍如何修改SQL Server的服务端口。

## 操作步骤

### client端

云服务器上的SQL Server作为client连接外部服务器。打开SQL Server配置管理器，修改客户端协议，设置默认端口为14330。

![](../../../_images/sqlserver_change_default_port_1.png) 

![](../../../_images/sqlserver_change_default_port_2.png) 

### server端

云服务器上的SQL Server作为server提供服务。打开SQL Server配置管理器，修改服务端协议，设置默认端口为11433。

![](../../../_images/sqlserver_change_default_port_3.png) 

![](../../../_images/sqlserver_change_default_port_4.png) 