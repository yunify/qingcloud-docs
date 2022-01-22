---
title: "日志概述"
description: 本小节主要介绍 MongoDB 日志基本信息。 
keyword: 日志信息,MongoDB,文档数据库,数据库
weight: 05
collapsible: false
draft: false
---


Caddy Web 是一款易用的开源 Web 服务端，是一款无需额外配置即可提供 HTTPS 特性的 Web 服务器。

MongoDB 通过集成 Caddy Server，支持通过 HTTP 服务预览和下载日志，HTTP 服务默认端口为 `8000` 。

- `mongod.log` 记录 MongoDB 的全部系统和操作踪迹。

- `mongod.log` 主要包括系统日志、Journal 日志、oplog 主从日志、慢查询日志、错误日志等。
