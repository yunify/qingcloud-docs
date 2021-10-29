---
title: "Elasticsearch API 说明"
description: 本小节主要介绍 Elasticsearch API 使用说明。
keywords: Elasticsearch 插件列表,
weight: 37
collapsible: false
draft: false
---

## 安全

Elasticsearch 本身的 API 没有提供安全机制，同时 Elasticsearch 的 API 的功能非常强大，所以强烈不建议通过公网将 Elasticsearch 直接暴露出去，Elasticsearch 需要在应用或者 API 网关后面。 

针对Elasticsearch的攻击频发，因此建议用户通过 VPN 的方式而不是端口转发的方式访问集群节点，配置青云 VPN 的方法详见 [用户指南](../../../../../network/vpc/manual/vpn/) 。
