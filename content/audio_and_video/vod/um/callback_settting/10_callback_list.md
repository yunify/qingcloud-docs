---
title: "回调设置"
keyword: 云点播, 回调设置
description: 本章节指导您如何进行回调设置。
draft: false
collapsible: false
weight: 10
---

您可以根据实际需要设置回调模式，在控制台上配置一个回调 URL，当视频处理（如上传、转码等）每个环节完成后，系统向该 URL 发送 HTTP 请求，请求体中包含通知内容。

本章节介绍如何进行回调设置。

## 前提条件

已获取 QingCloud 管理控制台账号和密码。

## 回调设置

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **云点播**，进入云点播的**音视频管理**页面。

   ![](/audio_and_video/vod/_images/um_video_list.png)

3. 在左侧导航栏中，点击**回调设置**，进入**回调设置**页面。

   ![](/audio_and_video/vod/_images/um_callback_list.png)

4. 点击**修改设置**，设置**回调 URL** 和**回调事件通知**。

   - 回调 URL：请根据实际需要设置接收回调的 URL 地址。
   - 回调事件通知：请选择您需要接收回调的事件，包括**视频上传完成**、**视频删除完成**、**视频禁播完成**以及**视频转码完成**。

   <img src="/audio_and_video/vod/_images/um_callback_setting.png" style="zoom:50%;" />

5. 设置完成后，点击**确定**，完成 HTTP 请求回调设置操作。

## 回调鉴权

回调鉴权默认**关闭**。

开启回调鉴权后，在 HTTP 回调时增加特定签名头，供回调消息接收服务端进行签名认证，防止非法或无效请求。

1. 点击<img src="/audio_and_video/vod/_images/icon_closed.png" style="zoom:50%;" />，开启回调鉴权。

   <img src="/audio_and_video/vod/_images/um_callback_auth_open.png" style="zoom:50%;" />

2. 设置**鉴权密钥**。

   您可以根据自己需要设置鉴权密钥。最长 32 位，必须同时包含大写字母、小写字母和数字。

3. 点击**确定**，完成回调鉴权设置操作。



