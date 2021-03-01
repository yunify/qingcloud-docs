---
title: "操作指南"
linkTitle: "操作指南"
weight: 5
collapsible: true
---

# 控制台用户指南

对象存储服务（Object Storage）提供了一个在线文件存储和访问平台，您可以将数据、日志、静态分发资源等多种文件类型，通过控制台或 Object Storage API 传到一个 Bucket 中，以供 HTTP 访问或数据分析使用。

本文档描述在青云控制台上创建、使用和管理对象存储 Bucket，如果您是开发者，还可以通过 Object Storage API 或 SDK 来管理 Bucket，请参考：[对象存储 API 文档](../api/overview/)

以下是文档涉及的主要概念：

- **Bucket**： 对象存储的容器单位，每个 Bucket 是权限控制、监控和计费的独立单元。用户可以创建的 Bucket 数有配额限制。
- **文件**： 即 API 文档中的 Object，是存储在 Bucket 内的实际内容单元，对应上传和下载的文件。
- **文件夹**： 特殊的 Object，控制台中用以给文件分组的单元。

- [Bucket 管理](bucket_manage/)
- [Object管理](object_manage/)
- [监控与报表](monitor/)
- [访问控制](access_control/)
- [日志归档](logging/)
- [生命周期管理](lifecycle/)
- [跨区域复制](replication/)
- [数据加密](encryption/)
- [数据处理](data_process/)
- [客户端工具](developer-tools/)
- [第三方数据集成](third_party_integration/)
