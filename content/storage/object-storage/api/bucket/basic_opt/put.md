---
title: "PUT Bucket"
date: 2021-08-17T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 1
---


用于创建一个新的 Bucket。创建成功后，该 Bucket 的所有者就是 API 的调用者。匿名用户默认无法调用此 API，请先注册青云账户并 [申请 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。

## 请求语法

```http
PUT / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

**说明**
- Bucket 名称在 Qingstor 对象存储中是全局唯一的，并且遵守 DNS 规则。
- Bucket 的命名规范：由长度为 6 ～ 63 的小写字母、数字、中划线组成的字符串，且以字母或数字开始和结尾。
- Bucket 配额可通过工单申请调整。

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
| OK | 成功创建 Bucket| 201 |
| bucket_already_exists | 创建 Bucket时，Bucket 已存在| 409 |
| too_many_buckets | 创建 Bucket 时，超出限额。| 403 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT / HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。







