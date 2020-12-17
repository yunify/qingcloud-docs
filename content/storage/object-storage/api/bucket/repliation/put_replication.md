---
title: "Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

# PUT Bucket Replication

创建或更新 Bucket Replication 规则设置，replication 是存储空间的子资源（subresource), 只有存储空间所有者才能设置.

QingStor 对象存储会按照用户所设置的 replication 规则, 在用户完成某些动作后对匹配规则的 Object 执行复制操作.

目前会触发复制的动作:

* create_object
* complete_multipart_upload
* delete_object
* update_object_meta

> 为防止用户误操作删除数据, 不建议用户在配置规则时开启 "delete_marker" 选项

> 跨区域复制采用异步复制, 所以数据复制到目标 Bucket 需要一定的时间, 通常几分钟到几个小时不等.

获取 Replication 请参见 [GET Bucket Replication](../get_replication).

删除 Replication 请参见 [DELETE Bucket Replication](../delete_replication).


## Request Syntax

```http
PUT /?replication HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

> 没有请求参数

## Request Headers

> [参见公共请求头](../../../common_header/#请求头字段-request-header)

## Request Elements

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| rules | List | rules 的元素为 Replication 规则, 一次请求中需要至少包含一条规则, 规则为 Dict 类型, 有效的键为 "id"、"status"、"filters"、"delete_marker"、"destination".规则总数不能超过 1000 条, 且总的字节大小不能超过 2097152 bytes, 否则返回 400 invalid_request. | Yes |
| id | String | 规则的标识符. 可为任意 UTF-8 编码字符, 长度不能超过 255 个字节，在一个 Bucket Replication 中，规则的标识符必须唯一且不能为空. 该字符串可用来描述策略的用途等. 如果 id 有重复, 会返回 400 invalid_request. | Yes |
| status | String | 该条规则的状态。其值可为 "enabled" (表示启动) 或 "disabled" (表示禁用), 忽略大小写. 默认值为 "ENABLED" | No |
| filters | Dict | 用于匹配 Object 的过滤条件，目前支持的键为 "prefix". | Yes |
| prefix | String | 对 Object 名称前缀为 prefix 的 Object 应用此规则, 最大字符长度为 1024. 多个 RULE 中的 prefix 不能有重叠匹配, 比如 rule-1 中 prefix 是 "a", 那么其它 RULE 中则不能出现类似 "a1", "a-1" 这样的 prefix. 默认为空字符串, 表示匹配所有 object. 不支持正则表达式. | No |
| delete_marker | String | 表示是否对 delete_object 的操作进行复制, 其值可以为 "enabled" (表示启用) 或 "disabled" (表示禁用), 忽略大小写. 默认值为 "disabled". 为防止误删除等情况不建议开启此选项. | No |
| destination | Dict | 用于描述复制的目标区域的信息, 有效的键为 "bucket"、"storage_class". | Yes |
| bucket | String | 复制目标区域的 bucket 名称, 所有 RULE 中必须指向同一个 bucket, 否则返回 400 invalid_request. | Yes |
| storage_class | String | 复制到目标 Bucket 中所使用的存储级别, 当前支持的值为 "STANDARD"、 "STANDARD_IA", 默认值为 "STANDARD". 如果指定的存储级别在目标 Bucket 所在区域不被支持, 会返回 400 invalid_request | No |
| sync_marker | String | 表示是否对历史数据进行同步, 其值可以为 "enabled" (表示同步) 或 "disabled" (表示不同步), 忽略大小写. 默认值为 "disabled". 历史数据会在规则生效 30 分钟之后开始同步. | No |

## Response Headers

> [参见公共响应头](../../../common_header/#响应头字段-response-header)


### Example Request

```http
PUT /?replication HTTP/1.1
Host: my-bucket.pek3a.qingstor.com
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 193
Authorization: authorization string

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
            "sync_marker": "enabled",
            "delete_marker": "enabled",
            "destination": {
                "bucket": "replicate-bucket-1",
                "storage_class": "standard",
            },
        },
    ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
