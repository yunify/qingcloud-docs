---
title: "访问 Storm UI"
description: 访问 Storm UI。
keyword: 云计算,大数据,Storm,访问 Storm UI
weight: 70
draft: false
---

Storm 集群主节点上启动了 Storm UI 服务。

Storm UI 服务是一个基于 Web 的监控服务，它不仅可以查看集群、配置、Topology 以及各组件（Spout 和 Bolt）等的信息和日志，还可以暂停、激活、删除 Topology，更是 Topology 运行时的重要调优工具。

## 前提条件

- 已创建 Storm 集群，且 Storm 集群状态为**活跃**。
- 获取 storm_ui_vip。storm_ui_vip 在集群详情页的左侧栏。
- 配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。
- 建议添加 Storm 节点 host 至本地开发环境的 host 文件中，这样可以更加方便的通过 Storm UI 在本地浏览器上查看日志。

   > **说明**
   > 
   > 获取 Storm 节点 host：查看客户端节点 /etc/hosts 目录下 host 文件。

## 操作步骤

在本地浏览器中输入 `http://<Storm UI VIP>:8080`，进入 Storm UI 页面。

> **说明**
> 
> 假如 Storm UI VIP 为 `192.168.0.63`，则在浏览器输入 `http://192.168.0.63:8080/`。

