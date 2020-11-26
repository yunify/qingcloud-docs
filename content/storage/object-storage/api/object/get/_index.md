---
title: "Get Object"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# GET Object

用于获取指定对象，此操作要求请求者对存储空间拥有可读权限。

> 如果存储空间被设置为对匿名用户可读，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可读权限，则请求该接口会返回权限错误。

## Request Syntax

```http
GET /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
Range: bytes=<byte-range>
```

## Request Parameters

使用请求参数可以设置响应头中的响应字段。

> 如果请求中包含以下请求参数，则该请求必须携带认证信息，同时携带的认证信息也需要对以下的请求参数进行签名。

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| response-expires | String | 设置响应头中的 Expires 字段 | No |
| response-cache-control | String | 设置响应头中的 Cache-Control 字段 | No |
| response-content-type | String | 设置响应头中的 Content-Type 字段 | No |
| response-content-language | String | 设置响应头中的 Content-Language 字段 | No |
| response-content-encoding | String | 设置响应头中的 Content-Encoding 字段 | No |
| response-content-disposition | String | 设置响应头中的 Content-Disposition 字段。若要支持指定浏览器下载的文件名中带中文，需要拼接参数 "?response-content-disposition=" + url_quote('attachment; filename="'+url_quote(filename) + "\"; filename=*utf-8''" + url_quote(filename)) 具体见下边请求样例。 | No |

## Request Headers

参见[公共请求头](../common/common_header.html#请求头字段-request-header)

若对象需要加密，参见[加密请求头](/qingstor/api/common/encryption.html#加密请求头)

若对象附有标准 HTTP 头或自定义元数据，参见[如何获取对象元数据](../common/metadata.html#如何获取对象元数据)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Range | String | 下载对象的某个字节区间，详情可见：[http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35) 当附加该请求头时，处理成功后返回的状态码为 206 Partial Content | No |
| If-Modified-Since | Date | 如果该对象自从指定时间往后被修改过，则正常下载对象，并返回 200 OK；否则返回 304 NOT MODIFIED | No |
| If-Unmodified-Since | Date | 如果该对象自从指定时间往后没有被修改过，则正常下载对象，并返回 200 OK；否则返回 412 PRECONDITION FAILED | No |
| If-Match | String | 如果对象内容的 ETag 值符合给定的值，则正常下载对象，并返回 200 OK；否则返回 412 PRECONDITION FAILED。该值请使用 HTTP 规范所规定的格式 [https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) | No |
| If-None-Match | String | 如果对象内容的 ETag 值不同于给定的值，则正常下载对象，并返回 200 OK；否则返回 304 NOT MODIFIED | No |

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../common/common_header.html#响应头字段-request-header)

若对象被加密，服务端将返回加密响应头, 具体请参见[加密响应头](/qingstor/api/common/encryption.html#加密响应头)

## Status Code

该 API 为幂等操作. 成功则返回 200; object 或 bucket 不存在会返回 404; 假如开启了外部镜像功能并且对象在 Bucket 中不存在, 有可能返回 302 重定向. 失败的返回码参考[错误码列表](../common/error_code.html)

## Response Body

正常情况下为对象实体内容, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

## Example

### Example Request

```http
GET /myphoto.jpg HTTP/1.1
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
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
[7987 bytes of object data]
```

### Example Request 带response-content-disposition

```http
GET /mybucket/test.htm?response-content-disposition=attachment%3B%20filename%3D%22%25E6%25B5%258B%25E8%25AF%2595%25E6%2596%2587%25E4%25BB%25B6%2528%25E5%2593%2588%25E5%2593%2588%25E5%2593%2588%2529.txt%22%3B%20filename%2A%3Dutf-8%27%27%25E6%25B5%258B%25E8%25AF%2595%25E6%2596%2587%25E4%25BB%25B6%2528%25E5%2593%2588%25E5%2593%2588%25E5%2593%2588%2529.txt&省略参数认证信息 HTTP/1.1
Host: sh1a.qingstor.com
Accept: */*
```

### Example Response 带content-disposition

```http
HTTP/1.1 200 OK
Date: Thu, 04 Jan 2018 17:11:23 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 11437
Connection: keep-alive
Content-Disposition: attachment; filename="%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%28%E5%93%88%E5%93%88%E5%93%88%29.txt"; filename*=utf-8''%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%28%E5%93%88%E5%93%88%E5%93%88%29.txt
Etag: "0dc1550ee20d5e14ee0153ddc149d9d1"
Last-Modified: Thu, 09 Nov 2017 16:18:58 GMT
x-qs-request-id: afdd603b0021971e
x-qs-storage-class: STANDARD
[11437 bytes of object data]
```
