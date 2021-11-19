---
title: "UpdateClusterEnvironment"
description: 本小节主要介绍 ChronusDB 更新节点环境变量接口。 
keywords: ChronusDB 修改节点环境变量，更新节点环境变量
weight: 120
collapsible: false
draft: false
---

修改集群或集群某类角色节点的环境变量。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群 ID。 | Yes |
| role | String | 将要修改的角色。如集群未配置角色，可留空。 | No |
| env | String | JSON 格式的环境变量。例如 `{"key": "value"}` | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| cluster_id | String | 集群的 ID。|
| role | String | 修改变量的角色。 |
| updated_env | Dict | JSON 格式的修改结果。|
| job_id | String | 执行任务的 Job ID。格式为`{"cln-ssdfawx":"j-kdlsafda"}` 。|
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

**Example**

以应用[Redis Cluster](https://appcenter.qingcloud.com/apps/app-jwq1fzqo/Tomcat%20Cluster%20on%20QingCloud)为例，修改 `max-maxmemory` 和 `hash-max-ziplist-entries`

```url
https://api.qingcloud.com/iaas/?action=UpdateClusterEnvironment
&cluster=cl-2gi2b3oc
&env=%7B%22maxmemory-percent%22%3A60%2C%22hash-max-ziplist-entries%22%3A1024%7D
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "job_id":"j-e6jdaxk1tat",
  "ret_code":0,
  "updated_env":[
    {
      "role":"master",
      "env":{
        "hash-max-ziplist-entries":1024,
        "maxmemory-percent":60
      }
    }
  ],
  "cluster_id":"cl-2gi2b3oc",
  "action":"UpdateClusterEnvironmentResponse",
  "role":"master"
}”
```
