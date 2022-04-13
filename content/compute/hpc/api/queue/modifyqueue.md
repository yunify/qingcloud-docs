---
title: "modifyQueue"
description: 本小节主要介绍修改 EHPC 集群队列。 
keyword: ehpc, 修改 EHPC 集群队列
weight: 60
collapsible: false
draft: false
---

修改 EHPC 集群队列信息，目前可修改名称。

## Action

/queue/ehpc/modifyQueue

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :------------------------ |
| timestamp                                                  | date-time                                                  | true     | 时间戳                    |
| cluster_id                                                 | string                                                     | true     | 集群id                    |
| hpcqueue_id                                                | string                                                     | true     | hpc 队列 id               |
| zone                                                       | string                                                     | true     | zone id                   |
| name                                                       | string                                                     | false    | ehpc队列名                |
| user_group                                                 | string                                                     | false    | ehpc队列用户组            |
| deny_accounts                                              | string                                                     | false    | 解决计数，默认 NO         |
| max_time                                                   | string                                                     | false    | 任务最大时间默认 INFINITE |
| allow_accounts                                             | string                                                     | false    | 允许计数，默认所有        |
| default_queue                                              | int                                                        | false    | 缺省队列                  |
| min_node                                                   | int                                                        | false    | 最小计算节点个数默认 1    |
| status                                                     | int                                                        | false    | 状态                      |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                        |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | ------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueModifyEhpcQueueResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                               |
| hpcqueue_id                                                | string                                                     | 队列 id                                   | ehpcq-z0pdsjch                  |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/ehpc/modifyQueue
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'hpcqueue_id': 'ehpcq-z0pdsjch',
                     'name': 'isabel',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcQueueModifyEhpcQueueResponse"
	hpcqueue_id: "ehpcq-z0pdsjch"
	ret_code: 0
}
```
