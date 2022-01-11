---
title: "AssociateEipToClusterNode"
description: 本小节主要介绍 ClickHouse 集群绑定公网 IP 接口。 
keyword: ClickHouse 绑定公网 IP，绑定公网 IP 接口
weight: 130
collapsible: false
draft: false
---



为集群节点绑定一个公网 IP。绑定公网 IP 需要应用本身支持，即应用的 mustache 配置文件中角色的 `advanced_actions` 定义了 `associate_eip`。

可以通过 API [DescribeAppVersions](../describe_app_versions/) 来查看应用的配置文件是否包含此配置，也可以通过 API [DescribeClusters](../describe_clusters/) 来查看集群的角色是否支持此操作。

> **注意**
> 
> 绑定公网 IP 会给集群绑定默认的防火墙。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| eip | String | 公网 I P的 ID。 | Yes |
| cluster_node | String | 集群节点 ID。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```
https://api.qingcloud.com/iaas/?action=AssociateEipToClusterNode
&cluster_node=cln-jmrv7xfv
&eip=eip-ek3scgap
&zone=test
&COMMON_PARAMS
```

### 响应示例

```json
{
  "action":"AssociateEipToClusterNodeResponse",
  "job_id":"j-olda0tqkyyc",
  "ret_code":0
}
```
