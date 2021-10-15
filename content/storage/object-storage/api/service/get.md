---
title: "GET Service"
---

该 API 用于获取请求者名下的所有 Bucket 列表。

## 使用限制

- 该 API 不支持匿名请求，请先注册青云账号并 [创建 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key) 后才能调用此 API。
- 该请求可以用于查询 QingStor 对象存储的 Global Endpoint 下所有区域的 Bucket。Global Endpoint 为：`qingstor.com`。
- 该请求也可以用于查询 QingStor 对象存储某个区域的 [Zone Endpoint](/storage/object-storage/intro/object-storage/#zone) (如 pek3.qingstor.com)，列出特定区域的 Bucket。

## 请求语法

```http
GET / HTTP/1.1
Host: qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，用户可在 URL 中添加以下参数对响应内容做出限制。

| 参数名 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| offset | Integer | 列取游标。默认值为 0，表示从头开始列取。 | 否 |
| limit | Integer | 限定此次返回 Bucket 的最大数量，默认值为 200。 | 否 |

## 请求消息头

该 API 接口支持如下消息头：

| 字段 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| Location | Enum | 限定 Bucket 所在的区域。目前支持：`pek3a`，`sh1a`。 | 否 |

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其字段说明如下：

| 名称 | 类型 | 说明 | 
| - | - | - | 
| count | Int | Bucket 数量 |
| buckets | List | Bucket 元信息列表 |

## 错误码

正常会返回 200，失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET / HTTP/1.1
Host: qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 256
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
  "count": 2,
  "buckets": [
    {
      "name": "mybucket",
      "location": "pek3a",
      "url": "https://mybucket.pek3a.qingstor.com",
      "created": "2015-07-11T04:45:57Z"
    },
    {
      "name": "myphotos",
      "location": "pek3a",
      "url": "https://myphotos.pek3a.qingstor.com",
      "created": "2015-07-12T09:40:32Z"
    }
  ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。