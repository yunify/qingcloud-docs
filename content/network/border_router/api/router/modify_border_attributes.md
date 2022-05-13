---
title: "ModifyBorderAttributes"
description: 
draft: false
keyword: 边界路由器,修改属性
weight: 10
---

修改边界路由器属性。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border | String | 边界路由器 ID | Yes |
| border_name | String | 边界路由器名称 | No |
| description | String | 边界路由器描述 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| global_job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyBorderAttributes
&border=irt-2zevtm67
&border_name=ABC
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyBorderAttributesResponse",
  "global_job_id":"j-ytmu2ec1",
  "ret_code":0
}
```
