---
title: "节点概述"
description: 本小节主要介绍 OpenSearch 节点基本信息。 
keyword: OpenSearch 节点信息；
weight: 01
collapsible: false
draft: false
---


OpenSearch 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

OpenSearch 节点目前支持 OpenSearch （主、热、温和冷）节点、Logstash 节点、Dashboard 节点三大类型。


<img src="../../../_images/os_node_arch.png" alt="集群节点" style="zoom:100%;" />

|<span style="display:inline-block;width:120px">节点类型</span> |<span style="display:inline-block;width:480px">节点说明</span>|
|:----|:----|:----|
|OpenSearch 热节点 |  OpenSearch 热数据管理节点。用于保存近期的索引，承担最频繁的写入和查询操作。<li>该节点通常配置高性能资源，例如超高性能主机及硬盘。 |  
|OpenSearch 冷/温节点 |  OpenSearch 温/冷数据管理节点。用于保存只读索引，可接收少量的查询请求。<li>该节点对计算和存储资源性能要求不高，可配置一般性能的资源。| 
|OpenSearch 专有主节点 |  OpenSearch 集群高可用节点，用于提高集群的稳定性。<li>该节点不保存数据，也就不参与索引和查询操作，不会被长 GC 干扰，负载可以保持在较低水平。 |
|Logstash  |   提供数据收集及实时数据转换处理的能力。  |
|Dashboard   |  提供 OpenSearch 可视化管理平台，可绑定高可用 IP 确保 OpenSearch 服务的高可用。 |
