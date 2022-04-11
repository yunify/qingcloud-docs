---
title: "bindPrivateQueue"
description: 本小节主要介绍弹性高性能计算 EHPC 的HPC绑定专属队列接口。 
keyword: ehpc,HPC绑定专属队列
weight: 30
collapsible: false
draft: false
---

HPC 集群绑定专属队列，队列规格2节点。付费类型可包年包月，也可按需付费。

## Action

/queue/bindPrivateQueue

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :-------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                        |
| name                                                       | string                                                     | true     | 专属队列的名称                                |
| paid_type                                                  | string                                                     | true     | 设置专属队列的支付类型                        |
| type_id                                                    | string                                                     | true     | 专属队列类型的id                              |
| zone                                                       | string                                                     | true     | zone id                                       |
| cluster_id                                                 | string                                                     | false    | 专属队列所属的集群id                          |
| duration                                                   | int                                                        | false    | 设置排队时长                                  |
| is_auto_renewal                                            | int                                                        | false    | 如果paid_type为reserved，设置队列需要自动更新 |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | -------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueBindPrivateQueueResponse |
| queue_id                                                   | string                                                     | 队列 id                                   | hpcq-hwrn0agz                    |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                |

## 示例

### 请求示例

```url
https://hpc-api.qingcloud.com/api/queue/bindPrivateQueue
```

### 响应示例

```json
{
	action: "HpcQueueBindPrivateQueueResponse"
	queue_id: "hpcq-hwrn0agz"
	ret_code: 0
}
```
