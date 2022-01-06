---
title: "集群概述"
description: 本小节主要介绍 RocketMQ 集群基本信息。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,集群信息；
weight: 05
collapsible: false
draft: false
---


一个 RocketMQ 集群即一个独立运行的资源组合，包含服务器、存储磁盘、私有网络等云资源。

## 资源控制组

RocketMQ 集群默认有两个资源控制组：`测试环境`、`生产环境`。

| <span style="display:inline-block;width:120px">资源控制组</span> | <span style="display:inline-block;width:540px">资源说明</span> |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 测试环境                                                     | <li>2核2G Broker及slave节点 x 1<li>1核1G客户端节点 x 1<li>1核1G名称服务器节点 x 1<li>1核1G网页控制台节点 x 1 |
| 生产环境                                                     | <li>4核8G Broker及slave节点 x 3<li>1核1G客户端节点 x 1<li>2核4G名称服务器节点 x 2<li>2核2G网页控制台节点 x 1 |
