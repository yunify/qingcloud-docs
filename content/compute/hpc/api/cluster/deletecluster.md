---
title: "deleteCluster"
description: 本小节主要介绍弹性高性能计算 EHPC 的删除集群接口。 
keyword: ehpc,删除集群
weight: 40
collapsible: false
draft: false
---

删除 HPC、EHPC 集群。

> **注意**
>
> 集群中若有正在执行的操作，则不允许删除集群。

## Action

/cluster/deleteCluster

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                                       |
| cluster_id                                                 | array                                                      | true     | 所要删除集群的集群id<ul><li>  hpc-xxxx</li><li>ehpc-xxxx</li></ul> |
| run_user                                                   | string                                                     | true     | 集群的运行用户：usr-xxxx                                     |
| zone                                                       | string                                                     | true     | zone id                                                      |
| unlease                                                    | string                                                     | false    | unlease                                                      |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                       | 取值样例                 |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------- | ------------------------ |
| action                                                     | string                                                     | 响应动作                                   | HpcDeleteClusterResponse |
| hpc_cluster_id                                             | list                                                       | 所删除集群的 id                            | hpc-6o2qc9tl             |
| job_id                                                     | string                                                     | job id                                     | j-9eshjdv2u              |
| ret_code                                                   | int                                                        | 执行成功与否，成功为 0，其他值则为错误代码 | 0                        |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/deleteCluster
&COMMON_PARAMS
quests_body = {'cluster_ids': ['hpc-6o2qc9tl'],
                     'run_user': 'usr-IuZxPyn2',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
  action: "HpcClusterDeleteClusterResponse"
	hpc_cluster_id: ["hpc-6o2qc9tl"]
	job_id: "j-jxi9h7em8de"
	ret_code: 0
}
```
