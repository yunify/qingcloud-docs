---
title: "DescribeSecurityGroups"
description: 
draft: false
---



获取一个或多个防火墙信息。

可根据防火墙ID，名称作过滤条件，来获取防火墙列表。 如果不指定任何过滤条件，默认返回你所拥有的所有防火墙。 如果指定不存在的防火墙ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_groups.n | String | 防火墙ID | No |
| search_word | String | 搜索关键词，支持防火墙ID，防火墙名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回应用了此防火墙的其他资源的信息，默认为0. | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_set | Array | JSON 格式的防火墙数据列表，每项数据可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的防火墙总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| security_group_id | String | 防火墙ID |
| security_group_name | String | 防火墙名称 |
| description | String | 防火墙描述 |
| is_applied | Integer | 是否已更新规则，1为已更新，0为还未更新。<br/>当你修改防火墙的规则后，要“更新规则”才会生效。 更新规则 API 参见 [_ApplySecurityGroup_](../apply_security_group/) |
| is_default | Integer | 是否是系统默认防火墙，1为是，0为不是 |
| resources | Array | 应用了此防火墙的资源列表，每项资源数据格式为:<br/>{<br/>  "resource_id": "i-nz7v9hgq",<br/>  "resource_name": "api test"<br/>  "resource_type": "instance"<br/>}<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| create_time | TimeStamp | 防火墙创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeSecurityGroups
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSecurityGroupsResponse",
  "total_count":1,
  "security_group_set":[
    {
      "is_applied":1,
      "description":null,
      "security_group_id":"sg-z13kokni",
      "is_default":1,
      "create_time":"2013-03-19T08:27:05Z",
      "security_group_name":"default security group",
      "resources":[
        {
          "resource_name":"",
          "resource_type":"instance",
          "resource_id":"i-ogbndull"
        }
      ]
    }
  ],
  "ret_code":0
}
```
