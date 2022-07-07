---
title: "实例删除"
description: 介绍实例删除的请求参数和响应参数。
keyword:  AppCenter, 云应用开发平台, SaaS
draft: false
weight: 50
---

本章节介绍实例删除的请求参数和响应参数。

> **说明：**
>
> 实例到期后才能删除 （debug=1 调试中的实例无此限制）。

### 请求参数

| 字段        | 类型   | 是否必选 | 描述                                                         |
| ----------- | ------ | -------- | ------------------------------------------------------------ |
| action      | string | true     | DeleteAppInstance                                            |
| instance_id | string | true     | 实例 ID                                                      |
| time_stamp  | string | true     | 时间戳，格式：ISO8601<br />示例：2021-06-22T09:15:03Z<br />URL 编码后：2021-06-22T09%3A15%3A03Z |
| signature   | String | true     | 签名                                                         |

### 响应参数

| 参数    | 是否必选 | 类型    | 说明     |
| ------- | -------- | ------- | -------- |
| success | true     | boolean | 是否成功 |
