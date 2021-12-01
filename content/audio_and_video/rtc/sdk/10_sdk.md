---
title: "SDK 参考"
draft: false
collapsible: false
weight: 10
---

青云实时音视频 RTC 由青云与声网合作推出的视频通话产品。

## 基础功能

[使用 Token 鉴权](https://docs.agora.io/cn/Interactive%20Broadcast/token_server)：鉴权是指在用户访问你的系统前，对其进行身份校验。用户在使用 QingCloud 实时音视频 RTC 服务，如加入音视频通话时， 使用 Token 对其鉴权。参考该文档可使用文档内提供的代码在服务端生成 Token。

## 平台

- 语音通话

  集成音频 SDK，实现高音质语音通话。

  通过美声、音效、混音等功能，您可以轻松实现语聊房、线上 KTV、语音会议等场景。搭配服务端 RESTful API，您还可以实现踢人、查询用户列表等功能。

- 视频通话

  集成视频 SDK，实现高清流畅视频通话。

  通过伴奏混音、基础美颜、屏幕共享、修改音视频原始数据等功能，您可以轻松实现视频会议、互动课堂等场景。搭配服务端 RESTful API，你还可以实现踢人、查询用户列表等功能。

- 互动直播

  集成音频/视频 SDK，实现高清流畅的音视频互动直播。

  通过跨频道媒体流转发、加入多频道、屏幕共享、推流到 CDN 等功能，您可以轻松实现 PK 连麦、超级小班课等场景。搭配服务端 API，您还可以实现 RTC 频道管理功能和输入在线媒体流功能。

### Android

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_android?platform=Android)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/java/index.html)：查看音频 SDK 的 API 参考。<br />[调整通话音量](https://docs.agora.io/cn/Voice/volume_android?platform=Android)：调整 SDK 采集和播放的音频的音量。<br />[美声与音效](https://docs.agora.io/cn/Voice/voice_changer_android?platform=Android)：美化人声或为人声添加丰富的音效。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_android?platform=Android)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/java/index.html)：查看视频 SDK 的 API 参考。<br />[设置视频属性](https://docs.agora.io/cn/Video/video_profile_android?platform=Android)：设置用户视频的编码属性，如视频分辨率、帧率、码率、旋转模式、镜像模式。<br />[屏幕共享](https://docs.agora.io/cn/Video/screensharing_android?platform=Android)：在音视频互动时共享指定的屏幕或窗口。 |
| 互动直播                                                   | [快速入门](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_android?platform=Android)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/java/index.html)：查看音频/视频 SDK 的 API 参考。<br />[跨频道媒体流转发](https://docs.agora.io/cn/Interactive%20Broadcast/media_relay_android?platform=Android)：将主播的媒体流同时转发到多个直播频道，实现该主播跨频道与其他频道的主播实时互动。 |

### iOS

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_ios?platform=iOS)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/oc/docs/headers/Agora-Objective-C-API-Overview.html)：查看音频 SDK 的 API 参考。<br />[调整通话音量](https://docs.agora.io/cn/Voice/volume_ios?platform=iOS)：调整 SDK 采集和播放的音频的音量。<br />[美声与音效](https://docs.agora.io/cn/Voice/voice_changer_apple?platform=iOS) ：美化人声或为人声添加丰富的音效。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_ios?platform=iOS)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/java/index.html)：查看视频 SDK 的 API 参考。<br />[设置视频属性](https://docs.agora.io/cn/Video/video_profile_apple?platform=iOS)：设置用户视频的编码属性，如视频分辨率、帧率、码率、旋转模式、镜像模式。<br />[屏幕共享](https://docs.agora.io/cn/Video/screensharing_ios?platform=iOS)：在音视频互动时共享指定的屏幕或窗口。 |
| 互动直播                                                   | [快速入门](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_ios?platform=iOS)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/oc/docs/headers/Agora-Objective-C-API-Overview.html)：查看音频/视频 SDK 的 API 参考。<br />[跨频道媒体流转发](https://docs.agora.io/cn/Interactive%20Broadcast/media_relay_apple?platform=iOS)：将主播的媒体流同时转发到多个直播频道，实现该主播跨频道与其他频道的主播实时互动。 |

### macOS

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_mac?platform=macOS)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/oc/docs/headers/Agora-Objective-C-API-Overview.html)：查看音频 SDK 的 API 参考。<br />[调整通话音量](https://docs.agora.io/cn/Voice/volume_mac?platform=macOS)：调整 SDK 采集和播放的音频的音量。<br />[美声与音效](https://docs.agora.io/cn/Voice/voice_changer_apple?platform=macOS) ：美化人声或为人声添加丰富的音效。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_mac?platform=macOS)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/java/index.html)：查看视频 SDK 的 API 参考。<br />[设置视频属性](https://docs.agora.io/cn/Video/video_profile_apple?platform=macOS)：设置用户视频的编码属性，如视频分辨率、帧率、码率、旋转模式、镜像模式。<br />[屏幕共享](https://docs.agora.io/cn/Video/screensharing_mac?platform=macOS)：在音视频互动时共享指定的屏幕或窗口。 |
| 互动直播                                                   | [快速入门](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_mac?platform=macOS)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/oc/docs/headers/Agora-Objective-C-API-Overview.html)：查看音频/视频 SDK 的 API 参考。<br />[跨频道媒体流转发](https://docs.agora.io/cn/Interactive%20Broadcast/media_relay_apple?platform=macOS)：将主播的媒体流同时转发到多个直播频道，实现该主播跨频道与其他频道的主播实时互动。 |

### Web

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_web_ng?platform=Web)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/api-ref?platform=Web) ：查看音频 SDK 的 API 参考。<br />[调整通话音量](https://docs.agora.io/cn/Voice/volume_web_ng?platform=Web) ：调整 SDK 采集和播放的音频的音量。<br />[设置音频编码属性](https://docs.agora.io/cn/Voice/volume_web_ng?platform=Web)：根据场景需求灵活配置音频属性，包含采样率、声道和码率。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_web_ng?platform=Web)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/api-ref?platform=Web) ：查看视频 SDK 的 API 参考。<br />[设置视频属性](https://docs.agora.io/cn/Video/video_profile_web_ng?platform=Web)：设置用户视频的编码属性，如视频分辨率、帧率、码率、旋转模式、镜像模式。<br />[屏幕共享](https://docs.agora.io/cn/Video/screensharing_web_ng?platform=Web)：在音视频互动时共享指定的屏幕或窗口。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_web_ng?platform=Web) ：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/api-ref?platform=Web)：查看音频/视频 SDK 的 API 参考。<br />[跨频道媒体流转发](https://docs.agora.io/cn/Interactive%20Broadcast/media_relay_web_ng?platform=Web)：将主播的媒体流同时转发到多个直播频道，实现该主播跨频道与其他频道的主播实时互动。 |

### Windows

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_windows?platform=Windows) ：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/cpp/index.html) ：查看音频 SDK 的 API 参考。<br />[调整通话音量](https://docs.agora.io/cn/Voice/volume_windows?platform=Windows)：调整 SDK 采集和播放的音频的音量。<br />[美声与音效](https://docs.agora.io/cn/Voice/voice_changer_windows?platform=Windows)：美化人声或为人声添加丰富的音效。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_windows?platform=Windows) ：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/cpp/index.html) ：查看视频 SDK 的 API 参考。<br />[设置视频属性](https://docs.agora.io/cn/Video/video_profile_windows?platform=Windows)：设置用户视频的编码属性，如视频分辨率、帧率、码率、旋转模式、镜像模式。<br />[屏幕共享](https://docs.agora.io/cn/Video/screensharing_windows?platform=Windows)：在音视频互动时共享指定的屏幕或窗口。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_windows?platform=Windows) ：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/cpp/index.html) ：查看音频/视频 SDK 的 API 参考。<br />[跨频道媒体流转发](https://docs.agora.io/cn/Interactive%20Broadcast/media_relay_windows?platform=Windows)：将主播的媒体流同时转发到多个直播频道，实现该主播跨频道与其他频道的主播实时互动。 |

## 框架

### 小程序

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 基础文档                                                   | [如何处理小程序SDK常见问题](https://docs.agora.io/cn/Voice/faq/wechat)：在使用小程序 SDK 过程中的常见问题及解决方案。<br />[错误码和警告码](https://docs.agora.io/cn/Voice/error_rtc?platform=微信小程序)：在调用 API 过程中 SDK 可能会返回的错误码和警告码。 |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_wechat?platform=微信小程序) ：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/wechat/index.html) ：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_wechat?platform=微信小程序)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/wechat/index.html) ：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_wechat?platform=微信小程序)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/wechat/index.html) ：查看音频/视频 SDK 的 API 参考。 |

### Electron

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_electron?platform=Electron)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/electron/index.html)：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_electron?platform=Electron)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/electron/index.html)：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_electron?platform=Electron)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/electron/index.html)：查看音频/视频 SDK 的 API 参考。 |

