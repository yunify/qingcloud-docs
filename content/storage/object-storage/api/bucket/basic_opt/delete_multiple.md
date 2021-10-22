---
title: "Delete Multiple Objects"
---

该接口用于从指定的 Bucket 中批量删除对象。此 API 需调用者对 Bucket 拥有写权限，匿名用户默认无法调用该 API。

## 请求语法

```http
POST /?delete HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
Content-MD5: Dd11y+x5Jegm/fUJ6mOuhg==

{
    "quiet": false,
    "objects": [
        {"key": <key-name-1>},
        {"key": <key-name-2>},
        ...
    ]
}
```

## 请求参数

无。

## 请求头

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Content-MD5 | String | 请求体的 md5 值进行 base64 编码。 | 是 |

此接口涉及的其他公共请求头，请参见[公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| objects | List | 待删除的对象列表。列表元素的格式为: `{"key": <key-name-1>}` 。object key 要求是 UTF8 编码并根据 json 规范来转义。 | 是 |
| quiet | Bool | 静默模式。如果打开，则请求返回的结果中不会包含删除成功的对象列表。默认关闭。 | 否 |

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其各字段说明如下：

| Name | Type | Description |
| --- | --- | --- |
| deleted | List | 删除成功的对象列表，列表元素的格式为： `{"key": }` 。如果打开静默模式，则本项不会出现在返回结果中。 |
| errors | List | 删除失败的对象列表，列表元素的格式为： `{"key": , "code": string, "message": string}` |

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功删除 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
POST /?delete HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
Content-MD5: Dd11y+x5Jegm/fUJ6mOuhg==

{
    "quiet": false,
    "objects": [
        {"key": "object_1"}
    ]
}
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 71
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "deleted": [
        {"key": "object_1"}
    ],
    "errors": []
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
