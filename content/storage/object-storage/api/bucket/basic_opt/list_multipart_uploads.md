---
title: "List Multipart Uploads"
---

该接口用于获取 Bucket 内正在进行的分段上传对象的列表。列表按照对象名称的 `alphanumeric` 顺序从小到大排序。

正在进行的分段上传的对象，是指该对象已经调用 [Initiate Multipart](/storage/object-storage/api/object/multipart/initiate/) 接口开启了分段上传模式，且尚未调用 [Complete Multipart](/storage/object-storage/api/object/multipart/complete/) 或 [Abort Multipart](/storage/object-storage/api/object/multipart/abort/) 接口结束分段上传。

若用户只想获取某个对象已经上传的分段，请参考接口：[List Multipart](/storage/object-storage/api/object/multipart/list/)

## 请求语法

```http
GET /?uploads HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| prefix | String | 指定返回的分段上传对象名（Object Key）的前缀 | 否 |
| delimiter | Char | 用于给对象名（Object Key）分组的字符。列表返回从指定的前缀开始，至第一次出现该分割字符之间的对象名（Object Key） | 否 |
| key_marker | String | 用于分页。当前页的起始标记 | 否 |
| upload_id_marker | String | 当前分段 `upload_id` 的起始标记 | 否 |
| limit | Integer | 此次返回的分段对象的最大数量，默认值为 200，最大允许设置 1000 | 否 |

**说明**
- 用户第一次发送该请求时，`key_marker` 与 `upload_id_marker` 均为空。QingStor 对象存储收到请求后，返回字段 `next_key_marker` 与  `next_upload_id_marker`。
- 用户第二次发送该请求时，将返回字段 `next_key_marker` 与  `next_upload_id_marker` 依次填入 `key_marker` 与 `upload_id_marker`，从而获取列表下一页内容。
- 若同名对象有多个分段上传，翻页被截断后只显示了一部分，下次翻页可通过 `upload_id_marker` 参数，获取剩下的分段上传。
- 用户通过传递 `prefix` 与 `delimiter` 参数，指定获取某个目录下面正在进行的分段上传。
- 该接口只列出未完成的分段上传对象，假设还有一个目录为 `Sci-Fi/`，但是该目录下没有未完成的分段上传，那么不会列出这个目录。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| name | String | Bucket 名称 |
| prefix | String | 请求参数 prefix |
| delimiter | Char | 请求参数 delimiter |
| marker | String | 请求参数 key_marker |
| limit | Integer | 请求参数 limit |
| next_key_marker | String | 本次返回列表里的最后一个 `key` 或 `common prefix`。当已经列取完全部的内容将返回空 |
| next_upload_id_marker | String | 如果有多个同名的分段上传，翻页时可能会被截断，该值是本次返回结果里最后一个 `upload id`，用于下一次请求参数 `upload_id_marker` 代表下一页的起始标志 |
| uploads | List | 正在进行的分段上传对象列表 |
| common_prefixes | String | 如果请求中指定了 `delimiter` 参数，那么将返回所有以 `prefix` 开头到第一个 `delimiter` 之间的分段上传对象名称（Object Key）的集合 |


## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取相应列表 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?uploads&prefix=Movies/&delimiter=/&limit=6 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 25 Dec 2016 19:02:00 GMT
Authorization: authorization string
```

### 响应示例

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

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
