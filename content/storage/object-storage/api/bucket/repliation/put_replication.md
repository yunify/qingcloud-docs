---
title: "Put Bucket Replication"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于创建或更新 Bucket 的跨区域复制规则的相关设置。QingStor 对象存储会按照用户所设置的跨区域复制规则，在用户完成某些动作后对匹配规则的对象执行复制操作.

目前会触发跨区域复制的动作如下：
- 上传对象
- 删除对象
- 更新对象元数据
- 完成分段上传

## 使用说明

- QingStor 对象存储定义跨区域复制规则为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。
- 跨区域复制采用异步复制机制，故，数据复制至目标 Bucket 需要一定的时间，通常为几分钟到几个小时不等。

## 请求语法

```http
PUT /?replication HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

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
    ]
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| rules | List | `rules` 的元素为跨区域复制规则。一次请求中需至少包含一条规则且不能超过 1000 条规则，且规则的总的字节数不能超过 2097152。 | 是 |
| id | String | 规则的标识符。可为任意 UTF-8 编码字符串，长度不能超过 255 个字符。同一个 Bucket 中，跨区域复制规则的标识符必须唯一。| 是 |
| status | String | 该条规则的状态。可忽略大小写，默认值为 `enabled`。 可选值为： <br>- `enabled` 表示生效 <br>- `disabled` 表示禁用| 否 |
| filters | Dict | 用于设置对象的过滤条件，目前支持的键为 `prefix`。| 是 |
| prefix | String | 对象名的前缀。匹配此前缀的对象应用此规则。 | 否 |
| delete_marker | String | 用于设置是否对删除对象的操作进行复制。默认值为 `disabled`，忽略大小写。可选值为：<br>- `enabled` 表示启用； <br>- `disabled` 表示禁用。 | 否 |
| destination | Dict | 用于描述复制的目标区域的信息。 | 是 |
| bucket | String | 目标区域的 Bucket 名称。 | 是 |
| storage_class | String | 目标区域的 Bucket 所使用的存储级别。默认值为 `STANDARD`。可选值为：<br>- `STANDARD` 标准存储；<br>- `STANDARD_IA` 低频存储。| 否 |
| sync_marker | String | 用于设置是否对历史数据进行同步。默认值为 `disabled`，忽略大小写。可选值为：<br>- `enabled` 表示同步；<br>- `disabled` 表示不同步。| 否 |

**说明**
- `id` 用来唯一标记跨区域复制规则，描述该规则的用途。不能与其他跨区域复制规则 `id` 相重复。
- `prefix` 最大字符长度为 1024。多个规则中的 `prefix` 不能有重叠匹配。比如规则一中 `"prefix": "image"`，那么其它规则中不能出现类似 `"prefix": "image1"`，`"prefix": "image-1"` 这样的设置。默认为空字符串，表示匹配所有对象。不支持正则表达式。
- 同一条请求中，所有跨区域复制规则中的目标 Bucket，必须指向同一个 Bucket。
- 为防止用户误操作删除数据，QingStor 对象存储不建议用户在配置规则时开启 `delete_marker` 选项。
- 若通过 `storage_class` 设置的存储级别在目标 Bucket 所在区域不被支持，系统会返回设置失败。
- 若设置 `sync_marker` 为 `enabled`，则历史数据会在规则生效 30 分钟之后开始同步。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置跨区域复制（Replication）规则 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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


### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Mon, 1 Oct 2018 15:04:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。