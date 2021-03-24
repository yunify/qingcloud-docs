---
title: "AssociateEip"
description: 
draft: false
---



将一个“可用”（ available ）状态的公网IP绑定到云服务器， 绑定后的云服务器才具有访问外网的能力。

不能对已绑定公网IP的云服务器再次绑定，如果需要更改IP， 则要先解绑之前的IP，再绑定新的。如果已绑定公网IP所在的云服务器没有反应,可以使用强制绑定
将该公网IP绑定到目标资源上。

如果想将公网IP绑定到路由器，请参见 [_ModifyRouterAttributes_](../../router/modify_router_attributes/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eip | String | 公网IP的ID | Yes |
| instance | String | 云服务器 ID | Yes |
| force | Boolean | 是否强制绑定 | No |
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
https://api.qingcloud.com/iaas/?action=AssociateEip
&eip=eip-12djpg8q
&instance=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AssociateEipResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
