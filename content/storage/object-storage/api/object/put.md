---
title: "Put Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---


用于向存储空间上传一个对象，此操作要求请求者对存储空间拥有可写权限。假如存储空间中存在同名的对象, 在完整上传了之后会替换已有对象。

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

如果多个上传请求同时写入同一个对象名称（object name），最后一个被处理的请求会覆盖之前上传的对象内容。

如果希望在数据真正上传以前，提前得知该请求是否能被对象存储系统正确接受和处理，可以只发送 HTTP 请求头（不附带请求实体），并在请求头中包含 Expect: 100-continue。此方式主要使用场景是，当上传的对象实体非常庞大，为了提前知道该上传请求是否能被接受和处理（如认证信息是否正确，请求域名是否需要重定向等），减少不必要的数据传输。

> 存储空间中的文件夹是模拟概念，控制台展现文件列表时，会自动根据对象名称中的斜杠(/)生成文件夹。如果用户想创建一个空文件夹，可以调用此接口上传空对象，对象名以斜杠(/)结尾

## Request Syntax

```http
PUT /<object-name> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

对象加密，参见[加密请求头](../../common/encryption/#加密请求头)

如果要给对象附带支持的标准 HTTP 头或自定义元数据，参见[如何创建对象元数据](../../metadata/#如何创建对象元数据)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Content-Length | String | 对象实体的大小 | Yes |
| Content-MD5 | String | 对象实体的 MD5 值，用于检查对象在传输过程中字符是否出错或被篡改 | No |
| Content-Type | String | 对象的类型 | No |
| Expect | String | 如果请求头附加这个参数，不需要附带 request body，对象存储服务端判断可以接受此请求，则返回 100 CONTINUE | No |
| x-qs-storage-class | String | 指定该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"，默认存储级别为"STANDARD"。存储级别错误将返回 400 INVALID_REQUEST | No |

## Request Body

对象实体内容

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

若对象被加密，服务端将返回[加密响应头](../../common/encryption/#加密响应头)

## Status Code

该 API 为幂等操作. 成功则返回 201, 失败的返回码参考[错误码列表](../../error_code/)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)


## Example

### Example Request

```http
PUT /myphoto.jpg HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 7987
Authorization: authorization string
[7987 bytes of object data]
```

### Example Response

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
