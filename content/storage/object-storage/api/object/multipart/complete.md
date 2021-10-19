---
title: "Complete Multipart Upload"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于结束一个分段上传，从而获得一个完整的 Object。当一个分段上传完成后，用户未调用该接口，则该分段上传仍然处于未完成的状态，此时调用 GET 请求获得该 Object 会返回错误。


## 使用须知

- 该操作要求请求者对指定的 Bucket 拥有可读权限。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。

## 请求语法

```http
POST /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数用以设置响应头中的响应字段。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 `upload_id` | 是 |

## 请求消息头

### 标准 HTTP 头

读取分段上传合并后的 Object 全部内容所需时间较长，为了避免阻塞，QingStor 对象存储服务不会自动为合并后的文件计算 ETag 值，需要用户自行在调用此接口时设置。此处设置的 ETag 值会在用户调用 HEAD Object 接口时，通过响应头返回。

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| ETag | String | 该值请使用 [HTTP 规范](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19) 所规定的格式。| 否 |

此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 加密对象

若用户操作的 Object 为加密对象，则需提供相应的加密请求头。具体可参考 [加密对象](/storage/object-storage/api/object/encryption) 相关内容，添加相应请求头。

## 请求消息体

调用该 API 需携带如 [请求示例](#请求示例) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| object_parts | List | 消息体顶层，需要按照 `part_number` 递增排序 |
| part_number | Integer | 分段序号，大于等于 0，小于等于 10000 |
| etag        | String  | 该分段内容的校验码，可选 |

**备注：**
- `part_number` 不一定需要连续，但需要递增。
- 允许用户在最终合并分段时，排除掉某些已上传分段。

## 响应头

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

成功则返回 201，其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
POST /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.<zone-id>.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Authorization: authorization string
ETag: "0c2f573d81194064b129e940edcefe9b"

{
    "object_parts": [
        {"part_number": 0, "etag": "c837682353601f7fc0a2ccb6bc8f4654"},
        {"part_number": 2, "etag": "28e2c0c6574a1ef20ac41d16a012a7c1"}
    ]
}
```

### 响应示例

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

