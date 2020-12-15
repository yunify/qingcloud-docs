---
title: "AssociateEipsToNFV"
description: 
draft: false
---



绑定公网 IP 地址到某个网络组件。可以绑定的公网 IP 地址的个数不能超过10个。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID 号 。 | Yes |
| eips.n | String | 一个或多个要被绑定的公网 IP 地址 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 绑定公网 IP 到网络组件的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AssociateEipsToNFV
&nfv=nfv-1234abcd
&eips.1=eip-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AssociateEipsToNFVResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
