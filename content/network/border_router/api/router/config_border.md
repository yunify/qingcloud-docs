---
title: "ConfigBorder"
description: 
draft: false
keyword: 边界路由器,配置
weight: 5
---

配置边界路由器。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| operation | String | 操作：ConfigRoute | Yes |
| border | String | 需要配置的边界路由器 | Yes |
| data | String | 配置的数据 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| border_id | String | 边界路由器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ConfigBorder
&border=irt-2zevtm67
&operation=ConfigRoute
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"ConfigBorderResponse",
    "border_id":"irt-2zevtm67",
    "job_id":"j-9xmfzgnfpoy",
    "ret_code":0
}
```
