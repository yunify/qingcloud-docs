---
title: "集群概述"
description: 本小节主要介绍 PostgreSQL 集群基本信息。 
keywords: PostgreSQL 集群信息；
weight: 05
collapsible: false
draft: false
---


一个 PostgreSQL 集群即一个独立运行的数据库计算资源组合，包含数据库、服务器、存储磁盘、私有网络等云资源。

PostgreSQL 集群目前支持`基础版`、`高可用版`两个系列。

|<span style="display:inline-block;width:60px">系列</span> |<span style="display:inline-block;width:220px">版本说明</span>|<span style="display:inline-block;width:340px">适应场景</span> |
|:----|:----|:----|
|基础版   |  单节点 |  适用于个人学习、小型网站、开发测试等场景。 |
|高可用版  |  默认2个节点。<li>可添加 `Proxy 实例`和`只读实例`节点。<li>一主一从高可用架构，主从节点支持同步流复制或者异步流复制模式。 |采用一主一从的经典高可用架构，提供数据库高可用保障服务。适用于企业生产环境，电商、游戏、金融、政企等核心数据库场景。|
