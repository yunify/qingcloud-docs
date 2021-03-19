---
title: "AllocateEips"
description: 
draft: false
---



从IP池中分配一个公网IP，分配时可指定带宽、数量、IP组、名称及是否需要备案。

分配后的公网IP可跟云服务器或路由器绑定。

注解

无论公网IP是否与其他资源绑定，一旦分配成功，此IP的计费就会开始。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| bandwidth | Integer | 公网IP带宽上限，单位为Mbps | Yes |
| billing_mode | String | 公网IP计费模式：bandwidth 按带宽计费，traffic 按流量计费，默认是 bandwidth | No |
| associate_mode | Integer | 公网IP绑定模式：0为外部绑定，1为内部绑定，默认是0 | No |
| eip_name | String | 公网IP名称 | No |
| count | Integer | 创建公网IP的数量，默认是1 | No |
| need_icp | Integer | 是否需要备案，1为需要，0为不需要，默认是0 | No |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| eips | Array | 分配成功的公网IP列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AllocateEips
&bandwidth=2
&billing_mode=bandwidth
&eip_name=dev
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AllocateEipsResponse",
  "eips":["eip-j38f2h3h"]
  "ret_code":0
}
```
