---
title: "DELETE Bucket"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 4
---


该接口用于删除指定的 Bucket。待删除的 Bucket 需为空，且是活跃状态。由于计费系统的要求，Bucket 的创建和删除操作之间，需要相差一分钟以上。

若待删除 Bucket 不为空，需先删除存储于该 Bucket 中的对象，再删除该 Bucket。删除对象可参考 [Delete Object](/storage/object-storage/api/object/basic_opt/delete/)。

## 请求语法

```http
DELETE / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功删除 Bucket| 204 |
| bucket_not_exists | Bucket 不存在| 404 |
| bucket_not_empty | Bucket 不为空| 409 |
| lease_not_ready | Bucket 计费信息尚未准备好| 403 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
DELETE / HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
