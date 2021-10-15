---
title: "Options Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

当用户的请求属于跨源请求时，需要在正式通信前，增加一次 HTTP 的查询请求，询问服务器当前所在的源，是否在服务器的白名单中，以及哪些 HTTP 动作，头信息是其可以使用的。

该 API 接口便是用于向 QingStor 对象存储的 Object 发起预检请求，以确定是否能向该跨源请求发出回应。

## 请求语法

```http
OPTIONS /<object-name> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
Origin: Origin
Access-Control-Request-Method: <http-method>
Access-Control-Request-Headers: <request-header>
```

## 请求参数

无。

## 请求消息头

该 API 接口支持如下消息头：

| 字段 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Origin | String | 跨源请求的源。 | 是 |
| Access-Control-Request-Method | String | 跨源请求的 HTTP Method 。 | 是 |
| Access-Control-Request-Headers | String | 跨源请求中的 HTTP Headers (逗号分割的字符串)。 | 否 |

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

使用该接口，QingStor 对象存储会返回如下响应头：

| Header Name | Type | Description |
| --- | --- | --- |
| Access-Control-Allow-Origin | String | 跨源请求所允许的源。如果跨源请求没有被允许，该头信息将不会存在于响应头中。 |
| Access-Control-Max-Age | String | 预检请求的结果被缓存的时间（单位为秒）。 |
| Access-Control-Allow-Methods | String | 跨源请求中的 HTTP Method 。如果跨源请求没有被允许，该头信息将不会存在于响应头中。 |
| Access-Control-Allow-Headers | String | 跨源请求中可以被允许发送的 HTTP Headers (逗号分割的字符串)。 |
| Access-Control-Expose-Headers | String | 跨源请求的响应中，客户端（如 JavaScript Client） 可以获取到的 HTTP Headers (逗号分割的字符串)。 |

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
