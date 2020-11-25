---
title: "Bucket Logging"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# GET Bucket Logging

获取 Bucket Logging 设置，只有存储空间所有者才能获取。

设置 Bucket Logging 请参见 [PUT Bucket Logging](../put_logging) 。

删除 Bucket Logging 请参见 [DELETE Bucket Logging](../delete_logging) 。

## Request Syntax

```http
GET /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
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

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

| Name | Type | Description | Required |
| - | - | - | - |
| target_bucket | String | 用于存放日志的目标 Bucket 名称，用户必须是该 Bucket 的所有者。 |  Yes |
| target_prefix | String | 日志文件的前缀。 | Yes |

## Example

### Example Request

```http
GET /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: <date>
Content-Length: 66
Connection: close
X-QS-Request-ID: aa08cf7a43f611e5886952542e6ce14b

{
    "target_bucket": "<target-bucket-name>",
    "target_prefix": "logs/",
}
```
