---
title: "Bucket CNAME"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---


获取存储空间的域名别名，CNAME 是存储空间的子资源(subresource)，只有存储空间所有者才能获取。

设置 CNAME 请参见 [PUT CNAME](../put_cname) 。

删除 CNAME 请参见 [DELETE CNAME](../delete_cname) 。

## Request Syntax

```http
GET /?cname HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Request Body

| Name | Type | Description |
| --- | --- | --- |
| cname_records | type | 可选的值： normal 表示自定义域名，website 表示托管静态网站域名。如果不提供（向前兼容）则默认为 normal。 |

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Response Body

Json 消息体

| Name | Type | Description |
| --- | --- | --- |
| cname_records | List | 获取的存储空间的域名别名记录列表。 |
| count | Integer | 获取的存储空间的域名别名记录数量。 |

## Example

### Example Request

```http
GET /?cname HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 300
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "cname_records": [
        {
            "domain": "example1.com",
            "type": "normal",
            "created": "2016-08-15T01:06:16.000Z",
        },
        {
            "domain": "example2.com",
            "type": "normal",
            "created": "2016-08-15T01:06:36.000Z",
        },
    ],
    "count": 2,
}
```
