---
title: "媒资处理"
description: 
keyword: 云点播API,媒资处理
draft: false
weight: 19
---

调用 **ProcessMedia** 禁播媒资。

## 请求路径

/v1/media/\<MediaId\>/process

## 请求方法

POST

## 请求参数

| 参数      | 是否必选 | 参数类型     | 描述                                | 示例值                                     |
| :-------- | :------- | :----------- | :---------------------------------- | ------------------------------------------ |
| Templates | 否       | list         | 转码模板。                          | [{"Type": 模板类型 int，"Id": 模板id int}] |
| Tasks     | 否       | list[taskid] | 任务模板。<br/>如果有值，忽略模板。 | [123,345]                                  |
| ExtInfo   | 否       | String       | 保留字段，特殊用途时使用。          | -                                          |
| AppId     | 否       | int          | 预留字段。                          | -                                          |



## 返回参数

**状态码： 200**

| 参数  | 参数类型        | 描述      |
| :---- | :-------------- | :-------- |
| Tasks | Array of String | 任务 ID。 |

