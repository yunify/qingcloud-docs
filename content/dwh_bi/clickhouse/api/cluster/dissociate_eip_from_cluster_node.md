---
title: "DissociateEipFromClusterNode"
description: 本小节主要介绍 ClickHouse 集群节点绑定公网 IP 接口。 
keywords: ClickHouse 节点绑定公网 IP，节点绑定公网 IP 接口
weight: 132
collapsible: false
draft: false
---



为集群节点解绑公网 IP，如果集群中没有节点绑定公网 IP，则集群防火墙会默认删除。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| eips.n | String | 将要解绑的公网 IP 的 ID。可以通过 [DescribeClusterNodes](../describe_cluster_nodes) 获取节点绑定的公网 IP 的 ID。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DissociateEipFromClusterNode
&eips.1=eip-ek3scgap
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "action":"DissociateEipFromClusterNodeResponse",
  "job_id":"j-7vr4wbltzn9",
  "ret_code":0
}”
```
