---
title: "数据库参数"
description: 本小节主要介绍 MongoDB 参数问题。 
keyword: 配置参数问题,MongoDB,文档数据库,数据库
weight: 50
collapsible: false
draft: false
---

## 支持在线修改哪些参数？

MongoDB 服务目前支持在线修改 `setParameter.cursorTimeoutMillis`、`operationProfiling.mode`、`operationProfiling.slowOpThresholdMs` 、`operationProfiling.slowOpThresholdMs`、`replication.enable MajorityReadConcern` 5个参数。

更多 MongoDB 参数说明，请参见 [MongoDB 官网](https://docs.mongodb.com/v3.2/reference/parameters/)。

> **注意**
> 
> 未开放参数修改后，可能影响业务的正常运行。若需修改未开放参数，请联系技术支持。
