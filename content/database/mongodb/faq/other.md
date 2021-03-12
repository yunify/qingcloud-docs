---
title: "其他"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
---

- 如果您需要保持数据的强一致性，可以在客户端通过修改配置项来实现，配置方式可参考 [官方文档](https://docs.mongodb.com/manual/core/replica-set-write-concern/)

- 在使用 mongodb 的过程中建议您使用长连接，您可以通过「连接数」监控项来判断您的可用连接数，在可用连接数不大于 3 的时候，建议您检查下您的客户端是否需要这么多的连接，并合理释放连接数，您也可以根据需要通过修改配置参数来放大您的可用连接数。

![](../../_images/add_connections.png)