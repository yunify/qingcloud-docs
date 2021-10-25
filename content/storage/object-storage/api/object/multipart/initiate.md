---
title: "Initiate Multipart Upload"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于初始化一个分段上传。针对该请求，QingStor 对象存储会返回一个 Upload Id，用于后续上传分段时，标记该分段所属 Object。

## 使用须知

- 该操作要求请求者对指定的 Bucket 拥有可写权限。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。

## 请求语法

```http
POST /<object-name>?uploads HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求消息头

### 标准 HTTP 头

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Content-Type | String | 对象的类型 | 否 |
| x-qs-storage-class | String | 指定该对象的存储级别。默认值为 `STANDARD`。可选值为：<br> - `STANDARD` 表示标准存储；<br> - `STANDARD_IA` 表示低频存储。 | 否  |

此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。


### 加密对象

若用户需加密对象，则需提供相应的加密请求头。具体可参考 [加密对象](/storage/object-storage/api/object/encryption) 相关内容，添加相应请求头。

### 元数据

若用户需给 Object 添加元数据，可参考 [对象元数据](/storage/object-storage/api/metadata/#可修改的元数据) 相关内容，进行添加创建对象元数据。

## 请求消息体

无。

## 响应头

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应消息体

成功调用该 API 接口后，服务端会返回如 [响应示例](#响应示例) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| bucket | String | 存储桶名名称 |
| key | String | 对象名称 |
| upload_id | String | 分段上传 ID。用于唯一标识该分段上传过程，作为后续上传分段的参数。|

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
POST /large-object?uploads HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Type: application/json
Content-Length: 90
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b

{
    "upload_id": "4d26b37a469230619604ecdc0e314782",
    "bucket": "mybucket",
    "key": "large-object"
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
