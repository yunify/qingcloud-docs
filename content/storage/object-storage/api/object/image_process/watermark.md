---
title: "文字水印"
description: 本小节主要介绍文字水印接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, 文字水印
---

用户可以调用该 API 接口对图片增加文字水印。带透明通道的，格式为 `png` 的图片暂时不支持处理。

## 请求语法

```http
GET /<object-name>?image&action=watermark:d_<dpi>,p_<opacity>,t_<text>,c_<color> HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
dpi |	int |	水印文字的大小，单位为缇，等于磅的 1/20，不填写则默认为 150。 |	否
opacity |	float |	水印文字的透明度，取值范围为：(0,1]，不填写则默认为 0.25。 |	否
text |	string |	水印文字内容，需由 `base64` 编码，且去掉末尾的 `=`。 |	是
color |	string |	水印文字颜色，以 `#` 开头的 16 进制字符串，需由 base64 编码，且去掉末尾的 `=`。默认值为 `#000000`，参考 [RGB颜色编码表](https://www.rapidtables.com/web/color/RGB_Color.html)。 |	否

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
GET /myphoto.jpg?image&action=watermark:t_5rC05Y2w5paH5a2X,p_0.5 HTTP/1.1
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

