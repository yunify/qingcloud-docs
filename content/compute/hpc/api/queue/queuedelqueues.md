---
title: "queuedelQueues"
description: 本小节主要介绍删除ehpc队列。 
keyword: ehpc,删除ehpc队列
weight: 70
collapsible: false
draft: false
---

删除 ehpc 队列，但前提是所删除的队列没有节点。有节点的队列若要删除，需要先移除队列节点后，再删除。

## Action

/queue/ehpc/delQueues

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述              |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :---------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳            |
| cluster_id                                                 | string                                                     | true     | 队列所在集群 id   |
| queue_ids                                                  | array                                                      | true     | 需要删除的队列 id |
| zone                                                       | string                                                     | true     | zone id           |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | ----------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueDelEhpcQueuesResponse |
| job_id                                                     | string                                                     | 执行操作的 job id                         | j-xxxxx                       |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                             |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/ehpc/delQueues
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-gk3wfc7e',
                     'queue_ids': ['ehpcq-vftkh7ro'],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcQueueDelEhpcQueuesResponse"
	job_id: "j-a91jzniihbr"
	ret_code: 0
}
```
