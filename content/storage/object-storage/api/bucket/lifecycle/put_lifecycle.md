---
title: "Bucket Lifecycle"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# PUT Bucket Lifecycle

创建或更新 Bucket Lifecycle 设置，lifecycle 是存储空间的子资源（subresource），
只有存储空间所有者才能设置。

QingStor 对象存储会按照用户所设置的生命周期规则，定期对所匹配的 Object 执行相应的操作。
目前支持的操作有: 删除对象 (Expiration),
取消未完成的分段上传 (Abort Incomplete Multipart Uploads), 变更存储级别 (Transition)。

> 注意:
>
> 以防用户误操作，新增或修改的 Lifecycle 规则，至少在创建时间或最后修改时间的 24 小时以后才会开始生效。

获取 Lifecycle 设置请参见 [GET Bucket Lifecycle](../get_lifecycle)

删除 Lifecycle 设置请参见 [DELETE Bucket Lifecycle](../delete_lifecycle)

## Request Syntax

```http
PUT /?lifecycle HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "rule": [
        {
            "id": "delete-logs",
            "status": "enabled",
            "filter": {
                "prefix": "logs/"
            },
            "expiration": {
                "days": 90
            }
        },
        {
            "id": "delete-public-data",
            "status": "disabled",
            "filter": {
                "prefix": "public/"
            },
            "expiration": {
                "days": 90
            }
        },
        {
            "id": "abort-multipart-upload-in-data",
            "status": "enabled",
            "filter": {
                "prefix": "data/"
            },
            "abort_incomplete_multipart_upload": {
                "days_after_initiation": 3
            }
        },
        {
            "id": "change-storage-class-in-data",
            "status": "enabled",
            "filter": {
                "prefix": "data/"
            },
            "transition": {
                "storage_class": "STANDARD_IA",
                "days": 30
            }
        }
    ]
}

```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../../error_code/)

## Request Body

Json 消息体

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| rule | List | rule 的元素为 Lifecycle 规则。规则为 Dict 类型，有效的键为 "id"、"status"、"filter"、"expiration"、"abort_incomplete_multipart_upload" 和 "transition"。规则总数不能超过 100 条，且每条规则中只允许存在一种类型的操作。同一 bucket, prefix 和 支持操作（ expiration, abort_incomplete_multipart_upload, transition) 不能有重复，否则返回 400 invalid_request 包含重复的规则信息 [参见错误信息](../../../error_code/)。 | Yes |
| id | String | 规则的标识符。可为任意 UTF-8 编码字符，长度不能超过 255 个字节，在一个 Bucket Lifecycle 中，规则的标识符必须唯一。该字符串可用来描述策略的用途。如果 id 有重复，会返回 400 invalid_request 。| Yes |
| status | String | 该条规则的状态。其值可为 "enabled" (表示生效) 或 "disabled" (表示禁用)。| Yes |
| filter | Dict | 用于匹配 Object 的过滤条件，有效的键为 "prefix"。| Yes |
| prefix | String | 对 Object 名称 前缀为 prefix 的 Object 应用此规则，空字符串表示匹配整个 Bucket 中的 Object。默认值为空字符串。不支持正则表达式。| No |
| expiration | Dict | 用于删除 Object 的规则，有效的键为 "days"。"days" 必须是正整数，否则返回 400 invalid_request。对于匹配前缀（prefix) 的对象在最后修改时间的指定天数（days）后删除该对象。| No |
| abort_incomplete_multipart_upload |Dict | 用于取消未完成的分段上传的规则，有效的键为 "days_after_initiation"。"days_after_initiation" 必须是正整数，否则返回 400 invalid_request。| No |
| transition | Dict | 用于变更存储级别的规则，有效的键为 "days", "storage_class"。days 必须 >= 30, 否则返回 400 invalid_request。对于匹配前缀（prefix) 的对象在最后修改时间的指定天数（days）后变更到低频存储。| No |
| days | Integer | 在对象最后修改时间的指定天数后执行操作。 | No |
| days_after_initiation | Integer | 在初始化分段上传的指定天数后执行操作。| Yes |
| storage_class | Integer | 要变更至的 storage_class，支持的值为 STANDARD_IA"。 | Yes |

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-response-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)


## Example

### Example Request

```http
PUT /?lifecycle HTTP/1.1
Host: example.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 66
Authorization: authorization string

{
    "rule": [
        {
            "id": "delete-logs",
            "status": "enabled",
            "filter": {
                "prefix": "logs/"
            },
            "expiration": {
                "days": 180
            }
        }
    ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
