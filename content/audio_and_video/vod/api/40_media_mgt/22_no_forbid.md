---
title: "媒资解禁"
description: 
keyword: 云点播API,媒资管理,解禁
draft: false
weight: 22
---

## 接口描述

调用该接口（ReleaseMedia）可根据媒资 ID 在媒资后台将将禁播的音视频解禁。

## 请求语法

```
POST /api/v1/media/<MediaId>/release HTTP/1.1
Host:  api.vod.frontwize.com
Content-Type: application/json
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

| 参数  | 是否必选 | 参数类型 | 描述   |
| ----- | -------- | -------- | ------ |
| AppId | 否       | Integer  | 预留。 |

## 响应参数

N/A

> **说明**
>
> 返回状态码 200 即为解禁成功，若状态码大于400，可参考错误码。

## 请求示例

```
POST /api/v1/media/49799015096651776/release HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Content-Length: 200
Content-Type: application/json; charset=UTF-8
Host: api.vod.frontwize.com
Authorization: authorization string
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 03:04:56 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "ret_code":0
}
```
