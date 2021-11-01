---
title: "DeleteNFVs"
description: 删除一个或多个网络组件(NFV)
weight: 20
draft: false
keywords: API, NFV, NAT 网关, 网络组件
---



删除一个或多个网络组件(NFV)。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfvs.n | String | 网络组件的 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |
| force | Integer | 是否强制删除0, 1 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 删除网络组件的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteNFVs
&nfvs.1=nfv-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteNFVsResponse",
  "ret_code":0,
  "job_id":"j-0om6hgcokm5"
}
```
