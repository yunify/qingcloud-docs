---
title: "接口说明"
keyword: 云点播,视频点播,SDK,iOS端集成
description: 本章节介绍云点播 SDK 简介。
draft: false
collapsible: false
weight: 20

---

本文提供 iOS 播放器 SDK 的接口说明。

## 播放器接口

| API                                                          | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [- (void)setMediaController:(QCMediaControlView *)mediaController;](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerView.html#//api/name/setMediaController:) | 为播放器设置视频控制器。 <br/>用户可自定义自己的视频控制器，但必须继承基类 [QCMediaControlView](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCMediaControlView.html)。 如无设置，默认使用青云自定义的控制器 QCCustomMediaControlView。如果只想显示视频，不需要控制器，传 Null。 |
| [- (void)playWithUrl:(NSString *)url;](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerView.html#//api/name/playWithUrl:) | 直接传入视频地址进行播放。                                   |
| [- (void)playWithModel:(QCPlayerModel *)model;](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerView.html#//api/name/playWithModel:) | 配置一个视频原子对象进行播放。                               |
| [- (void)resetPlay;](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerView.html#//api/name/resetPlay) | 重制视图内的播放内容，并释放该视图。                         |
| [- (void)destroyVideo;](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerView.html#//api/name/destroyVideo) | 退出播放器并销毁。                                           |

## 播放基础接口

| API                                                          | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [- (void)play](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 开始播放。                         |
| [- (void)stop](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 停止播放。                         |
| [- (void)pause](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 暂停播放。                         |
| [- (void)seekTo:(NSInteger)ms](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 跳转到视频流指定时间点，单位毫秒。 |
| [- (NSInteger)getDuration](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 获取总时长，单位毫秒。             |
| [- (NSInteger)getCurrentPosition](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 获取当前播放时间，单位毫秒。       |
| [- (BOOL)isPlaying](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 是否正在播放。                     |
| [- (void)suspend](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 停止播放，并释放播放器资源。       |
| [- (void)setBrightness:(float)percentage](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 设置亮度。                         |
| [- (void)enableHWCodec:(BOOL)enable](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 设置是否启动硬解码。               |



## 播放器配置类接口

| API                                                          | 描述                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [timeout](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerConfig.html) | 设置播放器连接超时时间，单位秒(s)。  |
| [enableAccurateSeek](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerConfig.html) | 设置是否精确 seek，默认 true。       |
| [maxBufferSize](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerConfig.html) | 最大预加载大小，单位 MB。            |
| [isAutoplay](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerConfig.html) | startPlay 后是否立即播放，默认 YES。 |
| [cacheFolderPath](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayerConfig.html) | 视频缓存目录。                       |

## 视频相关接口

| API                                                          | 描述                 |
| :----------------------------------------------------------- | :------------------- |
| [- (UIImage *)screenShot](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 返回抽帧截图的图片。 |
| [- (void)setRate:(float)rate](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 设置倍速率。         |



## 音频相关接口

| API                                                          | 描述       |
| :----------------------------------------------------------- | :--------- |
| [- (void)setVolume:(NSInteger)volume](https://vod-sdk.pek3b.qingstor.com/doc/iOS/html/Classes/QCPlayer.html) | 设置音量。 |
