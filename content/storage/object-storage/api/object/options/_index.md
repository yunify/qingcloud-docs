---
title: "Options Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

# OPTIONS Object

用户或浏览器向 QingStor 的 Object 发起预检请求(preflight request),用以确定是否能向该跨源请求发出回应。

> 当用户的请求属于跨源请求时,需要在正式通信前,增加一次 HTTP 的查询请求(OPTIONS)，询问服务器当前所在的源，是否在服务器的白名单中, 以及哪些 HTTP 动作，头信息 是其可以使用的。 这些策略通过 [PUT Bucket CORS](../bucket/cors/put_cors.html#object-storage-api-put-bucket-cors) 来设置。

## Request Syntax

```http
OPTIONS /<object-name> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
Origin: Origin
Access-Control-Request-Method: <http-method>
Access-Control-Request-Headers: <request-header>
```

## Request Parameters

没有请求参数

## Request Headers

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Origin | String | 跨源请求的源。 | Yes |
| Access-Control-Request-Method | String | 跨源请求的 HTTP method 。 | Yes |
| Access-Control-Request-Headers | String | 跨源请求中的 HTTP headers (逗号分割的字符串)。 | No |

## Request Body

没有请求消息体

## Response Headers

| Header Name | Type | Description |
| --- | --- | --- |
| Access-Control-Allow-Origin | String | 跨源请求所允许的源。如果跨源请求没有被允许，该头信息将不会存在于响应头中。 |
| Access-Control-Max-Age | String | 预检请求的结果被缓存的时间（单位为秒）。 |
| Access-Control-Allow-Methods | String | 跨源请求中的 HTTP method 。如果跨源请求没有被允许，该头信息将不会存在于响应头中。 |
| Access-Control-Allow-Headers | String | 跨源请求中可以被允许发送的 HTTP headers (逗号分割的字符串)。 |
| Access-Control-Expose-Headers | String | 跨源请求的响应中,客户端（如 JavaScript Client） 可以获取到的 HTTP headers (逗号分割的字符串)。 |

## Response Body

没有响应内容
