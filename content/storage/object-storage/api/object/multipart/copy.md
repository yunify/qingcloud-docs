---
title: "Copy Object Part"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---



用于从源存储空间复制一个对象到一个分段，请求参数需要携带初始化分段上传阶段得到的 Upload ID。该请求需要对存储空间有可写权限。

关于分段大小的规定，请参看 [分段上传限制](../#分段上传限制)

如果源存储空间的对象大小大于 5G, 可以通过设置 `Request Headers` 中的 `x-qs-copy-range` 参数分多次复制。

> 目前只支持在同一区域 (Zone) 内复制。

## Request Syntax

```http
PUT /<object-name>?upload_id=<upload-id>&part_number=<part-number> HTTP/1.1
x-qs-copy-source: /source-bucket/source-object
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 upload_id | Yes |
| part_number | Integer | 分段序号，合并时需按照序号从小到大顺序，数值必须大于等于0 | Yes |

## Request Headers

参见[公共请求头](../../../common_header/)

如果源对象是加密的，参见[如何Copy加密过的对象](../../../common/encryption/#如何copy加密过的对象)

目标对象加密，参见数据[加密请求头](../../../common/encryption/#加密请求头)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| x-qs-copy-source | String | 指定源对象，格式为：`/source-bucket/source-object`， 需进行URL编码。格式错误将返回 400 INVALID ARGUMENT | Yes |
| x-qs-copy-range | String | 复制源对象的某个字节区间，取值可参考 [公共请求头](../../../common_header/#object-storage-common-header) 中的 `Range` 头字段 | No |
| x-qs-copy-source-if-modified-since | Date | 如果源对象自从指定时间往后被修改过，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-Unmodified-Since | Date | 如果源对象自从指定时间往后没有被修改过，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-Match | String | 如果源对象内容的 ETag 值符合给定的值，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-None-Match | String | 如果源对象内容的 ETag 值不同于给定的值，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |

## Request Body

没有请求消息体

## Status Code

成功则返回 201, 失败的返回码参考[错误码列表](../../../error_code/)

## Response Headers

[参见公共响应头](../../../common_header/#响应头字段)

若对象被加密，服务端将返回[加密响应头](../../../common/encryption/#加密响应头)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)

## Example

### Example Request

```http
PUT /large-object?upload_id=4d26b37a469230619604ecdc0e314782&part_number=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
x-qs-copy-source: /source-bucket/source-object
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b
```
