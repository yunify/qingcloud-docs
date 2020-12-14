---
title: "DisableS2SharedTargets"
description: 
draft: false
---



禁用一个或多个共享存储目标。

此操作完成后需要调用 [_UpdateS2Servers_](update_s2_servers.html#api-update-s2-server) 以应用到共享存储服务器上。

**Request Parameters**

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DisableS2SharedTargets
&shared_targets.1=s2st-eawpunuj
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DisableS2SharedTargetsResponse",
  "shared_targets":[
    "s2st-eawpunuj"
  ],
  "ret_code":0
}
```
