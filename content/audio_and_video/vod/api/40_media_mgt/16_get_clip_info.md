---
title: "查询媒资裁剪视频"
description: 
keyword: 云点播,API 参考,媒资管理,查询裁剪视频
draft: false
weight: 16
---

## 接口描述

调用该接口（GetMediaClipInfo） 可根据媒资 ID 查询裁剪处理后的视频信息。

## 请求语法

```
GET   /v1/media/<MediaId>/clip HTTP/1.1
Host: api.vod.frontwize.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

N/A

## 响应参数

| 参数      | 参数类型                     | 描述         |
| :-------- | :--------------------------- | :----------- |
| MediaId   | String                       | 媒资 ID。    |
| ClipInfos | [ClipInfo](#clipinfo) object | 裁剪视频信息 |

#### ClipInfo

| 参数         | 参数类型 | 描述                      |
| :----------- | :------- | :------------------------ |
| Id           | int      | 视频 ID。                 |
| Start        | String   | 开始裁剪时间： hh-mm-ss。 |
| End          | String   | 结束裁剪时间： hh-mm-ss。 |
| PlayUrl      | String   | 播放地址。                |
| Size         | Int      | 视频大小。 单位：字节。   |
| TemplateType | Int      | 模板类型。                |
| TemplateId   | Int      | 模板 ID。                 |
| TemplateName | String   | 模板名称。                |

## 请求示例

```
GET   /v1/media/50591129875255296/clip HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Content-Length: 209
Host: api.vod.frontwize.com
Authorization: authorization string
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 02:44:50 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "MediaId": "50591129875255296",
  "ClipInfos": null,
  "ret_code": 0
}
```
