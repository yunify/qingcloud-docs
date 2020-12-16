---
title: "CreateS2Server"
description: 
draft: false
---



创建新的共享存储服务器。

青云目前仅支持VSAN类型的共享存储服务器， 及基于iSCSI协议的存储服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet_id | String | 私有网络标识 | Yes |
| service_type | String | 共享服务类型（vsan） | Yes |
| name | String | 共享服务名称 | No |
| s2_server_type | Integer | 共享服务大小0/1/2/3 | No |
| private_ip | String | 指定共享服务器的IP地址 | No |
| description | String | 描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| s2_server_id | String | 新创建的 共享存储服务器 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateS2Server
&vxnet_id=vxnet-ln2mtlk
&service_type=vsan
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateS2ServerResponse",
  "ret_code":0,
  "job_id":"j-i76waodo",
  "s2_server_id":"s2-lxqjtu3l"
}
```
