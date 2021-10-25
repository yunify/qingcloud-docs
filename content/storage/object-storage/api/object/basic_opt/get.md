---
title: "Get Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从指定 Bucket 获取一个 Object。

## 使用须知

- 该操作要求请求者对指定的 Bucket 拥有可读权限。
- 若指定的 Bucket 被设置为匿名用户可读，则请求中可不携带用户认证信息；
- 若指定的 Bucket 被设置为匿名用户可读，但请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可读权限，该请求返回错误。

## 请求语法

```http
GET /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
Range: bytes=<byte-range>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数用以设置响应头中的响应字段。需注意的是，当用户在请求头中添加以下参数时，则该请求必须携带认证信息，且携带的认证信息也需要对以下的请求参数进行签名。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| response-expires | String | 设置响应头中的 Expires 字段 | 否 |
| response-cache-control | String | 设置响应头中的 Cache-Control 字段 | 否 |
| response-content-type | String | 设置响应头中的 Content-Type 字段 | 否 |
| response-content-language | String | 设置响应头中的 Content-Language 字段 | 否 |
| response-content-encoding | String | 设置响应头中的 Content-Encoding 字段 | 否 |
| response-content-disposition | String | 设置响应头中的 Content-Disposition 字段。若要支持指定浏览器下载的文件名中带中文，需要拼接参数 "?response-content-disposition=" + url_quote('attachment; filename="'+url_quote(filename) + "\"; filename=*utf-8''" + url_quote(filename)) 具体见下边请求样例。 | 否 |

## 请求消息头

### 标准 HTTP 头

| 字段名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Range | String | 下载对象的某个字节区间，当附加该请求头时，处理成功后返回的状态码为 206 Partial Content。 | 否 |
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

若该 Object 有元数据，则响应头会携带元数据信息。具体可参考 [对象元数据](/storage/object-storage/api/metadata/) 相关内容。

若该 Object 为加密对象，则响应头会携带加密信息。具体可参考 [加密对象](/storage/object-storage/api/object/encryption/) 相关内容。

其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

该 API 为幂等操作。

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 回源成功 | 200 |
| - | 源 Object 不存在或目标 Bucket 不存在 | 404 |
| - | 开启了外部镜像功能并且 Object 在 Bucket 中不存在 | 302 |


其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 示例一：

请求示例：

```http
GET /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

响应示例：

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
[7987 bytes of object data]
```

### 示例二：带 `response-content-disposition`

请求示例：

```http
GET /mybucket/test.htm?response-content-disposition=attachment%3B%20filename%3D%22%25E6%25B5%258B%25E8%25AF%2595%25E6%2596%2587%25E4%25BB%25B6%2528%25E5%2593%2588%25E5%2593%2588%25E5%2593%2588%2529.txt%22%3B%20filename%2A%3Dutf-8%27%27%25E6%25B5%258B%25E8%25AF%2595%25E6%2596%2587%25E4%25BB%25B6%2528%25E5%2593%2588%25E5%2593%2588%25E5%2593%2588%2529.txt&省略参数认证信息 HTTP/1.1
Host: sh1a.qingstor.com
Accept: */*
```

响应示例：

```http
HTTP/1.1 200 OK
Date: Thu, 04 Jan 2018 17:11:23 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 11437
Connection: keep-alive
Content-Disposition: attachment; filename="%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%28%E5%93%88%E5%93%88%E5%93%88%29.txt"; filename*=utf-8''%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6%28%E5%93%88%E5%93%88%E5%93%88%29.txt
Etag: "0dc1550ee20d5e14ee0153ddc149d9d1"
Last-Modified: Thu, 09 Nov 2017 16:18:58 GMT
x-qs-request-id: afdd603b0021971e
x-qs-storage-class: STANDARD
[11437 bytes of object data]
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

