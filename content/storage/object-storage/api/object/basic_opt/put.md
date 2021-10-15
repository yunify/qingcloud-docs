---
title: "Put Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

该 API 接口用于向指定 Bucket 上传一个 Object。

## 使用须知

- 该操作要求请求者对指定的 Bucket 拥有可写权限。
- Bucket 中的文件夹是模拟概念，控制台展现文件列表时，会自动根据 Object 名中的 `/` 生成文件夹。
- 用户可以调用此接口上传空的 Object，并指定 Object 名以 `/` 结尾，来创建一个空文件夹。
- 若指定的 Bucket 中已存在同名的 Object，QingStor 对象存储会在该 Object 完整上传完成后，替换已有 Object。
- 若同时有多个上传请求写入同一个 Object Key，则最后一个被 QingStor 对象存储处理的请求会覆盖之前上传的 Object 内容。
- 在用户调用该 API 上传数据之前，用户可以只发送 HTTP 请求头，不携带请求实体，并在请求头中添加 `Expect: 100-continue`，来提前得知该请求是否能被 QingStor 对象存储正确接受与处理。当用户上传的对象实体非常庞大时，可以通过该方式提前知道该上传请求中的认证信息是否正确，请求域名是否需要重定向等，从而减少不必要的数据传输。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可写，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。

## 请求语法

```http
PUT /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

QingStor 对象存储上传 Object 时，支持标准 HTTP 请求头和自定义请求头。若用户上传 Object 时设置了这些请求头，则下载该 Object 时，相应的请求头的值会自动使用上传 Object 时设置的值。各请求头字段说明如下：

### 标准 HTTP 头

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Content-Length | String | 对象实体的大小 | 是 |
| Content-MD5 | String | 对象实体的 MD5 值，用于检查对象在传输过程中是否出错或被篡改 | 否 |

此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 元数据

若用户需创建 Object 元数据，可参考 [对象元数据](/storage/object-storage/api/metadata/) 相关内容，添加相应请求头。

### 加密对象

若用户需加密 Object，可参考 [加密对象](/storage/object-storage/api/object/encryption/#加密请求头) 相关内容，添加相应请求头。

### 存储级别

若用户需指定上传 Object 的存储级别，可添加如下请求头：

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| x-qs-storage-class | String | 指定对象的存储级别。默认值为 `STANDARD`，可选值：<br> - `STANDARD` 表示标准存储 <br> - `STANDARD_IA` 表示低频存储。| 否 |


## 请求消息体

Object 实体内容。

## 响应头

若对象被加密，服务端将返回 [加密响应头](/storage/object-storage/api/object/encryption/#加密响应头)。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应消息体

该 API 成功返回 201 时，没有响应消息体，失败返回错误码对应的 Json 格式消息体，详情参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 错误码

该 API 为幂等操作。成功则返回 201，失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 7987
Authorization: authorization string
[7987 bytes of object data]
```

### 响应示例

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
