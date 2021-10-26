---
title: "Put Bucket Lifecycle"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于创建或更新 Bucket 的生命周期（Lifecycle）设置。QingStor 对象存储会按照用户所设置的生命周期（Lifecycle）规则，定期对所匹配的对象执行相应的操作。

目前支持的操作有：
- Expiration：过期删除对象
- Abort Incomplete Multipart Uploads：取消未完成的分段上传
- Transition：变更存储级别

## 注意事项

- QingStor 对象存储定义生命周期为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。
- QingStor 对象存储以防用户误操作，对于新增或修改的生命周期规则，将于 24 小时后生效。

## 请求语法

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

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| rule | List | `rule` 的元素为生命周期规则。 | 是 |
| id | String | 规则的标识符。可为任意 UTF-8 编码字符，长度不能超过 255 个字符。同一个 Bucket 的生命周期中，规则的标识符必须唯一。| 是 |
| status | String | 生命周期规则的状态。可设置为 `enabled` 或 `disabled`，分别表示生效与禁用，可忽略大小写。| 是 |
| filter | Dict | 用于设置对象的过滤条件。| 是 |
| prefix | String | 对象名的前缀。匹配此前缀的对象应用此规则。默认值为空字符串，表示匹配整个 Bucket 中的对象。不支持正则表达式。| 否 |
| expiration | Dict | 用于配置过期删除对象的规则。设置该规则时，需指定 `days` 参数。| 否 |
| abort_incomplete_multipart_upload |Dict | 用于配置取消未完成的分段上传的规则。设置该规则时，需指定 `days_after_initiation` 参数。| 否 |
| transition | Dict | 用于配置变更存储级别的规则。设置该规则时，需指定 `days` 与 `storage_class` 参数。| 否 |
| days | Integer | 距离对象最后更新指定天数后执行操作。 | 否 |
| days_after_initiation | Integer | 在初始化分段上传的指定天数后执行操作。| 否 |
| storage_class | String | 待变更的存储级别。仅支持设置为 `STANDARD_IA`。| 否 |

**说明**
- 生命周期规则总数不能超过 100 条，且每条规则中仅允许存在一种类型的操作。如：指定相同前缀的同一 Bucket 中，过期删除的规则只能有一条。
- `id` 用来唯一标记生命周期规则，描述该规则的用途。不能与其他生命周期规则 `id` 相重复。
- 设置 `transition` 规则时，`days` 需大于等于 30 天。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置或修改 Bucket 生命周期规则 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
