---
title: "List Multipart Parts"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于列出已经上传的分段信息。该请求需要对 Bucket 有可读权限。

## 使用须知
- 该操作要求请求者对指定的 Bucket 拥有可读权限。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可读权限，该请求返回错误。

## 请求语法

```http
GET /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数用以设置响应头中的响应字段。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 `upload_id` | 是 |
| part_number_marker | Integer | 设定结果从 `part_number_marker` 之后按分段序号排序的第一个开始返回 | 否 |
| limit | Integer | 限定此次返回分段的最大数量，该数值不能大于 1000 | 否 |

## 请求消息头

此接口仅包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。详细内容可参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应消息体

成功调用该 API 接口后，服务端会返回如 [响应示例](#响应示例) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| object_parts | List | 消息体顶层 |
| part_number | Integer | 分段序号 |
| created | Date | 分段创建时间 |
| size | Integer | 分段大小 |
| etag | String | 服务器端为分段内容生成的唯一标志 |
| count | Integer | 分段数量 |

## 错误码

成功则返回 200；若 `upload_id` 不存在则返回 404； 其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 243
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b

{
    "count": 3,
    "object_parts": [
        {"part_number": 1, "size": 10485760, "created": "2015-08-16T14:52:12.000Z", "etag": "64ec234786ffc5c20306ec441b65a521"},
        {"part_number": 2, "size": 10485760, "created": "2015-08-16T14:52:16.000Z", "etag": "3efbe3ebbcf4e07111591576fc0d3829"},
        {"part_number": 3, "size": 61440, "created": "2015-08-16T14:52:16.000Z", "etag": "1522531043073c5fedb61a8bb06451c7"}
    ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。