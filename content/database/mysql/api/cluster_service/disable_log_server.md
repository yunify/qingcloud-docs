---
title: "stop_log_server"
description: 本小节主要介绍 MySQL Plus 关闭日志服务接口。 
keyword: mysql plus 关闭日志服务,stop_log_server
weight: 51
collapsible: false
draft: false
---

当无需 Caddy Server 日志服务时，您可以选择关闭日志服务端，降低数据库安全风险。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `stop_log_server`，表示关闭集群日志服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"clean_log":"NO"} <br>- `clean_log` 表示关闭日志服务时，是否清空日志。取值 `NO` 则不清除；取值 `YES` 则清除。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

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
&role=maininstance
&service=stop_log_server
&service_params=%7B%22clean_log%22%3A%22NO%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-9seoe27qdce',
 u'service': u'stop_log_server',
 u'ret_code': 0,
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
