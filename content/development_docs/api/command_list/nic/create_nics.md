---
title: "CreateNics"
description: 
draft: false
---



创建网卡.

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 网卡对应的 vxnet_id | Yes |
| nic_name | String | 网卡名称 | No |
| count | Integer | 要创建的网卡数量，1~252 | Yes |
| private_ips.n | String | 网卡对应的IP地址， 默认会为每个网卡分配一个地址 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | CreateNicsResponse |
| nics | Array | JSON 格式的网卡列表，每项参数可见下面 [Response Item](#response-item) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| nic_id | String | 创建的网卡 ID |
| private_ip | String | 网卡对应的IP地址 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateNics
&vxnet=vxnet_1234567
&COMMON_PARAMS
```

_Example Response_:

```
{
"action":"CreateNicsResponse",
"nics":[
  {
    "nic_id":"52:54:00:00:12:34",
    "private_ip":"10.1.2.3"
  }
],
"ret_code":0
}
```
