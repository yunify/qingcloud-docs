---
title: "图片裁剪"
description: 本小节主要介绍图片裁剪接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, 图片裁剪
---

用户可以调用该 API 接口对图片进行裁剪。

## 请求语法

**指定裁剪的重心以及宽度和高度**
```http
GET /<object-name>?image&action=crop:w_<width>,h_<height>,g_<gravity> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

**指定裁剪的起始坐标以及宽度和高度**
```http
GET /<object-name>?image&action=crop:w_<width>,h_<height>,l_<left>,t_<top> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
width |	int |	裁剪后的图片宽，单位：px；若为空则默认为图片原始宽度。 |	否
height |	int |	裁剪后的图片高，单位：px；若为空则默认为图片原始高度。 |	否
left |	int 	|裁剪起始横坐标，单位：px；若为空则默认为 0。 |	否
top |	int 	|裁剪起始纵坐标，单位：px；若为空则默认为 0。 |	否
gravity 	|int 	|裁剪的重心。默认值为 0， 表示 center；其他可选值为：<br>- 1 表示 north；<br>- 2 表示 east；<br>- 3 表示 south；<br>- 4 表示 west；<br>- 5 为 north west；<br>- 6 为 north east；<br>- 7 为 south west；<br>- 8 为 south east; <br>- 9 为 auto；<br>- 默认为 0 。| 否

**备注**
- 参数 `left top` 参数，不能与 `gravity` 同时指定，否则报 invalid argument 错误；
- 若指定参数 `left top`，则裁剪图将从起点 (left，top) 到图的结束。

## 请求消息头

详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

对象实体内容。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取图片信息 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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

### 响应示例

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

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

