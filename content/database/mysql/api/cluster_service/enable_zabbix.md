---
title: "start_zabbix"
description: 本小节主要介绍 MySQL Plus 开启 Zabbix 监控服务接口。 
keyword: mysql plus 开启 zabbix 监控服务,start_zabbix，zabbix 监控
weight: 60
collapsible: false
draft: false
---

为了实现多维监控数据库，MySQL Plus 支持启用 Zabbix Agent 服务提供监控服务。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `start_zabbix`，表示启动 Zabbix 监控服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"zabbix_agent_port":10050,"zabbix_server_ip":"192.168.0.1"} <br>- `zabbix_agent_port` 表示 Zabbix 客户端端口号。默认为 10050，取值范围 8802～65534。<br>- `zabbix_server_ip` 表示Zabbix 客户端 IP 地址。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

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
&service=start_zabbix
&service_params=%7B%22zabbix_agent_port%22%3A10050%2C%22zabbix_server_ip%22%3A%22192.168.0.1%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-ae6221n88ii', 
 u'service': u'start_zabbix',
 u'ret_code': 0,
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse', 
 u'cluster_id': u'cl-ouhutv70'}"
```
