---
title: "Delete Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---


用于删除指定对象，此操作要求请求者对存储空间拥有可写权限, 不允许匿名访问。

## Request Syntax

```http
DELETE /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Status Code

该 API 为幂等操作. 成功则返回 204 (无论此前object 存在或不存在). Bucket 不存在会返回404. 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)

## Example

### Example Request

```http
DELETE /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
