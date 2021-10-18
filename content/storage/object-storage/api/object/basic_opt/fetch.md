---
title: "Fetch Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该 API 接口用于从指定的源链接抓取资源，保存到指定的 Object 中。

## 使用须知

- QingStor 在抓取时能够自动处理源链接服务器返回的 301/302/307 等重定向请求。
- QingStor 在上传 Object 时需要知道文件大小，所以需要源站在提供下载文件时能返回 `Content-Length` 头字段，否则将抓取失败。
- 当要保存的目标 Object 已存在时，本操作会对该 Object 的内容进行覆盖。

## 请求语法

```http
PUT /<object-name> HTTP/1.1
x-qs-fetch-source: <source site>
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
| x-qs-fetch-source | String | 被抓取的文件路径 (源链接)。链接形式为 `<protocol>://<host>[:port]/[path]`。 各字段说明如下：<br> - protocol：可为 `http` 或 `https`，默认为 `http` <br> - port： 默认为 `protocol` 对应的端口。 <br> - path：目录。QingStor 对象存储不会在源链接后边拼接请求中的 `<object-name>` 。若 `http` 为空，抓取的结果将取决于该站点默认页的设定。 | 是 |
| x-qs-fetch-if-unmodified-since | Date | 若指定的时间晚于 QingStor 中的目标 Object 被修改的时间，则从源链接抓取 | 否 |

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 回源成功 | 201 |
| - | 源 Object 不存在或目标 Bucket 不存在 | 404 |
| fetch_in_process | 已经有另一个并发的 fetch 请求 | 409 |
| upstream_failed | 源站不可用 | 503 |
| fetch_throttled | 当前回源请求过多 | 429 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 14 Aug 2016 09:05:00 GMT
x-qs-fetch-source: http://image.example.com/photo.jpg
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 14 Aug 2016 09:05:01 GMT
Content-Length: 0
Connection: close
Request-ID: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。