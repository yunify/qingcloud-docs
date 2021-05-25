---
title: "数据重分布"
description: 本小节主要介绍如何管理 RadonDB 数据重分布。 
keywords: radondb 数据重分布,
data: 2021-05-14T00:38:25+09:00
weight: 35
collapsible: false
draft: false
---



当几个存储节点的数据分布存在不均衡或者添加存储节点后，可以使用该服务对数据进行在线重分布。

![数据重分布](../../_images/rebalance_data.png)

**注解**：清理原数据为 false 时，需要用户在命令行自行执行 `radon cleanup` 清理旧数据。
