---
title: "DELETE Bucket Policy"
---

# DELETE Bucket Policy

删除存储空间的访问策略，Policy 是存储空间的子资源(subresource)，只有存储空间所 有者才能删除。

获取 Policy 请参见 [GET Bucket Policy](../get_policy) 。

设置 Policy 请参见 [PUT Bucket Policy](../put_policy) 。

## Request Syntax

```http
DELETE /?policy HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header#请求头字段-request-header)

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../../../common_header#响应头字段-request-header)

## Example

### Example Request

```http
DELETE /?policy HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
