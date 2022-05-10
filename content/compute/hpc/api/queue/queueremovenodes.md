---
title: "queueremoveNodes"
description: 本小节主要介绍移除当前队列所添加的计算节点接口。 
keyword: ehpc,移除节点
weight: 90
collapsible: false
draft: false
---

移除当前队列所添加的计算节点，但是需要保证当前所有队列中至少有一个队列有计算节点。

## Action

/queue/ehpc/removeNodes

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :---------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                        |
| cluster_id                                                 | string                                                     | true     | 需要移除节点队列所在的集群 id |
| hpcqueue_id                                                | string                                                     | true     | 需要移除节点的队列 id         |
| nodelist                                                   | array                                                      | true     | 需要移除节点的 id             |
| zone                                                       | string                                                     | true     | zone id                       |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                            |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | ----------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueRmoveEhpcQueueNodesResponse |
| job_id                                                     | string                                                     | 执行操作的 job_id                         | j-xxxx                              |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                   |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/ehpc/removeNodes
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-gk3wfc7e',
                     'hpcqueue_id': 'ehpcq-m7qglynz',
                     'nodelist': [2],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcQueueRemoveEhpcQueueNodesResponse"
	job_id: "j-8ajjp28fps8"
	ret_code: 0
} 
```
