---
title: "Bucket CNAME"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# DELETE CNAME

删除存储空间的域名别名，CNAME 是存储空间的子资源(subresource)，只有存储空间所有者才能删除。

获取 CNAME 请参见 [GET CNAME](../get_cname) 。

设置 CNAME 请参见 [PUT CNAME](../put_cname) 。

## Request Syntax

```http
DELETE /?cname HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "domain": <domain>,
}
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Request Body

Json 消息体

| Name | Type | Description |
| --- | --- | --- |
| domain | String | 要删除的存储空间的域名别名。 |

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Example

### Example Request

```http
DELETE /?cname HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 30
Authorization: authorization string

{
    "domain": "example.com"
}
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
