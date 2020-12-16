---
title: "Bucket CORS"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# DELETE Bucket CORS

删除存储空间的跨源资源共享(cors)策略, cors 只有存储空间的所有者才能删除。

获取 cors 请参见 [GET Bucket CORS](../get_cors) 。

设置 cors 请参见 [PUT Bucket CORS](../put_cors) 。

发起 Object OPTIONS 请参见 [OPTIONS Object](../../object/options.html#object-storage-api-options-object) 。

## Request Syntax

```http
DELETE /?cors HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 204. 失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)


## Example

### Example Request

```http
DELETE /?cors HTTP/1.1
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
