---
title: "Move Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从源 Bucket 移动一个 Object 到目标 Bucket。

## 使用须知

- 此操作要求请求者对源 Bucket 拥有可读权限，对目标 Bucket 拥有可写权限。
- 源 Bucket 与目标 Bucket 可相同，因此该接口可用于重命名 Object。
- 当目标 Object 已存在时，该操作会对目标对象的内容进行覆盖。
- 目前只支持在同一个 Zone 内的 Bucket 间进行移动。
- 如果源 Object 是加密的，那么目标 Object 也会使用同样的加密方式，且 Move 后会保留所有密文和元数据。对加密的源 Object 调用该 API 不需要提供加密请求头。

## 请求语法

```http
PUT /<object-name> HTTP/1.1
x-qs-move-source: /source-bucket/source-object
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求消息头

该 API 接口支持如下消息头：

| 字段 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| x-qs-move-source | String | 指定源 Object，格式为：`/source-bucket/source-object`， 需进行URL编码。 | 是 |
| x-qs-move-source-if-modified-since | Date | 若指定的时间早于源 Object 被修改的时间，则正常 Move 该 Object | 否 |
| x-qs-move-source-if-unmodified-since | Date | 若指定的时间晚于源 Object 被修改的时间，则正常 Move 该 Object | 否 |
| x-qs-move-source-if-match | String | 若源 Object 的 `ETag` 值符合该给定的值，则正常 Move 该 Object | 否 |
| x-qs-move-source-if-none-match | String | 若源 Object 的 `ETag` 值不符合该给定的值，则正常 Move 该 Object | 否 |

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

若该 Object 有元数据，则响应头会携带元数据信息。具体可参考 [对象元数据](/storage/object-storage/api/metadata/) 相关内容。

若该 Object 为加密对象，则响应头会携带加密信息。具体可参考 [加密对象](/storage/object-storage/api/object/encryption/) 相关内容。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

移动成功返回 201，假如源 Object 不存在或目标 Bucket 不存在返回 404；其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
x-qs-move-source: /source-bucket/source-object
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Length: 0
Connection: close
Request-ID: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。