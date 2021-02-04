---
title: "HEAD Bucket"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---


判断一个存储空间是否存在，以及是否有权限访问这个空间。 如果可访问，会返回 200 ，否则会返回 404 或 403 。

## Request Syntax

```http
HEAD / HTTP/1.1
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

## Status Code

成功则返回 200; 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Response Body

根据 HTTP 规范, 任何情况下(无论是成功或失败)都没有响应消息体.

## Example

### Example Request

```http
HEAD / HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
