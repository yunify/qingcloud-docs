---
title: "概述"
description: 本小节主要介绍弹性高性能计算 EHPC API 接口的概述。 
keyword: 弹性高性能计算 EHPC, api 概述
draft: false
weight: 10
collapsible: false
---

弹性高性能计算 EHPC 基于云基础设施，为用户提供基于公有云、专属云、混合云等多种产品形态，面向科研机构、学校教育、工业生产、行业计算等用户提供弹性灵活、快捷高效、安全可靠的超算服务。

本文档提供弹性高性能计算 EHPC 通过调用接口的方式调用集群、作业、队列等信息，用户可以在公有云创建自己的集群，通过API调用使用。

建议在调用弹性高性能计算 EHPC 的 API 前，先充分熟悉弹性高性能计算 EHPC 相关功能和服务。

## 调用 API

弹性高性能计算 EHPC 开放的所有资源操作相关的 API，支持通过 HTTPS GET 方式进行调用。

在调用 API 前，需要先申请 API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。
