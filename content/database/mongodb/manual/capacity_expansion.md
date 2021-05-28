---
title: "扩容集群"
description: 本小节主要介绍如何扩容 QingCloud MongoDB 集群。 
keywords: mongodb 扩容集群, 自动伸缩
data: 2021-05-14T00:38:25+09:00
weight: 15
collapsible: false
draft: false
---


## 在线扩容

可以对一个运行中的集群进行在线扩容，调整CPU/内存/磁盘空间大小。

![](../../_images/scale1.png)

注解：扩容需要在开机状态下进行，扩容会导致重新选主，请在业务低峰时进行

## 硬盘自动伸缩

Mongo 应用数据盘被占满会导致 mongod 服务进程挂掉

我们在 _MongoDB 4.0.3 QingCloud 1.4.0_ 版本中新增了「应用存储空间」自动伸缩的功能，您可以参照 [自动伸缩](https://docs.qingcloud.com/product/operation/autoscaling) 来实现您的自动伸缩自定义