### Unity

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_unity?platform=Unity)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/unity/index.html)：查看音频 SDK 的 API 参考。<br />[原始音频数据](https://docs.agora.io/cn/Voice/raw_data_audio_unity?platform=Unity)：获取原始音频数据，自己进行前处理或后处理。<br />[自定义音频采集和渲染](https://docs.agora.io/cn/Voice/custom_audio_unity?platform=Unity)：使用自定义的音频源采集或使用自定义的渲染器渲染音频数据。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_unity?platform=Unity)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/unity/index.html)：查看视频 SDK 的 API 参考。<br />[原始视频数据](https://docs.agora.io/cn/Video/raw_data_video_unity?platform=Unity)：获取原始视频数据，自己进行前处理或后处理。<br />[自定义视频采集和渲染](https://docs.agora.io/cn/Video/custom_video_unity?platform=Unity)：使用自定义的视频源采集或使用自定义的渲染器渲染视频数据。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_unity?platform=Unity)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/unity/index.html)：查看音频/视频 SDK 的 API 参考。<br />[原始视频数据](https://docs.agora.io/cn/Interactive%20Broadcast/raw_data_video_unity?platform=Unity)：本文介绍如何获取原始视频数据。<br />[自定义视频采集和渲染](https://docs.agora.io/cn/Interactive%20Broadcast/custom_video_unity?platform=Unity)：本文介绍如何使用自定义的视频源采集或使用自定义的渲染器渲染视频数据。 |

### Flutter

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_flutter?platform=Flutter)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/flutter/index.html)：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_flutter?platform=Flutter)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/flutter/index.html)：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_flutter?platform=Flutter)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/flutter/index.html)：查看音频/视频 SDK 的 API 参考。 |

