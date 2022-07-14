---
title: "确认上传"
description: 
keyword: 云点播,API 参考,媒资上传
draft: false
weight: 20
---

## 接口描述

该接口（CommitUpload）用于确认上传状态。

## 请求语法

```
POST /api/v1/media/<MediaId>/uploaded HTTP/1.1
Host:  api.vod.frontwize.com
Content-Type: application/json
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

**请求头**：

| 参数   | 是否必选 | 参数类型 | 描述                                                         |
| :----- | :------- | :------- | :----------------------------------------------------------- |
| source | 否       | String   | 上传来源。<br/>取值如下：<br/><ul><li>CONSOLE：控制台</li><li>SDK：SDK上传</li><li>其他或不传：API 接口上传</li></ul> |

**请求消息体**：

| 参数   | 是否必选 | 参数类型 | 描述                                                         |
| :----- | :------- | :------- | :----------------------------------------------------------- |
| Status | 是       | String   | 上传状态。<br/>取值如下：<br/><ul><li>CREATED：创建成功</li><li>FAILED：创建失败</li><li>CANCELLED：创建取消</li></ul> |
| AppId  | 否       | int      | 预留字段。                                                   |

## 响应参数

| 参数名称 | 类型   | 描述                                                         |
| :------- | :----- | :----------------------------------------------------------- |
| MediaId  | String | 媒体文件的唯一标识。                                         |
| PlayUrl  | String | 媒体播放地址。 <br>**注意**： 此字段可能返回 null，表示取不到有效值。 |

## 请求示例

```
POST /api/v1/media/52746780168687616/uploaded HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Content-Length: 233
Content-Type: application/json; charset=UTF-8
source:CONSOLE
Host: api.vod.frontwize.com
Authorization: authorization string
{
  "Status":"CREATED"
}
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 06:18:10 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "MediaId": "52746780168687616",
  "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/52746780168687616.mp4",
  "ret_code": 0
}
```

