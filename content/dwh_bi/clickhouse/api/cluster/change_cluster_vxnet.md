---
title: "ChangeClusterVxnet"
description: 本小节主要介绍 ClickHouse 交换私有 IP 接口。 
keywords: ClickHouse 交换私有 IP，交换私有 IP 接口
weight: 134
collapsible: false
draft: false
---



切换集群的网络，前提是集群必须支持此操作，即应用的 mustache 配置文件中角色的`advanced_actions` 定义了 `change_vxnet`。

- 通过 API [DescribeAppVersions](../describe_app_versions/) ，可查看应用的配置文件是否包含此配置。
- 通过 API [DescribeClusters](../describe_clusters/) ，可查看集群的角色是否支持此操作。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群 ID。 | Yes |
| vxnet | String | 集群即将加入的网络的 ID。 | Yes |
| roles.n | String | 集群的角色。 | No |
| private_ips.n.node_id | String | 节点 ID。 | No |
| private_ips.n.private_ip | String | 节点对应的私有 IP。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。  |

## 示例 

### 请求示例

```shell
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

### 响应示例

```json
{
  "action":"ChangeClusterVxnetResponse",
  "ret_code":0,
  "cluster_id":"cl-q1witcdk",
  "vxnet_id":"vxnet-vzvzkno",
  "job_id":"j-72j4zto5q7x"
}

```
