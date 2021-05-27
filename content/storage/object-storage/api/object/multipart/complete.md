---
title: "Complete Multipart Upload"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---



当分段上传完毕，需要发送此请求结束此分段上传，从而获得一个完整的对象。未调用此接口，分段上传处于未完成的状态，此时调用 GET 请求获得该对象会返回错误。该请求需要对存储空间有可写权限。

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

## Request Syntax

```http
POST /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 upload_id | Yes |

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

对象加密，参见[加密请求头](../../../common/encryption/#加密请求头)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| ETag | String | 分段上传合并后的对象，因为读取大文件全部内容所需要时间较长，为了避免阻塞，对象存储服务不会自动为合并后的文件计算 ETag 值，需要用户自行在调用此接口时设置，该值会在调用 HEAD object 接口时，通过响应头返回。该值请使用 HTTP 规范所规定的格式 [https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19) | No |

## Request Body

请求内容为一个json结构，参看下面的 Example。

part_number 不一定需要连续，但需要递增。允许在最终合并的分段对象排除掉某些已上传分段。

| Name | Type | Description |
| --- | --- | --- |
| object_parts | List | 消息体顶层, 需要按照 part_number 递增排序 |
| part_number | Integer | 分段序号, 大于等于0, 小于等于10000 |
| etag        | String  | 可选，对该分段内容的校验码 |

## Status Code

成功则返回 201, 失败的返回码参考[错误码列表](../../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

若对象被加密，服务端将返回[加密响应头](../../../common/encryption/#加密请求头)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)


## Example

### Example Request

```http
POST /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.<zone-id>.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Authorization: authorization string
ETag: "0c2f573d81194064b129e940edcefe9b"

{
    "object_parts": [
        {"part_number": 0, "etag": "c837682353601f7fc0a2ccb6bc8f4654"},
        {"part_number": 2, "etag": "28e2c0c6574a1ef20ac41d16a012a7c1"}
    ]
}
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b
```
