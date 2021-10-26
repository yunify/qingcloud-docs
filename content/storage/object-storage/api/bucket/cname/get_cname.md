---
title: "Get Bucket CNAME"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于获取 Bucket 的域名别名设置。QingStor 对象存储定义域名别名为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
GET /?cname HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：
| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| cname_records | type | 可选的值： <br>- `normal` 表示自定义域名，<br>- `website` 表示托管静态网站域名。<br>- 如果不提供，则默认为 `normal`。 |否 |

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| cname_records | List | 获取的 Bucket 的域名别名记录列表。 |
| count | Integer | 获取的 Bucket 的域名别名记录数量。 |

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取 Bucket 域名别名设置 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?cname HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 300
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "cname_records": [
        {
            "domain": "example1.com",
            "type": "normal",
            "created": "2016-08-15T01:06:16.000Z",
        },
        {
            "domain": "example2.com",
            "type": "normal",
            "created": "2016-08-15T01:06:36.000Z",
        },
    ],
    "count": 2,
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。