---
title: "图片格式转换"
description: 本小节主要介绍图片格式转换接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, 图片格式转换
---

用户可以调用该 API 接口将原始图片转换为目标格式。根据 [前文](/storage/object-storage/api/object/image_process/#图片格式) 相关内容，我们知道，该操作支持的图片格式为：`jpeg`，`png`，`webp`，`tiff`。

## 注意事项

QingStor 对象存储对被转图片的分辨率作出了限制，详细内容如下：

- `webp` 格式的被转图片，分辨率限制为：16383 x 16383，单位为：14-bit unsigned
- `jpeg/tiff` 格式的被转图片，分辨率限制为：65535 x 65535，单位为：16-bit unsigned
- `png` 格式的被转图片，分辨率限制为：2147483647 x 2147483647，单位为：32-bit signed

## 请求语法

```http
GET /<object-name>?image&action=format:t_<type> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
type | String | 转换后的图片格式即为目标格式。支持的目标格式为：`jpeg`，`png`，`webp`，`tiff`。|	是


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
GET /myphoto.jpg?image&action=format:t_webp HTTP/1.1
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
Content-Type: image/webp
Content-Length: 7987
Connection: close
x-qs-request-id: aa08cf7a43f611
[7987 bytes of object data]
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

