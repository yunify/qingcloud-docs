---
title: "Bucket Notification"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

# PUT Bucket Notification

设置 QingStor 存储空间的事件通知及处理的策略。

Bucket Notificaiton 提供了一种机制，使得当某些指定的事件在 QingStor 中发生时，触发通知或者事件处理。

获取 Bucket Notification 请参见 [GET Bucket Notification](get_notification.html) 。

删除 Bucket Notification 请参见 [DELETE Bucket Notification](delete_notification.html) 。

> **若设置多个通知规则，每个规则都将逐一进行检查，将可能触发多个事件。**

## Request Syntax

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

## Request Body

Json 消息体

|Name|Type|Description|Required|
| - | - | - | - |
| notifications | Array | bucket notification 的配置规则，配置项中的元素解释见下 |  Yes |
| id | String | 通知配置的标识 | Yes |
| event_types | Array | 事件的类型，每当该类型的事件被触发时，发出通知。<br> 目前支持的类型为: <br> - "create_object": 创建对象完成 <br> - "delete_object": 删除对象完成 <br> - "abort_multipart": 终止分段上传 <br> - "complete_multipart": 完成分段上传 | Yes |
| object_filters | List or String | 对象名匹配规则(glob patterns) | no |
| cloudfunc | String | 事件处理云服务，接收通知中触发的事件并进行处理。目前支持: <br> - tupu-porn: [图谱鉴黄服务](/qingstor/data_process/third_party/tupu_porn.html) <br> - notifier: 通知服务, 将 QingStor 事件推送到 notify_url <br> - image: [图片基本处理服务](/qingstor/data_process/image_process/index.html)| Yes |
| cloudfunc_args | Object | 提供给 cloudfunc 的自定义参数 | No |
| notify_url | String | 通知事件处理结果的 url ，当事件处理完成后，会将处理结果以 POST 方式向 notify_url 请求。如果 POST 超时，将会重试，超时时间是 5s， 重试间隔为 1s。| No |

### 图片基本处理服务参数

当设置 cloudfunc 为 image 时, 需要设置 cloudfunc_args 为以下参数，对象存储将按照指定的图片处理规则对图片进行处理，并将结果另存回对象存储。

|Name|Type|Description|Required|
| - | - | - | - |
| action | String | 图片的具体操作参数, 见 [图片基本处理服务](/qingstor/data_process/image_process/index.html) | Yes |
| key_prefix | String | 处理后 object 名称的前缀, 默认为 "gen" | No |
| key_seprate | String | key_prefix 和 object 之间的分隔符，默认为 "_"，处理后新的 object 为 <key_prefix><key_seprate><origin_object> | No |
| save_bucket | String | 另存为的目标 bucket 名称，默认为当前 object 所在 bucket | No |

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header/#请求头字段-request-header)

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header/#响应头字段-request-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)


## Example

### Example Request

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

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
