---
title: "UpdateLoadBalancers"
description: 更新负载均衡器的 API 接口说明。
keyword: 负载均衡器API,更新负载均衡器
weight: 18
draft: false
---

更新一台或多台负载均衡器的配置。

对负载均衡器的配置进行变更后（例如“增加”或“删除”监听器或后端服务）， 需要执行该操作使配置更新生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=UpdateLoadBalancers
&loadbalancers.1=lb-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"UpdateLoadBalancersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
