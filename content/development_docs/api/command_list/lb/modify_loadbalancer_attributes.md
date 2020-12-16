---
title: "ModifyLoadBalancerAttributes"
description: 
draft: false
---



修改一台负载均衡器的名称和描述。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer | String | 负载均衡器ID | Yes |
| loadbalancer_name | String | 新的负载均衡器名称 | No |
| security_group | String | 更改的负载均衡器加载的防火墙ID，为空则保持不变 | No |
| description | String | 新的负载均衡器描述 | No |
| private_ip | String | 私网负载均衡器的IP | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| http_header_size | Integer | 负载均衡器允许的最大http头部长度，默认值为15，合法范围[1-127]，单位为kbytes，调高此参数时会影响最大连接数 | No |

[_公共参数_](../../../parameters/)

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
&loadbalancer_name=sample
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
