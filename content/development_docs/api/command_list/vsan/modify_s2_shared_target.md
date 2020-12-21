---
title: "ModifyS2SharedTargets"
description: 
draft: false
---



修改共享存储目标属性，通过此操作可以修改共享存储目标参数和设置客户端标识。 共享存储目标参数可参见 :ref: api-describle-s2-default-parameters 。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyS2SharedTarget
&shared_targets.1=s2st-eawpunuj
&operation=add
&initiator_names.1=iqn.1993-08.org.debian:01:967eaffe29d7
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyS2SharedTargetesponse",
  "shared_targets":[
    "s2st-eawpunuj"
  ],
  "ret_code":0
}
```
