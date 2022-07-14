---
title: "回调内容参数"
keyword: 视频点播,云点播,API,回调事件通知
description: 本章节介绍回调内容公共参数。
draft: false
weight: 20
---

回调事件通知内容的参数说明如下表。

| 参数      | 参数类型 | 描述                                                         | 示例值               |
| :-------- | :------- | :----------------------------------------------------------- | -------------------- |
| EventTime | String   | 事件产生时间，为 UTC 时间。                                  | YYYY-MM-DDThh:mm:ssZ |
| EventType | String   | 事件类型。                                                   | MediaUploadComplete  |
| MediaId   | String   | 媒资 ID。                                                    | 50591129875255296    |
| Status    | String   | 执行结果。<br/>取值如下：<ul><li>SUCCESS</li><li> FAIL</li><li>UNUSUAL</li></ul>UNUSUAL 代表转码结果，部分成功部分失败。 | SUCCESS              |
| Message   | String   | 相关描述信息。                                               | “”                   |

