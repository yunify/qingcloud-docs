---
title: "API 概览"
keyword: 视频点播,云点播,API 参考
description: 本章节介绍云点播产品的API参考。
draft: false
collapsible: false
weight: 10
---

欢迎使用青云云点播（Video On Demand）。青云云点播服务是基于青云已有公有云产品的多年积累，为有音视频应用需求的客户提供的一站式点播场景解决方案，目前青云云点播包括音视频存储管理、音视频转码处理、音视频加速播放等能力。

青云云点播服务提供以下 API 接口供您使用。

## 媒资上传

| API                                                          | 说明                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [ApplyUpload](/audio_and_video/vod/api/30_media_upload/10_apply/) | 申请将音视频文件上传到媒资管理后台。 |
| [CommitUpload](/audio_and_video/vod/api/30_media_upload/20_confirm/) | 确认媒资上传状态。                   |

## 媒资管理

| API                                                          | 说明                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [DeleteMedia](/audio_and_video/vod/api/40_media_mgt/12_delete/) | 删除媒资文件。                               |
| [GetMediaInfo](/audio_and_video/vod/api/40_media_mgt/15_get_info/) | 根据媒资 ID 查询媒资详情                     |
| [GetMediaClipInfo](/audio_and_video/vod/api/40_media_mgt/16_get_clip_info/) | 根据媒资 ID 查询裁剪处理后的视频信息。       |
| [SearchMediaList](/audio_and_video/vod/api/40_media_mgt/19_search_list/) | 批量查询媒资信息。                           |
| [ForbidMedia](/audio_and_video/vod/api/40_media_mgt/20_forbid/) | 根据媒资 ID 在媒资后台将音视频禁播。         |
| [ReleaseMedia](/audio_and_video/vod/api/40_media_mgt/22_no_forbid/) | 根据媒资 ID 在媒资后台将将禁播的音视频解禁。 |



## 媒资处理

| API                                                          | 说明                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------- |
| [ProcessMedia](/audio_and_video/vod/api/50_media_handle/10_process/) | 根据媒资 ID 在媒资后台添加的任务模版中对媒资进行处理。 |
