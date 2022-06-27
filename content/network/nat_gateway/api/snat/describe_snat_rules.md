---
title: "DescribeSnatRules"
description: 查询 SNAT 规则
draft: false
weight: 25
keyword: 青云, QingCloud, 云计算, API, NFV, NAT 网关, 网络组件, SNAT
---

查询 SNAT 规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| natgw_ids.n | String | 一个或多个 NAT 网关 ID | Yes |
| status.n | String | SNAT 状态：0 禁用， 1 启用 | No |
| reverse | String | 是否逆序。 | No |
| sort_key | String | 排序字段，支持 create_time。 | No |
| target_type.n | String | 目标类型：0 VXNET, 1 主机。 | No |
| limit | String | 查询数量 | No |
| offset | String | 查询偏移量 | No |
| search_word | String | 模糊查询字段，支持资源 ID,  eip ID 以及 SNAT 名称 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | int | 存在的 SNAT 的数量 |
| snat_set | list | 每个 SNAT 对应的具体信息 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeSnatRules
&natgw_ids.1=nfv-1234abcd
&status.1=1
&reverse=0
&sort_key=create_time
&target_type=1
&limit=10
&offset=5
&search_word=test_snat
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DescribeSnatRulesResponse",
  "snat_set":[
    {
      "natgw_id":"nfv-o0d2nqbr",
      "enable":1,
      "name":"test_snat_vxnet2",
      "snat_id":"snat-c7905x1o",
      "target_id":"vxnet-newe5yz",
      "target_type":0,
      "eips":[
        {
          "eip_id":"eip-rzg3p0sd",
          "eip_addr":"172.18.90.91"
        }
      ],
      "create_time":"2021-10-08T07:10:47Z",
      "target_ip":"172.20.10.0/24"
    },
    {
      "natgw_id":"nfv-o0d2nqbr",
      "enable":0,
      "name":"test_snat_vxnet1",
      "snat_id":"snat-3iix52ib",
      "target_id":"vxnet-jgkw25b",
      "target_type":0,
      "eips":[
        {
          "eip_id":"eip-rzg3p0sd",
          "eip_addr":"172.18.90.91"
        },
        {
          "eip_id":"eip-ant3yolk",
          "eip_addr":"172.18.90.46"
        }
      ],
      "create_time":"2021-09-28T01:59:15Z",
      "target_ip":"172.20.30.0/24"
    }
  ],
  "ret_code":0,
  "total_count":2
}

```
