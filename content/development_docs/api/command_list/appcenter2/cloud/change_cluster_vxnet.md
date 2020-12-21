---
title: "ChangeClusterVxnet"
description: 
draft: false
---



切换集群的网络，前提是集群必须支持此操作，即应用的mustache配置文件中角色的advanced_actions定义了change_vxnet。可以通过 API [DescribeAppVersions](../describe_app_versions/) 来查看应用的配置文件是否包含此配置，也可以通过 API [DescribeClusters](../describe_clusters/) 来查看集群的角色是否支持此操作。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群ID | Yes |
| vxnet | String | 集群即将加入的网络的ID | Yes |
| roles.n | String | 集群的角色 | No |
| private_ips.n.node_id | String | 节点ID | No |
| private_ips.n.private_ip | String | 节点对应的私有IP | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ChangeClusterVxnet
&cluster=cl-q1witcdk
&vxnet=vxnet-iuy3lnd
&private_ips.1.node_id=cln-nqop00oj
&private_ips.1.private_ip=192.168.1.4
&private_ips.2.node_id=cln-oruuckuo
&private_ips.2.private_ip=192.168.1.2
&private_ips.3.node_id=cln-veb7g8nx
&private_ips.3.private_ip=192.168.1.3
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"ChangeClusterVxnetResponse",
  "ret_code":0,
  "cluster_id":"cl-q1witcdk",
  "vxnet_id":"vxnet-vzvzkno",
  "job_id":"j-72j4zto5q7x"
}

```


