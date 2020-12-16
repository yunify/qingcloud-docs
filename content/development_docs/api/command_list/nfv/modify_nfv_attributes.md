---
title: "ModifyNFVAttributes"
description: 
draft: false
---



修改一个网络组件的一个或多个属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID 。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |
| nfv_name | String | 网络组件名称。 | No |
| description | String | 描述信息 | No |
| hypervisor | String | hypervisor 类型，当前支持 kvm 和 bm, 默认是 kvm | No |
| new_zone | String | 新的区域 | No |
| cluster_mode | String | 新的集群模式 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 修改一个网络组件的一个或多个属性 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyNFVAttributes
&nfv=nfv-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyNFVAttributesResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
