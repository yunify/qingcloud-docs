---
title: "Bucket External Mirror"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Bucket External Mirror

设置存储空间的外部镜像源站(external mirror source site)，external mirror source site 只有存储空间的所有者才能设置。

对于设置了外部镜像源站的 Bucket，当请求的对象在 Bucket 中不存在时，服务端把对象名称拼接在外部镜像源站后作为抓取的源链接， 然后自动从源站抓取（回源），并写入到 Bucket 当中。在回源过程中，请求这个对象的客户端，有可能会下载到源站文件，也有可能收到 重定向到源站相应路径的 302 请求。在回源完成后，客户端能够直接从 Bucket 中获取这个对象。

> 注意:
>
> 当同一对象已经被下载到 Bucket 之后，如果源站的相应文件内容发生变化时，系统并不会自动更新这个对象。
>
> 因为 QingStor 在 Put object 时需要知道文件大小，所以需要源站在提供下载文件时能返回 Content-Length 头，否则将回源失败。

获取 external mirror source site 请参见 [GET Bucket External Mirror](../get_external_mirror) 。

删除 external mirror source site 请参见 [DELETE Bucket External Mirror](../delete_external_mirror) 。

## Request Syntax

```http
PUT /?mirror HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "source_site": "<protocol>://<host>[:port]/[path]"
}
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

Json 消息体

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| source_site | String | 外部镜像回源的源站。源站形式为 `<protocol>://<host>[:port]/[path]` 。 protocol的值可为 “http” 或 “https”，默认为 “http”。port 默认为 protocol 对应的端口。path 可为空。 如果存储空间多次设置不同的源站，该存储空间的源站采用最后一次设置的值。 | Yes |

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

没有响应内容

## Example

### Example Request

```http
PUT /?mirror HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 14 Aug 2016 09:05:00 GMT
Authorization: authorization string
{
    "source_site": "http://example.com:80/image/"
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 14 Aug 2016 09:05:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
