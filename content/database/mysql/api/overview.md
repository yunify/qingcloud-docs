---
title: "概述"
description: 本小节主要介绍如何进行 MySQL Plus 集群 api 概述。 
keyword: mysql plus 概述；api 概述
draft: false
weight: 05
collapsible: false
---


MySQL Plus 云数据库是基于 MySQL 提供的高可用、高性能数据库服务，支持一主多从高可用架构，并具备安全、自动备份、监控告警、自动扩容等全套管理功能。

本文档提供 MySQL Plus 对数据库集群进行相关操作，如创建集群、创建节点、在线迁移、创建帐号等。

建议在调用 MySQL Plus 的 API 前，先充分熟悉 MySQL Plus 相关功能和服务。

## 调用 API

MySQL Plus 开放的所有资源操作相关的 API，支持通过 HTTPS GET 方式进行调用。

在调用 API 前，需要先申请API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。
