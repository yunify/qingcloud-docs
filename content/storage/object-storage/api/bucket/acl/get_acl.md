---
title: "GET Bucket ACL"
---
# GET Bucket ACL

获取存储空间的访问控制列表 (Access Control List)， acl 是存储空间的子资源 (subresource)，只有存储空间的所有者才能获取。

设置 ACL 请参见 [PUT Bucket ACL](../put_acl) 。

## Request Syntax

```http
GET /?acl HTTP/1.1
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

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../../common/error_code)

## Response Headers

参见[公共响应头](../../../common/common_header#响应头字段-response-header)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../common/error_code)

| Name | Type | Description |
| --- | --- | --- |
| owner | String | 存储空间的所有者 |
| grantee | String | 被授权者 |
| type | Enum | 被授权者类型，支持 user, group |
| id | String | 如果类型是 user，则代表用户 ID |
| name | String | 如果类型是 user，则代表用户名称，如果类型是 group，则代表组名 |
| permission | Enum | 访问权限，支持：READ, WRITE, FULL_CONTROL |

## Example

### Example Request

```http
GET /?acl HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 313
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "owner": {
        "id": "usr-niWZfGCe",
        "name": "William"
    },
    "acl": [
        {
            "grantee": {
                "type": "user",
                "id": "usr-niWZfGCe",
                "name": "William"
            },
            "permission": "FULL_CONTROL"
        },
        {
            "grantee": {
                "type": "user",
                "id": "usr-1mvNCzZu",
                "name": "Osier"
            },
            "permission": "FULL_CONTROL"
        },
        {
            "grantee": {
                "type": "group",
                "name": "QS_ALL_USERS"
            },
            "permission": "READ"
        },
    ]
}
```
