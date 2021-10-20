---
title: "GET Bucket"
date: 2021-08-17T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

用于获取 Bucket 的对象列表。此 API 需调用者对 Bucket 拥有读权限，匿名用户默认无法调用。

## 使用限制

调用该接口时，有如下注意事项：

- QingStor 对象存储服务端对这个接口的调用频率会加以限制，建议用户的相关应用请勿依赖于该接口的并发调用。
- 该接口的响应速度，与 Bucket 内对象数目有关。若 Bucket 内对象数目不断增长，为了不影响相关资源的访问速度，QingStor 对象存储建议用户在业务侧自行保存对象名称或将对象名称拼接至需要访问的对象 URL 中。
- QingStor 对象存储服务端会对目录归并结果进行缓存。当一个指定的前缀中，文件和子目录被频繁地更改，则缓存的结果，并不能立刻反映新目录的存在。

## 请求语法

```http
GET / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| prefix | String | 限定返回的对象名（Object Key）前缀 | 否 |
| delimiter | Char | 对对象名（Object Key）进行分组的字符。所有对象名（Object Key）包含指定的前缀且第一次出现 `delimiter` 字符之间的 Object 作为一组元素 | 否 |
| marker | String | 列取的游标。用来实现分页显示效果 | No |
| limit | Integer | 限定此次返回 Object 的最大数量，默认值为 100。| No |

**使用说明**

该 API 支持通过分页的方式获取给定前缀下的对象列表。具体操作如下：

1. 传入参数 `marker` 为本次开始遍历的起始游标，返回以字母为顺序的最后一个对象名称作为 `next_marker`；
2. 用户再次调用该 API，将上一次返回的 `next_marker` 的值传入 `marker` 参数；
3. 返回值 `has_more` 为 `false` 时，表示遍历结束；
4. 以此循环调用该 API，即可遍历满足 `prefix` 条件的所有对象列表。遍历返回结果的顺序为内部存储中的顺序，而非字节序。

**参数说明**

- 对象存储没有固定的目录结构，QingStor 对象存储通过 `delimiter = '/'` 参数来实现目录结构访问。
- QingStor 对象存储将给定 `prefix` 下相同前缀的多个对象合并为一个结果，通过 `common_prefixes` 返回，以实现目录层级的浏览。
- 用户无须自行构造或修改 `marker` 的内容。首次调用时，不指定该参数，后续调用时，传入上一次 Response 返回的 `next_marker` 的值。
- QingStor 对象存储服务端限制该 API 单次调用返回 Object 的最大数量为 100。用户可通过参数 `limit` 进行调整，设置的参数值若超出服务端限制，QingStor 对象存储服务仅会按照最大值进行处理。
- 若用户是自行拼接参数，调用该API，则需将 URL 参数进行 URL 编码。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| name | String | Bucket 的名称 |
| owner | String | Bucket 的所有者 |
| common_prefixes | String | 若请求中指定了 `delimiter` 参数，则响应中包含该元素，用以标明那些以 `delimiter` 结尾，并有共同前缀的 对象名（Object Key）的集合 |
| prefix | String | 若请求中指定了 `prefix` 参数，则响应中包含该元素 |
| next_marker | String | 返回这次遍历的游标(长度不固定)|
| marker | String | 当前返回与 `next_marker` 相同，仅为了向前兼容而存在，不建议使用该值 |
| has_more | Boolean | 是否还有更多结果在下一页 |
| keys | List | 匹配的对象元信息列表 |
| key | String | 对象名称 |
| size | Integer | 对象大小 |
| etag | Hex | 对象内容的唯一标示 (该值会使用双引号括起来) |
| mime_type | String | 对象类型 |
| created | Date | 对象创建时间 |
| modified | Int | 对象修改时间 |
| encrypted | Boolean | 对象是否加密 |
| storage_class | String | 对象的存储级别，目前支持的存储级别为 `STANDARD` 和 `STANDARD_IA` |


## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取 Bucket 对象列表 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?delimiter=/&limit=4 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 559
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
  "name": "mybucket",
  "keys": [
    {
      "created": "2016-08-22T15:03:32.000Z",
      "modified": 1471878212,
      "encrypted": true,
      "storage_class": "STANDARD",
      "etag": "\"4f44b10f5cb83777fea4ef88a3f7b3c4\"",
      "key": "api.txt",
      "mime_type": "text/plain",
      "size": 38970
    },
    {
      "created": "2016-08-22T15:09:52.000Z",
      "modified": 1471878592,
      "encrypted": false,
      "storage_class": "STANDARD_IA",
      "etag": "\"9f1cd921dbb6656c2c9e57f83f73d70e\"",
      "key": "bigtable-osdi06.pdf",
      "mime_type": "application/pdf",
      "size": 221214
    }
  ],
  "prefix": "",
  "owner": {
    "id": "usr-DxWdNcCr",
    "name": "william"
  },
  "delimiter": "/",
  "limit": 4,
  "marker": "",
  "next_marker": "bigtable-osdi06.pdf",
  "has_more": true,
  "common_prefixes": [
    "QCI/",
    "Screenshot/"
  ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。


