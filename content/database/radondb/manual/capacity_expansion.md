---
title: "扩容集群"
description: 本小节主要介绍如何扩容 RadonDB 集群。 
keywords: radondb 扩容集群,
data: 2021-05-14T00:38:25+09:00
weight: 20
collapsible: false
draft: false
---



## 扩容集群

可以对一个运行中的数据库服务进行在线扩容，资源配置类型选择『自定义』调整 CPU/内存/磁盘空间大小。

![扩容集群](../../_images/scale.png)

**注解**：扩容需要在开机状态下进行，扩容 SQL 节点时链接会有短暂中断，请在业务低峰时进行。

## 自动伸缩

RadonDB 支持自动扩容应用存储空间，详细请参考[自动伸缩](https://docs.qingcloud.com/product/operation/autoscaling)。

![自动伸缩](../../_images/autoscaling_1.png)

![自动伸缩](../../_images/autoscaling_2.png)

![自动伸缩](../../_images/autoscaling_3.png)

![自动伸缩](../../_images/autoscaling_4.png)
