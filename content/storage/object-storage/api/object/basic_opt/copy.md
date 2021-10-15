---
title: "Copy Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从源 Bucket 复制一个 Object 到目标 Bucket。

## 使用须知
- 此操作要求请求者对源 Bucket 拥有可读权限，对目标 Bucket 拥有可写权限。
- 源 Bucket 与目标 Bucket 可相同。因此该接口可用于重命名 Object。即先调用此接口复制该 Object，然后再删除源 Object。
- 目前实体 Object 单次复制的大小最大支持 5G。若源 Object 大小超过该限制，可使用 [分段上传](/storage/object-storage/api/object/multipart/)。
- 当目标 Object 已存在时，该操作会对目标 Object 的内容进行覆盖。
- 目前仅支持在同一区域内复制 Object。

## 请求语法

```http
PUT /<object-name> HTTP/1.1
x-qs-copy-source: /source-bucket/source-object
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
| x-qs-copy-source | String | 指定源 Object Key，格式为：`/source-bucket/source-object`， 需进行URL编码。 | 是 |
| x-qs-copy-source-if-modified-since | Date | 若指定的时间早于源 Object 被修改的时间，则正常复制该 Object | 否 |
| x-qs-copy-source-If-Unmodified-Since | Date | 若指定的时间晚于源 Object 被修改的时间，则正常复制该 Object | 否 |
| x-qs-copy-source-If-Match | String | 若源 Object 的 `ETag` 值符合该给定的值，则正常复制该 Object | 否 |
| x-qs-copy-source-If-None-Match | String | 若源 Object 的 `ETag` 值不符合该给定的值，则正常复制对象 | 否 |
| x-qs-storage-class | String | 指定 Object 的存储级别。默认值为 `STANDARD`。若 `x-qs-copy-source` 与目标 Object 相同，则仅变更该对象的存储级别，不发生拷贝。可设定的值如下：<br> - `STANDARD` 标准存储 <br> - `STANDARD_IA` 低频存储  | 否 |

若源 Object 是加密对象，可参考 [加密对象-copy](/storage/object-storage/api/object/encryption/) 相关内容，添加相应请求头。

如需为目标 Object 加密，可参考 [加密对象](/storage/object-storage/api/object/encryption/) 相关内容，添加相应请求头。

若用户需复制源 Object 附带的元数据给目标对象，或修改添加相应的元数据信息，可参考 [对象元数据](/storage/object-storage/api/metadata/) 相关内容，添加相应请求头。

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

若目标对象被加密，服务端将返回加密响应头, 具体请参见 [加密响应头](/storage/object-storage/api/object/encryption/)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

复制成功返回 201，假如源 Object 不存在或目标 Bucket 不存在返回 404；其他失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
x-qs-copy-source: /source-bucket/source-object
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
