---
title: "ExchangeClusterReservedIps"
description: 本小节主要介绍 ClickHouse 交换预留 IP 接口。 
keywords: ClickHouse 交换预留 IP, ExchangeClusterReservedIps
weight: 136
collapsible: false
draft: false
---

与指定集群交换 预留IP。

> **注意**
> 
> 该操作需要在迁移集群之间进行，同时需要在线迁移期间执行该操作才能成功。
> 
> 非在线迁移集群的远端集群不可交换预留 IP。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| remote_cluster | String | 交换预留 IP 的集群 ID。<li>取值示例 `cl-9np7ig3g`  | Yes      |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- |
| cluster_id        | String  | 当前集群 ID。                                   |
| remote_cluster_id | String | 目标集群 ID。 |
| action   | String | 响应动作。 |
| job_id     | String  | 执行任务的 Job ID。                        |
| service    | String  | 执行任务对应的服务。                           |
| ret_code   | Integer | 执行成功与否。取值 `0` 表示成功，其他值则为错误代码。     |

## 示例

### 请求示例

```shell
https://api.qingcloud.com/iaas/?&action=ExchangeClusterReservedIps
&cluster=cl-ouhutv70
&remote_cluster=cl-9np7ig3g
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'action': u'ExchangeClusterReservedIpsResponse',
 u'remote_cluster_id': u'cl-9np7ig3g',
 u'cluster_id': u'cl-ouhutv70', 
 u'job_id': u'j-eod2aq9ygxz', 
 u'ret_code': 0}"
```
