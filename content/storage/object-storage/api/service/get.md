---
title: "GET Service"
---

# GET Service (List Buckets)

获取请求者名下的所有存储空间 (Bucket) 列表。 不支持匿名请求，请先注册青云账号并创建 Access Key 后才能调用此 API 。

> 请求可以发向对象存储服务的 global endpoint (qingstor.com) 列出所有区域的 Bucket; 也可以发向某个区域的 zone endpoint (如 pek3.qingstor.com), 列出特定区域的 Bucket

## Request Syntax

```http
GET / HTTP/1.1
Host: qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

放在 URL 中的参数 :

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| offset | Integer | 列取的游标, 默认 0。| No |
| limit | Integer | 限定此次返回 bucket 的最大数量，默认值为 200。| No |


## Request Headers

[参见公共请求头](../../common/common_header#请求头字段-request-header)

| Header Name | Type | Description | Required |
| --- | --- | --- | --- |
| Location | Enum | 限定存储空间的区域(zone)，目前支持 pek3a, sh1a | No |

## Request Body

没有请求消息体

## Status Code

正常会返回 200,  失败的返回码参考[错误码列表](../../common/error_code)


## Response Headers

[参见公共响应头](../../common/common_header#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体; 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../common/error_code)

| Name | Type | Description |
| --- | --- | --- |
| count | Int | 存储空间的数量 |
| buckets | List | 存储空间元信息列表 |

## Example

### Example Request

```http
GET / HTTP/1.1
Host: qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 256
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
  "count": 2,
  "buckets": [
    {
      "name": "mybucket",
      "location": "pek3a",
      "url": "https://mybucket.pek3a.qingstor.com",
      "created": "2015-07-11T04:45:57Z"
    },
    {
      "name": "myphotos",
      "location": "pek3a",
      "url": "https://myphotos.pek3a.qingstor.com",
      "created": "2015-07-12T09:40:32Z"
    }
  ]
}
```
