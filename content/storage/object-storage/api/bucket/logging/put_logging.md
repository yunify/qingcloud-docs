---
title: "Bucket Logging"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Bucket Logging

创建或更新 Bucket Logging 设置，只有存储空间所有者才能设置。

开启 Bucket 日志功能后，QingStor 对象存储会保存 Bucket 的访问日志，按照固定的规则，
并以小时为单位上传至用户指定的 Bucket 的中。

获取 Bucket Logging 请参见 [GET Bucket Logging](../get_logging) 。

删除 Bucket Logging 请参见 [DELETE Bucket Logging](../delete_logging) 。

## Request Syntax

```http
PUT /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
{
    "target_bucket": "<target-bucket-name>",
    "target_prefix": "logs/",
}
```

## Request Body

Json 消息体

|Name|Type|Description|Required|
|--|--|--|--|
| target_bucket | String | 用于存放日志的目标 Bucket 名称，用户必须是该 Bucket 的所有者。 |  Yes |
| target_prefix | String | 日志文件的前缀。 | Yes |

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../../error_code/)


## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)


## Example

### Example Request

```http
PUT /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Content-Length: 66
Authorization: authorization string

{
    "target_bucket": "mybucket",
    "target_prefix": "logs/",
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: <date>
Content-Length: 0
Connection: close
X-QS-Request-ID: aa08cf7a43f611e5886952542e6ce14b
```
