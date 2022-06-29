---
title: "修改媒资"
description: 本节介绍如何调用修改媒资的 API 接口。
keyword: 云点播,API 参考,修改媒资
not_show: true
weight: 10
---

修改媒资名称及描述信息。

## 请求路径

/v1/media/\<MediaId>

## 请求方法

PUT

## 请求参数

| 参数名称    | 是否必选 | 类型   | 描述                            |
| ----------- | -------- | ------ | ------------------------------- |
| Title       | 否       | String | 媒体文件名称，最长 64 个字符。  |
| Description | 否       | String | 媒体文件描述，最长 128 个字符。 |
| CategoryId  | 否       | String | 媒资分类 ID。 预留。            |
| AppId       | 否       | int    | 预留字段。                      |

## 返回参数

**状态码： 200**

