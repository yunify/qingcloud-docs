---
title: "图片处理"
description: 本小节主要介绍图片处理相关 API 内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
---

用户可以调用该 API 接口对存储于 QingStor 对象存储上的图片进行各种基本处理。

目前 QingStor 对象存储支持的图片操作类型有：查看图片信息；对图片进行剪裁，旋转，缩放；给图片添加文字水印，图片水印；将图片另存为，以及对图片进行格式的转换。

详细可参考：

- [图片信息](/storage/object-storage/api/object/image_process/info/)
- [图片裁剪](/storage/object-storage/api/object/image_process/crop/)
- [图片旋转](/storage/object-storage/api/object/image_process/rotate/)
- [图片缩放](/storage/object-storage/api/object/image_process/resize/)
- [文字水印](/storage/object-storage/api/object/image_process/watermark/)
- [图片水印](/storage/object-storage/api/object/image_process/watermark_image/)
- [图片另存](/storage/object-storage/api/object/image_process/save/)
- [图片格式转换](/storage/object-storage/api/object/image_process/format/)

## 注意事项

- QingStor 对象存储目前暂不支持对加密后的图片进行处理
- QingStor 对象存储目前可处理的单张图片最大为 10M。

## 通用格式

### 请求语法

```http
GET /<object-name>?image&action=<operation:k_v[,k_v][|operation:k_v][,k_v]> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

### 请求参数

调用该接口时，如 [请求语法](#请求语法) 中内容所示，URL 中添加有相关参数。各参数字段说明如下：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| action   | String  | 对图片的一组操作。 | 是 |
| operation | String | 对图片的基本操作。详情请参考前文内容。<br>- 每个 `operation` 可以有多个键值对作为参数，多个键值对之间使用分隔符 `,` 隔开；<br>- 多个 `operation` 之间使用分隔符 `｜` 隔开。 | 是      
| k | Char | `operation` 的参数名 | 是      |
| v | Integer | `operation` 的参数值 | 是      |

### 请求示例

将图片按照 300*400(px) 进行固定宽高的缩略，并翻转 90 度。请求示例如下：

```http
GET /myphoto.jpg?image&action=resize:w_300,h_400|rotate:a_90 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 图片格式

不同的图片操作类型，所支持的图片格式也有所区别。详情可参考下表：

| 操作类型 | jpeg | png | webp | tiff | gif | svg | pdf |
| - | - | - | - | - | - | - | - |
| 图片信息 | Y | Y | Y | Y | Y | Y | Y |
| 图片裁剪 | Y | Y | Y | Y | N | N | N |
| 图片旋转 | Y | Y | Y | Y | N | N | N |
| 图片缩放 | Y | Y | Y | Y | Y | N | N |
| 文字水印 | Y | Y | Y | Y | N | N | N |
| 图片水印 | Y | Y | Y | Y | N | N | N |
| 图片另存 | Y | Y | Y | Y | Y | Y | Y |
| 图片格式转换 | Y | Y | Y | Y | N | N | N |






