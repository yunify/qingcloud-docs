---
title: "节点概述"
description: 介绍节点相关概念及功能。
draft: false
enableToc: false
keyword: 青云, QingCloud, 云计算, QKE, 节点
weight: 1
---

## 什么是节点

节点是组成容器集群的基本元素，Kubernetes 将容器放入容器组（Pod）中并在节点上运行，从而运行工作负载。节点取决于业务，可以为虚拟机或物理机。QKE 集群使用青云 QingCloud 云服务器作为节点。

## 节点类型及规格

QKE 集群包含以下类型节点：

- 主节点（Master）：Kubernetes 集群的管理者，运行着的服务包括 kube-apiserver、kube-scheduler、kube-controller-manager、etcd 组件，以及容器网络相关的组件。

- 工作节点（Worker）：Kubernetes 集群中承担工作负载的节点，负责实际的 Pod 调度以及与控制节点的通信等。

  其中，工作节点分为**工作节点-基础型**及**工作节点-企业型**：

  - 工作节点-基础型：可选择所有 [基础型 s1](/compute/vm/intro/basic/) 机型（除2c/4g）。
  - 工作节点-企业型：可选择所有 e3 机型，包括[计算型 ec3](/compute/vm/intro/enterprise/#计算型-ec3)、[通用型 eg3](/compute/vm/intro/enterprise/#通用型-eg3) 及[内存型 er3](/compute/vm/intro/enterprise/#内存型-er3)。

## 节点管理

在 QKE 集群列表，点击集群名称，进入集群概览页。然后在左侧导航栏，选择**资源管理** > **节点管理**，进入**节点管理**页面。

![](/container/qke_plus/_images/node_mgt.png)

**节点管理**页面展示当前集群的所有节点。

> **说明**
>
> 托管版集群仅展示工作节点；自管版集群则展示主节点及工作节点。

您可以进行如下节点管理操作：

- [调整节点数量](../node_amount/)，通过新增或删除节点来进行集群横向扩/缩容。
- [更改节点配置](../node_cfg/)，通过更新主节点或工作节点的规格、硬盘大小来达到集群扩容的目的。
- [节点弹性伸缩](../auto_node/)，通过云平台提供的自动伸缩功能，配置节点根据所设置的条件进行弹性伸缩，防止节点资源不足或浪费。

