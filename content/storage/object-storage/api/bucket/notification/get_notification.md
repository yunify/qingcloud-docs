---
title: "Bucket Notification"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# GET Bucket Notification

获取存储空间的事件通知策略。

设置 Bucket Notification 请参见 [PUT Bucket Notification](put_notification.html) 。

删除 Bucket Notification 请参见 [DELETE Bucket Notification](delete_notification.html) 。

## Request Syntax

```http
GET /?notification HTTP/1.1
Host: <bucket-name>.<zone_id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header.html#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../common/error_code.html)

## Response Headers

参见[公共响应头](../../common/common_header.html#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)

| Name | Type | Description | Required |
| - | - | - | - |
| notifications | Array | bucket notification 的配置规则，配置项中的元素解释见下 |  Yes |
| id | String | 通知配置的标识 | Yes |
| event_types | Array | 事件的类型，每当该类型的事件被触发时，发出通知。<br> 目前支持的类型为: <br> - "create_object": 创建对象完成 <br> - "delete_object": 删除对象完成 <br> - "abort_multipart": 终止分段上传 <br> - "complete_multipart": 完成分段上传 | Yes |
| object_filter | String | 对象名匹配规则(glob patterns) | Yes |
| cloudfunc | String | 事件处理云服务，接收通知中触发的事件并进行处理。目前支持: <br> - tupu-porn: [图谱鉴黄服务]() <br> - notifier: 通知服务, 将 QingStor 事件推送到 notify_url | Yes |
| cloudfunc_args | Object | 提供给 cloudfunc 的自定义参数 | No |
| notify_url | String | 通知事件处理结果的 url ，当事件处理完成后，会将处理结果以 POST 方式向 notify_url 请求。如果 POST 超时，将会重试，超时时间是 5s， 重试间隔为 1s。| No |

## Example

### Example Request

```http
GET /?notification HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

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
