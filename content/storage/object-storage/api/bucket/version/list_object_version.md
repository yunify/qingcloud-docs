---
title: "List Object Version"
description: 本小节主要介绍 List Object Version 接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, Bucket
collapsible: false
draft: false
weight: 3
---

该接口用于列取指定 Bucket 下所有 Object 的版本。此操作要求调用者对 Bucket 拥有可读权限。

## 请求语法

```http
GET /?versions&?limit=2 HTTP/1.1
Host: mybucket.pek3b.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string

```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| prefix | String | 限定返回对象名前缀 | 否 |
| delimiter | Char | 对象名分组字符。所有对象名包含指定的前缀且第一次出现分组字符之间的对象作为一组元素 | 否 |
| key_marker | String | 结果从 `key-marker` 之后按字母序开始返回，与 `version-id-marker` 组合使用| 否 |
| version-id-marker | String | 结果从 `key-marker` 对象的 `version-id-marker` 之后按新旧版本排序开始返回。如果 `version-id-marker` 未设定，则默认从 `key-marker` 按字母序排序的下一个 Key 的第一个版本开始返回 | 否 |
| limit | Integer | 限定此次返回 Object 的最大数量，默认值为 100 | 否 |

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，其字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
|name	|string	|Bucket 名
|owner	|string	|Bucket 所有者
|common_prefixes	|string	|标明那些以 delimiter 结尾，并有共同前缀的对象名的集合
|prefix	|string	|请求中指定的 prefix 参数
|next_key_marker	|string	|下次遍历的需传入的 key_marker
|key_marker	|string	|本次遍历的传入的 key_marker
|next_version_id_marker	|string	|下次遍历的需传入的version_id_marker
|version_id_marker	|string	|本次遍历传入的version_id_marker
|has_more	|boolean	|是否还有更多结果在下一页
|keys	|list	|匹配的对象元信息列表，包含后续参数
|key	|string	|Object 名
|version_id	|string	|Object 版本 ID
|is_latest	|boolean	|是否是当前版本
|delete_marker	|boolean	|该版本是否是删除标记
|size	|integer	|Object 大小
|etag	|hex	|Object 内容唯一标识符
|mime_type	|string	|Object 类型
|created	|date	|Object 版本的创建时间
|modified	|date	|Object 版本的修改时间
|encrypted	|boolean	|Object 是否加密
|storage_class	|string	|Object 的存储级别。目前包括：<br> - STANDARD：标准存储 <br> - STANDARD_IA：低频存储


## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 操作成功 | 204 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?versions&?limit=2 HTTP/1.1
Host: mybucket.pek3b.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string

```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 809
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "name": "mybucket",
    "prefix": "",
    "delimiter": "",
    "key_marker": "",
    "version_id_marker": "",
    "limit": 2,
    "owner": {
        "id": "usr-nz12MiKl",
        "name": ""
    },
    "has_more": true,
    "keys": [
        {
            "key": "test.txt",
            "is_latest": true,
            "delete_marker": true,
            "version_id": "NjkxMjM0MzM1MjAxNzAwODMz",
            "size": 0,
            "etag": "",
            "mime_type": "",
            "encrypted": false,
            "storage_class": "STANDARD",
            "created": "2022-04-07T02:20:25.000Z",
            "modified": "2022-04-07T02:20:25.000Z"
        },
        {
            "key": "test.txt",
            "is_latest": false,
            "delete_marker": false,
            "version_id": "NjkwOTgwOTE5OTc2MTMzNjcy",
            "size": 9,
            "etag": "bbb8aae57c104cda40c93843ad5e6db8",
            "mime_type": "text/plain",
            "encrypted": false,
            "storage_class": "STANDARD",
            "created": "2022-04-06T09:33:26.000Z",
            "modified": "2022-04-06T09:33:26.000Z"
        }
    ],
    "common_prefixes": [],
    "next_key_marker": "test.txt",
    "next_version_id_marker": "NjkwOTgwOTE5OTc2MTMzNjcy"
}

```
