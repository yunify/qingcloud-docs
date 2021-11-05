---
title: "产品版本"
description: 本小节主要介绍 PostgreSQL 版本规格。 
keywords: PostgreSQL, QingCloud, 版本规格
weight: 30
collapsible: false
draft: false
---


QingCloud PostgreSQL 根据QingCloud AppCenter 功能特点，定制`基础版`、`高可用版`两个功能系列。

## 版本介绍

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   高可用版   |  采用一主一从的经典高可用架构，提供数据库高可用保障服务。主从节点可以通过修改配置参数设置同步流复制或者异步流复制模式。<li>适用于企业生产环境，电商、游戏、金融、政企等核心数据库场景。   |
|   基础版  |  提供单节点数据库服务。<li>适用于个人学习、小型网站、开发测试等场景。  |

## 内核版本

基于 PostgreSQL 11.1 、10.1、9.6.3内核版本分别构建了 PG11 高可用版，PG10 高可用版和基础版、PG9.6 高可用版和基础版。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:300px">内核版本</span>|<span style="display:inline-block;width:240px">产品版本</span> |
|:----|:----|:----|
|基础版   |<li>PostgreSQL 9.6.3 ，PostGIS 2.3 <li>PostgreSQL 10.1 ，PostGIS 2.4   |<li>PG10-基础版-V1.1.0 <li> PG9.6-基础版-V1.1.0 | 
|高可用版 |<li>PostgreSQL 9.6.3 ，PostGIS 2.3 <li>PostgreSQL 10.1 ，PostGIS 2.4  <li>PostgreSQL 11.1 ，PostGIS 2.5 |<li>PG11-高可用版-V1.0.7 <li>PG10-高可用版-V1.1.5<li> PG9.6-高可用版-V1.1.5 <li>PG11-高可用版-V1.0.6 <li>PG10-高可用版-V1.1.4<li> PG9.6-高可用版-V1.1.4 <li>PG10-高可用版-V1.1.1<li> PG9.6-高可用版-V1.1.1 |
