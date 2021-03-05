---
title: "Head Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---


只返回对象的元信息，不返回对象内容。此操作要求请求者对存储空间拥有可读权限。

> 如果存储空间被设置为对匿名用户可读，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可读权限，则请求该接口会返回权限错误。

如果你只需要获取对象的元信息，或者检查对象是否存在，可使用该接口。

## Request Syntax

```http
HEAD /<object-name> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
Range: bytes=<byte-range>
```

## Request Parameters

没有请求参数

## Request Body

没有请求消息体

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

对象加密，参见[加密请求头](../../common/encryption/#加密请求头)

若对象附有标准 HTTP 头或自定义元数据，参见[如何获取对象元数据](../../metadata/#如何获取对象元数据)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| If-Modified-Since | Date | 如果该对象自从指定时间往后被修改过，则正常下载对象，并返回 200 OK；否则返回 304 NOT MODIFIED | No |
| If-Unmodified-Since | Date | 如果该对象自从指定时间往后没有被修改过，则正常下载对象，并返回 200 OK；否则返回 412 PRECONDITION FAILED | No |
| If-Match | String | 如果对象内容的 ETag 值符合给定的值，则正常下载对象，并返回 200 OK；否则返回 412 PRECONDITION FAILED | No |
| If-None-Match | String | 如果对象内容的 ETag 值不同于给定的值，则正常下载对象，并返回 200 OK；否则返回 304 NOT MODIFIED | No |

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

若对象被加密，服务端将返回[加密响应头](../../common/encryption/#加密响应头)

| Name | Type | Description |
| --- | --- | --- |
| Content-Type | String | 对象类型 |
| Content-Length | Integer | 正常情况下为对象大小, 错误情况下没意义 |
| Last-Modified | Date | 对象更新时间 |
| ETag | String | 服务器端为对象内容生成的唯一标志 |
| x-qs-storage-class | String | 该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA" |
| x-qs-object-type | String | 该对象的类型，当对象类型为appendable时，返回该header |
| x-qs-next-append-position | String |对象下次追加写的位置，当对象类型为appendable时，返回该header|

## status code

该 API 为幂等操作. 成功则返回 200; object 或 bucket 不存在会返回 404. 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Body

根据 HTTP 规范, 任何情况下(无论是成功或失败)都没有响应消息体.

## Example

### Example Request

```http
HEAD /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-storage-class: STANDARD
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
