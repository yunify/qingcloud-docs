---
title: "rebuildme"
description: 本小节主要介绍 MySQL Plus 重建节点接口。 
keyword: mysql plus 重建节点,rebuildme
weight: 11
collapsible: false
draft: false
---

重建集群节点。

> **注意**
> 
> 仅支持重建只读实例节点。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li><li>取值 `readinstance`表示只读实例节点。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `rebuildme`，表示重建集群服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"node_id":"cln-peanv086"} <br>- `node_id` 表示集群节点 ID。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| service    | String  | 执行任务对应的服务。                           |
| role       | String  | 节点对应的角色。                               |
| cluster_id | String  | 集群 ID。                                      |
| action     | String  | 响应动作。                                     |
| job_id     | String  | 执行任务的 Job ID。                            |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=RunClusterCustomService
&cluster=cl-ouhutv70
&role=readinstance
&service=rebuildme
&service_params=%7B%22node_id%22%3A%22cln-peanv086%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-1gz8cx6v0r8',
 u'service': u'rebuildme',
 u'ret_code': 0,
 u'role': u'readinstance',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
