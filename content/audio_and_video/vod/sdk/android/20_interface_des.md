---
title: "接口说明"
keyword: 云点播,视频点播,SDK,Android端集成
description: 本章节介绍云点播 SDK 简介。
draft: false
collapsible: false
weight: 20

---

本文提供 Android 播放器 SDK 的接口说明。

## 播放器接口

| API                                                          | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [setMediaController](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 为播放器设置视频控制器。<br/>用户可自定义自己的视频控制器，但必须继承抽象类 [IQCMediaController](https://vod-sdk.pek3b.qingstor.com/doc/Android/com/qingcloud/vod/player/mediacontroller/IQCMediaController.html)。 <br/>如无设置，默认使用青云自定义的控制器 QCMediaController。 如果只想显示视频，不需要控制器，传Null。 |
| [playWithUrl](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 直接传入视频地址进行播放。                                   |
| [playWithItem](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 配置一个视频原子对象进行播放。                               |
| [release](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 退出播放器并销毁。                                           |



## 播放基础接口

| API                                                          | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [play](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 开始播放。                         |
| [stop](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 停止播放。                         |
| [pause](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 暂停播放。                         |
| [seekTo](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 跳转到视频流指定时间点，单位毫秒。 |
| [getDuration](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 获取总时长，单位毫秒。             |
| [getCurrentPosition](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 获取当前播放时间，单位毫秒。       |
| [isPlaying](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 是否正在播放。                     |
| [suspend](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 停止播放，并释放播放器资源。       |
| [setBrightness](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 设置亮度。                         |
| [enableCodec](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 设置是否启动硬解码。               |
| [getBufferPercentage](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 获取视频缓冲进度百分比。           |

## 视频相关接口

| API                                                          | 描述                 |
| :----------------------------------------------------------- | :------------------- |
| [getFrameScreenShot](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 返回抽帧截图的图片。 |
| [setSpeed](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 设置倍速率。         |

## 音频相关接口

| API                                                          | 描述       |
| :----------------------------------------------------------- | :--------- |
| [setVolume](https://vod-sdk.pek3b.qingstor.com/doc/Android/index.html) | 设置音量。 |
