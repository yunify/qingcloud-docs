---
title: "Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# DELETE Bucket Replication

删除 Bucket Replication 设置, replication 是存储空间的子资源（subresource), 只有存储空间所有者才能删除.

设置 Replication 请参见 [PUT Bucket Replication](../put_replication).

获取 Replication 请参见 [GET Bucket Replication](../get_replication).

## Request Syntax

```http
DELETE /?replication HTTP/1.1
Host: <bucket-name>.<zone_id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

> 没有请求参数

## Request Headers

> [参见公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Elements

> 没有请求消息体

## Response Headers

> [参见公共响应头](../../common/common_header.html#响应头字段-response-header)

## Example

### Example Request

```http
DELETE /?replication HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Mon, 1 Oct 2018 15:04:01 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 204 NoContent
Server: QingStor
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

