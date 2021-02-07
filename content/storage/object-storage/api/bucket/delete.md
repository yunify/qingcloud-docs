---
title: "DELETE Bucket"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 4
---


删除 URI 中指定的存储空间。存储空间需要为空，且是活跃状态才可以被删除。(注意因为计费系统的要求, Bucket 创建和删除之间需要有个约一分鐘以上的时间差)

即要先删除其中的对象，后删除存储空间，删除对象可参见 [DELETE Object](../../object/delete) 。

## Request Syntax

```http
DELETE / HTTP/1.1
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

成功则返回 204; Bucket 不存在会返回404; Bucket 中还存在 Object 或者还有未清理的上传分段, 返回 409 bucket_not_empty.  Bucket 计费信息未准备好则会返回 403 lease_not_ready (需要过段时间再试). 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)


## Example

### Example Request

```http
DELETE / HTTP/1.1
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
