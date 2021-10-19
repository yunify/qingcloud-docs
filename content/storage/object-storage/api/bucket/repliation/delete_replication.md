---
title: "Delete Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于删除 Bucket 的跨区域复制相关设置。QingStor 对象存储定义跨区域复制为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
DELETE /?replication HTTP/1.1
Host: <bucket-name>.<zone_id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功删除跨区域复制相关设置 | 204 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
DELETE /?replication HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Mon, 1 Oct 2018 15:04:01 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。