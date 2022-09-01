---
title: "Get Bucket Version"
date: 2020-11-25T10:08:56+09:00
description: 本小节主要介绍 Get Bucket Version 接口相关操作。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor, Bucket
collapsible: false
draft: false
weight: 3
---

该接口用于获取 Bucket 的版本管理功能状态。仅支持 Bucket 所有者使用该 API。

## 请求语法

```http
GET /?versioning HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 格式的 Response Body。该 Response Body 包括如下部分：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| status | String | Bucket 版本管理功能状态。可选值为：<br> - ENABLED：开启 <br> - SUSPENDED：暂停 <br> - DISABLED：未开启


## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取版本管理功能的状态 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?versioning HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2021 09:05:00 GMT
Content-Length: 21
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
  "status": "ENABLED"
}

```
