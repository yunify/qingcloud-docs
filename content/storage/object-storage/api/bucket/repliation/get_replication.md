---
title: "Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# GET Bucket Replication

获取 Bucket Replication 规则列表, Replication 是存储空间的子资源（subresource), 只有存储空间所有者才能获取.

设置 Replication 请参见 [PUT Bucket Replication](../put_replication/).

删除 Replication 请参见 [DELETE Bucket Replication](../delete_replication/).

## Request Syntax

```http
GET /?replication HTTP/1.1
Host: <bucket-name>.<zone_id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

> 没有请求参数

## Request Headers

> [参见公共请求头](../../../common_header/#请求头字段-request-header)

## Request Elements

> 没有请求消息体

## Response Headers

> [参见公共响应头](../../../common_header/#响应头字段-response-heaader)

## Response Elements

GET Bucket Replication 的 Response Elements 包括两部分:
一部分与 PUT Bucket Replication 相同, 参见 PUT Bucket Replication [Request Elements](../put_replication/),
及 GET Bucket Replication 特有的 Request Elements, 如下表：

| Name | Type | Description |
| --- | --- | --- |
| zone | String | 目标 Bucket 所属的 zone id.


## Example

### Example Request

```http
GET /?replication HTTP/1.1
Host: my-bucket.pek3a.qingstor.com
Date: Mon, 1 Oct 2018 15:04:01 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 193
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "rules": [
        {
            "id": "replicatin-1",
            "status": enabled,
            "filters": {
                "prefix": "image"
            },
            "sync_marker": "disabled",
            "delete_marker": "disabled",
            "destination": {
                "zone": "pek3b",
                "bucket": "replicate-bucket-1",
                "storage_class": "standard_ia",
            },
        },
        {
            "id": "replicatin-2",
            "status": enabled,
            "filters": {
                "prefix": "videos/"
            },
            "sync_marker": "enabled"
            "delete_marker": "enabled",
            "destination": {
                "zone": "pek3b",
                "bucket": "replicate-bucket-1",
                "storage_class": "standard",
            },
        },
    ]
}
```

