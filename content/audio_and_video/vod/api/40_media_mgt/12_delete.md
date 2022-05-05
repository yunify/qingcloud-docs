---
title: "删除媒资"
description: 本节介绍如何调用删除媒资的 API 接口。
keyword: 云点播,API 参考,删除媒资
draft: false
weight: 12
---

调用 **DeleteMedia** 删除媒资文件。支持一次删除一个或多个文件。

## 请求路径

/v1/media/\<MediaId>

## 请求方法

DELETE

## 请求参数

| 参数名称      | 必选 | 类型    | 描述                                                         |
| :------------ | :--- | :------ | :----------------------------------------------------------- |
| MediaId       | 是   | String  | 媒资 ID。媒资文件的唯一标识。<br/>支持一次删除多个媒资，批量删除时以逗号分隔。 |
| DeleteParts.N | 否   | Array   | 指定本次需要删除的部分。不传表示删除媒体及其对应的全部视频处理文件。 |
| AppId         | 否   | Integer | 预留字段。                                                   |

## 返回参数

**状态码： 200**

| 参数    | 参数类型 | 描述      |
| :------ | :------- | :-------- |
| MediaId | String   | 媒体 ID。 |
