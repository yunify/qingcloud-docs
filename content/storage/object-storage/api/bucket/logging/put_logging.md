---
title: "Put Bucket Logging"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于开启并设置 Bucket 的日志功能，也可用于更新 Bucket 的日志功能相关设置，只有 Bucket 的所有者才能调用该 API。

开启该功能后，QingStor 对象存储会将 Bucket 的访问日志进行保存，并按照固定的规则，以小时为单位上传至用户指定的 Bucket 中。

## 请求语法

```http
PUT /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Authorization: <authorization-string>
{
    "target_bucket": "<target-bucket-name>",
    "target_prefix": "logs/",
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

|名称|类型|说明|是否必须|
|--|--|--|--|
| target_bucket | String | 用于存放日志的目标 Bucket 名称，用户必须是该 Bucket 的所有者。 |  是 |
| target_prefix | String | 存放于目标 Bucket 的日志文件前缀。 | 是 |

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功开启并设置日志功能或成功更新日志功能相关配置 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /?logging HTTP/1.1
Host: <source-bucket-name>.pek3a.qingstor.com
Date: <date>
Content-Length: 66
Authorization: authorization string

{
    "target_bucket": "mybucket",
    "target_prefix": "logs/",
}
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: <date>
Content-Length: 0
Connection: close
X-QS-Request-ID: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。