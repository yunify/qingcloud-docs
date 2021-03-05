---
title: "List Locations"
---


获取 QingStor 的所有(部署区域) 列表。
支持匿名请求。

> **请求只能发向对象存储服务的 global 地址，也就是 `qingstor.com`。**

## Request Syntax

```http
GET /?location&lang=zh-cn HTTP/1.1
Host: qingstor.com
```

## Request Headers

没有请求头

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| lang | String | 返回 location name 的语言, 默认是英文 (`en-us`), 目前支持中文 (`zh-cn`/`zh_CN`) 和英文 (`en-us`/`en_US`)。| No |

## Status Code

总是返回 200

## Response Headers

[参见公共响应头](../../common_header#响应头字段-request-header)

## Response Body

Json 消息体

| Name | Type | Description |
| - | - | - |
| locations | List | 返回 location 列表，每个 location 是键为 id, name, endpoint 及其相应的值的字典。|
| id | String | location id。 |
| name | String | location name相应语言（取决于lang参数）的翻译。|
| endpoint | String | location endpoint, 如 location id 为 pek3a 的 endpoint 是 pek3a.qingstor.com。 |

**Examples**

```http
GET /?location&lang=zh-cn HTTP/1.1
Host: qingstor.com
```

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Mon, 23 Oct 2017 12:08:19 GMT
Content-Type: application/json
Content-Length: 177
x-qs-request-id: dc05ee1cb7ea11e7b8da5254dda2bdf5

{
    "locations": [
        {
            "endpoint": "pek3a.qingstor.com",
            "id": "pek3a",
            "name": "\u5317\u4eac3\u533a"
        },
        {
            "endpoint": "sh1a.qingstor.com",
            "id": "sh1a",
            "name": "\u4e0a\u6d771\u533a"
        }
    ]
}
```
