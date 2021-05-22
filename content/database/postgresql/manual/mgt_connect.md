---
title: "访问管理"
description: test
weight: 4
draft: false
---

本小节主要介绍如何查看服务端口信息，切换私有网络。

## 服务端口信息

集群提供三个高可用 IP。

- 高可用写 IP ：始终指向 Primary 节点。

- 高可用读 IP ：可将请求在所有节点之间进行负载分担，提高读取性能，消除单点故障。

- 高可用 Proxy IP ：始终指向 Proxy 实例的 Primary 节点。

![查看VIP的信息](../../_images/vipinfo.png)   

## 切换私有网络 

  当需要改变集群节点 IP 或者改变私有网络时，可 `切换私有网络` 。

  在集群**基本属性**区域，点击集群自定义服务，选择**切换私有网络**。

  ![切换私有网络](../../_images/change_vxnet.png)
