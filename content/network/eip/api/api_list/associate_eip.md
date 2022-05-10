---
title: "AssociateEip"
description: 绑定公网 IP 到云服务器。
draft: false
weight: 3
keyword: 公网 IP API,云服务器绑定公网 IP
---

将一个“可用”（ available ）状态的公网 IP 绑定到云服务器，云服务器便可访问外网。

不能对已绑定公网IP的云服务器再次绑定，如果需要更改 IP， 则要先解绑之前的 IP，再绑定新  IP。如果已绑定公网 IP 所在的云服务器没有反应,可以使用强制绑定
将该公网IP绑定到目标资源上。

如果想将公网 IP 绑定到路由器，请参见 [_ModifyRouterAttributes_](/network/vpc/api/vpc_api/modify_router_attributes/)。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eip | String | 公网 IP 的ID | Yes |
| instance | String | 云服务器 ID | Yes |
| force | Boolean | 是否强制绑定 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=AssociateEip
&eip=eip-12djpg8q
&instance=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"AssociateEipResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
