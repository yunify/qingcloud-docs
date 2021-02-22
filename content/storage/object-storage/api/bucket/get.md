---
title: "GET Bucket"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---


获取存储空间中的对象（object）列表。此 API 需要调用者对 bucket 有读权限, 不允许匿名访问。

该 API 支持通过分页方式获取给定前缀下的对象列表，传入参数中 marker 为本次开始遍历的起始游标，返回字母顺序的最后一个对象名称 (next_marker)。
用户下一次调用该 API 将 marker 参数传入上一次调用返回的 next_marker 的值，通过多次循环调用改 API 即可遍历到给定 Prefix 条件的所有对象列表。
当返回值 has_more 为 false 时, 表示遍历结果已经结束。遍历返回结果的顺序为按照内部存储中的顺序, 而并非字节序。


由于对象存储与文件存储有本质不同，并没有固定目录结构，通过 delimiter = '/' 参数，可以实现模拟目录结构访问。
将给定 prefix 下 相同子目录前缀的多个对象合并为一个 common_prefixes 的结果返回，可以实现目录层级浏览。

注解

> 获取存储空间列表请见 [GET Service](../../service/get)

由于对象存储并不是传统文件存储，服务端对这个接口调用会酌情对调用频率进行限制，建议应用请勿依赖于这个接口的并发调用。
如果 bucket 中对象数目会不断增长，建议业务能够自行保存对象名称或拼接到需要访问的对象 Url，来保证访问速度不受数据规模影响。
服务端会对目录归并结果有短暂的缓存，当一个 prefix 中文件和子目录频繁被更改的情况，缓存的结果未必在所有情况下立刻反映新目录的存在。

## Request Syntax

```http
GET / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

放在 URL 中的参数 :

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| prefix | String | 限定返回的 object key 必须以 prefix 作为前缀 | No |
| delimiter | Char | 是一个用于对 Object 名字进行分组的字符。所有名字包含指定的前缀且第一次出现 delimiter 字符之间的 object 作为一组元素 | No |
| marker | String | 列取的游标, 应传入上一次 Response 返回的 next_marker 的值, 用户不应该自行构造或修改 marker 的内容 。| No |
| limit | Integer | 限定此次返回 object 的最大数量，默认值为 100，最大值 100。超出服务端限制之后我们仅会按照最大值处理。| No |


注意

> 如果您不是使用 sdk 封装好的方法来访问, 而是自己拼接参数, 注意 URL 参数需要被 URL encode.

## Request Headers

参见[公共请求头](../../common_header/#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 200; 其他失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../common_header/#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)

| Name | Type | Description |
| --- | --- | --- |
| name | String | 存储空间的名称 |
| owner | String | 存储空间的所有者 |
| common_prefixes | String | 如果请求中指定了 delimiter 参数 , 则响应中包含该元素，用来标明那些以 delimiter 结尾，并有共同前缀的对象名称的集合 |
| prefix | String | 如果请求中指定了 prefix 参数 , 则响应中包含该元素 |
| next_marker | String | 返回这次遍历的游标(长度不固定), 加载更多时可以用这个值传给下次请求的 marker |
| marker | String | 当前返回与 next_marker 相同，仅为了向前兼容而存在, 不建议使用这个值. |
| has_more | Boolean | 是否还有更多结果在下一页 |
| keys | List | 匹配的对象元信息列表 |
| key | String | 对象名称 |
| size | Integer | 对象大小 |
| etag | Hex | 对象内容的唯一标示 (该值会使用双引号括起来) |
| mime_type | String | 对象类型 |
| created | Date | 对象创建时间 |
| modified | Int | 对象修改时间 |
| encrypted | Boolean | 对象是否加密 |
| storage_class | String | 对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"。 |

## Example

### Example Request

```http
GET /?delimiter=/&limit=4 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

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
