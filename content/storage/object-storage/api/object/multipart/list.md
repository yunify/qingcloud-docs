---
title: "Multipart"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# List Multipart

列出已经上传的分段信息。该请求需要对存储空间有可读权限。

> 如果存储空间被设置为对匿名用户可读，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可读权限，则请求该接口会返回权限错误。

## Request Syntax

```http
GET /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 upload_id | Yes |
| part_number_marker | Integer | 设定结果从 part_number_marker 之后按分段序号排序的第一个开始返回 | No |
| limit | Integer | 限定此次返回 object parts 的最大数量，该数值不能大于 1000 | No |

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 200; 若 upload_id 不存在则返回 404 upload_not_exists; 其他失败的返回码参考[错误码列表](../../common/error_code.html)

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../common/error_code.html)

| Name | Type | Description |
| --- | --- | --- |
| object_parts | List | 消息体顶层 |
| part_number | Integer | 分段序号 |
| created | Date | 分段创建时间 |
| size | Integer | 分段大小 |
| etag | String | 服务器端为分段内容生成的唯一标志 |
| count | Integer | 分段数量 |

## Example

### Example Request

```http
GET /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 243
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b

{
    "count": 3,
    "object_parts": [
        {"part_number": 1, "size": 10485760, "created": "2015-08-16T14:52:12.000Z", "etag": "64ec234786ffc5c20306ec441b65a521"},
        {"part_number": 2, "size": 10485760, "created": "2015-08-16T14:52:16.000Z", "etag": "3efbe3ebbcf4e07111591576fc0d3829"},
        {"part_number": 3, "size": 61440, "created": "2015-08-16T14:52:16.000Z", "etag": "1522531043073c5fedb61a8bb06451c7"}
    ]
}
```
