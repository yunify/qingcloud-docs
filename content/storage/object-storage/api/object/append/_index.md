---
title: "Append Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---


用于以追加写的方式上传对象到存储桶，通过 Append Object 接口创建的对象类型为 appendable。

## 使用限制

- 每次追加写的数据不能超过 5 GB，Object 的总大小不能超过50TB；
- 非 appendable 类型的 Object 不能被追加写；
- appendable 类型的 Object 不支持加密；

## Request Syntax

```http
POST /<object-name>?append&position=<position> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name     | Type    | Description                                                  | Required |
| -------- | ------- | ------------------------------------------------------------ | -------- |
| append   | String  | 表示以追加写的方式上传对象                                       | Yes      |
| position | Integer | 用于指定追加写的位置。首次追加写的position值必须为0，后续追加操作的position等于当前Object大小，当position大于或小于当前object大小时请求会返回400（invalid_argument) | Yes      |

## Request Headers

参见[公共请求头](../../common_header/#请求头字段)

| Header Name        | Type   | Description                                                  | Required |
| ------------------ | ------ | ------------------------------------------------------------ | -------- |
| Content-Length     | String | 本次追加写入的数据的大小                                        | Yes      |
| Content-Type       | String | 对象的类型, 首次写入的时候指定                                   | No       |
| Content-MD5 	     | String |	本次追加写入的数据的 MD5 值，用于检查数据在传输过程中是否出错或被篡改 | No       |
| x-qs-storage-class | String | 指定该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"，默认存储级别为"STANDARD"。存储级别错误将返回 400 INVALID_REQUEST; 首次写入的时候指定 | No       |

## Request Body

对象实体内容

## Response Headers

参见[公共响应头](../../common_header/#响应头字段)

| Header Name               | Type     | Description                                      | Required |
| ------------------------- | -------- | ------------------------------------------------ | -------- |
| x-qs-next-append-position | Interger | 下一次请求应当提供的position，即当前Object大小。 | Yes      |

## Status Code

成功则返回 200, 失败的返回码参考[错误码列表](../../error_code/)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 JSON 消息, 参考[错误码列表](../../error_code/)

## Example

### Example Request

```http
POST /obj-append?append&position=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Dec, 16 Aug 2019 09:05:00 GMT
Content-Length: 1024
Authorization: authorization string
[1024 bytes of object data]
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Dec, 16 Aug 2019 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 3f2cf9ac3168744d
x-qs-next-append-position: 1024
```
