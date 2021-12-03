---
title: "AddClusterNodes"
description: 本小节主要介绍 ChronusDB 新增节点接口。 
keyword: ChronusDB 新增节点
weight: 100
collapsible: false
draft: false
---



横向扩容集群，增加集群节点。前提是集群支持增加节点的操作，即应用配置中角色 `advanced_actions` 包含 `scale_horizontal` .

通过 API [DescribeAppVersions](../describe_app_versions/) 来查看应用的配置文件是否包含此配置，也可以通过 API [DescribeClusters](../describe_clusters/) 来查看集群的角色是否支持此操作。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 增加节点的集群 ID。 | Yes |
| node_count | Integer | 增加的节点数量。 | Yes |
| noede_role | String | 增加的节点的角色。| No |
| resource_conf | String | JSON 格式的节点配置。保持默认配置，此项留空即可。 | No |
| private_ips | String | JSON 格式的节点私有 IP 地址。 | No |
| node_name | String | 节点的名称。　| No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- |
| action | String | 响应动作。 |
| cluster_id | String | 集群的 ID。 |
| new_node_ids | Array | 新增的节点 ID。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=AddClusterNodes
&cluster=cl-q1witcdk
&node_count=2
&node_name=
&node_role=
&resource_conf=
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

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
