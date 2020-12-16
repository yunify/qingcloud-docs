---
title: "UpdateLoadBalancers"
description: 
draft: false
---



更新一台或多台负载均衡器的配置。在每次对负载均衡器的配置进行变更，例如”增加”或”删除”监听器或后端服务时， 需要执行该操作使配置更新生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=UpdateLoadBalancers
&loadbalancers.1=lb-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpdateLoadBalancersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
