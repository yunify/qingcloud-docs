---
title: "DeleteVpcBorders"
description: 
draft: false
keyword: 边界路由器,删除
weight: 30
---

删除边界路由器。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vpc_borders | List | 需要删除的边界路由器 ID | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteVpcBorders
&vpc_borders.0=irt-2zevtm67
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"DeleteVpcBordersResponse",
    "job_id":"j-jn656bklpsy",
    "ret_code":0
}
```
