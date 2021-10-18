---
title: "概述"
date: 2021-07-14T10:08:56+09:00
description:
draft: false
weight: 1
---

青云 QingCloud 控制台是界面形式的 Web 应用程序，直观易用。用户可以通过青云 QingCloud 控制台，进入 QingStor 对象存储的相关界面，将数据、日志、静态分发资源等多种文件类型，通过控制台上传至一个 Bucket 中，以供 HTTP 访问或数据分析使用。

本文档描述在青云 QingCloud 控制台上创建、使用和管理对象存储 Bucket。如果您是开发者，还可以通过 QingStor 对象存储 API 或 SDK 来管理 Bucket。详细内容，请参考：[QingStor 对象存储 API 文档](/storage/object-storage/api/) 与 [QingStor 对象存储 SDK 文档](/storage/object-storage/sdk/)

关于 QingStor 对象存储的功能介绍及应用场景，请参考 [QingStor 对象存储功能概述](/storage/object-storage/intro/function_list/)

## 相关概念
以下是本文档涉及的主要概念：

- **Bucket**： 对象存储的容器单位，每个 Bucket 是权限控制、监控和计费的独立单元。用户可以创建的 Bucket 数量有配额限制。
- **文件**： 即 API 文档中的 Object，是存储在 Bucket 内的实际内容单元，对应上传和下载的文件。
- **文件夹**： 特殊的 Object，控制台中用以给文件分组的单元。
- 其他内容，可参考 [QingStor 对象存储基本概念](/storage/object-storage/intro/object-storage/#基本概念)

## 操作台主界面

登录 [管理控制台](https://console.qingcloud.com/login)，选择 **产品与服务** > **存储服务** > **对象存储**，进入 QingStor 对象存储的主页面。

![](../_images/console_main.png)

如上图所示，QingStor 对象存储的主页面是 Bucket 列表。

