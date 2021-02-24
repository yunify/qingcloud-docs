---
title: "Delete Multiple Objects"
---


从存储空间中批量删除指定对象，此操作要求请求者对存储空间拥有可写权限。

请求者必须设置 `Content-MD5` 这个请求头，其值为请求体的 md5, 并对结果进行 base64 编码，[参见公共请求头](../../common_header#请求头字段-request-header) 。

注解

匿名用户无法使用批量删除的 API。批量删除一次最多能删除 1000 个对象。

## Request Syntax

```http
POST /?delete HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
Content-MD5: Dd11y+x5Jegm/fUJ6mOuhg==

{
    "quiet": false,
    "objects": [
        {"key": <key-name-1>},
        {"key": <key-name-2>},
        ...
    ]
}
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common_header#请求头字段-request-header)

## Request Body

是一个 Json 消息体

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| objects | List | 待删除的对象列表，列表元素的格式为: `{"key": }` 。object key 要求是 UTF8 编码并根据 json 规范来转义。 | Yes |
| quiet | Bool | 静默模式。如果打开，则请求返回的结果中不会包含删除成功的对象列表。默认关闭。 | No |

## Status Code

一般都会返回 200, 除非是Bucket 不存在或没有执行权限等错误. 失败的返回码参考[错误码列表](../../error_code/)

## Response Headers

参见[公共响应头](../../common_header#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体返回删除成功和失败的 Object 列表; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../error_code/)

| Name | Type | Description |
| --- | --- | --- |
| deleted | List | 删除成功的对象列表，列表元素的格式为： `{"key": }` 。如果打开静默模式，则本项不会出现在返回结果中。 |
| errors | List | 删除失败的对象列表，列表元素的格式为： `{"key": , "code": string, "message": string}` |

## Example

### Example Request

```http
POST /?delete HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
Content-MD5: Dd11y+x5Jegm/fUJ6mOuhg==

{
    "quiet": false,
    "objects": [
        {"key": "object_1"}
    ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 71
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "deleted": [
        {"key": "object_1"}
    ],
    "errors": []
}
```
