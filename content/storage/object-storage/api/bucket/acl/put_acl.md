---
title: "PUT Bucket ACL"
---

# PUT Bucket ACL

设置存储空间的访问控制列表 (Access Control List)，acl 是存储空间的子资源 (subresource)，只有存储空间的所有者才能设置。

获取 ACL 请参见 [GET Bucket ACL](../get_acl) 。

## Request Syntax

```http
PUT /?acl HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
  "acl": [
    {
      "grantee": {
        "type": "user",
        "id":
      },
      "permission": "FULL_CONTROL"
    },
    {
      "grantee": {
        "type": "group",
        "name": <group-name>
      },
      "permission": "READ"
    }
  ]
}
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../../common_header#请求头字段-request-header)

## Request Body

Json 消息体

| Name | Type | Description |
| --- | --- | --- |
| acl | List | 支持设置 0 到多个被授权者 |
| grantee | Dict | 支持 user, group 两种类型，当设置 user 类型时，需要给出 user id；当设置 group 类型时，目前只支持 QS_ALL_USERS，代表所有用户 |
| permission | String | 支持三种权限为 READ, WRITE, FULL_CONTROL |


## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../../error_code/)

## Response Headers

参见[公共响应头](../../../common_header#响应头字段-response-header)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../../error_code/)


## Example

### Example Request

```http
PUT /?acl HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 157
Authorization: authorization string

{
  "acl": [
    {
      "grantee": {
        "type": "user",
        "id": "usr-1mvNCzZu"
      },
      "permission": "FULL_CONTROL"
    },
    {
      "grantee": {
        "type": "group",
        "name": "QS_ALL_USERS"
      },
      "permission": "READ"
    }
  ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
