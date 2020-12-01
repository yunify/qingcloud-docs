---
title: "图片处理"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

# 基本图片处理

用于对用户存储于 QingStor 对象存储上的图片进行各种基本处理，例如格式转换，裁剪，翻转，水印等。

目前支持的图片格式及操作如下:

| 操作/格式 | jpeg | png | webp | tiff | gif | svg | pdf |
|-|-|-|-|-|-|-|-|
| [图片信息](info.html) | Y | Y | Y | Y | Y | Y | Y |
| [图片裁剪](crop.html) | Y | Y | Y | Y | N | N | N |
| [图片旋转](rotate.html) | Y | Y | Y | Y | N | N | N |
| [图片缩放](resize.html) | Y | Y | Y | Y | Y | N | N|
| [文字水印](watermark.html) | Y | Y | Y | Y | N | N | N |
| [图片水印](watermark_image.html) | Y | Y | Y | Y | N | N | N |
| [图片格式转换](format.html) | Y | Y | Y | Y | N | N | N |
| [图片另存](save.html) | Y | Y | Y | Y | Y | Y | Y |

> **目前不支持对加密过后的图片进行处理，单张图片最大为 `10M` 。**

## Request Syntax

```http
GET /<object-name>?image&action=<action> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

- `action` 表示对图片的一组操作。
- `action` 的格式为 `operation:k_v[,k_v][|operation:k_v][,k_v]` 。
- `operation` 表示对图片的基本操作，如 crop, watermark 等。每个 `operation` 后面可以接多个 key value pair 作为参数。
- `k` 为 operation 的 argument key, `v` 为 argument value。
- 多个 `operation` 用分隔符 `|` 连接成为一个 `action` ，其将会顺序对图片进行操作，类似管道。

*### Example Request*

```http
GET /myphoto.jpg?image&action=resize:w_300,h_400|rotate:a_90 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

以上示例将图片按照300*400(px)进行固定宽高的缩略，并翻转 90 度。

**详细图片操作**

- [图片信息](info.html)
- [图片裁剪](crop.html)
- [图片旋转](rotate.html)
- [图片缩放](resize.html)
- [文字水印](watermark.html)
- [图片水印](watermark_image.html)
- [图片格式转换](format.html)
- [图片另存](save.html)
# 图片信息

