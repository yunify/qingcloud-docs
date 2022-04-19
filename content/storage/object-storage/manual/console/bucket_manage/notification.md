---
title: "事件通知"
date: 2020-02-28T10:08:56+09:00
description: 本小节主要介绍事件通知相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 10
---

## 功能介绍

事件通知 (Bucket Notification) 服务，它提供了一种机制，使得当某些指定的事件在 QingStor 对象存储中发生时，能够触发通知或者事件处理。

用户可以通过配置该功能，规定当指定对象被删除时，系统发送通知；或者当某图片上传完成时，对该图片进行相关处理，并将处理结果发送至指定 URL 等。

## 使用限制

- 配置事件通知规则的用户必须是 Bucket 的所有者。

- 若设置多个事件通知规则，QingStor 对象存储会对每条规则逐一进行检查匹配，最终将可能触发多个事件。

## 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置事件通知的 Bucket，点击 **右键** > **设置**：

 ![](/storage/object-storage/_images/set_bucket_replication1.png)

2. 进入 Bucket 设置页面，点击 **事件通知** > **添加通知**：

 ![](/storage/object-storage/_images/set_bucket_notification2.png)

3. 在弹出的对话框内，根据页面提示信息，填写相关参数后，点击 **提交** 按钮：

 ![](/storage/object-storage/_images/set_bucket_notification3.png)

 **说明：**
   - **ID**： 事件通知规则的标识符。由字母，数字或者符号组成，用来描述通知的用途。
   - **对象匹配规则**： 用于设置需要设置事件通知的文件名的规则。匹配规则是基于 Glob Pattern 的模式。为空时表示匹配所有对象。
   - **处理方式**： 可选值为 `推送通知` 与 `图片处理`。
   - **通知 URL**：接收 `推送通知` 或 `图片处理` 结果的 URL。
   - **事件类型**： 
      - 当 **处理方式** 设置为 `推送通知` 时，可选 **事件类型** 有 `创建对象完成`，`删除对象完成`，`终止分段上传`，`完成分段上传`；
      - 当 **处理方式** 设置为 `图片处理` 时，可选 **事件类型** 有 `创建对象完成`，`完成分段上传`。
   - **自定义参数**：当 **处理方式** 设置为 `图片处理` 时，该参数设置有效。用于设置图片处理的相关参数，以及处理后的结果存储 Bucket 以及相应的对象名。

4. 成功创建对跨源复制规则，列表显示：

 ![](/storage/object-storage/_images/set_bucket_notification4.png)

5. 如需删除相应的事件通知规则，可选择相应的规则，并点击 **删除** 按钮：

 ![](/storage/object-storage/_images/set_bucket_notification5.png)

6. 弹出对话框，确认无误后，点击 **确认** 按钮：

 ![](/storage/object-storage/_images/set_bucket_notification6.png)

7. 成功删除的事件通知规则，不再列表显示：

 ![](/storage/object-storage/_images/set_bucket_notification7.png)


## 消息格式

当触发事件通知时，QingStor 对象存储发出的消息格式如下：

```plain_txt
{
    "events": [
        {
            "event_source": string,
            "event_version": string,
            "event_type": string,
            "event_time": string,
            "zone_id": string,
            "user_identify": {
                "principal_id": string
            },
            "response_elements": {
                "request_id": string
            },
            "qingstor": {
                "schema_version": string,
                "notification_id": string,
                "bucket": {
                    "name": string
                },
                "object": {
                    "name": string,
                    "etag": string,
                    "size": int,
                }
            }
        }
    ]
}
```

**各字段说明如下：**

|  字段名  |  类型 | 说明 | 是否必须 |
|---------|------|------|--------|
event_source |	string |	事件来源，目前固定为 `qingstor`	 | 是
event_version |	string |	 事件版本，目前为 `1.0`	 | 是
event_type    |	string |	事件类型，可选值为: <br> 1.创建对象完成：create_object<br> 2.删除对象完成：delete_object<br> 3.完成分段上传：complete_upload<br> 4.终止分段上传：abort_upload	| 是
event_time    |	string |	事件时间，`ISO-8601` 格式的时间	| 是
zone_id       |	string |	事件关联的 Zone ID	| 是
user_identify |	object |	user_identify 配置	| 是
user_identify.principal_id |	string |	用户 ID，如 `usr-xxxx`	| 是
response_elements	| object |	response_elements 的配置 |	是
response_elements.request_id |	string	| 发起该事件的请求 ID |	是
qingstor	| object |	QingStor 配置 |	是
qingstor.schema_version	 | string |	QingStor Schema 的版本 |	是
qingstor.notification_id |	string |	相关联的事件通知规则的 ID |	是
qingstor.bucket	| object |	 该事件所描述 Object 的所在 Bucket 信息 |	是
qingstor.bucket.name	 | string	| 该事件所描述 Object 的所在 Bucket 名称 |	是
qingstor.object	|  object	| 该事件所描述 Object 信息 |	是
qingstor.object.name	 | string |	 该事件所描述 Object 名 |	是
qingstor.object.etag	|  string	| 该事件所描述 Object 的 Etag	| 是
qingstor.object.size	 | int	| 该事件所描述 Object 的 Size	| 是

**示例：**

```plain_txt
{
    "events": [
        {
            "event_source": "qingstor",
            "event_version": "1.0",
            "event_type": "create_object",
            "event_time": "2021-08-31T06:25:46.000Z",
            "zone_id": "gamma",
            "user_identify": {
                "principal_id": "usr-iks7Beds"
            },
            "response_elements": {
                "request_id": "45b47b6a30678cb2"
            },
            "qingstor": {
                "schema_version": "1.0",
                "notification_id": "mp4-notify",
                "bucket": {
                    "name": "max-test2"
                },
                "object": {
                    "name": "abc/5.mp4",
                    "etag": "10c918b1d01aea85864ee65d9e0c2305",
                    "size": 9840497
                }
            }
        }
    ]
}
```



## 相关API

Bucket Replication API 见 API 文档:

|操作|API|说明|
|--|--|--|
|设置 Bucket Notification|[PUT Bucket Notification](/storage/object-storage/api/bucket/notification/put_notification)|用于设置 Bucket 事件通知规则|
|获取 Bucket Notification|[GET Bucket Notification](/storage/object-storage/api/bucket/notification/get_notification)|用于获取已有的 Bucket 事件通知规则|
|删除 Bucket Notification|[DELETE Bucket Notification](/storage/object-storage/api/bucket/notification/delete_notification)|用于删除已经设置的事件通知规则|
