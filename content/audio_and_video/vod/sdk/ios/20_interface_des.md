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
| - (void)destroyVideo;                                        | 退出播放器并销毁。                                           |
| - (void)playWithModel:(QCPlayerModel *)model;                | 配置一个视频原子对象进行播放。                               |
| - (void)playWithUrl:(NSString *)url;                         | 直接传入视频地址进行播放。                                   |
| - (void)resetPlay;                                           | 重制视图内的播放内容，并释放该视图。                         |
| - (void)setMediaController:(QCMediaControlView *)mediaController; | 为播放器设置视频控制器。<br/>用户可自定义自己的视频控制器，但必须继承基类 QCMediaControlView。<br>如无设置，默认使用青云自定义的控制器 QCCustomMediaControlView。如果只想显示视频，不需要控制器，传 Null。 |

## 播放基础接口

| API                                                     | 描述                               |
| :------------------------------------------------------ | :--------------------------------- |
| - (void)play                                            | 开始播放。                         |
| - (void)stop                                            | 停止播放。                         |
| - (void)pause                                           | 暂停播放。                         |
| - (void)seekTo:(NSInteger)ms                            | 跳转到视频流指定时间点，单位豪秒。 |
| - (NSInteger)getDuration                                | 获取总时长，单位豪秒。             |
| - (NSInteger)getCurrentPosition                         | 获取当前播放时间，单位毫秒。       |
| - (BOOL)isPlaying                                       | 是否正在播放。                     |
| - (void)suspend                                         | 停止播放，并释放播放器资源。       |
| - (void)setBrightness:(float)percentage                 | 设置亮度。                         |
| - (void)enableHWCodec:(BOOL)enable                      | 设置是否启动硬解码。               |
| -(void)playWithUrl:(NSString *)url withRate:(float)rate | 传入倍速率播放。                   |



## 播放器配置类接口

| API                | 描述                                 |
| :----------------- | :----------------------------------- |
| cacheFolderPath    | 视频缓存目录。                       |
| enableAccurateSeek | 设置是否精确 seek，默认 true。       |
| isAutoplay         | startPlay 后是否立即播放，默认 YES。 |
| maxBufferSize      | 最大预加载大小，单位 MB。            |
| timeout            | 设置播放器连接超时时间，单位秒(s)。  |



## 视频相关接口

| API                         | 描述                 |
| :-------------------------- | :------------------- |
| - (UIImage *)screenShot     | 返回抽帧截图的图片。 |
| - (void)setRate:(float)rate | 设置倍速率。         |



## 音频相关接口

| API                                 | 描述       |
| :---------------------------------- | :--------- |
| - (void)setVolume:(NSInteger)volume | 设置音量。 |
