---
title: "Get Bucket Notification"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于获取 Bucket 的事件通知及处理策略。QingStor 对象存储定义事件通知为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。


## 请求语法

```http
GET /?notification HTTP/1.1
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

## 响应消息体

成功调用该 API 后，会返回一个 Json 格式的 Response Body。该 Response Body 各参数段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| - | - | - | - |
| notifications | Array | 配置规则，配置项中的元素解释见下 |  是 |
| id | String | 配置的标识 | 是 |
| event_types | Array | 事件的类型，每当该类型的事件被触发时，发出通知。目前支持的类型为: <br> - `create_object`: 创建对象完成 <br> - `delete_object`: 删除对象完成 <br> - `abort_multipart`: 终止分段上传 <br> - `complete_multipart`: 完成分段上传 | 是 |
| object_filter | String | 对象名匹配规则 | 是 |
| cloudfunc | String | 事件处理云服务，接收通知中触发的事件并进行处理。目前支持: <br> - tupu-porn: [图谱鉴黄服务](/storage/object-storage/manual/console/data_process/tupu_porn/) <br> - notifier: 通知服务，将 QingStor 事件推送到 `notify_url` | 是 |
| cloudfunc_args | Object | 提供给 `cloudfunc` 的自定义参数 | 否 |
| notify_url | String | 通知事件处理结果的 URL，当事件处理完成后，会将处理结果以 POST 方式向 `notify_url` 请求。如果 POST 超时，将会重试，超时时间是 5s， 重试间隔为 1s。| 否 |

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取 Bucket 事情通知 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?notification HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 125
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "notifications": [
        {
            "cloudfunc": "tupu-porn",
            "event_types": [
                "create_object"
            ],
            "id": "notificaion-1",
            "notify_url": "http://tupu_porn_notify_url"
        },
        {
            "cloudfunc": "video-trans",
            "event_types": [
                "create_object",
                "complete_multipart"
            ],
            "id": "notificaion-2",
            "notify_url": "http://transcode_notify_url"
        }
    ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。