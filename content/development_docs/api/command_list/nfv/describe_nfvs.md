---
title: "DescribeNFVs"
description: 
draft: false
---



获取一个或多个网络组件的信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfvs.n | String | 一个或多个网络组件的 ID 。 | No |
| nfv_type | Integer | 网络组件的类型，值为 1 时表示过滤 NAT 网关。 | No |
| vxnets.n | String | 一个或多个私有网络的 ID 号 。 | No |
| status.n | String | 网络组件的状态：pending，active, stopped, suspended, deleted, ceased等。 | No |
| verbose | Integer | 是否显示网络组件的详细信息，0 表示不显示，1 为显示 。 | No |
| reverse | Integer | 逆序输出 。 | No |
| offset | Integer | 网络组件的 ID 。 | No |
| limit | Integer | 网络组件的 ID 。 | No |
| root_user | String | 网络组件的 ID 。 | No |
| owner | String | 网络组件的 ID 。 | No |
| search_word | String |  搜索关键字，可以是网络组件 ID ,网络组件名称 。 | No |
| sort_key | String | 网络组件的 ID 。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | int | 存在的nfv的数量 |
| nfv_set | list | 每个nfv对应的具体信息 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeNFVs
&nfvs.1=nfv-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeNFVsResponse",
  "total_count":1,
  "nfv_set":[
    {
      "status":"active",
      "is_applied":1,
      "description":null,
      "nfv_name":null,
      "nfv_type":1,
      "sub_code":0,
      "transition_status":"",
      "cluster":{
        "eip-93iywhpy":{
          "0":{
            "instance_id":"i-2e1axf0c",
            "instance_time":"2019-07-11T12:30:55",
            "node_idx":0
          }
        },
        "eip-0pe5yc5n":{
          "0":{
            "instance_id":"i-r8jdpzm0",
            "instance_time":"2019-07-08T12:16:16",
            "node_idx":0
          }
        }
      },
      "root_user_id":"usr-9bPZ2LXW",
      "create_time":"2019-07-08T04:16:13Z",
      "nfv_id":"nfv-0zvlkz32",
      "nfv_spec":1,
      "owner":"usr-9bPZ2LXW",
      "status_time":"2019-07-11T04:32:16Z",
      "node_count":1,
      "cluster_mode":0,
      "zone_id":"devops1a"
    }
  ],
  "ret_code":0
}
```
