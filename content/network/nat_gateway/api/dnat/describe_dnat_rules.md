---
title: "DescribeDnatRules"
description: 查询 DNAT 规则
draft: false
weight: 26
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, DNAT
---

查询 DNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_ids.n | String | 一个或多个 NAT 网关 ID | Yes |
| status.n | String | SNAT状态：0 禁用， 1 启用 | No |
| reverse | String | 是否逆序 | No |
| sort_key | String | 排序字段，支持 create_time | No |
| protocol| String | DNAT 协议类型，tcp 或 udp | No |
| limit | String | 查询数量 | No |
| offset | String | 查询偏移量 | No |
| search_word | String | 模糊查询字段，支持内网 IP、公网 IP ID 以及 DNAT 名称 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | int | 存在的 SNAT 的数量 |
| dnat_set | list | 每个 SNAT 对应的具体信息 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

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

**返回示例：**

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
