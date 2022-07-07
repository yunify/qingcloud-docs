---
title: "缓存刷新"
keyword: 缓存刷新
description: 本章节介绍实时音视频 RTC 的云录制功能。
draft: false
collapsible: false
weight: 10
---

缓存刷新可以强制 CDN 节点回源并获取最新文件。

## 前提条件

已获取 QingCloud 管理控制台账号和密码。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **云点播**，进入云点播的**音视频管理**页面。

   ![](/audio_and_video/vod/_images/um_video_list.png)

3. 在左侧导航栏中，点击**刷新预热**，进入**刷新预热**的**缓存刷新**页面。

   <img src="/audio_and_video/vod/_images/um_refresh.png" style="zoom:50%;" />

4. 配置**刷新类型**。

   - ID 刷新

     通过云点播的音视频媒资 ID 刷新。

     单次最多提交 10 条数据，使用回车换行输入，不支持正则表达式及通配符，刷新任务完成时间预计 5 分钟。

   - URL 刷新

     通过云点播的音视频媒资的 URL 刷新。

     单次最多提交 10 条数据，使用回车换行输入，不支持正则表达式及通配符，刷新任务完成时间预计 5 分钟。

5. 点击**提交**，完成缓存刷新配置操作。

