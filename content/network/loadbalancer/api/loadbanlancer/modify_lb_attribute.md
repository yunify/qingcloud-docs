---
title: "ModifyLoadBalancerAttributes"
description: 修改负载均衡器名称及描述的 API 接口说明。
keyword: 负载均衡器API,修改负载均衡器
weight: 15
draft: false
---

修改一台负载均衡器的名称和描述。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancer | String | 负载均衡器 ID。 | Yes |
| loadbalancer_name | String | 新的负载均衡器名称。 | No |
| security_group | String | 更改的负载均衡器加载的安全组 ID，为空则保持不变。 | No |
| description | String | 新的负载均衡器描述。 | No |
| private_ip | String | 私网负载均衡器的 IP。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |
| http_header_size | Integer | 负载均衡器允许的最大 HTTP 头部长度。<br/>默认值为 15，合法范围：[1-127]，单位为kbytes，调高此参数时会影响最大连接数。 | No |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyLoadBalancerAttributes
&loadbalancer=lb-rtyv0968
&loadbalancer_name=sample
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyLoadBalancerAttributesResponse",
  "ret_code":0
}
```
