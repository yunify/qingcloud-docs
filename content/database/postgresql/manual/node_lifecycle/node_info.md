---
title: "节点概述"
description: 本小节主要介绍 PostgreSQL 节点基本信息。 
keywords: PostgreSQL 节点信息；
weight: 01
collapsible: false
draft: false
---


PostgreSQL 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

PostgreSQL 节点目前支持`主实例`、`只读实例`、`Proxy 实例`三种类型。

|<span style="display:inline-block;width:80px">节点类型</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">使用范围</span> |
|:----|:----|:----|
|主实例   |  可读可写实例。 <li>“一主一从”节点  |可挂载只读实例和 Proxy 实例。|
|只读实例  |   仅可读实例。  <li>最多可创建5个可读实例节点   | 从主实例同步数据，只能与主实例同区域。|
|Proxy 实例  |  供跨可用区、跨地域灾备能力的实例。   <li>“一主一从”节点  | 数据库读写分离计算节点。|
