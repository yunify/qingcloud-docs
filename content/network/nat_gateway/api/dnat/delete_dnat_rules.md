---
title: "DeleteDnatRules"
description: 删除 DNAT 规则
draft: false
weight: 35
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, DNAT
---

删除 DNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_id | String | NAT 网关的 ID 。 | Yes |
| dnat_ids.n | String | 一个或多个待删除的 DNAT ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| dnat_ids | String | 被删除的 DNAT 规则 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteDnatRules
&natgw_id=nfv-1234abcd
&dnat_ids.1=dnat-p8zf9ytc
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteDnatRulesResponse",
  "dnat_ids":[
    "dnat-p8zf9ytc"
  ],
  "ret_code":0
}
```
