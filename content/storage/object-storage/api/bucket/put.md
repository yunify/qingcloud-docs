---
title: "PUT Bucket"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 1
---


创建一个新的存储空间，创建成功后，空间的 owner 就是 API 调用者。

存储空间的名称有一定的要求:

- 遵守 DNS 命名规则。
- 长度在 6 ~ 63 之间。
- 只能包含 小写字母，数字和连接字符 `-`。
- 只能以小写字母或数字开头或结尾。
- 不能是有效 IP 地址。

如下面的是合法名称：

- `[√]` mybucket
- `[√]` my-bucket

下面的是非法名称：

- `[X]` Invalid Bucket
- `[X]` .mybucket
- `[X]` mybucket-
- `[X]` my_bucket

> 匿名用户无法调用此 API ，请先注册青云账户并创建 Access Key ID 和 Secret Access Key 对 。

## Request Syntax

```http
PUT / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

## Status Code

成功则返回 201; 若 Bucket 已存在则 409 bucket_already_exists. Bucket 个数配额超出限制(可通过发工单提高) 返回 403 too_many_buckets.  其他失败的返回码参考[错误码列表](../../error_code/)

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Example

### Example Request

```http
PUT / HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
