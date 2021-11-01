---
title: "AddSnatRules"
description:
draft: false
---

新增SNAT规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| natgw_id | String | NAT网关的ID 。 | Yes |
| name | String | SNAT的名称 。 | No |
| target_id | String | 主机ID或者VXNET ID。 | Yes |
| target_type | Integer | 目标类型：0 VXNET, 1 主机。 | Yes |
| eip_ids.n | String | 一个或多个要被绑定的公网 IP 地址。 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| snat_ids | String | 新增SNAT规则的ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddSnatRules
&natgw_id=nfv-1234abcd
&name=test_snat
&target_id=vxnet-xxxxcccc
&target_type=1
&eip_ids.1=eip-9m3skybb
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddSnatRuleResponse",
  "snat_ids":[
    "snat-p8zf9ytc"
  ],
  "ret_code":0
}
```
