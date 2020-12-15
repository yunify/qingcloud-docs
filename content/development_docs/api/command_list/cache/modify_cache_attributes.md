---
title: "ModifyCacheAttributes"
description: 
draft: false
---



修改一台缓存服务的名称和描述。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache | String | 缓存服务ID | Yes |
| cache_name | String | 新的缓存服务名称 | No |
| description | String | 新的缓存服务描述 | No |
| auto_backup_time | Integer | 新的自动备份时间(UTC 的 Hour 部分)，有效值0-23，任何大于23的整型值均表示关闭自动备份，默认值 99 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyCacheAttributes
&cache=c-55dwkqew
&cache_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyCacheAttributesResponse",
  "ret_code":0
}
```
