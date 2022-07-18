---
title: "删除媒资"
description: 
keyword: 云点播,API 参考,删除媒资
draft: false
weight: 12
---

## 接口描述

该接口 （DeleteMedia）用于删除媒资文件。目前仅支持单个删除，不支持批量删除。

## 请求语法

```
DELETE /api/v1/media/<MediaId> HTTP/1.1
Host: api.vod.frontwize.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

| 参数名称      | 是否必选 | 参数类型 | 描述                                                         |
| :------------ | :------- | :------- | :----------------------------------------------------------- |
| MediaId       | 是       | String   | 媒资 ID。媒资文件的唯一标识。<br/><!--支持一次删除多个媒资，批量删除时以逗号分隔。--> |
| DeleteParts.N | 否       | Array    | 指定本次需要删除的部分。不传表示删除媒体及其对应的全部视频处理文件。 |
| AppId         | 否       | Integer  | 预留字段。                                                   |

## 响应参数

| 参数    | 参数类型 | 描述      |
| :------ | :------- | :-------- |
| MediaId | String   | 媒体 ID。 |

## 请求示例

```
DELETE /api/v1/media/47261147421741056 HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Host: api.vod.frontwize.com
Authorization: authorization string
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 02:58:51 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Content-Language: zh-cn
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "MediaId": "47261147421741056",
  "ret_code": 0
}
```
