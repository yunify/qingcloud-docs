---
title: "概述"
description: 本小节主要介绍如何进行 ClickHouse 集群 api 概述。 
keyword: ClickHouse 概述；api 概述
draft: false
weight: 05
collapsible: false
---


ClickHouse 服务是一款深度定制的 ClickHouse 集群应用。具备高性能，支撑PB级数据，提供实时分析，稳定可扩展等特性。适用于数据仓库、BI报表、监控系统、互联网用户行为分析、广告投放业务以及工业、物联网等分析和时序应用场景。

本文档提供 ClickHouse 对数据库集群进行相关操作，如创建集群、创建节点、创建帐号等。

建议在调用 ClickHouse 的 API 前，先充分熟悉 ClickHouse 相关功能和服务。

## 调用 API

ClickHouse 开放的所有资源操作相关的 API，支持通过 HTTPS GET 方式进行调用。

在调用 API 前，需要先申请API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。
