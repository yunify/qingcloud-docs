---
title: "Delete Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从指定 Bucket 中删除一个 Object。该操作要求请求者对指定的 Bucket 拥有可写权限，不允许匿名访问。

## 请求语法

```http
DELETE /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求消息头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

该 API 为幂等操作。成功则返回 204，无论此前 Object 存在或不存在。Bucket 不存在会返回 404。其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
DELETE /myphoto.jpg HTTP/1.1
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

