---
title: "DissociateEipFromClusterNode"
description: 
draft: false
---



为集群节点解绑公网IP，如果集群中没有节点绑定公网IP，则集群防火墙会默认删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 将要解绑的公网IP的ID，可以通过_DescribeClusterNodes_获取节点绑定的公网IP的ID | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DissociateEipFromClusterNode
&eips.1=eip-ek3scgap
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DissociateEipFromClusterNodeResponse",
  "job_id":"j-7vr4wbltzn9",
  "ret_code":0
}
```


