---
title: "CreateS2Account"
description: 
draft: false
---



创建vnas服务访问资源账号

访问vnas类型共享服务的NFS和SMB协议的资源，用户需要定义登陆账号，并将账号和S2 Group权限组进行绑定。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| account_type | String | 账号的类型，为NFS，SMB类型 | Yes |
| account_name | String | 账号名称 | No |
| smb_name | String | SMB协议访问的用户名 | No |
| smb_passwd | String | SMB协议访问的密码 | No |
| nfs_ipaddr | String | NFS协议访问的IP地址 | No |
| s2_groups | Array | 需要绑定到S2 Group权限组的ID，默认会加入到缺省权限组（自动创建）<br/>每个权限组可定义该用户的读写权限，如：{“group_id”:”s2g-g9xawjg7”,”rw_flag”:”ro”}<br/>rw_flag：<br/> ro，只读权限<br/> rw，读写权限 | No |
| opt_parameters | String | NFS协议参数定义<br/>如：squash=root_squash,sync=async<br/>squash：<br/> root_squash，限制root用户权限<br/> all_squash，限制所有用户权限<br/> no_root_squash，不限制root用户权限（缺省）<br/> sync：<br/> sync，同步写入内存和硬盘<br/> async，先写入内存，后写入硬盘（缺省） | No |
| description | String | 共享存储目标描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| action | String | 响应动作 |
| --- | --- | --- |
| s2_account_id | String | 新创建的 用户账户 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateS2Account
&account_type=NFS
&account_name=nfstest
&nfs_ipaddr=192.168.1.10
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateS2AccountResponse",
  "ret_code":0,
  "s2_account_id":"s2a-lxqjtu3l"
}
```
