---
title: "List Locations"
---

该 API 用于获取 QingStor 对象存储所有部署区域的列表。

## 使用限制

- 该 API 支持匿名请求。
- 使用该 API 时，请求只能发送至 QingStor 对象存储服务的 Globan Endpoint，即：`qingstor.com`。

## 请求语法

```http
GET /?location&lang=zh-cn HTTP/1.1
Host: qingstor.com
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数：

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| lang | String | 返回 Location Name 的语言，默认是英文 `en-us`，可选值为：<br>- 中文：`zh-cn`/`zh_CN` <br>- 英文：`en-us`/`en_US`。| 否 |

## 请求消息头

仅包含 Host 消息头，无其他消息头。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其字段说明如下：

| 名称 | 类型 | 说明 | 
| - | - | - | 
| locations | List |  Location 列表|
| id | String | `Location` 的健值，Location ID。 |
| name | String | `Location` 的健值，根据请求参数 `lang` 指定语言的翻译。 |
| endpoint | String | `Location` 的健值，Location Endpoint，如 Location ID 为 pek3a 的 Endpoint 是 pek3a.qingstor.com。 |

## 错误码

仅返回 200。

## 示例

### 请求示例

```http
GET /?location&lang=zh-cn HTTP/1.1
Host: qingstor.com
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Mon, 23 Oct 2017 12:08:19 GMT
Content-Type: application/json
Content-Length: 177
x-qs-request-id: dc05ee1cb7ea11e7b8da5254dda2bdf5

{
    "locations": [
        {
            "endpoint": "pek3a.qingstor.com",
            "id": "pek3a",
            "name": "\u5317\u4eac3\u533a"
        },
        {
            "endpoint": "sh1a.qingstor.com",
            "id": "sh1a",
            "name": "\u4e0a\u6d771\u533a"
        }
    ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。