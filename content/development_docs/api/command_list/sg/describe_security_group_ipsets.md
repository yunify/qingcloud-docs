---
title: "DescribeSecurityGroupIPSets"
description: 
draft: false
---



获取一个或多个IP/端口集合信息。

可根据ID，名称作过滤条件，来获取IP/端口集合列表。 如果不指定任何过滤条件，默认返回你所拥有的所有IP/端口集合。 如果指定不存在的ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_ipsets.n | String | IP/端口集合ID | No |
| ipset_type | Integer | 类型 (0:IP, 1:端口) | No |
| security_group_ipset_name | String | IP/端口集合名称, 可以部分匹配 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回应用了此IP/端口集合的其他资源的信息，默认为0. | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_ipset_set | Array | JSON 格式的IP/端口集合数据列表，每项数据可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| security_group_ipset_id | String | ID |
| security_group_ipset_name | String | 名称 |
| description | String | 描述 |
| val | String | 值， 例如: 192.168.1.0/24 |
| ipset_type | Integer | 值，0 或者 1 |
| create_time | TimeStamp | 创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeSecurityGroupIPSets
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSecurityGroupIPSetsResponse",
  "total_count":1,
  "security_group_ipset_set":[
    {
      "val":"192.168.1.0/24",
      "ipset_type": "0",
      "description":null,
      "security_group_ipset_id":"sgi-9eicklme",
      "create_time":"2013-03-19T08:27:05Z",
      "security_group_ipset_name":"default security group_ipset"
    }
  ],
  "ret_code":0
}
```
