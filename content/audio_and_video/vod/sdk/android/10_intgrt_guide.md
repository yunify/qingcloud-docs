---
title: "集成指引"
keyword: 云点播,视频点播,SDK,Android端集成
description: 本章节介绍如何快速将播放器集成到 Android 端。
draft: false
collapsible: false
weight: 10
---

本文介绍如何集成云点播 Android 播放器 SDK，通过 SDK，您可以自定义开发播放器界面和播放功能。

## 准备工作

- [开通云点播服务](/audio_and_video/vod/qs/open_vod/)，未注册用户可先[注册账号](/authorization/account/manual/user_signup/)。
- 下载 Android Studio，您可以进入 [Android Studio 官网](https://developer.android.com/studio)下载安装。

## 集成 SDK

您可以通过 Gradle 自动加载或 手动下载  AAR 两种方式来使用青云云点播播放器SDK。

### Gradle 自动加载

1. 在工程目录的 `build.gradle` 中添加 mavenCentral 库。

   ```javascript
   repositories {
       mavenCentral()
   }
   ```

2. 打开 `app/build.gradle`，在 dependencies 中添加 QCPlayer 的依赖。

   ```
   dependencies {
       implementation 'com.qingcloud.vod.player:QCPlayer:latest.release'
   }
   ```

3. 单击 **Sync Now** 按钮同步，SDK 会自动下载集成到工程。

### 手动下载 AAR

1. 下载 `QCPlayer_xxx.aar`（其中xxx为版本号）到本地。

2. 将 `QCPlayer_xxx.aar` 导入到 app下面的 libs 文件夹中。

3. 更改 app 工程的 `build.gradle`文件，在 dependencies 中添加 QCPlayer 的依赖。

   ```
   compile(name:'QCPlayer_xxx', ext:'aar')
   ```

4. 在项目的 `build.gradle` 中添加如下代码。

   ```
   allprojects {
       repositories {
               flatDir {
                       dirs 'libs'
               }
       }
   }
   ```

5. 单击 **Sync Now** 按钮同步，SDK 会自动下载集成到工程。

## 配置 APP 权限

在 `AndroidManifest.xml` 中配置 App 的权限，QCPlayer 需要以下权限：

```
<!--网络权限-->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />

<!--点播播放器悬浮窗权限-->
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />

<!--存储-->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

## 设置混淆规则

在 `proguard-rules.pro` 文件，将 QCPlayer 相关类加入不混淆名单：

```
-keep class com.qingcloud.vod.** { *; }
```



## 使用播放器

下文将引导您快速开始使用播放器进行播放。

### 1. 创建播放器

您可以创建带 UI 的 QCPlayerView 来直接播放视频。

在您的布局文件中创建代码如下：

```
<!-- 超级播放器-->
<com.qingcloud.vod.player.QCPlayerView
   android:id="@+id/mVideoView"
   android:layout_width="match_parent"
   android:layout_height="200dp" />
```

### 2. 播放视频

您可以直接使用视频的 URL 地址进行播放。

```
QCPlayerView playerView = findViewById(R.id.mVideoView);
playerView.playWithUrl("您的视频播放地址");
```

您也可以通过配置 QCPlayerModel 设置多分辨率进行播放。

```
QCPlayerURL url480 = new QCPlayerURL("480", "http://url_480.mp4");
QCPlayerURL url720 = new QCPlayerURL("720", "http://url_720.mp4");
QCPlayerURL url1080 = new QCPlayerURL("1080","http://url_1080.mp4");

ArrayList<QCPlayerURL> urls = new ArrayList<>();
urls.add(url480);
urls.add(url720);
urls.add(url1080);

QCPlayerItem item = new QCPlayerItem();
item.setMultiVideoUrls(urls, 0);

playerView.playWithItem(item);
```

### 3. 释放播放器

当您不再需要播放器时，可彻底释放。

```
playerView.release(true);
```

