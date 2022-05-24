---
title: "DeleteSnatRules"
description: 删除 SNAT 规则
draft: false
weight: 34
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, SNAT
---

删除 SNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_id | String | NAT 网关的 ID | Yes |
| snat_ids.n | String | 一个或多个待删除的 SNAT ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| snat_ids | String | 被删除的 SNAT 规则 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteSnatRules
&natgw_id=nfv-1234abcd
&snat_ids.1=snat-p8zf9ytc
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteSnatRulesResponse",
  "snat_ids":[
    "snat-p8zf9ytc"
  ],
  "ret_code":0
}
```
