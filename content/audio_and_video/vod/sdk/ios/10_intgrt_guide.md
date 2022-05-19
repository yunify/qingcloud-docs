---
title: "集成指引"
keyword: 云点播,视频点播,SDK,iOS端集成
description: 本章节介绍如何快速将播放器集成到 iOS 端。
draft: false
collapsible: false
weight: 10
---

本文介绍如何集成云点播 iOS 播放器 SDK，通过 SDK，您可以自定义开发播放器界面和播放功能。

## 准备工作

- [开通云点播服务](/audio_and_video/vod/qs/open_vod/)，未注册用户可先[注册账号](/authorization/account/manual/user_signup/)。
- 下载 Xcode，您可以进入 [App Store ](https://apps.apple.com/cn/app/xcode/id497799835?l=en&mt=12) 进行下载。
- 下载并安装 Cocoapods，您可以进入 [Cocoapods 官网](https://cocoapods.org/) 进行下载安装。

## 集成 SDK

您可以通过 Cocoapods 或手动下载 SDK 两种方式来集成青云云点播播放器 SDK。

### Cocoapods 集成

1. 在您项目的 Podfile 文件中添加如下代码。

   ```
   pod 'QCPlayer'
   ```

2. 执行 `pod install` 或 `pod update`。

### 手动下载 SDK

1. 下载 QCPlayer.framework 到本地。
2. 导入 QCPlayer.framework 到工程中，并勾选 **Do Not Embed**。

## 使用播放器

下文将引导您快速开始使用播放器进行播放。

### 1. 创建播放器

您可以创建带 UI 的 QCPlayerView 来直接播放视频。

```
#import <QCPlayer/QCPlayerView.h>

// 初始化播放器
QCPlayerView *playerView = [[QCPlayerView alloc] init];
// 设置代理，用于接收回调事件
playerView.delegate = self;
// 将播放器添加到父 View 里
[self.view addSubview:playerView];
```

### 2. 播放视频

您可以直接使用视频的 URL 地址进行播放。

```
[playerView playWithUrl:@"您的视频URL地址"];
```

您也可以通过配置 QCPlayerModel 设置多分辨率进行播放。

```
// 初始化 Model
QCPlayerModel *model = [[QCPlayerModel alloc] init];

//配置多分辨率视频参数
QCPlayerURL *playerUrl1080 = [[QCPlayerURL alloc] init];
[playerUrl1080 setUrl:@"http://your_1080p_video_url.mp4" andTitle:@"1080P"];
QCPlayerURL *playerUrl720 = [[QCPlayerURL alloc] init];
[playerUrl720 setUrl:@"http://your_700p_video_url.mp4" andTitle:@"720P"]; 
QCPlayerURL *playerUrl480 = [[QCPlayerURL alloc] init];
[playerUrl480 setUrl:@"http://your_480p_video_url.mp4" andTitle:@"480P"];
QCPlayerURL *playerUrl240 = [[QCPlayerURL alloc] init];
[playerUrl240 setUrl:@"http://your_240p_video_url.mp4" andTitle:@"240P"];

[model setMultiVideoURLs:@[playerUrl1080, playerUrl720, playerUrl480, playerUrl240] defaultVideoIndex:0];

[playerView playWithModel:model];
```

### 3. 退出播放

当不需要播放时，可以调用`resetPlay`来退出播放状态，释放内存。

```
[playerView resetPlay];
```

### 4. 释放播放器

当您不再需要播放器时，可彻底释放。

```
[playerView destroyVideo];
```

