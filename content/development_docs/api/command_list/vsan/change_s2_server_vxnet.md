---
title: "ChangeS2ServerVxnet"
description: 
draft: false
---



修改共享存储服务器的属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_server | String | 共享存储服务器ID | Yes |
| vxnet | String | 私有网络ID | Yes |
| private_ip | String | 指定私有网络IP地址 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ChangeS2ServerVxnet
&s2_servers.1=s2-lxqjtu3l
&vxnet=vxnet-ln2mtlk
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeS2ServerVxnetResponse",
  "job_id":"j-bdg2109b",
  "ret_code":0
}
```
