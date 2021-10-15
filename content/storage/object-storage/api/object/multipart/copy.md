---
title: "Copy Object Part"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从源 Bucket 分段复制一个 Object 至目标 Object，请求参数需要携带初始化分段上传阶段得到的 Upload ID。

## 使用须知

- 该操作要求请求者对指定的 Bucket 拥有可写权限。
- 关于分段大小的规定，请参看 [分段上传限制](../#分段上传限制)
- 若源 Object 的大小大于 5G，用户可以通过设置请求头中的 `x-qs-copy-range` 参数分多次复制。
- 目前仅支持在同一区域 (Zone) 内复制。

## 请求语法

```http
PUT /<object-name>?upload_id=<upload-id>&part_number=<part-number> HTTP/1.1
x-qs-copy-source: /source-bucket/source-object
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数用以设置响应头中的响应字段。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 `upload_id` | 是 |
| part_number | Integer | 分段序号，合并时需按照序号从小到大顺序合并，数值必须大于等于 0，且小于等于 10000 | 是 |

## 请求消息头

### 自定义 HTTP 头

该 API 接口支持如下消息头：

| 字段 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| x-qs-copy-source | String | 指定源 Object Key，格式为：`/source-bucket/source-object`， 需进行URL编码。 | 是 |
| x-qs-copy-range | String | 复制源 Object 的某个字节区间，取值可参考 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header) 中的 Range 头字段 | 否 |
| x-qs-copy-source-if-modified-since | Date | 若指定的时间早于源 Object 被修改的时间，则正常复制该 Object | 否 |
| x-qs-copy-source-If-Unmodified-Since | Date | 若指定的时间晚于源 Object 被修改的时间，则正常复制该 Object | 否 |
| x-qs-copy-source-If-Match | String | 若源 Object 的 ETag 值符合该给定的值，则正常复制该 Object | 否 |
| x-qs-copy-source-If-None-Match | String | 若源 Object 的 ETag 值不符合该给定的值，则正常复制对象 | 否 |

### 标准 HTTP 头

此接口还需包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 加密对象

若源对象是加密的，则需提供相应的加密请求头。具体可参考 [如何 Copy 加密过的对象](/storage/object-storage/api/object/encryption/#如何copy加密过的对象)。

若用户需对目标 Object 进行加密，则需提供相应的加密请求头。具体可参考 [加密对象](/storage/object-storage/api/object/encryption/#加密请求头) 相关内容，添加相应请求头。

## 请求消息体

无。

## 响应头

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

成功则返回 201，失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /large-object?upload_id=4d26b37a469230619604ecdc0e314782&part_number=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
x-qs-copy-source: /source-bucket/source-object
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