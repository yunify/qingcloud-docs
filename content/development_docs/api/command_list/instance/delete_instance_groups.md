---
title: "DeleteInstanceGroups"
description: 
draft: false
weight: 16
---

删除指定云服务器组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instance_groups.n | String | 云服务器分组 ID 列表 | Yes |
| zone | String | 区域 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_groups | Array | 被删除的云服务器组列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteInstanceGroups
&instance_groups.1=ig-c7v8lro1
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteInstanceGroupsResponse",
  "instance_groups":[
    "ig-c7v8lro1"
  ],
  "ret_code":0
}
```
