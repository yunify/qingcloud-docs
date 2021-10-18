---
title: "Bucket Policy Condition"
---

该接口用于设置 Bucket 的访问策略（Policy）生效的条件。支持 **字符串条件运算符**，和 **Null 条件运算符**。

condition的基本格式

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

一个 policy statement 中，condition 如果包含了多个条件，匹配方式为"与条件"关系。

**字符串条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| string_like | Dict | 字符串通配(仅支持 * )。如果匹配，返回 True; 否则，返回 False。若为 list， 则匹配任意一个就返回 True。 |
| string_not_like | Dict | 字符串非通配(仅支持 * )。如果匹配，返回 False; 否则，返回 True。若为 list, 则都不匹配才返回 True。 |

**IP 地址条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| ip_address | Dict | 检查 IP 地址是否在该网段列表内。如果是，返回 True; 否则，返回 False。 |
| not_ip_address | Dict | 检查 IP 地址是否在该网段列表内。如果是，返回 False; 否则，返回 True。 |

**Null 条件运算符**

| Name | Type | Description |
| --- | --- | --- |
| is_null | Dict | 判断被匹配元素是否为空值。如果为空，返回被匹配元素的值; 否则，返回被 匹配元素的相反值。被匹配元素的有效值为 `True` 或 `False`。例如， `"is_null": {"Referer": true}` 意为匹配 Referer 为空值的请求。 `"is_null": {"Referer": false}` 意为匹配 Referer 非空的请求。 |

**被匹配元素**

| Name | Type | 条件运算符 | Description |
| --- | --- | --- | --- |
| Referer | String or List | 字符串条件运算符、Null 条件运算符 | HTTP 请求头 Referer 字段的匹配值，例如， `"string_not_like": {"Referer": ["_.example1.com", "_.example2.com"]}` |
| source_ip | List | IP 地址条件运算符 | HTTP 请求的源地址的匹配值，以 [CIDR](http://www.rfc-editor.org/rfc/rfc4632.txt) 格式表示，例如， `"ip_address": {"source_ip": ["172.16.0.0/24", "172.17.0.25/32"]}` |
