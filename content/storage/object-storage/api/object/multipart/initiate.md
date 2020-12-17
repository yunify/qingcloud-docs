---
title: "Multipart"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# Initiate Multipart Upload

用于初始化一个分段上传，该请求会返回一个Upload ID，后续在上传分段时，在请求参数中附加该 Upload ID，则表明分段属于同一个对象。该请求需要对存储空间有可写权限。

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

## Request Syntax

```http
POST /<object-name>?uploads HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/)

对象加密，参见[加密请求头](../../../common/encryption/#加密请求头)

 如果给对象附带支持的标准 HTTP 头或自定义元数据，参见[如何创建对象元数据](https://docs.qingcloud.com/qingstor/api/common/metadata#如何创建对象元数据)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Content-Type | String | 对象的类型 | No |
| x-qs-storage-class | String | 指定该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"，默认存储级别为"STANDARD"。存储级别错误将返回 400 INVALID_REQUEST | No |

## Request Body

没有请求消息体

## Status Code

成功则返回 200, 失败的返回码参考[错误码列表](../../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header/)

若对象被加密，服务端将返回[加密响应头](../../../common/encryption/#加密响应头)

## Response Body

正常情况下会有一个 Json 消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)

| Name | Type | Description |
| --- | --- | --- |
| bucket | String | 存储空间名称 |
| key | String | 对象 key |
| upload_id | String | 分段上传 ID，此 ID 用于后续上传分段时，作为参数使用 |

## Example

### Example Request

```http
POST /large-object?uploads HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Type: application/json
Content-Length: 90
Connection: close
x-qs-request-id: 37fed66c441a11e5b95f52542e6ce14b

{
    "upload_id": "4d26b37a469230619604ecdc0e314782",
    "bucket": "mybucket",
    "key": "large-object"
}
```
