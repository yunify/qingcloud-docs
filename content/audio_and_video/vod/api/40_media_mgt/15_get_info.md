---
title: "查询媒资详情"
description: 
keyword: 云点播,API 参考,查询媒资详情
draft: false
weight: 15
---

调用 **GetMediaInfo** 查询媒资详情，如媒资基本信息、转码信息、审核结果信息等。

## 请求路径

/v1/media/\<MediaId>

## 请求方法

GET

## 请求参数

| 参数    | 是否必选 | 参数类型 | 描述                                                         |
| :------ | :------- | :------- | :----------------------------------------------------------- |
| FileIds | 否       | String   | 查询的信息类型。<br/>多个用逗号隔开。为空时表示查询所有信息；不为空时支持同时查询一个或者多个类型的信息，取值如下：<ul><li>baseInfo：媒资基本信息</li><li>metadata: 媒资原视频信息</li><li>transcodeInfo：转码结果信息</li><li>streamingInfo: 自适应转码结果信息</li><li>thumbnailInfo：截图结果信息</li><li>reviewInfo：审核结果信息</li><li>subtitleInfo： 字幕信息</li></ul> |

## 返回参数

**状态码： 200**

| 参数           | 参数类型                             | 描述                                                         |
| :------------- | :----------------------------------- | :----------------------------------------------------------- |
| MediaId        | String                               | 媒资 ID。                                                    |
| BaseInfo       | [BaseInfo](#baseinfo) object         | 媒资基本信息。                                               |
| MetaData       | [MetaData](#metadata) object         | 视频的元数据信息。 预留。<br/>经过视频解析后产生，包括封装格式、大小、分辨率、码率、帧率。 |
| TranscodeInfos | [TranscodeInfo](#transcodeinfo) List | 转码生成文件信息、转码记录。预留。 <br/>说明：仅当转码成功后才能查询到此信息，未转码、正在转码以及转码失败时，无此字段信息。 |
| StreamingInfos | StreamingInfo List                   | 自适应转码结果信息。                                         |
| ThumbnailInfo  | ThumbnailInfo                        | 截图信息。预留。<br/>说明：仅当截图成功后才能查询到此信息，未截图、正在截图以及截图失败时，无此字段信息。 |
| ReviewInfo     | ReviewInfo                           | 审核信息数组。预留。<br/> 预留说明：仅当审核成功后才能查询到此信息，未审核、正在审核以及审核失败时，无此字段信息。 |
| SubtitleInfo   | SubtitleInfo                         | 字幕信息。 预留。                                            |

#### BaseInfo

| 参数         | 参数类型 | 描述                                                         |
| :----------- | :------- | :----------------------------------------------------------- |
| Title        | String   | 媒资标题。长度不超过 128 个字节，UTF8 编码。                 |
| Description  | String   | 媒资描述。长度不超过 1024 个字节。                           |
| CategoryId   | Long     | 媒资分类 ID。                                                |
| CategoryName | String   | 媒资分类名称。                                               |
| CreateTime   | String   | 媒资创建时间。<br/>格式为：yyyymmddhhmmss。必须是与时区无关的UTC时间。 |
| LastModified | String   | 媒资最近修改时间。<br/>格式为yyyymmddhhmmss。必须是与时区无关的UTC时间。 |
| MediaType    | String   | 音视频文件类型。<br/>取值如下：<ul><li>视频文件：MP4、TS、MOV、MXF、MPG、FLV、WMV、AVI、M4V、F4V、MPEG、3GP、ASF、MKV。</li><li>音频文件：MP3、OGG、WAV、WMA、APE、FLAC、AAC、AC3、MMF、AMR、M4A、M4R、WV、MP2。</li></ul> |
| Region       | String   | 所在区域。                                                   |
| PlayUrl      | String   | 原始视频文件的访问地址。                                     |
| CoverUrl     | string   | 封面地址 URL。                                               |
| ForbidStatus | string   | 禁止状态。<br/>取值：<ul><li>normal：正常</li><li>forbid： 禁止</li></ul> |
| Type         | String   | 文件类型。<br/>匹配集合中的任意元素：<ul><li> Video: 视频文件</li><li>Audio: 音频文件</li><li>Image: 图片文件</li></ul> |
| Source       | String   | 媒资来源。取值如下：<br/><ul><li>Console：控制台</li><li>SDK：SDK上传</li><li>API：API 接口上传</li></ul> |
| Duration     | int      | 时长， 单位：毫秒。                                          |



#### MetaData

<!--（待调整）-->

| 参数           | 参数类型                 | 描述                                                         |
| :------------- | :----------------------- | :----------------------------------------------------------- |
| Container      | String                   | 容器类型，例如 m4a，mp4 等。                                 |
| FrameRate      | Long                     | 帧率（单位：帧每秒）。<br/>取值如下：<ul><li>FRAMERATE_AUTO = 1,</li><li>FRAMERATE_10 = 2,</li><li>FRAMERATE_15 = 3,</li><li>FRAMERATE_2397 = 4, // 23.97 fps</li><li> FRAMERATE_24 = 5,</li><li>FRAMERATE_25 = 6,</li><li> FRAMERATE_2997 = 7, // 29.97fps</li><li> FRAMERATE_30 = 8,</li><li>FRAMERATE_50 = 9,</li><li>FRAMERATE_60 = 10</li></ul>默认值：1。单位：帧每秒。 |
| Quality        | String                   | 清晰度。<br/>取值如下：<ul><li>FULL_HD：超高清</li><li>HD：高清</li><li>SD：标清</li><li>FLUENT：流畅</li><li>AD：自适应</li><li>2K</li><li>4K</li></ul> |
| VideoStreamSet | Array of VideoStream obj | <!--看是否有必要：阿里华为没有-->                            |
| AudioStreamSet | Array of AudioStream obj | <!--看是否有必要：阿里华为没有-->                            |
| Id             | Int                      | 视频 ID。                                                    |
| Width          | Long                     | 视频宽度（单位：像素）。<ul><li>编码为H.264的取值范围：[32,3840]之间2的倍数。</li><li>编码为H.265的取值范围：[320,3840]之间4的倍数。</li></ul> |
| BitRate        | Long                     | 视频平均码率。                                               |
| Size           | Long                     | 视频文件大小。单位：字节。                                   |
| Duration       | Long                     | 视频时长。 <br/>若视频的原时长为非整数，则该字段值为原时长的向上取整。单位：毫秒。 |
| Md5            | String                   | 视频的 md5 值。                                              |
| Codec          | String                   | 视频编码格式。<br/>取值如下：<ul><li>H.264</li><li>H.265</li></ul> |
| Hight          | Long                     | 视频高度（单位：像素）。<ul><li>编码为H.264的取值范围：[32,2160]之间2的倍数 。</li><li>编码为H.265的取值范围：[240,2160]之间4的倍数。</li></ul> |
| AudioChannels  | Integer                  | 音频的声道数。                                               |



#### TranscodeInfo

| 名称               | 类型    | 描述                   |
| :----------------- | :------ | :--------------------- |
| PalyUrl            | String  | 转码后的视频播放地址。 |
| Definition         | Integer | 使用的转码模板 ID。    |
| 其余为MetaData字段 |         |                        |