### React Native

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_react_native?platform=React%20Native)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/react_native/index.html)：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_react_native?platform=React%20Native)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/react_native/index.html)：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_react_native?platform=React%20Native)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/react_native/index.html)：查看音频/视频 SDK 的 API 参考。 |

### Cocos Creator

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_call_audio_cocos_creator?platform=Cocos%20Creator)：快速集成音频 SDK，实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/cocos_creator/index.html)：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_cocos_creator?platform=Cocos%20Creator)：快速集成视频 SDK，实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/cocos_creator/index.html)：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_cocos_creator?platform=Cocos%20Creator)：本文介绍如何使用视频 SDK 实现基本的音视频互动直播。<br />[API 文档](https://docs.agora.io/cn/Interactive%20Broadcast/API%20Reference/cocos_creator/index.html)：查看音频/视频 SDK 的 API 参考。 |

### Cocos2d-x

| <span style="display:inline-block;width:100px">类型</span> | 使用                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 语音通话                                                   | [快速开始](https://docs.agora.io/cn/Voice/start_voice_call_cocos2dx_android?platform=Cocos2d-x)：快速集成音频 SDK，在 Cocos2d-x 游戏项目中实现语音通话功能。<br />[API 文档](https://docs.agora.io/cn/Voice/API%20Reference/cpp/index.html)：查看音频 SDK 的 API 参考。 |
| 视频通话                                                   | [快速开始](https://docs.agora.io/cn/Video/start_call_cocos2dx_android?platform=Cocos2d-x)：快速集成视频 SDK，在 Cocos2d-x 游戏项目中实现视频通话功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/cpp/index.html)：查看视频 SDK 的 API 参考。 |
| 互动直播                                                   | [快速开始](https://docs.agora.io/cn/Interactive%20Broadcast/start_live_cocos2dx_android?platform=Cocos2d-x)：快速集成视频 SDK，在 Cocos2d-x 游戏项目中实现音视频直播功能。<br />[API 文档](https://docs.agora.io/cn/Video/API%20Reference/cpp/index.html)：查看音频/视频 SDK 的 API 参考。 |