用于获取图片的基本信息和部分 [Exif](https://en.wikipedia.org/wiki/Exif) 信息

## Request Syntax

```http
GET /<object-name>?image&action=info HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

| Name | Type | Description |
| - | - | - |
| width | Integer | 图片宽度(px)。 |
| height | Integer | 图片高度(px)。 |
| type | String | 图片类型 |
| orientation | Integer | 图片的拍摄相机旋转信息。 |
| space | String | 图片的颜色空间。 |
| alpha | bool | 图片是否含有 alpha 通道。 |
| make | String | 制造厂商。 |
| model | String | 相机型号。 |
| datetime | String | 日期和时间。 |
| exifversion | String | Exif版本。 |
| focallength | String | 焦距。 |
| gpslatituderef | String | GPS 纬度参考。 |
| gpslatitude | String | GPS 纬度。 |
| gpslongituderef | String | GPS 经度参考。 |
| gpslongitude | String | GPS 经度。 |
| gpsaltituderef | String | GPS 高度参考。 |
| gpsaltitude | String | GPS 高度。 |

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=info HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 22 Jul 2018 08:48:30 GMT
Authorization: authorization string
```

### Example Response

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

# 图片裁剪

用于对图片进行裁剪

## Request Syntax

指定裁剪的重心以及宽度和高度
```http
GET /<object-name>?image&action=crop:w_<width>,h_<height>,g_<gravity> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

指定裁剪的起始坐标以及宽度和高度
```http
GET /<object-name>?image&action=crop:w_<width>,h_<height>,l<left>,t_<top> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| width | int | 裁剪后的图片宽(px)，若为空则默认为图片原始宽度。 | No |
| height | int | 裁剪后的图片高(px)，若为空则默认为图片原始高度。 | No |
| left | int | 裁剪起始横坐标(px)，若为空则默认为 0 。| No |
| top | int | 裁剪起始纵坐标(px)，若为空则默认为 0 。| No |
| gravity | int | 裁剪的重心，0 表示 centre；1 表示 north；2 表示 east；3 表示 south；4 表示 west；5 为 north west；6 为 north east；7 为 south west；8 为 south east; 9 为 auto；默认为 0 。 | No |

> **如果只有 left / top 参数，裁剪图将从起点 (left, top) 到图的结束**
> **参数 left / top, gravity 不能同时指定，否则报 invalid argument 错误**

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=crop:w_300,h_400,g_0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

```http
GET /myphoto.jpg?image&action=crop:w_300,h_400,l_0,t_0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 图片旋转

用于对图片进行旋转

## Request Syntax

```http
GET /<object-name>?image&action=rotate:a_<angle> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| angle | int | 顺时针旋转角度, 有效值为 0, 90, 180, 270 。 | Yes |

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=rotate:a_90 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 图片缩放

用于对图片进行缩放

## Request Syntax

```http
GET /<object-name>?image&action=resize:w_<width>,h_<height>,m_<mode> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| width | int | 缩放后的图片宽度(px)，若没有指定，则按照高度进行等比缩放。 | No |
| height | int | 缩放后的图片高度(px)，若没有指定，则按照宽度进行等比缩放。 | No |
| mode | int | 缩放模式，0 表示固定宽高，缩略填充；1 表示根据宽高自动调节；2 表示按照宽高比为 4:4 进行缩略，若 width 和 height 只设置了其中一个，则按照宽度或者高度等比缩放。默认为 0。| No |

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=resize:w_300,h_400,m_0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 文字水印

用于对图片增加文字水印

> Known issue:  带透明通道的png图片暂时不能支持处理。

## Request Syntax

```http
GET /<object-name>?image&action=watermark:d_<dpi>,p_<opacity>,t_<text>,c_<color> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| dpi | int | 水印文字的大小，单位为缇，等于磅的 1/20，不填写则默认为 150 。 | No |
| opacity | float | 水印文字的透明度，有效值为(0, 1]，不填写则默认为 0.25 。 | No |
| text | string | 水印文字内容，需由 base64 编码(不加padding, 即结尾的=)。 | Yes |
| color | string | 水印文字颜色，以 `#` 开头的 16 进制字符串，需由 base64 编码(不加padding, 即结尾的=)，默认为 `#000000` ，参考 [RGB颜色编码表](http://www.rapidtables.com/web/color/RGB_Color.htm) 。| No |

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=watermark:t_5rC05Y2w5paH5a2X,p_0.5 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 图片水印

用于对图片增加图片水印

## Request Syntax

```http
GET /<object-name>?image&action=watermark_image:l_<left>,t_<top>,p_<opacity>,u_<url> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| left | int | 水印离左边的距离(px)，不填写则默认为 0 。 | No |
| top | int | 水印离上边的距离(px)，不填写则默认为 0 。 | No |
| opacity | float | 水印透明度，有效值为(0, 1]，不填写则默认为 0.25 。| No |
| url | string | 水印图片地址，须由 base64 进行编码(不加padding)。 | Yes |

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=watermark_image:u_aHR0cHM6Ly9wZWszYS5xaW5nc3Rvci5jb20vaW1nLWRvYy1lZy9xaW5jbG91ZC5wbmc,l_10,t_10,p_2 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 图片格式转换

用于将原始图片转换为目标格式

## Request Syntax

```http
GET /<object-name>?image&action=format:t_<type> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| type | string | 转换后的图片格式目标格式，可选的目标格式为 jpeg, png, webp, tiff。 | Yes |

## Request Headers

> [参见公共请求头](../common/common_header.html#请求头字段-request-header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](../common/common_header.html#响应头字段-request-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=format:t_webp HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/webp
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

# 图片另存

将图片另存到对象存储的某个 Bucket 下，主要为了方便用户保存各种处理后的图片。

Note: 用户必须有对此 Bucket 的写入权限。

Note: 不支持另存到跨区的 Bucket 中。

## Request Syntax

```http
GET /<object-name>?image&action=save:b_<bucket>,k_<key> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

| Parameter name | Type | Description | Required |
| - | - | - | - |
| bucket | String | 另存为的目标 bucket | Yes |
| key | String | 另存为的目标 object 名称 |Yes |

## Request Headers

> [参见公共请求头](https://docs.qingcloud.com/qingstor/api/common/common_header)

## Request Elements

没有请求消息体

## Response Headers

> [参见公共响应头](https://docs.qingcloud.com/qingstor/api/common/common_header#响应头字段-response-header)

## Response Elements

对象实体内容

## Example

### Example Request

```http
GET /myphoto.jpg?image&action=save:b_testbucket,k_testkey HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Last-Modified: Fri, 14 Aug 2015 09:10:39 GMT
Content-Type: image/jpeg
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```
