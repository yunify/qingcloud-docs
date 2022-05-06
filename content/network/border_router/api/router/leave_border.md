---
title: "LeaveBorder"
description: 
draft: false
keyword: 边界路由器,接绑私有网络
weight: 25
---

私有网络离开边界路由器。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border | String | 需要离开的边界路由器 ID | Yes |
| vxnets | List | 离开边界路由器的私有网络 | Yes |
| force | Integer | 是否强制离开边界路由器 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| border_id | String | 边界路由器的 ID |
| vxnet_id | List | 私有网络的 ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=LeaveBorder
&border=irt-2zevtm67
&vxnets.0=vxnet-gonkgpv
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"LeaveBorderResponse",
    "border_id":"irt-2zevtm67",
    "vxnets":["vxnet-gonkgpv"],
    "job_id":"j-dwe9ji4ja03",
    "ret_code":0
}
```
