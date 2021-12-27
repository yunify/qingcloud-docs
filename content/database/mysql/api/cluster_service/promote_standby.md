---
title: "promote_standby"
description: 本小节主要介绍 MySQL Plus 提升灾备接口。 
keyword: mysql plus 提升灾备,promote_standby
weight: 42
collapsible: false
draft: false
---

启动灾备后，可通过提升灾备，停止数据的同步，并恢复集群。

- 提升灾备后，**灾备集群**将不再从**源集群**同步数据。

- 提升灾备后，**灾备集群**集群高可用主从切换、重启和配置参数功能自动生效或恢复。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">Required</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 ：`cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `promote_standby`，表示执行提升灾备服务。 | Yes      |

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
&service=promote_standby
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-hhz75a3pijw',
 u'service': u'promote_standby',
 u'ret_code': 0,
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
