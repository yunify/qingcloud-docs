---
title: "PUT Bucket Policy"
---

# PUT Bucket Policy

设置存储空间的访问策略，Policy 是存储空间的子资源(subresource)，只有存储空间所 有者才能设置。

获取 Policy 请参见 [GET Bucket Policy](../get_policy#object-storage-api-get-bucket-policy) 。

删除 Policy 请参见 [DELETE Bucket Policy](../delete_policy#object-storage-api-delete-bucket-policy) 。

## Request Syntax

```http
PUT /?policy HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
{
    <statement>: <bucket policy>
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
| statement | List | statement 的元素为策略。策略为 dict 类型，有效的键为 "id", "user", "effect", "action", "resource", 和 "condition", 各键的文档请见下文。 statement 的总长度不能超过2048个字符。statement 的匹配按定义的顺序，假如一个请求匹配上两条 statment，定义在前的那条 statment 生效。 |
| id | String | 策略的标识符。可为任意字符，长度不能超过100个字符，在一个 Bucket Policy 中，策略的标识符必须唯一。该字符串可用来描述策略的用途。 |
| user | String or List | 策略所应用到的用户，其值可为字符串，也可为列表。当策略所应用到的用户为 单一用户时，可用字符串表示，否则应该用列表表示。每个用户必须为 青云 QingCloud 用户，可用青云 QingCloud 用户 ID (usr-*******)表示。 总体长度不能超过300个字符。 该字段不能省略，如果要匹配 所有用户，可设置值为 `*`。 |
| effect | String | 当策略成功匹配用户的请求时，是否允许该请求。其值可为 "allow" (表示允许) 或 "deny" (表示拒绝)。 注意：如果请求与策略不匹配，则认为策略对于该请求 不生效。 |
| action | String or List | 资源所支持操作。 其值可为列表或字符串。当为单一操作时，可用字符串表 示，否则应该用列表表示。总长度不能超过500个字符。action 包括两类, 分别为 bucket action, object action。此字段不能省略，也不能通配。<br/> Bucket action 包括 "list_objects", "head_bucket", 及 "get_bucket_stats"。<br/> Object action 包括 "get_object", "create_object", "delete_object", "head_object", "list_objects", "list_object_parts", "upload_object_part", "abort_multipart_upload", "initiate_multipart_upload", 及 "complete_multipart_upload"。<br> 其中 list_objects 既属于 bucket actions 也属于 object actions |
| resource | List |  允许或拒绝权限的对象资源。resource必须为列表或字符串。总长度不能超过2048个字符。 <br/> 对于属于 bucket action (head_bucket, get_bucket_stats), 因为隐含 作用对象是当前 bucket，resource 要么是bucket名称，要么缺省。 <br/> 对于属于 object action，resource 必须为以 "bucketname/" 为前缀的通配 object 资源的表达式， 如 `resource: ["mybucket/dir_a/*", "mybucket/dir_b/*"]` ("mybucket/" 为不合法的 resource)。 <br/> 对于 list_objects, resource 隐含为当前 bucket 的所有对象，如果指定 `resource: [mybucket/dir/*]`，则匹配前缀为 mybucket/dir/ 的所有对象，这可以用于控制特定路径下边的对象列取权限。 <br> 当 action 包含了 object action， resource 不可缺省，并且须以 object 资源的形式存在。|
| condition | dict | 允许策略生效的条件, 可缺省。总长度不能超过2048个字符。condition详细介绍请参见 [Bucket Policy Condition](../policy_condition#object-storage-api-bucket-policy-condition) |

## Response Headers

> [参见公共响应头](../../../common_header#响应头字段-request-header)

## Example

### Example Request

```http
PUT /?policy HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 300
Authorization: authorization string

{
    "statement": [
        {
            "id": "allow certain site to get objects",
            "user": "*",
            "action": ["get_object"],
            "effect": "allow",
            "resource": ["mybucket/*"],
            "condition": {
                "string_like": {
                    "Referer": [
                        "*.example1.com",
                        "*.example2.com"
                    ]
                }
            }
        },
        {
            "id": "allow user-henry to list objects and create objects",
            "user": "user-henry",
            "action": ["list_objects", "create_object"],
            "resource": ["mybucket/*"],
            "effect": "allow"
        }
    ]
}
```

### Example Response

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```
