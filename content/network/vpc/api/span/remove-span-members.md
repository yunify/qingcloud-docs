---
title: "RemoveSpanMembers"
description: 删除 SPAN 成员。
keyword: SPAN, 网络流量镜像
weight: 7
draft: false
---



给 SPAN 删除成员，成员可以是 instance id 或 vxnet id。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| span | String | SPAN ID | Yes |
| resources.n | String | SPAN成员，可以是instance id或vxnet id | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

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
https://api.qingcloud.com/iaas/?action=RemoveSpanMembers
&span=span-1234abcd
&resources.1=i-1234abcd
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"RemoveSpanMembersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
