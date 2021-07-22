---
title: "日志概述"
description: 本小节主要介绍 MySQL Plus 日志基本信息。 
keywords: mysql plus 日志信息；
weight: 05
collapsible: false
draft: false
---



MySQL Plus 支持通过 HTTP 服务预览和下载日志，HTTP 服务端口为 `18801` 。

|<span style="display:inline-block;width:80px">日志标记</span> |<span style="display:inline-block;width:240px">日志类型</span>|<span style="display:inline-block;width:280px">说明</span> |
|:----|:----|:----|
|mysql-error   |   错误日志    |  记录 MySQL 执行错误信息。默认仅保留六个日志文件。|
|mysql-slow   |     慢日志    |  记录 MySQL 慢日志信息。默认仅保留六个日志文件。|
|mysql-audit   |   审计日志    |  记录 MySQL 审计日志信息。|
|mysql-bin   |   binlog 文件    |   MySQL binlog 文件信息。|
|mysql-cert   |   SSL 证书文件    |   MySQL SSL 证书文件信息。|
