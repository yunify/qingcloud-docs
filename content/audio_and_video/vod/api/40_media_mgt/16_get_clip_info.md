---
title: "查询媒资裁剪视频"
description: 
keyword: 云点播,API 参考,媒资管理,查询裁剪视频
draft: false
weight: 16
---

调用 **GetMediaClipInfo** 查询裁剪视频信息。

## 请求路径

/v1/media/\<MediaId>/clip

## 请求方法

GET

## 请求参数

N/A

## 返回参数

**状态码： 200**

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
| Size         | Int      | 视频大小。 单位字节。     |
| TemplateType | Int      | 模板类型。                |
| TemplateId   | Int      | 模板 ID。                 |
| TemplateName | String   | 模板名称。                |
