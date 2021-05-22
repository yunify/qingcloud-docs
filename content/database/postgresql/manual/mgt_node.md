---
title: "节点管理"
description: 只读实例，读写分离实例，proxy 实例，重建从节点
weight: 2
draft: false
---


本小节主要介绍如何创建节点、重建节点。

## 创建只读实例

  点击**新增节点**，选择**只读实例**。

  ![创建只读实例](../../_images/add_ri.png)

## 创建读写分离 Proxy 实例

  点击**新增节点**，选择 **proxy 实例** 。

  ![创建proxy实例](../../_images/add_proxy.png)

## 重建从节点

  当出现从节点复制异常的情况下，可以通过重建从节点修复。

  在集群**基本属性**区域，点击集群自定义服务，选择**重建从库**。

  ![数据备份功能](../../_images/pg_rebuildStandby.png)
