---
title: "GetQuotaLeft"
description: 
draft: false
---



获得当前账号某个区（zone）的剩余配额情况。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_types.n | Array | 配额项，如 云服务器-instance，硬盘-volume，内存-memory 等。 hp_ 前缀的配额项表示 “超高性能型” ，如 hp_cpu 表示超高性能型 CPU 配额。 可不传此参数得到所有配额情况。 | No |
| zone | String | 区域ID | Yes |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetQuotaLeft
&resource_types.1=instance
&resource_types.2=cpu
&resource_types.3=memory
&zone=test
```

_Example Response_:

```
{
  "action":"GetQuotaLeftResponse",
  "quota_left_set":[
    {
      "resource_type":"instance",
      "left":50
    },
    {
      "resource_type":"cpu",
      "left":500
    },
    {
      "resource_type":"memory",
      "left":204800
    }
  ],
  "ret_code":0
}
```
