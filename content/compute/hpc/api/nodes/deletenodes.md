---
title: "deleteNodes"
description: 本小节主要介绍弹性高性能计算 EHPC 的删除集群节点接口。 
keyword: ehpc,删除集群节点
weight: 40
collapsible: false
draft: false
---

删除集群节点，集群每个节点类型至少保留一个节点。

## Action

/cluster/deleteNodes

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述              |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :---------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳            |
| cluster_id                                                 | string                                                     | true     | hpc 集群的集群 id |
| zone                                                       | string                                                     | true     | 所属区域 id       |
| node_list                                                  | list                                                       | true     | 节点 id 列表      |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                             |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :---------------------------------------- | ------------------------------------ |
| action                                                     | string                                                     | 响应动作                                  | HpcClusterDeleteClusterNodesResponse |
| job_ids                                                    | string                                                     | job id                                    | j-60tfxp7txad                        |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                    |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/deleteNodes
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'node_ids': ['cln-hzzvbtnh'],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcClusterDeleteClusterNodesResponse"
	job_id: "j-60tfxp7txad"
	ret_code: 0
}
```
