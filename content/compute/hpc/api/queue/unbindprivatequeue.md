---
title: "unbindPrivateQueue"
description: 本小节主要介绍弹性高性能 EHPC 的集群列表。 
keyword: EHPC,集群列表
weight: 40
collapsible: false
draft: false
---

解绑 HPC 集群已绑定的专属队列。若专属队列付费类型为包年包月，若未到整月，则会退还相应费用。

## Action

/queue/unbindPrivateQueue

## 请求方式

POST

## 请求参数

| 参数      | 类型      | 是否必要 | 描述                      |
| :-------- | :-------- | :------- | :------------------------ |
| timestamp | date-time | true     | 时间戳                    |
| ids       | array     | true     | 需要接触绑定的专属队列 id |
| zone      | string    | true     | zone id                   |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                           |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :--------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueUnbindPrivateQueueResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                  |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/unbindPrivateQueue
&COMMON_PARAMS
requests_body = {'cluster_id': ['ehpc-gk3wfc7e'],
                     'ids': ['hpcq-xoruchni'],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcQueueBindPrivateQueueResponse"
	ret_code: 0
}
```
