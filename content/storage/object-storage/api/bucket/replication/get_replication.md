---
title: "Get Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于获取 Bucket 的跨区域复制规则列表。QingStor 对象存储定义跨区域复制为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
GET /?replication HTTP/1.1
Host: <bucket-name>.<zone_id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 格式的 Response Body。该 Response Body 包括如下两个部分：
- 前期设置的的跨区域复制（Replication）规则，这部分可参考 [PUT Bucket Replication](../put_replication#请求体)。
- 跨区域复制规则中目标 Bucket 所在的 Zone ID，这部分为 GET Bucket Replication 特有的 Response Body。详情如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| zone | String | 目标 Bucket 所在的 Zone ID。|

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取跨区域复制（Replication）规则列表 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?replication HTTP/1.1
Host: my-bucket.pek3a.qingstor.com
Date: Mon, 1 Oct 2018 15:04:01 GMT
Authorization: authorization string
```

### 响应示例

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

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。