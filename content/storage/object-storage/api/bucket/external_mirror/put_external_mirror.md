---
title: "Put Bucket External Mirror"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于设置 Bucket 的外部镜像源站（External Mirror Source Site），只有 Bucket 的所有者才能调用该 API。

对于设置了外部镜像源站的 Bucket，当请求的对象在 Bucket 中不存在时，QingStor 服务端会把对象名称（Object Key）拼接在外部镜像源站末尾后作为抓取的源链接，再从源站抓取，并将抓取到的结果写入至 QingStor 对象存储 Bucket 中。

从源站抓取数据，称之为回源。在回源的过程中，请求该对象的客户端，可能会下载到源站文件，也可能收到重定向到源站相应路径的 302 请求。在回源完成后，客户端就能够直接从 QingStor 对象存储的 Bucket 中获取该对象。

**注意:**
- 在 QingStor 对象存储完成回源后，源站的相应文件内容发生变化时，QingStor 对象存储并不会自动更新该对象。
- QingStor 对象存储的 [Put Object](/storage/object-storage/api/object/basic_opt/put/) 接口需要输入文件大小，故，源站在提供下载文件时需返回 `Content-Length` 头，否则回源将失败。

## 请求语法

```http
PUT /?mirror HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "source_site": "<protocol>://<host>[:port]/[path]"
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| source_site | String | 外部镜像回源的源站。 | 是 |

源站的填写格式为 `<protocol>://<host>[:port]/[path]`。各参数说明如下：

- `protocol` 的值为 `http` 或 `https`，默认值为 `http`。
- `port` 默认为 `protocol` 对应的端口。
- `path` 可为空。
- 若同一 QingStor 对象存储的 Bucket 多次设置不同的源站，则该 Bucket 的源站采用最后一次设置的值。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置外部镜像 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /?mirror HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 14 Aug 2016 09:05:00 GMT
Authorization: authorization string
{
    "source_site": "http://example.com:80/image/"
}
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 14 Aug 2016 09:05:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。