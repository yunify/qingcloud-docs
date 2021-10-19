---
title: "Upload Object Part"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于上传一个分段，请求参数需要携带初始化分段上传阶段得到的 Upload ID。

## 使用须知
- 该操作要求请求者对指定的 Bucket 拥有可写权限。
- 关于分段大小的规定，请参看 [分段上传限制](../#分段上传限制)。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。

## 请求语法

```http
PUT /<object-name>?upload_id=<upload-id>&part_number=<part-number> HTTP/1.1
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

### 标准 HTTP 头

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Content-Length | String | 对象实体的大小 | 是 |
| Content-MD5 | String | 分段实体的预期 MD5 值，用于检查 Object 在传输过程中字符是否出错或被篡改 | 否 |
| Expect | String | 若请求头附加这个参数，则该请求中无需附带请求消息体，QingStor 对象存储服务端可接受此请求，并返回状态码： 100  | 否 |

此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 加密对象

若用户需加密对象，则需提供相应的加密请求头。具体可参考 [加密对象](/storage/object-storage/api/object/encryption) 相关内容，添加相应请求头。

## 请求消息体

分段内容实体。

## 响应头

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功 | 201 |
| - | `upload_id` 不存在 | 404 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /large-object?upload_id=4d26b37a469230619604ecdc0e314782&part_number=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 7987
Authorization: authorization string
[7987 bytes of object data]
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


