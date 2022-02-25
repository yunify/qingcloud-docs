---
title: "访问 Kibana"
description: 本小节主要介绍如何访问 Kibana。 
keyword: Elasticsearch 可视化工具,访问 kibana，可视化平台
weight: 20
collapsible: false
draft: false
---

Kibana 是 Elasticsearch 的可视化工具，提供面向用户的 Elasticsearch 插件管理服务，包括安全性、警报、索引状态管理、SQL 管理等插件。  
更多 Kibana 使用和功能介绍，请参见 [Kibana Guide](https://www.elastic.co/guide/en/kibana/master/index.html)。

本小节主要介绍如何访问 Kibana。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ELK 集群，且集群状态为**活跃**。
- 若需通过外网访问 Kibana，请先通过设置[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 获取访问信息

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入 ELK 集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**服务端口信息**模块，获取 Kibana 节点端口，默认为 5601。
5. 在**节点**页签，获取 Kibana 节点 IP。

## 访问 Kibana
   
1. 在浏览器输入 `http://<kibana_IP >:<kibana_port >`，进入 Kibana 管理页面。

2. 展开左侧菜单导航栏，即可进行可视化数据管理和多租户管理工作。

   <img src="../../_images/kibana_elk.png" alt="Kibana" style="zoom:50%;" />

> **说明**
>
> 关于 Kibana 更多的使用方式，请参考 [Kibana Guide](https://www.elastic.co/guide/en/kibana/master/index.html)。
