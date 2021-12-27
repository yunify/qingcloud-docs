---
title: "图片缩放"
description: 本小节主要介绍图片缩放接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, 图片缩放
---

用户可以调用该 API 接口对图片进行缩放。

## 请求语法

```http
GET /<object-name>?image&action=resize:w_<width>,h_<height>,m_<mode> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
width |	int |	缩放后的图片宽度，单位：px。若没有指定，则按照高度进行等比缩放。| 	否
height |	int |	缩放后的图片高度，单位：px。若没有指定，则按照宽度进行等比缩放。 |	否
mode |	int 	| 缩放模式，默认值为 `0`，表示固定宽高，缩略填充。其他可选值为：<br>- `1` 表示根据宽高自动调节；<br>- `2` 表示按照宽高比为 4:4 进行缩略，若 `width` 和 `height` 只设置了其中一个，则按照宽度或者高度等比缩放。|	否


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
GET /myphoto.jpg?image&action=resize:w_300,h_400,m_0 HTTP/1.1
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

