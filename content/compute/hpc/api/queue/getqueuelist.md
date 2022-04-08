---
title: "getQueueList"
description: 本小节主要介绍增加队列。 
keyword: ehpc, 增加队列
weight: 50
collapsible: false
draft: false
---

EHPC 增加队列，添加队列之后需要增加节点到该队列。

## Action

/queue/ehpc/addQueue

## 请求方式

POST

## 请求参数

| 参数           | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                           |
| :------------- | :--------------------------------------------------------- | :------- | :----------------------------- |
| timestamp      | date-time                                                  | true     | 时间戳                         |
| cluster_id     | string                                                     | true     | 集群id                         |
| zone           | string                                                     | true     | zone id                        |
| allow_accounts | string                                                     | false    | 允许计数默认为所有             |
| default_queue  | int                                                        | false    | 缺省队列                       |
| deny_accounts  | int                                                        | false    | 拒绝计数默认为NO               |
| max_time       | string                                                     | false    | 任务的最大时间默认值为INFINITE |
| min_node       | int                                                        | false    | 最小计算节点个数 默认为1       |
| name           | string                                                     | true     | 队列名称                       |
| status         | int                                                        | false    | 状态                           |
| user_group     | string                                                     | false    | ehpc队列的用户组               |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                     |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | ---------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueAddEhpcQueueResponse |
| hpcqueue_id                                                | string                                                     | 队列 id                                   | ehpcq-zok6r5ow               |
| ret_code                                                   | int                                                        | 操作是否成功，成功为0，其他值则为错误代码 | 0                            |

## 示例

### 请求示例

```url
https://hpc-api.qingcloud.com/api/queue/ehpc/addQueue
```

### 响应示例

```json
{
	action: "HpcQueueAddEhpcQueueResponse"
	hpcqueue_id: "ehpcq-zok6r5ow"
	ret_code: 0
}
```
