---
title: "HTTPS 访问超时"
draft: false
enableToc: false
weight: 10
---

**问题现象**：

使用 HTTPS 协议地址访问 Harbor 时出现连接超时

**解决办法**：

1. 确认前端负载均衡器的 https 监听器中**负载均衡器监听协议通过 X-Forwarded-Proto 头字段获取负载均衡器的监听协议**已勾选。

   ![harbor-create-add-proto](/container/harbor/_images/harbor-create-add-proto.png)

2. 若已勾选，仍无法解决，请通过工单联系技术支持。

