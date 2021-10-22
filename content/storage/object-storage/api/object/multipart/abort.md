---
title: "Abort Multipart Upload"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于终止一个分段上传，并删除已经上传的分段。该操作要求请求者对指定的 Bucket 拥有可读权限。

## 使用须知

- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。

## 请求语法

```http
DELETE /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数用以设置响应头中的响应字段。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 `upload_id` | 是 |

## 请求消息头

此接口仅包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

该 API 为幂等操作。成功调用，则返回 204，无论分段上传存在或不存在；Bucket 不存在返回404。其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
DELETE /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。