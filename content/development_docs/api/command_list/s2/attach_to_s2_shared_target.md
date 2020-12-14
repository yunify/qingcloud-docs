---
title: "AttachToS2SharedTarget"
description: 
draft: false
---



为共享存储目标添加硬盘。

此操作完成后需要调用 [_UpdateS2Servers_](update_s2_servers.html#api-update-s2-servers) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| shared_target | String | 共享存储目标ID | Yes |
| volumes.n | String | 硬盘ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AttachToS2SharedTarget
&shared_target=s2st-eawpunuj
&volumes.1=vol-02x95cwp
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AttachToS2SharedTargetResponse",
  "shared_targets":[
    "s2st-eawpunuj"
  ],
  "ret_code":0
}
```
