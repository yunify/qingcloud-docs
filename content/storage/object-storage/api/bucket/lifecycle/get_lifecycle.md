---
title: "Get Bucket Lifecycle"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于获取 Bucket 的生命周期（Lifecycle）设置。

QingStor 对象存储定义生命周期（Lifecycle）为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
GET /?lifecycle HTTP/1.1
Host: <bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 格式的 Response Body。该 Response Body 包括如下两个部分：
- 前期设置的的生命周期规则，这部分可参考 [PUT Bucket Lifecycle](../put_lifecycle#request-body)。
- 生命周期规则创建的时间以及状态，这部分为 GET Bucket Lifecycle 特有的 Response Body。详情如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| state | String | 用于标识该生命周期规则的执行状态。|
| created | Integer | 用于标识该生命周期规则的创建时间。|

**说明**
- `state` 字段返回值为 `unchecked` 与 `ready`。`unchecked` 表示该规则还未应用或正在应用；`ready` 表示该规则已经应用完毕。
- `created` 字段格式为 UNIX 时间戳，精确到秒。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取 Bucket 生命周期规则 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?lifecycle HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 249
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "rule": [
        {
            "id": "delete-logs",
            "status": "enabled",
            "filter": {
                "prefix": "logs/"
            },
            "expiration": {
                "days": 7
            },
            "state": "unchecked",
            "created": 1439715900,
        }
    ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
