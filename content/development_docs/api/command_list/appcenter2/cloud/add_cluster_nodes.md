---
title: "AddClusterNodes"
description: 
draft: false
---



横向扩容集群，增加集群节点。前提是集群支持增加节点的操作，即应用配置中角色 `advanced_actions` 包含 `scale_horizontal` ，可以通过 API [DescribeAppVersions](../describe_app_versions/) 来查看应用的配置文件是否包含此配置，也可以通过 API [DescribeClusters](../describe_clusters/) 来查看集群的角色是否支持此操作。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 增加节点的集群ID | Yes |
| node_count | Integer | 增加的节点数量 | Yes |
| noede_role | String | 增加的节点的角色，如无角色，可不传递此项 | No |
| resource_conf | String | JSON格式的节点配置，保持默认配置，此项留空即可 | No |
| private_ips | String | JSON格式的节点私有ip地址 | No |
| node_name | String | 节点的名称　| No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cluster_id | String | 集群的ID |
| new_node_ids | Array | 新增的节点ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例，则

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddClusterNodes
&cluster=cl-q1witcdk
&node_count=2
&node_name=
&node_role=
&resource_conf=
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"AddClusterNodesResponse",
  "cluster_id":"cl-q1witcdk",
  "job_id":"j-kzpol0l3k1l",
  "new_node_ids":[
    "cln-2x5w6l81",
    "cln-b9gis6au"
  ],
  "ret_code":0
}
```


