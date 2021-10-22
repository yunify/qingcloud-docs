---
title: "Head Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从指定 Bucket 获取一个 Object 的元数据，QingStor 对象存储仅返回该 Object 的元数据信息，不返回该 Object 的内容。

## 使用须知

- 此操作要求请求者对指定 Bucket 拥有可读权限。
- 若指定的 Bucket 被设置为匿名用户可读，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可读，请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可读权限，该请求返回错误。
- 用户可调用该 API 接口检查相应的 Object 是否存在。

## 请求语法

```http
HEAD /<object-name> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
Range: bytes=<byte-range>
```

## 请求参数

无。

## 请求消息头

### 标准 HTTP 头

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| If-Modified-Since | Date | 设置对象修改时间。若该对象自该指定时间后被修改过，则正常下载该对象。 | 否 |
| If-Unmodified-Since | Date | 设置对象修改时间。若该对象自该指定时间往后没有被修改过，则正常下载该对象。 | 否 |
| If-Match | String | 若该对象内容的 `ETag` 值符合该给定的值，则正常下载对象。| 否 |
| If-None-Match | String | 若该对象内容的 `ETag` 值不符合该给定的值，则正常下载对象。 | 否 |

此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 加密对象

若用户获取的 Object 为加密对象，则需提供相应的加密请求头。具体可参考 [加密对象](/storage/object-storage/api/object/encryption/) 相关内容，添加相应请求头。

## 请求消息体

无。

## 响应头

各字段说明如下：

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| Content-Type | String | Object 类型 |
| Content-Length | Integer | Object 大小。当服务端返回状态码为 200 时，该字段有意义。 |
| Last-Modified | Date | Object 最后一次更新时间 |
| ETag | String | 服务器端为 Object 内容生成的唯一标志 |
| x-qs-storage-class | String | Object 的存储级别，支持的存储级别为 `STANDARD` 和 `STANDARD_IA` |
| x-qs-object-type | String | Object 的类型，当 `Content-Type` 为 `appendable` 时，返回该字段。|
| x-qs-next-append-position | String | Object 下次追加写的位置，当 `Content-Type` 为 `appendable` 时，返回该字段。|

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

该 API 为幂等操作，成功则返回 200。当 Object 或 Bucket 不存在时，会返回 404。其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
HEAD /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-storage-class: STANDARD
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
