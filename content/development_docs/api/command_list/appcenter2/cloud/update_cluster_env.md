---
title: "UpdateClusterEnvironment"
description: 
draft: false
---

修改集群或集群某类角色节点的环境变量。集群的环境变量可以通过 查看。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群ID | Yes |
| role | String | 将要修改的角色，如集群未配置角色，可留空 | No |
| env | String | JSON格式的环境变量，例如 `{"key": "value"}` | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cluster_id | String | 集群的ID |
| role | String | 修改变量的角色 |
| updated_env | Dict | JSON格式的修改结果，参见下面示例 |
| job_id | String | 执行任务的 Job ID，格式为`{"cln-ssdfawx":"j-kdlsafda"}` |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[Redis Cluster](https://appcenter.qingcloud.com/apps/app-jwq1fzqo/Tomcat%20Cluster%20on%20QingCloud)为例，修改 `max-maxmemory` 和 `hash-max-ziplist-entries`

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=UpdateClusterEnvironment
&cluster=cl-2gi2b3oc
&env=%7B%22maxmemory-percent%22%3A60%2C%22hash-max-ziplist-entries%22%3A1024%7D
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
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
}

```


