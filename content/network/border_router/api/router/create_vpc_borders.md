---
title: "CreateVpcBorders"
description: 
draft: false
keyword: 边界路由器,创建
weight: 1
---

创建边界路由器。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border_type | String | 边界路由器的类型，**1** 是边界路由器，强烈推荐使用 1 ；**0** 是 VPC 内网路由器 | Yes |
| border_name | String | 边界路由器名称 | No |
| description | String | 边界路由器描述 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| vpc_borders | List | 边界路由器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=CreateVpcBorders
&border_name=ABC
&border_type=1
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"CreateVpcBordersResponse",
    "job_id":"j-bjpti1ly5ed",
    "vpc_borders":["irt-2zevtm67"],
    "ret_code":0
}
```
