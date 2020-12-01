---
title: "GET Bucket Statistics"
---

# GET Bucket Statistics

获取存储空间的统计信息 (Statistics)，stats 是存储空间的子资源 (subresource)，只有存储空间的所有者才能调用。

## Request Syntax

```http
GET /?stats HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## Request Parameters

没有请求参数

## Request Headers

参见[公共请求头](../../common/common_header#请求头字段-request-header)

## Request Body

没有请求消息体

## Status Code

成功则返回 200; 其他失败的返回码参考[错误码列表](../../common/error_code)

## Response Headers

参见[公共响应头](../../common/common_header#响应头字段-request-header)

## Response Body

正常情况下会有一个 Json 消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../../common/error_code)

| Name | Type | Description |
| --- | --- | --- |
| count | Integer | 存储空间存储的对象的数量 |
| size | Integer | 存储空间存储的对象（实际）大小，标准存储 size 和 billing_size 是相等的值，低频存储的 billing_size 大于等于 size，因为低频存储类型有最小存储计费时间的限制。|
| storage_classes | dict | 有效的键值为存储类型 "STANDARD"（标准存储） 和 "STANDARD_IA" （低频存储）, 对应的值为相应存储类型的统计 subdict, subdict 的有效键值为"count", "size", "billing_size" 的统计值。其中billing_size为属于该 storage-class 的对象的总计费大小 |
| location | String | 存储空间所在区域(zone)名称 |
| created | Date | 存储空间的创建时间 |
| status | Enum | 存储空间的状态，枚举值：active, suspended |

## Example

### Example Request

```http
GET /?stats HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Type: application/json
Content-Length: 222
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "count": 10,
    "status": "active",
    "name": "mybucket",
    "created": "2015-07-22T02:23:04.000Z",
    "url": "mybucket.pek3a.qingstor.com",
    "location": "pek3a",
    "storage_classes": {
        "STANDARD": {
            "count": 5,
            "billing_size": 3000,
            "size": 3000
            },
        "STANDARD_IA": {
            "count": 5,
            "billing_size": 3180,
            "size": 3000
            }
        },
    "size": 6000
}
```
