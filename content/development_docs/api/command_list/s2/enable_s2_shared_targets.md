---
title: "EnableS2SharedTargets"
description: 
draft: false
---



启用一个或多个共享存储目标，此操作可在共享存储目标被禁用后使用。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| shared_targets.n | String | 共享存储目标ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=EnableS2SharedTargets
&shared_targets.1=s2st-eawpunuj
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"EnableS2SharedTargetsResponse",
  "shared_targets":[
    "s2st-eawpunuj"
  ],
  "ret_code":0
}
```
