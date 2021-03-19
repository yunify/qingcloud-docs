---
title: "DescribeInstanceTypes"
description: 
draft: false
weight: 12
---

获取区域支持的云服务器类型

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | 区域 ID，注意要小写 | Yes |
| instance_types | Array | 指定查询的云服务器类型 | No |
| baremetal | Integer | 是否返回物理机的云服务器类型，”1” 则返回物理机支持的类型，默认 “0” | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_type_set | Array | JSON 格式的云服务器类型列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的云服务器类型总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| instance_type_id | String | 云服务器类型ID |
| instance_type_name | String | 云服务器类型名称 |
| description | String | 云服务器类型描述 |
| vcpus_current | Integer | 云服务器类型CPU核心数目。 |
| memory_current | Integer | 云服务器类型内存大小, 单位为MB。 |
| status | String | 云服务器类型状态, 有效值为available, deprecated。<br/>available： 可用的云服务器类型<br/>deprecated： 已废弃的云服务器类型 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeInstanceTypes
&instance_types.1=c1m1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeInstanceTypesResponse",
  "total_count":1,
  "instance_type_set":[
    {
      "vcpus_current":1,
      "status":"available",
      "description":"",
      "instance_type_name":"1核1G",
      "instance_type_id":"c1m1",
      "zone_id":"pek3a",
      "memory_current":1024
    }
  ],
  "ret_code":0
}
```
