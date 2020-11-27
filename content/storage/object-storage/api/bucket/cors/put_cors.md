---
title: "Bucket CORS"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Bucket CORS

设置存储空间的跨源资源共享(cors)策略, cors 只有存储空间的所有者才能设置。

获取 cors 请参见 [GET Bucket CORS](../get_cors) 。

删除 cors 请参见 [DELETE Bucket CORS](../delete_cors) 。

发起 Object OPTIONS 请参见 [OPTIONS Object](../../object/options.html#object-storage-api-options-object) 。

## Request Syntax

```http
PUT /?cors HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "resp_vary": "enable"
    "cors_rules": [
        {
            "allowed_origin": <allowed_origin>,
            "allowed_methods": [
                <allowed_methods>
            ],
            "allowed_headers": [
                <allowed_headers>
            ],
            "max_age_seconds": <max_age_seconds>,
            "expose_headers": [
                <expose_headers>
            ]
        }
    ]
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
| cors_rules | Array | 跨源的规则配置，有效的键为：allowed_origin，allowed_methods，allowed_methods，allowed_headers，expose_headers， max_age_seconds。 | Yes |
| allowed_origin | String | 用户所期望的跨源请求来源,可以用 ‘*’ 来进行通配。 | Yes |
| allowed_methods | Array | 设置源所允许的 HTTP 方法。可指定以下值的组合: “GET”, “PUT”, “POST”, “DELETE”, “HEAD”, 或者使用 ‘*’ 来进行设置。 | Yes |
| allowed_headers | Array | 设置源所允许的 HTTP header 。 可以用 ‘*’ 来进行通配。 | No |
| expose_headers | Array | 设置客户能够从其应用程序（例如，从 JavaScript XMLHttpRequest 对象）进行访问的HTTP 响应头。 | No |
| max_age_seconds | Integer | 设置在预检请求(Options)被资源、HTTP 方法和源识别之后，浏览器将为预检请求缓存响应的时间（以秒为单位）。 | No |
| resp_vary | String | 设置决定是否返回Vary: Origin头。其值可以为 “enabled” (表示返回Vary: Origin头) 或 “disabled” (表示不返回), 忽略大小写. 默认值为 “disabled”. | No |

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../common/error_code.html)

## Response Headers

[参见公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

## Example

### Example Request

```http
PUT /?cors HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string

{
    "resp_vary": "enable",
    "cors_rules": [
        {
            "allowed_origin": "http://*.qingcloud.com",
            "allowed_methods": [
                "PUT",
                "GET",
                "DELETE",
                "POST"
            ],
            "allowed_headers": [
                "x-qs-date",
                "Content-Type",
                "Content-MD5",
                "Authorization"
            ],
            "max_age_seconds": 200,
            "expose_headers": [
                "x-qs-date"
            ]
        },
        {
            "allowed_origin": "http://*.example.com",
            "allowed_methods": [
                "PUT",
                "GET",
                "DELETE",
                "POST"
            ],
            "allowed_headers": [
                "*"
            ],
            "max_age_seconds": 400
        }
    ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
