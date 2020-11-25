---
title: "Fetch Object"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Object - Fetch

用于从指定的源链接抓取资源，保存到指定的对象中。Qingstor 在抓取时能够自动处理源链接服务器返回的 301/302/307 等重定向请求。 如果在同一时间相同源链接的 fetch 请求正在进行，或者被动触发的外部镜像功能正在抓取该源链接对应的文件，服务端将返回 409 fetch_in_process。 除此之外，服务端根据源链接错误情况还可能返回 404 object_not_exists, 503 upstream_failed 等错误，[参见错误信息](../common/error_code.html#object-storage-error-code)

> 注意:
>
> 当要保存的目标对象已存在时，该操作会对该对象的内容进行覆盖。
>
> 因为 QingStor 在 Put object 时需要知道文件大小，所以需要源站在提供下载文件时能返回 Content-Length 头，否则将抓取失败。

## Request Syntax

```http
PUT /<object-name> HTTP/1.1
x-qs-fetch-source: <source site>
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../common/common_header.html#请求头字段-request-header)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| x-qs-fetch-source | String | 被抓取的文件路径 (源链接)。链接形式为 `<protocol>://<host>[:port]/[path]` 。protocol 的值可为 "http" 或 "https"，默认为 "http"。port 默认为 protocol 对应的端口。 (如果 path 是一个目录或者 path 为空，抓取的结果将取决于该站点默认页的设定。QingStor 不会在源链接后边拼接请求中的 `<object-name>` 。) | Yes |
| x-qs-fetch-if-unmodified-since | Date | 如果要保存的目标对象在 QingStor 中存在，且自从指定时间往后在 QingStor 中未被更新过，则从源链接抓取，抓取后返回 201 ；否则返回 412 precondition_failed | No |

## Request Body

没有请求消息体

## Status Code

回源成功返回 201; 假如源 object 不存在或目标 Bucket 不存在返回 404; 假如已经有另一个并发的 fetch 请求, 返回 409 fetch_in_process; 假如源站不可用, 返回 503 upstream_failed; 假如当前回源请求过多, 返回 429 fetch_throttled . 其他失败的返回码参考[错误码列表](../common/error_code.html).


## Response Headers

参见[公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)


## Example

### Example Request

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 14 Aug 2016 09:05:00 GMT
x-qs-fetch-source: http://image.example.com/photo.jpg
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 14 Aug 2016 09:05:01 GMT
Content-Length: 0
Connection: close
Request-ID: aa08cf7a43f611e5886952542e6ce14b
```
