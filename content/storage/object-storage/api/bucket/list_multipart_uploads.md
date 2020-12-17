---
title: "List Multipart Uploads"
---

# List Multipart Uploads

获取正在进行的分段上传对象的列表。当一个对象通过 Initiate Multipart 接口开启了分段上传模式，在调用 Complete Multipart 或 Abort Multipart 接口之前，该对象处于“正在进行分段上传”的状态，此对象将会出现在该接口返回的列表里。

与 [GET Bucket (List Objects)](../get#object-storage-api-get-bucket) 接口类似，用户可以通过传递 prefix, delimiter 请求参数，指定获取某个目录下面正在进行的分段上传。列表按照对象名称的 alphanumeric 顺序从小到大排序。如果同名对象有多个分段上传，翻页被截断后只显示了一部分，下次翻页可通过 upload_id_marker 参数，获取该 upload_id 往后按创建时间排序后剩下的分段上传。

注解

如果用户只想获取某个对象已经上传的分段，请查阅 [List Multipart](../../object/multipart/list#object-storage-api-list-multipart)

## Request Syntax

```http
GET /?uploads HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| prefix | String | 限定返回的分段上传对象名必须以 prefix 作为前缀 | No |
| delimiter | Char | 用于给对象名分组的字符。返回的对象名是从指定的 prefix 开始，到第一次出现 delimiter 字符之间的对象名 | No |
| key_marker | String | 设定结果从 key 之后按字母排序的第一个分段上传开始返回 | No |
| upload_id_marker | String | 设定结果从 upload_id 之后按时间排序的第一个分段上传开始返回 | No |
| limit | Integer | 限定此次返回的分段对象的最大数量，默认值为 200，最大允许设置 1000 | No |

## Request Headers

> 参见[公共请求头](../../common_header#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 200; 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../common_header#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)

| Name | Type | Description |
| --- | --- | --- |
| name | String | 存储空间的名称 |
| prefix | String | 请求参数 prefix |
| delimiter | Char | 请求参数 delimiter |
| marker | String | 请求参数 marker |
| limit | Integer | 请求参数 limit |
| next_key_marker | String | 本次返回列表里的最后一个 key 或 common prefix, 当已经列取完全部的内容将返回空 |
| next_upload_id_marker | String | 如果有多个同名的分段上传，翻页时可能会被截断，该值是本次返回结果里最后一个 upload id，用于下一次请求参数 upload_id_marker 代表下一页的起始标志 |
| uploads | List | 正在进行的分段上传对象列表 |
| common_prefixes | String | 如果请求中指定了 delimiter 参数 , 那么返回所有以 prefix 开头到第一个 delimiter 之间的分段上传对象名称的集合 |

## Example

### Example Request

```http
GET /?uploads&prefix=Movies/&delimiter=/&limit=6 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 25 Dec 2016 19:02:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 25 Dec 2016 19:02:00 GMT
Content-Length: 604
Connection: close
x-qs-request-id: aa08cf7a43f611e5

{
  "name": "mybucket",
  "uploads": [
    {
      "created": "2016-12-25T16:02:05.000Z",
      "key": "Movies/Star-Wars-2015.mp4",
      "upload_id": "44e76b0f5eda308e"
    },
    {
      "created": "2016-12-23T09:15:30.000Z",
      "key": "Movies/The-Godfather-1972.mp4",
      "upload_id": "8c0dc4f83f063d39"
    },
    {
      "created": "2016-12-23T02:17:00.000Z",
      "key": "Movies/The-Matrix-1999.mp4",
      "upload_id": "07ae9cab876a33a3"
    },
    {
      "created": "2016-12-24T09:15:30.000Z",
      "key": "Movies/The-Matrix-1999.mp4",
      "upload_id": "9f58a11f26cce132"
    },
  ],
  "prefix": "Movies/",
  "delimiter": "/",
  "limit": 6,
  "key_marker": "",
  "upload_id_marker": "",
  "next_key_marker": "Sci-Fi/",
  "next_upload_id_marker": "",
  "common_prefixes": [
    "Cartoon/",
    "Love/"
  ]
}
```

> 该接口只列出未完成的对象，假设还有一个目录叫 “Sci-Fi/” 但是目录下没有未完成的分段上传，那么不会列出这个目录
