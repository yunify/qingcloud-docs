---
title: "构造请求"
description: 本小节主要介绍如何构造 API 请求。 
keyword: QingCloud, 青云, 云计算, NAT 网关, 请求, api 请求, 构造请求
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

一个典型的 API 请求如下所示，这是一个 `DescribeInstances` 的 API 请求：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeInstances&expires=2020-08-29T07%3A42%3A25Z&limit=20&signature_method=HmacSHA256&signature_version=1&status.1=running&time_stamp=2020-08-29T06%3A42%3A25Z&version=1&zone=pek3b&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```

转换为便于查阅的模式，如下：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE
&action=DescribeInstances
&expires=2020-08-29T07%3A42%3A25Z
&limit=20
&signature_method=HmacSHA256
&signature_version=1
&status.1=running
&time_stamp=2020-08-29T06%3A42%3A25Z
&version=1
&zone=pek3b
&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```
