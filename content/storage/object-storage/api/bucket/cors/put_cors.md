---
title: "PUT Bucket CORS"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于设置 Bucket 的跨源资源共享策略，只有 Bucket 的所有者才能调用该 API。

## 请求语法

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

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| cors_rules | Array | 跨源的规则配置。 | 是 |
| allowed_origin | String | 用户所期望的跨源请求来源，可以用 `*` 来进行通配。 | 是 |
| allowed_methods | Array | 设置源所允许的 HTTP 方法。规则如下：<br>- 可指定的方法为：GET，PUT，POST，DELETE 与 HEAD； <br>- 可以单独指定以上方法，也可以组合指定以上方法的 <br>- 可以使用 `*` 来进行通配 | 是 |
| allowed_headers | Array | 设置源所允许的 HTTP 头，可以用 `*` 来进行通配。 | 是 |
| expose_headers | Array | 设置客户能够从其应用程序（例如，从 JavaScript XMLHttpRequest 对象）进行访问的 HTTP 响应头。 | 否 |
| max_age_seconds | Integer | 设置在预检请求（Options）被资源、HTTP 方法以及源识别之后，浏览器为预检请求缓存响应的时间，以秒为单位。默认值值为 5 秒，若设置为 0，即表示禁用缓存| 否 |
| resp_vary | String | 设置是否返回 `Vary: Origin`头。默认值为 `disabled`。可选值为：<br>- `enabled` 表示返回 `Vary: Origin` 头； <br>- `disabled` 表示不返回 `Vary: Origin` 头| 否 |


## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置 CORS | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```


## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
