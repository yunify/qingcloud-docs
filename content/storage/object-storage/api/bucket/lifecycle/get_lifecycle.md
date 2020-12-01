---
title: "Bucket Lifecycle"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# GET Bucket Lifecycle

获取 Bucket Lifecycle 设置，lifecycle 是存储空间的子资源（subresource），
只有存储空间所有者才能获取。

更新 Lifecycle 设置请参见 [PUT Bucket Lifecycle](../put_lifecycle)

删除 Lifecycle 设置请参见 [DELETE Bucket Lifecycle](../delete_lifecycle)

## Request Syntax

```http
GET /?lifecycle HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../common/error_code.html)

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-response-heaader)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

GET Bucket Lifecycle 的 Response Body 包括两部分:
一部分与 PUT Bucket Lifecycle 相同, 参见 PUT Bucket Lifecycle [Request Body](../put_lifecycle#request-body),
及 GET Bucket Lifecycle 特有的 Request Body, 如下表：

| Name | Type | Description |
| --- | --- | --- |
| state | String | 可能返回的值为 “unchecked” 和 “ready”, 表示对规则创建之前的资源 (对象和分段上传) 应用此规则所处的状态, "ready" 表示已经应用完毕，“unchecked” 表示还未应用或正在应用。|
| created | Integer | 规则创建时间，UNIX 时间戳，精确到秒。|

## Example

### Example Request

```http
GET /?lifecycle HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 249
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "rule": [
        {
            "id": "delete-logs",
            "status": "enabled",
            "filter": {
                "prefix": "logs/"
            },
            "expiration": {
                "days": 7
            },
            "state": "unchecked",
            "created": 1439715900,
        }
    ]
}
```
