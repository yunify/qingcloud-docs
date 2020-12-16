---
title: "ModifyNicAttributes"
description: 
draft: false
---



修改网卡属性， 包括ip地址，vxnet_id和网卡名称

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nic | String | 网卡 ID | Yes |
| nic_name | String | 网卡名称 | No |
| private_ip | String | 网卡IP地址 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyNicAttributes
&private_ip=192.168.1.2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyNicAttributesResponse",
  "ret_code":0
}
```
