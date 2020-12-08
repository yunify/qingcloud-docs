---
title: "Bucket Logging"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---


# DELETE Bucket Logging

删除 Bucket Logging 设置，只有存储空间所有者才能删除。

获取 Bucket Logging 请参见 [GET Bucket Logging](../get_logging) 。

设置 Bucket Logging 请参见 [PUT Bucket Logging](../put_logging) 。

## Request Syntax

```http
DELETE /?logging HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 204. 失败的返回码参考[错误码列表](../common/error_code.html)

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

## Example

### Example Request

```http
DELETE /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Content-Length: 0
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: <date>
Content-Length: 0
Connection: close
X-QS-Request-ID: aa08cf7a43f611e5886952542e6ce14b
```
