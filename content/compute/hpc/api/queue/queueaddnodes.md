---
title: "queueaddNodes"
description: 本小节主要介绍移动计算节点到ehpc队列。 
keyword: ehpc,移动计算节点到ehpc队列
weight: 80
collapsible: false
draft: false
---

移动计算节点到 EHPC 队列。

## Action

/queue/ehpc/addNodes

## 请求方式

POST

## 请求参数

| 参数       | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述              |
| :--------- | :--------------------------------------------------------- | :------- | :---------------- |
| timestamp  | date-time                                                  | true     | 时间戳            |
| cluster_id | string                                                     | true     | 集群 id           |
| hpqueue_id | string                                                     | true     | 需要移动的队列 id |
| nodelist   | array                                                      | true     | 移动的计算节点 id |
| zone       | string                                                     | true     | zone id           |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :-------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueAddEhpcQueueNodesResponse |
| job_id                                                     | string                                                     | 执行操作的 job id                         | j-xxxxx                           |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                 |

## 示例

### 请求示例

```url
https://hpc-api.qingcloud.com/api/queue/ehpc/addNodes
```

### 响应示例

```json
{
	action: "HpcQueueAddEhpcQueueNodesResponse"
	job_id: "j-p3lr5cg8zcy"
	ret_code: 0
}
```
