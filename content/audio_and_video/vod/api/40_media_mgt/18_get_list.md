---
title: "获取媒资列表"
description: 
keyword: API 参考,媒资管理,媒资列表
not_show: true
weight: 18
---

调用 **GetMediaList** 。

## 请求路径

/api/v1/media/list

## 请求方法

GET

## 请求参数

| 参数        | 是否必选 | 参数类型 | 描述                                                         |
| ----------- | -------- | -------- | ------------------------------------------------------------ |
| MediaId     | 否       | Array    | 媒资 ID，最多同时查询 10 个。<!--是否需要待确认-->           |
| FileIds     | 否       | Array    | 查询的信息类型。<br/><ul><li>为空时表示查询所有信息。</li><li>不为空时支持同时查询一个或者多个类型的信息，取值如下：<ul><li>baseInfo：媒资基本信息</li><li>transcodeInfo：转码结果信息</li><li>thumbnailInfo：截图结果信息</li><li>reviewInfo：审核结果信息。</li><li>SubtitleInfo：字幕信息</li></ul> |
| StartTime   | 否       | String   | 创建起始时间。<br/>格式为：yyyymmddhhm mss。必须是与时区无关的 UTC 时间。<!--是否需要待确认--> |
| EndTime     | 否       | String   | 创建结束时间。<br/>格式为：yyyymmddhhm mss。必须是与时区无关的 UTC 时间。<!--是否需要待确认--> |
| CategoryIid | 否       | Integer  | 分类 ID。<!--是否需要待确认-->                               |
| Name        | 否       | String   | 在媒资标题模糊查询的字符串。                                 |
| Region      | 否       | string   | 区域<!--是否需要待确认-->                                    |
| Source      | 否       | string   | 媒资来源。<br/>取值如下：<ul><li>Console：控制台</li><li>SDK：SDK上传</li><li>API：API 接口上传</li></ul> |
| Forbid      | 否       | string   | 禁止状态。<br/>取值：<ul><li>normal：正常</li><li>forbid： 禁止</li></ul> |
| Type        | 否       | String   | 文件类型。<br/>匹配集合中的任意元素：<ul><li> Video: 视频文件</li><li>Audio: 音频文件</li><li>Image: 图片文件</li></ul> |
| Offset      | 否       | Integer  | 分页返回的起始偏移量。默认值：0。 <!--是否需要待确认-->      |
| Limit       | 否       | Integer  | 分页返回的记录条数。<br/>默认值：10。将返回第 Offset 到第 Offset+Limit-1 条。最大 100。 |
| LastId      | 否       | Integer  | 翻页查询，时间倒叙。<br/>上一页的最后一条的记录的 mediaId。<br/>从 LastId  处开始查 Limit 条数据。  <br/>不传则默认从最新数据开始查。<br/> |



## 响应参数

| 参数      | 参数类型                   | 描述                                                         |
| :-------- | :------------------------- | :----------------------------------------------------------- |
| Total     | Integer                    | 媒资总数说明：暂只能统计xxx个媒资，若您需要查询具体的媒资总数，请提交工单申请。  <!--待确认--> |
| MediaInfo | Array of mediainfo objects | 媒资详情列表。                                               |

## 请求示例



## 响应示例
