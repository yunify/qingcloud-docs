---
title: "CreateS2SharedTarget"
description: 
draft: false
---



新建共享存储目标，在新建时可以直接添加硬盘作为backstore，也可以以后添加。

此操作完成后需要调用 [_UpdateS2Servers_](update_s2_servers.html#api-update-s2-server) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_server | String | 共享存储服务器ID | Yes |
| export_name | String |

共享存储目标名称，及IQN

> 也可以输入短名，QingCloud会自动帮你补全IQN。

 | Yes |
| target_type | String | 共享存储目标类型，目前仅支持ISCSI | Yes |
| description | String | 共享存储目标描述 | No |
| volumes.n | String | 添加硬盘作为backstore | No |
| initiator_names.n | String | 指定客户端IQN | No |
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
https://api.qingcloud.com/iaas/?action=CreateS2SharedTarget
&s2_server=s2-lxqjtu3l
&export_name=demo
&description=demo_descritpion
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateS2SharedTargetResponse",
  "s2_shared_target":"s2st-gkps8hq9",
  "ret_code":0
}
```
