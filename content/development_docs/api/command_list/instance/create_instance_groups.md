---
title: "CreateInstanceGroups"
description: 
draft: false
weight: 15
---

创建云服务器组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| relation | String | 云服务器组关系 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_groups | Array | 新创建的云服务器组列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateInstanceGroups
&relation=repel
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateInstanceGroupsResponse",
  "instance_groups":[
    "ig-c7v8lro1"
  ],
  "ret_code":0
}
```
