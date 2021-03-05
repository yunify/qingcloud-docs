---
title: "ModifyS2Group"
description: 
draft: false
---



修改权限组属性，通过此操作可以修改NFS_GROUP和SMB_GROUP权限组的配置属性

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_group | String | 权限组 ID | Yes |
| group_name | String | 权限组名称 | No |
| s2_accounts.n | String | 用户账号 ID | No |
| description | String | 共享存储目标描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyS2Group
&s2_group=s2g-k01j1qtk
&description=testgroup
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyS2GroupResponse",
  "ret_code":0,
  "s2_group":"s2g-k01j1qtk"
}
```
