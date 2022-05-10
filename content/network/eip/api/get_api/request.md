---
title: "构造请求"
description: 本小节主要介绍如何构造 API 请求。 
keyword: 公网IP, API 请求, 构造请求
draft: false
weight: 10
collapsible: false
---

本文介绍 API 请求的组成及示例说明。

## 请求结构

请求 URL 由如下部分组成：

| <span style="display:inline-block;width:100px">参数</span> | 描述                                                   | 说明                                      |
| :--------------------------------------------------------- | :----------------------------------------------------- | :---------------------------------------- |
| API 入口                                                   | API 调用的 webservice 入口。                           | 统一为：`https://api.qingcloud.com/iaas/` |
| 公共参数                                                   | 每个 API 调用都需要包含公共参数 。                     | 详见 [公共参数](../parameters)            |
| 指令名称                                                   | API **action** 指令的名称，例如 `DescribeInstances` 。 | -                                         |
| 指令参数                                                   | 指令相关配置参数。                                     | -                                         |

## 请求示例

一个典型的 API 请求如下所示，这是一个 `AllocateEips` 的 API 请求：

```url
https://api.qingcloud.com/iaas/?action=AllocateEips&bandwidth=2&billing_mode=bandwidth&eip_name=dev&zone=pek3a&COMMON_PARAMS
```

转换为便于查阅的模式，如下：

```url
https://api.qingcloud.com/iaas/?action=AllocateEips
&bandwidth=2
&billing_mode=bandwidth
&eip_name=dev
&zone=pek3a
&COMMON_PARAMS
```
