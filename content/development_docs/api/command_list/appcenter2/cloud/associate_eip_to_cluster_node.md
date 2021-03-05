---
title: "AssociateEipToClusterNode"
description: 
draft: false
---



为集群节点绑定一个公网IP。绑定公网IP需要应用本身支持，即应用的mustache配置文件中角色的advanced_actions定义了associate_eip。可以通过 API [DescribeAppVersions](../describe_app_versions/) 来查看应用的配置文件是否包含此配置，也可以通过 API [DescribeClusters](../describe_clusters/) 来查看集群的角色是否支持此操作。

> 注意： 绑定公网IP会给集群绑定默认的防火墙。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eip | String | 公网IP的ID | Yes |
| cluster_node | String | 集群节点ID | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AssociateEipToClusterNode
&cluster_node=cln-jmrv7xfv
&eip=eip-ek3scgap
&zone=test
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"AssociateEipToClusterNodeResponse",
  "job_id":"j-olda0tqkyyc",
  "ret_code":0
}
```


