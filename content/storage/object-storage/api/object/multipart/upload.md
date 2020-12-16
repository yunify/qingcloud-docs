---
title: "Multipart"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# Upload Object Part

用于上传一个分段，请求参数需要携带初始化分段上传阶段得到的 Upload ID。该请求需要对存储空间有可写权限。

关于分段大小的规定，请参看 [分段上传限制](../index.html#分段上传限制)

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

## Request Syntax

```http
PUT /<object-name>?upload_id=<upload-id>&part_number=<part-number> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| upload_id | String | 初始化分段上传时，响应消息体里返回的 upload_id | Yes |
| part_number | Integer | 分段序号，合并时需按照序号从小到大顺序，数值必须大于等于0, 小于等于10000 | Yes |

## Request Headers

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Content-Length | String | 对象实体的大小 | Yes |
| Content-MD5 | String | 分段实体的预期 MD5 值，用于检查对象在传输过程中字符是否出错或被篡改 | No |
| Expect | String | 如果请求头附加这个参数，不需要附带 request body，对象存储服务端判断可以接受此请求，则返回 100 CONTINUE | No |

参见[公共请求头](../../../common_header/#请求头字段-request-header)

对象加密，参见[加密请求头](../../common/encryption/#加密请求头)

## Request Body

分段内容实体

## Status Code

成功则返回 201; 若 upload_id 不存在则返回 404 upload_not_exists; 其他失败的返回码参考[错误码列表](../../../error_code/)


## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

若对象被加密，服务端将返回[加密响应头](../../common/encryption/#加密响应头)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)

## Example

### Example Request

```http
PUT /large-object?upload_id=4d26b37a469230619604ecdc0e314782&part_number=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 13:25:10 GMT
Content-Length: 7987
Authorization: authorization string
[7987 bytes of object data]
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
