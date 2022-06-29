---
title: "媒资处理"
description: 
keyword: 云点播API,媒资处理
draft: false
weight: 19
---

## 接口描述

调用该接口（ProcessMedia）可根据媒资 ID 在媒资后台添加的任务模版中对媒资进行处理。

## 请求语法

```
POST /v1/media/<MediaId>/process HTTP/1.1
Host:  api.vod.frontwize.com
Content-Type: application/json
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

| 参数      | 是否必选 | 参数类型     | 描述                                | 示例值                                     |
| :-------- | :------- | :----------- | :---------------------------------- | ------------------------------------------ |
| Templates | 否       | list         | 转码模板。                          | [{"Type": 模板类型 int，"Id": 模板id int}] |
| Tasks     | 否       | list[taskid] | 任务模板。<br/>如果有值，忽略模板。 | [123,345]                                  |
| ExtInfo   | 否       | String       | 保留字段，特殊用途时使用。          | -                                          |
| AppId     | 否       | int          | 预留字段。                          | -                                          |

请求参数获取方式如下：

- Templates

  需要使用的转码模版的数组，每个转码对象的组成结构如下：

  ```
  {
   "Type": "模板类型 int", 
   "Id": "模板id int"
  }
  ```

  - `Type` 字段可以根据模版类型在请求时使用固定值，对应表如下：

  | 值   | 对应的类型 |
  | :--- | :--------- |
  | 1    | 视频转码   |
  | 2    | 自适应码流 |
  | 4    | 音频转码   |
  | 8    | 截图       |
  | 16   | 裁剪       |
  | 32   | 水印       |

  - `Id`字段可在云点播后台查看，查看位置如下图。

    ![](../../../_images/template_id.png)

- Tasks

  该数组由任务ID组成，任务ID可通过云点播后台查看，查看位置如下图。

  ![](../../../_images/task_id.png)

## 响应参数

| 参数  | 参数类型        | 描述      |
| :---- | :-------------- | :-------- |
| Tasks | Array of String | 任务 ID。 |

## 请求示例

```
POST /v1/media/49799015096651776/process HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Content-Length: 284
Content-Type: application/json; charset=UTF-8
Host: api.vod.frontwize.com
Authorization: authorization string
{
  "Templates": [
    {
      "Type": 1,
      "Id": 1
    }
  ]
}
```

## 响应示例

```
HTTP/1.1 200 OK
Server: nginx
Date: Thu, 26 May 2022 03:07:29 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Set-Cookie: sid=4cd86b8450613a1b1ceafddb24b5c673; expires=Thu, 02-Jun-2022 03:07:34 GMT; httponly; Max-Age=604800; Path=/
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "ret_code":0
}
```
