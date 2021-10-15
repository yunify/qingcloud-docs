---
title: "PUT Bucket Policy"
---

该接口用于设置 Bucket 的访问策略。QingStor 对象存储定义访问策略为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该API。

## 请求语法

```http
PUT /?policy HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
{
    <statement>: <bucket policy>
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

### 参数说明

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| statement | List | 访问策略，字典类型。访问策略的匹配规则根据规则的定义顺序依次生效，如：一个请求匹配上两条 `statment`，定义在前的 `statment` 生效。 |是 |
| id | String | 策略的标识符，可用来描述策略的用途。可为任意字符，且长度不超过 100。在一个 Bucket Policy 中，策略的标识符必须唯一。 |是 |
| user | String or List | 策略所应用到的用户，其值可为字符串，也可为列表。规则如下：<br>- 当策略所应用到的用户为单一用户时，可用字符串表示，否则应该用列表表示。<br>- 每个用户必须为青云 QingCloud 用户，可用青云 QingCloud 用户 ID 表示。 <br>- 总体长度不能超过 300 个字符。 <br>- 该字段不能省略，如果要匹配所有用户，可设置值为 `*`。 |是 |
| effect | String | 当策略成功匹配用户的请求时，是否允许该请求。可选值为：<br>- `allow` 表示允许； <br>- `deny` 表示拒绝。 <br>- 如果请求与策略不匹配，则认为策略对于该请求不生效。 |是 |
| action | String or List | 资源所支持操作。 其值可为列表或字符串。包括 Bucket action 与 Object action。 规则如下：<br>- 当为单一操作时，可用字符串表示，否则应该用列表表示。<br>- 总长度不能超过 500 个字符。<br>- Bucket action 包括，`list_objects`，`head_bucket` 及 `get_bucket_stats`。<br/>- Object action 包括 `get_object`，`create_object`，`delete_object`，`head_object`，`list_objects`，`list_object_parts`，`upload_object_part`，`abort_multipart_upload`，`initiate_multipart_upload` 及 `complete_multipart_upload`。<br>- 其中 `list_objects` 既属于 Bucket action 也属于 Object action |是 |
| resource | List |  允许或拒绝权限的对象资源。必须为列表或字符串。总长度不能超过 2048 个字符。 <br/>- 对于 Bucket action，`resource` 需为 Bucket 名称或者缺省。 <br/>- 对于 Object action，`resource` 须为以 `bucketname/` 为前缀的通配 Object 资源的表达式， 如 `resource: ["mybucket/dir_a/*", "mybucket/dir_b/*"]` <br/>- 对于 `list_objects`，若指定 `resource: [mybucket/dir/*]`，则匹配前缀为 `mybucket/dir/` 的所有对象，可用于控制特定路径下的对象列取权限。 <br>- 当 `action` 包含了 Object action， 则 `resource` 不可缺省，并且须以 Object 资源的形式设置。|是 |
| condition | dict | 允许策略生效的条件。可缺省。总长度不能超过 2048 个字符。详细介绍请参见 [Bucket Policy Condition](#condition-说明) |是 |

### Condition 说明

`Condition` 字段支持字符串条件运算符和 Null 条件运算符。其基本格式如下：

```json
"condition": {
    "条件运算符" : {
        "被匹配元素": "匹配值"
    }
}
```

例如:

```json
"condition": {
    "string_like": {"Referer": "*.example1.com"},
    "string_not_like": {"Referer": "*.example2.com"},
    "ip_address": {"source_ip": ["172.16.0.0/24"]}
}
```

一个 Policy Statement 中，Condition 如果包含了多个条件，匹配方式为 `与条件` 关系。

**字符串条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| string_like | Dict | 字符串通配，目前仅支持 `*` 。如果匹配，返回 True；否则，返回 False。若为 list， 则匹配任意一个就返回 True。 |
| string_not_like | Dict | 字符串非通配，目前仅支持 `*`。如果匹配，返回 False；否则，返回 True。若为 list，则都不匹配才返回 True。 |

**IP 地址条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| ip_address | Dict | 检查 IP 地址是否在该网段列表内。如果是，返回 True；否则，返回 False。 |
| not_ip_address | Dict | 检查 IP 地址是否在该网段列表内。如果是，返回 False；否则，返回 True。 |

**Null 条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| is_null | Dict | 判断被匹配元素是否为空值。如果为空，返回被匹配元素的值；否则，返回被匹配元素的相反值。被匹配元素的有效值为 `True` 或 `False`。例如：<br>- `"is_null": {"Referer": true}` 意为匹配 Referer 为空值的请求。 <br>- `"is_null": {"Referer": false}` 意为匹配 Referer 非空的请求。 |

**被匹配元素**

| Name | Type | 条件运算符 | Description |
| --- | --- | --- | --- |
| Referer | String or List | 字符串条件运算符、Null 条件运算符 | HTTP 请求头 Referer 字段的匹配值，例如， `"string_not_like": {"Referer": ["_.example1.com", "_.example2.com"]}` |
| source_ip | List | IP 地址条件运算符 | HTTP 请求的源地址的匹配值，以 [CIDR](http://www.rfc-editor.org/rfc/rfc4632.txt) 格式表示，例如， `"ip_address": {"source_ip": ["172.16.0.0/24", "172.17.0.25/32"]}` |


## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置 Bucket 策略 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

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

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

