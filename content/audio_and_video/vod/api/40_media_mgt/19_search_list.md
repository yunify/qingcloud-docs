---
title: "获取媒资列表"
description: 
keyword: API 参考,媒资管理,媒资列表
weight: 19
---

## 接口描述

该接口 （SearchMediaList） 用于批量查询媒资信息。

## 请求语法

```
GET   /v1/media/search HTTP/1.1
Host: api.vod.frontwize.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

| 参数        | 是否必选 | 参数类型 | 描述                                                         |
| ----------- | -------- | -------- | ------------------------------------------------------------ |
| MediaId     | 否       | Array    | 媒资 ID。最多同时查询10个。                                  |
| FileIds     | 否       | Array    | 查询的信息类型，为空时表示查询所有信息，不为空时支持同时查询一个或者多个类型的信息，取值如下：<ul><li>baseInfo：媒资基本信息</li><li>transcodeInfo：转码结果信息</li><li>thumbnailInfo：截图结果信息</li><li>reviewInfo：审核结果信息</li><li>SubtitleInfo： 字幕信息</ul></li> |
| StartTime   | 否       | String   | 起始时间。 <br/>格式按照 ISO 8601标准表示：YYYY-MM-DDThh:mm:ssZ。必须是与时区无关的UTC时间。 |
| EndTime     | 否       | String   | 结束时间。<br/>格式按照 ISO 8601标准表示：YYYY-MM-DDThh:mm:ssZ。必须是与时区无关的UTC时间。<br/>**注意**：StartTime 和 EndTime 必须**都传**或**都不传**。 |
| CategoryIid | 否       | Integer  | 分类 ID。                                                    |
| Name        | 否       | String   | 在媒资标题模糊查询的字符串。                                 |
| Region      | 否       | string   | 所在区域。                                                   |
| Source      | 否       | string   | 媒资来源。<br/>取值如下：<ul><li>Console：控制台</li><li>SDK：SDK 上传</li><li>API：API 接口上传</li></ul> |
| Forbid      | 否       | string   | 禁止状态。<br/> 取值如下：<ul><li>normal：正常</li><li>forbid： 禁止</li></ul> |
| Type        | 否       | String   | 文件类型。<br/>匹配集合中的任意元素：<ul><li> Video: 视频文件</li><li>Audio: 音频文件</li><li>Image: 图片文件</li></ul> |
| Offset      | 否       | Integer  | 分页返回的起始偏移量。默认值：0。                            |
| Limit       | 否       | Integer  | 分页返回的记录条数。默认值：10。<br/>将返回第 Offset 到第 Offset+Limit-1 条，最大100。 |
| LastId      | 否       | Integer  | 翻页查询时，上一页最后一条记录的 {mediaId}，从 {LastId} 处开始查{Limit} 条数据。不传时默认从最新数据开始查。 |

## 响应参数

| 参数      | 参数类型                   | 描述                                                         |
| :-------- | :------------------------- | :----------------------------------------------------------- |
| Total     | Integer                    | 媒资总数说明：暂只能统计10000个媒资，若您需要查询具体的媒资总数，请[提交工单](https://console.qingcloud.com/tickets/create)申请。 |
| MediaInfo | Array of mediainfo objects | 媒资详情列表。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>每一个 MediaInfo 的数据格式可参考[查询媒资详情](../15_get_info/)接口中单个媒资数据的格式。</div> |

## 请求示例

```
GET   /v1/media/search?Offset=&Limit=10&Name=%22%22&LastId=0 HTTP/1.1
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
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "MediaInfo": [
    {
      "StreamingInfos": null,
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
        "PlayUrl": "vod/50591129875255296.mp4",
        "Md5": "-"
      },
      "MediaId": "50591129875255296",
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
        "Duration": 10029,
        "Type": "Video",
        "CreateTime": "2022-05-20T07:32:07Z",
        "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/50591129875255296.mp4",
        "Description": ""
      }
    },
    {
      "StreamingInfos": [
        {
          "Definition": 1,
          "Package": "hls",
          "DrmType": "",
          "TemplateName": "Adaptive-HLS",
          "FlowNum": 5,
          "TemplateType": 2,
          "TemplateId": 1,
          "Id": 1001,
          "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/49799015096651776.mp4.trans/A15_739047060291584/adapt/49799015096651776_main.m3u8",
          "Size": 93953968
        }
      ],
      "MetaData": {
        "Container": "mp4",
        "Quality": "SD",
        "FrameRate": 23,
        "Hight": 288,
        "VideoStreamSet": [
          {
            "Width": 640,
            "Codec": "H.264",
            "BitRate": 289567,
            "Hight": 288,
            "FrameRate": 23
          }
        ],
        "Width": 640,
        "AudioStreamSet": [
          {
            "SamplingRate": 48000,
            "Codec": "aac",
            "BitRate": 287321
          }
        ],
        "Codec": "H.264",
        "Duration": 127276,
        "AudioChannels": 1,
        "Size": 9178063,
        "BitRate": 289567,
        "Id": 0,
        "PlayUrl": "vod/49799015096651776.mp4",
        "Md5": "-"
      },
      "MediaId": "49799015096651776",
      "TranscodeInfos": null,
      "BaseInfo": {
        "ForbidStatus": "normal",
        "CategoryName": "",
        "Title": "1619079337502076.mp4",
        "LastModified": "2022-05-18T03:07:22Z",
        "Region": "pek3b",
        "CoverUrl": "-",
        "MediaType": "video/mp4",
        "CategoryId": 0,
        "Source": "Console",
        "Duration": 127276,
        "Type": "Video",
        "CreateTime": "2022-05-18T03:04:37Z",
        "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/49799015096651776.mp4",
        "Description": ""
      }
    },
    {
      "StreamingInfos": [
        {
          "Definition": 1,
          "Package": "hls",
          "DrmType": "",
          "TemplateName": "Adaptive-HLS",
          "FlowNum": 5,
          "TemplateType": 2,
          "TemplateId": 1,
          "Id": 1001,
          "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/47261147421741056.mp4.transOut/A4B7/adapt/47261147421741056_main.m3u8",
          "Size": 7498847
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
        "PlayUrl": "vod/47261147421741056.mp4",
        "Md5": "-"
      },
      "MediaId": "47261147421741056",
      "TranscodeInfos": null,
      "BaseInfo": {
        "ForbidStatus": "normal",
        "CategoryName": "",
        "Title": "9294788633300992.mp4",
        "LastModified": "2022-05-16T03:02:46Z",
        "Region": "pek3b",
        "CoverUrl": "-",
        "MediaType": "video/mp4",
        "CategoryId": 0,
        "Source": "Console",
        "Duration": 10029,
        "Type": "Video",
        "CreateTime": "2022-05-11T02:59:57Z",
        "PlayUrl": "https://6ajnshtgnbkpnks.vodtest.frontwize.com/vod/47261147421741056.mp4",
        "Description": ""
      }
    }
  ],
  "Total": 3,
  "ret_code": 0
}
```
