---
title: "DissociateS2AccountGroup"
description: 
draft: false
---



将访问NFS和SMB资源的用户账户和权限组进行解除关联。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_groups.n | String | 权限组ID | Yes |
| s2_accounts.n | String | 用户账号的ID | No |
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
https://api.qingcloud.com/iaas/?action=DissociateS2AccountGroup
&s2_groups.1=s2g-5xmpse7o
&s2_accounts.1=s2a-3f181hmo
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DissociateS2AccountGroupResponse",
  "s2_group_account":[
    {
      "s2_accounts":[],
      "s2_group":"s2g-5xmpse7o"
    }
  ],
  "ret_code":0
}
```
