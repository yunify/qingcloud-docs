---
title: "UpdateSnatRule"
description: 更新 SNAT 规则
draft: false
weight: 29
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, SNAT
---

更新 SNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_id | String | NAT网关的 ID | Yes |
| name | String | SNAT的名称 | No |
| target_id | String | 主机ID或者VXNET ID | No |
| target_type | Integer | 目标类型：0 VXNET, 1 主机 | No |
| eip_ids.n | String | 一个或多个要被绑定的公网 IP 地址 | No |
| enable | Integer | 是否启用。 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| snat_id | String | 更新SNAT规则的ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=UpdateDnatRule
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
  "action":"UpdateDnatRuleponse",
  "snat_id":"snat-p8zf9ytc",
  "ret_code":0
}
```
