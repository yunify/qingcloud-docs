---
title: "概述"
description: 本小节主要介绍如何进行 ChronusDB 集群 api 概述。 
keyword: ChronusDB 概述；api 概述
draft: false
weight: 05
collapsible: false
---


ChronusDB 是一款基于 ClickHouse 定制的高效、安全、易用时序数据库，具备超强的查询分析功能、高性能并发读写、低成本存储、丰富的时序数据处理能力、稳定可扩展等特性。

本文档提供 ChronusDB 对数据库集群进行相关操作，如创建集群、创建节点、创建帐号等。

建议在调用 ChronusDB 的 API 前，先充分熟悉 ChronusDB 相关功能和服务。

## 调用 API

ChronusDB 开放的所有资源操作相关的 API，支持通过 HTTPS GET 方式进行调用。

在调用 API 前，需要先申请API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。
