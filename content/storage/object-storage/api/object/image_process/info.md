---
title: "图片信息"
description: 本小节主要介绍图片信息接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, 图片信息
---

用户可以调用该 API 接口获取图片的基本信息和部分 [Exif](https://en.wikipedia.org/wiki/Exif) 信息。

## 请求语法

```http
GET /<object-name>?image&action=info HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求消息头

详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，如 [响应示例](#响应示例) 所示，各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| width 	      | Integer 	| 图片宽度 (px)。
| height 	      | Integer 	| 图片高度 (px)。
| type 	          | String 	| 图片类型
| orientation     | Integer 	| 图片的拍摄相机旋转信息。
| space 	      | String 	| 图片的颜色空间。
| alpha 	      | bool 	| 图片是否含有 alpha 通道。
| make            |	String 	| 制造厂商。
| model 	      | String 	| 相机型号。
| datetime 	      | String 	| 日期和时间。
| exifversion 	  | String 	| Exif 版本。
| focallength 	  | String 	| 焦距。
| gpslatituderef  | String 	| GPS 纬度参考。
| gpslatitude 	  | String 	| GPS 纬度。
| gpslongituderef | String 	| GPS 经度参考。
| gpslongitude 	  | String 	| GPS 经度。
| gpsaltituderef  | String 	| GPS 高度参考。
| gpsaltitude 	  | String 	| GPS 高度。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取图片信息 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /myphoto.jpg?image&action=info HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 22 Jul 2018 08:48:30 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 22 Jul 2018 08:48:30 GMT
Content-Length: 379
Connection: close
x-qs-request-id: 256f44de00000af1

{
    "width": 4032,
    "height": 3024,
    "orientation": 1,
    "alpha": false,
    "type": "jpeg",
    "space": "srgb",
    "make": "Apple",
    "model": "iPhone SE",
    "datetime": "2018:06:07 18:44:54",
    "exifversion": "Exif Version 2.21",
    "focallength": "83/20",
    "gpslatituderef": "N",
    "gpslatitude": "40/1 0/1 5588/100",
    "gpslongituderef": "E",
    "gpslongitude": "116/1 27/1 3094/100",
    "gpsaltituderef": "Sea level",
    "gpsaltitude": "7132/100"
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

