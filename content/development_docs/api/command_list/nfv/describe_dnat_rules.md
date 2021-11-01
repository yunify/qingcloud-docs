---
title: "DescribeDnatRules"
description:
draft: false
---

查询DNAT规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| natgw_ids.n | String | 一个或多个NAT网关ID 。 | Yes |
| status.n | String | SNAT状态：0 禁用， 1 启用。 | No |
| reverse | String | 是否逆序。 | No |
| sort_key | String | 排序字段，支持create_time。 | No |
| protocol| String | dnat协议类型, tcp或udp。 | No |
| limit | String | 查询数量。 | No |
| offset | String | 查询偏移量。 | No |
| search_word | String | 模糊查询字段，支持内网ip, eip ID以及DNAT名称。 | No |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | int | 存在的snat的数量 |
| dnat_set | list | 每个snat对应的具体信息 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeDnatRules
&natgw_ids.1=nfv-1234abcd
&status.1=1
&reverse=0
&sort_key=create_time
&protocol=tcp
&limit=10
&offset=5
&search_word=test_dnat
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeDnatRulesResponse",
  "total_count":1,
  "dnat_set":[
    {
      "natgw_id":"nfv-yjw6kdc8",
      "enable":1,
      "eip_id":"eip-ckzp6tr5",
      "name":"test_dnat1",
      "public_port":"80",
      "private_port":"8080",
      "create_time":"2021-08-20T02:34:01Z",
      "private_ip":"172.20.0.3",
      "protocol":"tcp",
      "dnat_id":"dnat-6gt6xvuy"
    }
  ],
  "ret_code":0
}
```
