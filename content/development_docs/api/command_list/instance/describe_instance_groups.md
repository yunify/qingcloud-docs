---
title: "DescribeInstanceGroups"
description: 
draft: false
weight: 19
---

获取一个或多个云服务器组

可根据云服务器组ID, 分组名称, 分组关系 作为过滤条件, 来获取云服务器组列表。 如果不指定任何过滤条件, 默认返回你所拥有的所有云服务器组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instance_groups.n | String | 云服务器组ID | No |
| relation | String | 云服务器分组关系 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| owner | String | 按照用户账户过滤, 只返回指定账户的资源 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器组相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_group_set | Array | JSON 格式的云服务器组数据列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的云服务器组总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| instance_group_id | String | 云服务器组ID |
| instance_group_name | String | 云服务器组名称 |
| description | String | 云服务器组描述 |
| relation | String | 云服务器组关系 |
| create_time | TimeStamp | 云服务器组创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeInstanceGroups
&instance_groups.1=ig-8qstg3wi
&verbose=1
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeInstanceGroupsResponse",
  "total_count":1,
  "instance_group_set":[
    {
      "instance_group_name":"attract",
      "description":"",
      "tags":[],
      "controller":"self",
      "console_id":"alphacloud",
      "root_user_id":"usr-97aasaOZ",
      "create_time":"2017-10-27T03:46:06Z",
      "relation":"attract",
      "owner":"usr-97aasaOZ",
      "instance_group_id":"ig-8qstg3wi"
    }
  ],
  "ret_code":0
}
```
