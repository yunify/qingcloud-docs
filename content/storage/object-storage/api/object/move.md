---
title: "Move Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Object - Move

用于从源存储空间移动一个对象到目标存储空间，此操作要求请求者对源存储空间拥有读写权限，对目标存储空间拥有可写权限。源存储空间与目标存储空间可相同，因此该接口可用于重命名对象。

> 注意:
>
> 当目标对象已存在时，该操作会对目标对象的内容进行覆盖。
>
> 目前只支持在同一区域 (Zone) 内的存储空间进行移动。
>
> 如果源对象是加密的，那么目标对象也会使用一样的加密方式，Move 后会保留所有密文和元数据。对加密的源对象调用该 API 不需要提供加密请求头。
>
> 如果源对象附有自定义元数据，Move 后会保留所有自定义元数据。

## Request Syntax

```http
PUT /<object-name> HTTP/1.1
x-qs-move-source: /source-bucket/source-object
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| x-qs-move-source | String | 指定源对象，格式为：`//`， 需进行URL编码。格式错误将返回 400 INVALID ARGUMENT | Yes |
| x-qs-move-source-if-modified-since | Date | 如果源对象自从指定时间往后被修改过，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-move-source-if-unmodified-since | Date | 如果源对象自从指定时间往后没有被修改过，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-move-source-if-match | String | 如果源对象内容的 ETag 值符合给定的值，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |
| x-qs-move-source-if-none-match | String | 如果源对象内容的 ETag 值不同于给定的值，则正常复制对象，并返回 201 OK；否则返回 412 PRECONDITION FAILED | No |

## Request Body

没有请求消息体

## Status Code

移动成功返回 201, 假如源 object 不存在或目标 Bucket 不存在返回 404; 其他失败的返回码参考[错误码列表](../../error_code/).

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)

## Example

### Example Request

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
x-qs-move-source: /source-bucket/source-object
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
