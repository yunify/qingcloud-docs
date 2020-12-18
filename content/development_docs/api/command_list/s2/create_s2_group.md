---
title: "CreateS2Group"
description: 
draft: false
---



创建vnas服务访问共享目标的权限组

S2 Group权限组包含可访问共享目标的一组用户，将权限组和共享目标关联，即可让用户获得访问共享目标的权限。 共享目标只能和一个权限组绑定，同一个权限组可以和多个共享目标进行绑定。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| group_type | String | 账号的类型，为 SMB_GROUP, NFS_GROUP 类型 | Yes |
| group_name | String | 权限组名称 | No |
| s2_accounts.n | String | 用户账号的ID | No |
| description | String | 权限组描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| action | String | 响应动作 |
| --- | --- | --- |
| s2_group_id | String | 新创建的 权限组 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateS2Group
&group_type=NFS_GROUP
&group_name=nfstest
&s2_accounts.1=s2g-m2k3r0w2
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateS2GroupResponse",
  "ret_code":0,
  "s2_group_id":"s2g-lxqjtu3l"
}
```
