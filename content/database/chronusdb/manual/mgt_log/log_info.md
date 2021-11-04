---
title: "日志概述"
description: 本小节主要介绍 ChronusDB 日志基本信息。 
keywords: ChronusDB 日志信息；
weight: 05
collapsible: false
draft: false
---



ChronusDB 支持通过 HTTP 服务预览和下载日志，HTTP 服务端口为 `18801` 。

|<span style="display:inline-block;width:80px">日志标记</span> |<span style="display:inline-block;width:240px">日志类型</span>|<span style="display:inline-block;width:280px">说明</span> |
|:----|:----|:----|
|clickhouse-servererr   |   服务错误日志    |  记录 ChronusDB 服务执行错误信息。默认仅保留六个日志文件。|
|clickhouse-server  |     服务日志    |  记录 ChronusDB 服务执行信息。默认仅保留六个日志文件。|
