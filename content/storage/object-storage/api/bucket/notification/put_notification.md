---
title: "Put Bucket Notification"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于设置 Bucket 的事件通知及处理策略。事件通知提供了一种机制，使得当某些指定的事件在 Bucket 中发生时，会触发通知或者事件处理。

**使用说明**

- QingStor 对象存储定义事件通知为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。
- 若设置多个通知规则，QingStor 对象存储会对每个规则逐一进行检查匹配，将可能触发多个事件。

## 请求语法

```http
PUT /?notification HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
{
    "notifications": [
        {
            "id": <notification_id>,
            "event_types": [
                <event_type>
            ],
            "cloudfunc": <cloudfunc>,
            "cloudfunc_args": {
                <key1>: <value2>,
                <key2>: <value2>,
        ...
            },
            "notify_url": <url>
        }
    ]
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| notifications | Array | Bucket 的事件通知配置规则。各配置说明如下。 | 是 |
| id | String | 规则的标识符。 | 是 |
| event_types | Array | 事件的类型，当该类型的事件发生时，对应的操作被触发。可设定的值如下：<br> - create_object: 创建对象完成 <br> - delete_object: 删除对象完成 <br> - abort_multipart: 终止分段上传 <br> - complete_multipart: 完成分段上传 | 是 |
| object_filters | List or String  | 对象名匹配规则。| 否 |
| cloudfunc | String  | 事件处理云服务，接收通知中触发的事件并进行处理。目前支持: <br> - tupu-porn: [图谱鉴黄服务](/storage/object-storage/manual/console/data_process/tupu_porn/) <br> - notifier: 通知服务, 将 QingStor 事件推送到 notify_url <br> - image: [图片基本处理服务](/storage/object-storage/manual/console/data_process/image_process/)| 是 |
| notify_url | String  | 接受通知事件处理结果的 URL。当事件处理完成后，其结果将会以 POST 方式向该 URL 发送。若 POST 超时，QingStor 对象存储将会重试。目前超时时间为 5s，重试间隔为 1s。| 否 |

**说明**

当用户设置 `cloudfunc` 为 `image` 时，`cloudfunc_args` 参数有效，其键值说明如下。QingStor 对象存储将按照指定的图片处理规则对图片进行处理，并将处理结果另存回 QingStor 对象存储的 Bucket。

| 名称 | 类型 | 说明 | 是否必须 |
| - | - | - | - |
| action | String | 图片的具体操作参数, 见 [图片基本处理服务](/storage/object-storage/manual/console/data_process/image_process/) | 是 |
| key_prefix | String | 处理结果存回 QingStor 对象存储的 Bucket 的对象名称前缀，默认为 `gen` | 否 |
| key_seprate | String | 分隔符，默认为 `_`。处理结果的对象名为： `key_prefix` + `key_seprate` + `origin_object` | 否 |
| save_bucket | String | 处理结果存回 QingStor 对象存储的目前 Bucket 名称，默认为当前对象所在的 Bucket | 否 |

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置 Bucket 事情通知 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /?notification HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
Content-Length: 125
{
    "notifications": [
        {
            "cloudfunc": "tupu-porn",
            "event_types": [
                "create_object"
            ],
            "id": "notificaion-1",
            "object_filters": [
                "*"
            ],
            "notify_url": "http://user_notify_url"
        }
    ]
}
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。