---
title: "Copy Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Object - Copy

用于从源存储空间复制一个对象到目标存储空间，此操作要求请求者对源存储空间拥有可读权限，对目标存储空间拥有可写权限。源存储空间与目标存储空间可相同。因此该接口可用于重命名对象，即先调用此接口复制对象，然后删除源对象。

目前实体对象单次复制的大小最大支持 5G，如果源的对象大小超过此限制，请参考 [Multipart API 分段对象的拷贝](../multipart)。

当目标对象已存在时，该操作会对目标对象的内容进行覆盖。

目前只支持在同一区域内复制。

## Request Syntax

```http
PUT /<object-name> HTTP/1.1
x-qs-copy-source: /source-bucket/source-object
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../common/common_header.html#请求头字段-request-header)

如果源对象是加密的，参见[如何Copy加密过的对象](/qingstor/api/common/encryption.html#如何copy加密过的对象)

为目标对象加密，参见[加密请求头](/qingstor/api/common/encryption.html#加密请求头)

如果要复制源对象附带的元数据给目标对象，或用请求头中的支持的 HTTP 头和自定义元数据作为目标对象附带的元数据，参见[如何复制或替换对象元数据](../common/metadata.html#如何复制或替换对象元数据)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| x-qs-copy-source | String | 指定源对象，格式为：`/source-bucket/source-object`， 需进行URL编码。格式错误将返回 400 INVALID ARGUMENT | Yes |
| x-qs-copy-source-if-modified-since | Date | 如果源对象自从指定时间往后被修改过，则正常复制对象, 否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-Unmodified-Since | Date | 如果源对象自从指定时间往后没有被修改过，则正常复制对象, 否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-Match | String | 如果源对象内容的 ETag 值符合给定的值，则正常复制对象，否则返回 412 PRECONDITION FAILED | No |
| x-qs-copy-source-If-None-Match | String | 如果源对象内容的 ETag 值不同于给定的值，则正常复制对象，否则返回 412 PRECONDITION FAILED | No |
| x-qs-storage-class | String | 指定该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"，默认存储级别为"STANDARD"。如果 Copy Source 与该对象相同，将变更该对象的存储级别。存储级别错误将返回 400 INVALID_REQUEST | No |

## Request Body

没有请求消息体

## Status Code

复制成功返回 201, 假如源 object 不存在或目标 Bucket 不存在返回 404; 其他失败的返回码参考[错误码列表](../common/error_code.html).

## Response Headers

参见[公共响应头](../common/common_header.html#响应头字段-request-header)

若目标对象被加密，服务端将返回加密响应头, 具体请参见[加密响应头](/qingstor/api/common/encryption.html#加密响应头)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

## Example

### Example Request

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
x-qs-copy-source: /source-bucket/source-object
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Length: 0
Connection: close
Request-ID: aa08cf7a43f611e5886952542e6ce14b
```
