---
title: "ModifyS2Account"
description: 
draft: false
---



修改用户账户属性，通过此操作可以修改NFS和SMB账户的配置属性 共享存储目标参数可参见 :ref: api-describle-s2-default-parameters 。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_account | String | 用户访问资源账户ID | Yes |
| opt_parameters | String | NFS协议参数定义<br/>如：squash=root_squash,sync=async<br/>squash：<br/>root_squash，限制root用户权限<br/>all_squash，限制所有用户权限<br/>no_root_squash，不限制root用户权限（缺省）<br/>sync：<br/>sync，同步写入内存和硬盘<br/>async，先写入内存，后写入硬盘（缺省） | No |
| account_name | String | 账号名称 | No |
| smb_passwd | String | SMB协议访问的密码 | No |
| nfs_ipaddr | String | NFS协议访问的IP地址 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyS2Account
&s2_account=s2a-cpuwpquf
&nfs_ipaddr=1.2.3.4
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyS2AccountResponse",
  "s2_account_id":"s2a-cpuwpquf",
  "ret_code":0
}
```
