---
title: "GET Bucket Policy"
---

该接口用于获取 Bucket 的访问策略相关设置。QingStor 对象存储定义访问策略为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
GET /?policy HTTP/1.1
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

## 响应消息体

成功调用该 API 后，会返回一个 Json 消息体，其字段说明如下：

| 名称 | 类型 | 说明 | 
| - | - | - | 
| statement | Dict | 指定 Bucket 的访问策略 |

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取 Bucket 的访问策略相关配置 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?policy HTTP/1.1
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
    "statement": [
        {
            "id": "allow everyone to get and create objects",
            "user": "*",
            "action": ["get_object", "create_object"],
            "effect": "allow",
            "resource": ["mybucket/*"],
            "condition":{
                "string_like": {
                    "Referer": ["*.example1.com", "*.example2.com"]
                }
            }
        },
        {
            "id": "allow everyone to head bucket",
            "user": "*",
            "action": "head_bucket",
            "effect": "allow",
            "condition":{
                "string_like": {
                    "Referer": ["*.example3.com", "*.example4.com"]
                },
                "string_not_like": {
                    "Referer": ["*.service.example3.com"]
                }
            }
        }
    ]
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。