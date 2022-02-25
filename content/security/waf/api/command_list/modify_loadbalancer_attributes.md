---
title: "ModifyLoadBalancerAttributes"
description: 
draft: false
---



WAF功能是依赖于负载均衡器的，所以需要通过修改负载均衡器的配置来开启或关闭WAF功能。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer | String | 负载均衡器ID | Yes |
| waf_pg | String | WAF功能的全局配置参数，为空则关闭WAF功能 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerAttributes
&loadbalancer=lb-rtyv0968
&waf_pg=wafpg-3t1b0ldm
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyLoadBalancerAttributesResponse",
  "ret_code":0
}
```
