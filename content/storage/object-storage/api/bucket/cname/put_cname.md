---
title: "Bucket CNAME"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# PUT CNAME

设置存储空间的域名别名，CNAME 是存储空间的子资源(subresource)，只有存储空间所有者才能设置。

获取 CNAME 请参见 [GET CNAME](../get_cname) 。

删除 CNAME 请参见 [DELETE CNAME](../delete_cname) 。

## Request Syntax

```http
PUT /?cname HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "domain": <domain>,
    "type": <type>,
}
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

Json 消息体

| Name | Type | Description |
| --- | --- | --- |
| domain | String | 要绑定给存储空间的域名。该域名必须已完成备案，否则将返回错误 (domain_not_recorded)。并且该域名到存储空间域名 (e.g. mybucket.pek3a.qingstor.com) 的 CNAME 记录必须已于域名服务商处成功 注册且生效，否则将返回错误 (cname_record_not_added)。如果该域名已成功绑 定给另外一个存储空间， 则返回错误 (domain_occupied)。 |
| type | String | 绑定的域名的用途。目前支持两种类型，普通 (“normal”) 和网站 (“website”)。 |

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Example

### Example Request

```http
PUT /?cname HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 30
Authorization: authorization string

{
    "domain": "example.com",
    "type": "normal"
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
