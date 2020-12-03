---
title: "GET Bucket Policy"
---

# GET Bucket Policy

获取存储空间的访问策略，Policy 是存储空间的子资源(subresource)，只有存储空间所 有者才能获取。

设置 Policy 请参见 [PUT Bucket Policy](../put_policy) 。

删除 Policy 请参见 [DELETE Bucket Policy](../delete_policy) 。

## Request Syntax

```http
GET /?policy HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common/common_header#请求头字段-request-header)

## Request Body

没有请求消息体

## Response Headers

参见[公共响应头](../../../common/common_header#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../common/error_code)

| Name | Type | Description |
| --- | --- | --- |
| statement | Dict | 该bucket的访问策略 |

## Example

### Example Request

```http
GET /?policy HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

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
