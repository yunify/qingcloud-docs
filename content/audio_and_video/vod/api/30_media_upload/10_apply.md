---
title: "申请上传"
description: 
keyword: 云点播,API 参考,上传媒资
draft: false
weight: 10
---

调用 **ApplyUpload** 申请媒体文件的上传。

## 请求路径

/v1/media

## 请求方法

POST

## 请求参数

| 参数        | 是否必选 | 参数类型     | 描述                                                         | 示例值                                     |
| :---------- | :------- | :----------- | :----------------------------------------------------------- | ------------------------------------------ |
| Title       | 是       | String       | 媒资标题，长度不超过 128 个字节，UTF-8 编码。                |                                            |
| Region      | 是       | String       | 区域（如果用户传入非默认区域，返回失败）。                   | pek3b                                      |
| MediaType   | 是       | String       | 上传音视频文件的格式。<br/>取值如下：<ul><li>视频文件：MP4、TS、MOV、MXF、MPG、FLV、WMV、AVI、M4V、F4V、MPEG、3GP、ASF、MKV、HLS</li><li>音频文件：MP3、OGG、WAV、WMA、APE、FLAC、AAC、AC3、MMF、AMR、M4A、M4R、WV、MP2</li></ul>若上传格式为音频文件，则不支持转码、添加水印和字幕。 |                                            |
| Description | 否       | String       | 视频描述，长度不超过 1024 个字节。                           |                                            |
| CategoryId  | 否       | String       | 媒资分类 ID。 预留参数。                                     |                                            |
| CoverType   | 否       | String       | 封面图片文件类型。预留参数。                                 |                                            |
| Templates   | 否       | list         | 转码模板。<br/>Type：<br/>1：视频转码<br/>2：自适应码流<br/>4：音频转码<br/>16：裁剪<br/>32：水印 | [{"Type": 模板类型 int，"Id": 模板id int}] |
| Tasks       | 否       | list[taskid] | 任务模板。  如果两者都有，以 task 为准。                     | [123,345]                                  |
| ExtInfo     | 否       | String       | 保留字段，特殊用途时使用。                                   |                                            |
| AppId       | 否       | int          | 目前是预留字段。                                             |                                            |

## 返回参数

**状态码： 200**

| 参数          | 参数类型 | 描述                               |
| :------------ | :------- | :--------------------------------- |
| MediaId       | String   | 媒体 ID。                          |
| StorageBucket | String   | 对象存储的存储空间（Bucket）名称。 |
| StorageRegion | String   | 存储空间所在区域。                 |
| StoragePath   | String   | 文件的存储地址，对应存储的 key。   |

