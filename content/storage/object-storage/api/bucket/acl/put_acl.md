---
title: "PUT Bucket ACL"
---

该接口用于设置或修改 Bucket 的访问控制列表 (ACL：Access Control List)。

QingStor 对象存储定义 ACL 为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

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

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| acl | List | 访问控制列表。 支持设置同时设置或修改多个被授权者|
| grantee | Dict | 权限赋予的对象 |
| type | String | 支持 `user` 与 `group` 两种类型 |
| id | String | 用户 ID。当 `type` 设置为 `user` 时，该参数有效 |
| name | String | 用户组名。当 `type` 设置为 `group` 时，该参数有效，且目前仅支持 `QS_ALL_USERS`，代表所有用户 |
| permission | String | 操作权限。目前支持 `READ`，`WRITE` 与 `FULL_CONTROL` 三种权限|

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置或修改 Bucket ACL | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
