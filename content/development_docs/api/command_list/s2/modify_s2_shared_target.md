---
title: "ModifyS2SharedTargetAttributes"
description: 
draft: false
---



修改共享存储目标属性，通过此操作可以修改共享存储目标参数和设置客户端标识。 共享存储目标参数可参见 :ref: api-describle-s2-default-parameters 。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| shared_target | String | 共享存储目标ID | Yes |
| operation | String | 操作<br/>可选的操作为add/delete/modify, add和delete是用于添加和删除客户端标识；而modify是用于修改参数。 | Yes |
| initiator_names.n | String | 客户端标识，及客户端IQN<br/> 设置了客户端标识以后，仅具有相同客户端标识的客户端才能连接到该共享存储目标。 | No |
| parameters.n | String | 参数<br/> 可参见 :ref: api-describle-s2-default-parameters 。 | Yes |
| s2_group | String | 访问共享目录的权限组ID | No |
| export_name | String | 共享存储目标名称，（仅支持vnas服务类型） | No |
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
https://api.qingcloud.com/iaas/?action=ModifyS2SharedTargetAttributes
&shared_target=s2st-eldx7l02
&operation=modify
&export_name=/mnt/test
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyS2SharedTargetAttributesResponse",
  "shared_target":{
    "username":"",
    "is_applied":1,
    "export_name":"/mnt/111",
    "console_id":"admin",
    "create_time":"2016-12-16T12:19:11",
    "owner":"usr-vrjFlTs3",
    "port":3260,
    "s2_server_id":"s2-1x5fa2dx",
    "shared_target_id":"s2st-eldx7l02",
    "sub_code":0,
    "status_time":"2016-12-16T12:19:11",
    "status":"pending",
    "description":null,
    "transition_status":"",
    "error_info":"",
    "controller":"self",
    "password":"",
    "ip_address":"0.0.0.0",
    "enabled":1,
    "target_type":"NFS",
    "root_user_id":"usr-vrjFlTs3",
    "volumes":{
      "vol-0zv5e17z":{
        "s2_server_id":"s2-1x5fa2dx",
        "shared_target_id":"s2st-eldx7l02",
        "root_user_id":"usr-vrjFlTs3",
        "console_id":"admin",
        "lun_id":"",
        "controller":"self",
        "mode":"w",
        "volume_id":"vol-0zv5e17z",
        "owner":"usr-vrjFlTs3"
      }
    },
    "group_id":"s2g-k01j1qtk"
  },
  "ret_code":0
}
```
