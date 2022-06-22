---
title: "申请上传"
description: 
keyword: 云点播,API 参考,上传媒资
draft: false
weight: 10
---

## 接口描述

该接口（ApplyUpload）用于申请将音视频文件上传到媒资管理后台。

## 请求语法

```
POST  /v1/media HTTP/1.1
Host:  api.vod.frontwize.com
Content-Type: application/json
Date: <date>
Authorization: <authorization-string>
```

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

| 参数          | 参数类型 | 描述                               |
| :------------ | :------- | :--------------------------------- |
| MediaId       | String   | 媒体 ID。                          |
| StorageBucket | String   | 对象存储的存储空间（Bucket）名称。 |
| StorageRegion | String   | 存储空间所在区域。                 |
| StoragePath   | String   | 文件的存储地址，对应存储的 key。   |

> **说明**
>
> 从该接口获得上传地址后，利用该地址可进行文件的上传，具体代码可参考示例，上传的更详细信息可参考 [Post Object](https://docsv3.qingcloud.com/storage/object-storage/api/object/post/)。

## 请求示例

```
POST  /v1/media HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
Connection: keep-alive
Content-Length: 328
Content-Type: application/json; charset=UTF-8
Host: api.vod.frontwize.com
Authorization: authorization string
{
  "Title": "50591129875255296.mp4",
  "Region": "pek3b",
  "MediaType": "video/mp4"
}
```

## 响应示例

```
HTTP/1.1 200 OK
Date: Thu, 26 May 2022 06:18:09 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Language,Cookie
Content-Language: zh-cn
Content-Encoding: gzip
x-qvod-request-id: aa08cf7a43f611e5886952542e6ce14b
{
  "StorageBucket": "",
  "MediaId": "52746780168687616",
  "StoragePath": "https://qvod6ajnshtgnbkpnks.s3.pek3b.qingstor.com/vod/52746780168687616.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YLIODQRBPUONJZAQHDKR%2F20220526%2Fpek3b%2Fs3%2Faws4_request&X-Amz-Date=20220526T061753Z&X-Amz-Expires=180&X-Amz-SignedHeaders=host&X-Amz-Signature=532d430cee2542319d48be2787a8ed2868294693cafdb04d97b387ca3e285e3c",
  "StorageRegion": "",
  "ret_code": 0
}
```

**注意**：此请求会返回世纪文件上传的地址，可以根据该地址进行上传，参考示例代码如下。

```
func httpSendVideo(method string, url string, body string) (map[string]interface{}, error) {
  httpclient := &http.Client{Timeout: 2 * time.Minute}

  var Req *http.Request
  if len(body) == 0 {
    Req, _ = http.NewRequest(method, url, nil)
  } else {
    Req, _ = http.NewRequest(method, url, strings.NewReader(body))
  }

  // 此处 Content-Type 需要传媒体实际的 mime type，如此处是 mp4
  Req.Header.Set("Content-Type", "video/mp4")

  resp, err := httpclient.Do(Req)
  defer resp.Body.Close()
  if err != nil {
    return nil, err
  }
}
```

