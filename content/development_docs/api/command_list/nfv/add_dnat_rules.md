---
title: "AddDnatRules"
description:
draft: false
---

新增DNAT规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| natgw_id | String | NAT网关的ID 。 | Yes |
| name | String | DNAT的ID 。 | No |
| public_port | String | 公网端口号1-65535, 端口号或者范围, 如80或者80-85。 | Yes |
| private_port | String | 内网端口号1-65535, 端口号或者范围, 如8080或者8080-8085。 | Yes |
| private_ip| String | 内网 IP 地址。 | Yes |
| protocol| String | 协议类型, tcp或者udp。 | Yes |
| eip_id| String | 公网IP的ID。 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| dnat_ids | String | 新增DNAT规则的ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddDnatRules
&natgw_id=nfv-1234abcd
&name=test_dnat
&public_port=80-85
&private_port=80-85
&private_ip=172.17.0.2
&protocol=tcp
&eip_id=eip-9m3skybb
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddDnatRuleResponse",
  "dnat_ids":[
    "dnat-p8zf9ytc"
  ],
  "ret_code":0
}
```
