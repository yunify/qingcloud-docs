---
title: "Abort Multipart Upload"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---



终止分段上传，并删除已经上传的分段。该请求需要对存储空间有可写权限。

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。
> 然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

## Request Syntax

```http
DELETE /<object-name>?upload_id=<upload-id> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 upload_id | Yes |

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)


## Request Body

没有请求消息体

## Status Code

该 API 为幂等操作. 成功则返回 204 (无论此前 upload 存在或不存在). Bucket 不存在会返回404. 其他失败的返回码参考[错误码列表](../../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)

## Example

### Example Request

```http
DELETE /large-object?upload_id=4d26b37a469230619604ecdc0e314782 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b
```
