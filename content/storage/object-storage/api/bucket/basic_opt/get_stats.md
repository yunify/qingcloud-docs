---
title: "GET Bucket Statistics"
---


获取 Bucket 的统计信息 (Statistics)。QingStor 对象存储定义统计信息是 Bucket 的子资源，只有 Bucket 的所有者才能调用。

## 请求语法

```http
GET /?stats HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见[公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，会返回一个 Json 消息体，各返回字段说明如下：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| count | Integer | Bucket 内存储的对象数量 |
| size | Integer | Bucket 内存储的对象所占用的空间大小|
| storage_classes | dict | Bucket 级别。可选值为 `STANDARD` 与 `STANDARD_IA`，即标准存储与低频存储 |
| location | String | Bucket 所在区域，即 Zone ID |
| created | Date | Bucket 的创建时间 |
| status | Enum | Bucket 的状态。枚举值：active, suspended |

**说明**

- `storage_classes` 为字典类型，对应的值为相应存储类型的统计信息，包括：`count`, `size`, `billing_size`。
- 标准存储中，上文的 `size` 和 `billing_size` 是相等的值；因为低频存储有最小存储计费时间的限制，故低频存储的 `billing_size` 大于等于 上文中的 `size`。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 操作成功 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?stats HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

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

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。
