---
title: "节点概述"
description: 本小节主要介绍 MySQL Plus 节点基本信息。 
keywords: mysql plus 节点信息；
weight: 01
collapsible: false
draft: false
---


MySQL Plus 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

MySQL Plus 节点目前支持`主实例`、`只读实例`、`Proxy 实例`、`分析实例`四种类型。

|<span style="display:inline-block;width:80px">节点类型</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">使用范围</span> |
|:----|:----|:----|
|主实例   |  可读可写实例。 <li>单节点  <li>双节点   <li>三节点 <li>五节点|可挂载只读实例和 Proxy 实例，实现读写分离与异地灾备功能。|
|只读实例  |   仅可读实例。  <li>最多可创建 5 个节点。   | 从主实例同步数据，只能与主实例同区域。|
|Proxy 实例  |  供读写分离的实例。   <li>最多可创建 2 个节点。  | 数据库读写分离计算节点。|
|分析实例  |   供复杂分析查询的实例。    <li>单节点 | 从主实例同步数据，承担复杂数据分析和查询任务，降低主实例节点负载，适用于 OLAP 数据场景。|
