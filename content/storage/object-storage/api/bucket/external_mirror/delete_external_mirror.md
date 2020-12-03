---
title: "Bucket External Mirror"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# DELETE Bucket External Mirror

删除存储空间的外部镜像源站(external mirror source site)，external mirror source site 只有存储空间的所有者才能删除。

获取 external mirror source site 请参见 [GET Bucket External Mirror](../get_external_mirror) 。

设置 external mirror source site 请参见 [PUT Bucket External Mirror](../put_external_mirror) 。

## Request Syntax

```http
DELETE /?mirror HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

[参见公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Example

### Example Request

```http
DELETE /?mirror HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
