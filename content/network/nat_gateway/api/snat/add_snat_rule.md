---
title: "AddSnatRule"
description: 新增 SNAT 规则
draft: false
weight: 21
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, SNAT
---

新增 SNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_id | String | NAT 网关的 ID | Yes |
| name | String | SNAT 的名称 | No |
| target_id | String | 主机 ID 或者 VXNET ID | Yes |
| target_type | Integer | 目标类型：0 VXNET, 1 主机 | Yes |
| eip_ids.n | String | 一个或多个要被绑定的公网 IP 地址 | Yes |
| enable | Integer | 是否启用。 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| snat_ids | String | 新增 SNAT 规则的 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AddSnatRules
&natgw_id=nfv-1234abcd
&name=test_snat
&target_id=vxnet-xxxxcccc
&target_type=1
&eip_ids.1=eip-9m3skybb
&enable=1
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AddSnatRuleResponse",
  "snat_ids":[
    "snat-p8zf9ytc"
  ],
  "ret_code":0
}
```
