---
title: "查询媒资详情"
description: 
keyword: 云点播,API 参考,查询媒资详情
draft: false
weight: 15
---

## 接口描述

调用该接口（GetMediaInfo）可根据媒资 ID 查询媒资详情，如媒资基本信息、转码信息、审核结果信息等。

## 请求语法

```
GET  /v1/media/<MediaId> HTTP/1.1
Host: api.vod.frontwize.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

| 参数    | 是否必选 | 参数类型 | 描述                                                         |
| :------ | :------- | :------- | :----------------------------------------------------------- |
| FileIds | 否       | String   | 查询的信息类型。<br/>多个用逗号隔开，为空时表示查询所有信息，不为空时支持同时查询一个或者多个类型的信息，取值如下：<ul><li>baseInfo：媒资基本信息</li><li>metadata: 媒资原视频信息</li><li>transcodeInfo：转码结果信息</li><li>streamingInfo: 自适应转码结果信息</li><li>thumbnailInfo：截图结果信息</li><li>reviewInfo：审核结果信息</li><li>subtitleInfo：字幕信息</li></ul> |

## 响应参数

| 参数           | 参数类型                             | 描述                                                         |
| :------------- | :----------------------------------- | :----------------------------------------------------------- |
| MediaId        | String                               | 媒资 ID。                                                    |
| BaseInfo       | [BaseInfo](#baseinfo) object         | 媒资基本信息。                                               |
| MetaData       | [MetaData](#metadata) object         | 视频的元数据信息。 预留。<br/>经过视频解析后产生，包括封装格式、大小、分辨率、码率、帧率。 |
| TranscodeInfos | [TranscodeInfo](#transcodeinfo) List | 转码生成文件信息、转码记录。预留。 <br/>**说明**：仅当转码成功后才能查询到此信息，未转码、正在转码以及转码失败时，无此字段信息。 |
| StreamingInfos | [StreamingInfo](#streaminginfo) List | 自适应转码结果信息。                                         |

#### BaseInfo

| 参数         | 参数类型 | 描述                                                         |
| :----------- | :------- | :----------------------------------------------------------- |
| Title        | String   | 媒资标题。长度不超过 128 个字节，UTF8 编码。                 |
| Description  | String   | 媒资描述。长度不超过 1024 个字节。                           |
| CategoryId   | Long     | 媒资分类 ID。                                                |
| CategoryName | String   | 媒资分类名称。                                               |
| CreateTime   | String   | 媒资创建时间。<br/>格式为：yyyymmddhhmmss。必须是与时区无关的UTC时间。 |
| LastModified | String   | 媒资最近修改时间。<br/>格式为：yyyymmddhhmmss。必须是与时区无关的UTC时间。 |
| MediaType    | String   | 音视频文件类型。<br/>取值如下：<ul><li>视频文件：MP4、TS、MOV、MXF、MPG、FLV、WMV、AVI、M4V、F4V、MPEG、3GP、ASF、MKV。</li><li>音频文件：MP3、OGG、WAV、WMA、APE、FLAC、AAC、AC3、MMF、AMR、M4A、M4R、WV、MP2。</li></ul> |
| Region       | String   | 所在区域。                                                   |
| PlayUrl      | String   | 原始视频文件的访问地址。                                     |
| CoverUrl     | string   | 封面地址 URL。                                               |
| ForbidStatus | string   | 禁止状态。<br/>取值：<ul><li>normal：正常</li><li>forbid： 禁止</li></ul> |
| Type         | String   | 文件类型。<br/>匹配集合中的任意元素：<ul><li> Video: 视频文件</li><li>Audio: 音频文件</li><li>Image: 图片文件</li></ul> |
| Source       | String   | 媒资来源。<br/>取值如下：<ul><li>Console：控制台</li><li>SDK：SDK 上传</li><li>API：API 接口上传</li></ul> |
| Duration     | int      | 时长。 单位：毫秒。                                          |



#### MetaData

| 参数          | 参数类型 | 描述                                                         |
| ------------- | -------- | :----------------------------------------------------------- |
| Id            | Int      | 视频 ID。                                                    |
| Codec         | String   | 视频编码格式。<br/>取值：<ul><li>H.264</li><li>H.265</li></ul> |
| Container     | String   | 容器类型，例如 m4a，mp4 等。                                 |
| Md5           | String   | 视频的 MD5 值。                                              |
| Duration      | Long     | 视频时长。 单位：毫秒。若视频的原时长为非整数，则该字段值为原时长的向上取整。 |
| Size          | Long     | 视频文件大小。单位：字节。                                   |
| Width         | Long     | 视频宽度。单位：像素。<ul><li>编码为H.264的取值范围：[32,3840]之间2的倍数。</li><li>编码为H.265的取值范围：[320,3840]之间4的倍数。</li></ul> |
| Hight         | Long     | 视频高度。单位：像素。<ul><li>编码为H.264的取值范围：[32,2160]之间2的倍数。</li><li>编码为H.265的取值范围：[240,2160]之间4的倍数。</li></ul> |
| BitRate       | Long     | 视频平均码率。                                               |
| FrameRate     | Long     | 帧率。默认值：1。单位：帧每秒。<br/>取值如下：<ul><li>FRAMERATE_AUTO = 1,</li><li>FRAMERATE_10 = 2,</li><li>FRAMERATE_15 = 3,</li><li>FRAMERATE_2397 = 4, // 23.97 fps</li><li> FRAMERATE_24 = 5,</li><li>FRAMERATE_25 = 6,</li><li> FRAMERATE_2997 = 7, // 29.97fps</li><li> FRAMERATE_30 = 8,</li><li>FRAMERATE_50 = 9,</li><li>FRAMERATE_60 = 10</li></ul> |
| Quality       | String   | 清晰度。<br/>取值如下：<ul><li>FULL_HD：超高清</li><li>HD：高清</li><li>SD：标清</li><li>FLUENT：流畅</li><li>AD：自适应2K4K</li></ul> |
| AudioChannels | Integer  | 音频的声道数。                                               |

#### TranscodeInfo

| 名称                 | 参数类型 | 描述                   |
| :------------------- | :------- | :--------------------- |
| PalyUrl              | String   | 转码后的视频播放地址。 |
| Definition           | Integer  | 使用的转码模板 ID。    |
| 其余为 MetaData 字段 | -        | -                      |

#### StreamingInfo

| 参数         | 参数类型 | 描述                                                         |
| ------------ | -------- | ------------------------------------------------------------ |
| PalyUrl      | String   | 转码后的视频播放地址。                                       |
| TemplateId   | Integer  | 使用的转码模板 ID。                                          |
| TemplateName | String   | 模板名称。                                                   |
| Package      | String   | 打包格式。                                                   |
| DrmType      | String   | 加密类型。                                                   |
| Size         | Integer  | 媒体文件大小。单位：字节。 <br/>当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和；当媒体文件为 DASH 时，大小是 mpd 和分片文件大小的总和。 |
| FlowNum      | Interger | 子流数量。                                                   |

## 请求示例

```
GET  /v1/media/50591129875255296 HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Host: api.vod.frontwize.com
Authorization: authorization string
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 02:44:50 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "MediaId": "50591129875255296",
  "ret_code": 0,
  "BaseInfo": {
    "ForbidStatus": "normal",
    "CategoryName": "",
    "Title": "9294788633300992.mp4",
    "LastModified": "2022-05-20T08:19:42Z",
    "Region": "pek3b",
    "CoverUrl": "-",
    "MediaType": "video/mp4",
    "CategoryId": 0,
    "Source": "Console",
    "Duration": 0,
    "Type": "Video",
    "CreateTime": "2022-05-20T07:32:07Z",
    "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/50591129875255296.mp4",
    "Description": ""
  },
  "ReviewInfo": "",
  "SubtitleInfo": "",
  "StreamingInfos": null,
  "ThumbnailInfo": "",
  "TranscodeInfos": [
    {
      "Definition": 2,
      "Type": "Video",
      "TemplateType": 1,
      "Container": "HLS",
      "TemplateName": "Video-FLU-H264-HLS",
      "Quality": "SD",
      "FrameRate": 25,
      "Hight": 360,
      "VideoStreamSet": [
        {
          "Width": 640,
          "Codec": "H.264",
          "BitRate": 416815,
          "Hight": 360,
          "FrameRate": 25
        }
      ],
      "Width": 640,
      "AudioStreamSet": [
        {
          "SamplingRate": 44100,
          "Codec": "aac",
          "BitRate": 68481
        }
      ],
      "Codec": "H.264",
      "TemplateId": 2,
      "Duration": 10029,
      "AudioChannels": 2,
      "Size": 608380,
      "BitRate": 416815,
      "Id": 1,
      "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/50591129875255296.mp4.trans/A4_1543946324942848/video/50591129875255296_640x360_25_400.m3u8",
      "Md5": ""
    }
  ],
  "MetaData": {
    "Container": "mp4",
    "Quality": "HD",
    "FrameRate": 25,
    "Hight": 720,
    "VideoStreamSet": [
      {
        "Width": 1280,
        "Codec": "H.264",
        "BitRate": 1820549,
        "Hight": 720,
        "FrameRate": 25
      }
    ],
    "Width": 1280,
    "AudioStreamSet": [
      {
        "SamplingRate": 44100,
        "Codec": "aac",
        "BitRate": 129336
      }
    ],
    "Codec": "H.264",
    "Duration": 10029,
    "AudioChannels": 2,
    "Size": 2444425,
    "BitRate": 1820549,
    "Id": 0,
    "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/50591129875255296.mp4",
    "Md5": "-"
  }
}
```
