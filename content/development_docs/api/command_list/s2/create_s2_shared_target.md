---
title: "CreateS2SharedTarget"
description: 
draft: false
---



新建共享存储目标，在新建时可以直接添加硬盘作为backstore，也可以以后添加。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_server | String | 共享存储服务器ID | Yes |
| export_name | String | 共享存储目标名称，或IQN<br/>也可以输入短名，QingCloud会自动帮你补全IQN。<br/>NFS类型，需要以/mnt/开头定义目录名称，SMB类型，只输入名称，不能包含路径。 | Yes |
| target_type | String | 共享存储目标类型，类型：ISCSI（vsan），NFS 和 SMB（vnas） | Yes |
| description | String | 共享存储目标描述 | No |
| volumes.n | String | 添加硬盘作为backstore | No |
| initiator_names.n | String | 指定客户端IQN<br/>注：仅共享服务类型为vsan使用 | No |
| s2_group | String | 访问共享目录的权限组ID<br/>注：仅支持vnas服务类型 | No |
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
创建vsan服务类型的共享目录

https://api.qingcloud.com/iaas/?action=CreateS2SharedTarget
&s2_server=s2-lxqjtu3l
&export_name=demo
&target_type=ISCSI
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

_Example Request_:

```
创建vnas服务类型的共享目录（SMB)

https://api.qingcloud.com/iaas/?action=CreateS2SharedTarget
&s2_server=s2-lxqjtu3l
&export_name=smbtest
&target_type=SMB
&s2_group=s2g-1a1212sa
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
