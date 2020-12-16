---
title: "DescribeRoutingTableResources"
description: 
draft: false
---



获取路由表以及资源的对应关系

**Request Parameters**

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| action | String | 请求动作，可选值：DescribeRoutingTableResources | Yes |
| rtables.n | String | 一个或多个路由表的ID | No |
| resources.n | String | 一个或多个资源的ID，比如路由器ID，NAT网关的ID，负载均衡器的ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| resource_user_group_set | Array | 获取到的路由表和资源的对应关系的列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| total_count | Integer | 获取到的路由表和资源的对应关系的列表的长度 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeRoutingTableResources
&rtables.1=rt-w7xy0bq0
&resources.1=lb-wkkqhohe
&COMMON_PARAMS
```

_Example Response_

```
{
  "action":"DescribeRoutingTableResourcesResponse",
  "resource_user_group_set":[
    {
      "rtable_id":"rt-w7xy0bq0",
      "resource_id":"lb-wkkqhohe"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
