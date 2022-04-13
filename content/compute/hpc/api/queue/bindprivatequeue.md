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

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                                       |
| name                                                       | string                                                     | true     | 专属队列的名称                                               |
| paid_type                                                  | string                                                     | true     | 设置专属队列的支付类型<ul><li>PayForUsed：按需付费</li><li>Reserved：包年包月</li></ul> |
| duration                                                   | int                                                        | true     | 包年包月时长选择，付费类型选择包年包月时需要传参，按需计费不需要，月为单位。<ul><li>1  （1个月）</li><li>3  （3个月）</li><li>6  （6个月）</li><li>12 （12个月）</li><li>36 （3年）</li><li>70 （5年）</li></ul> |
| is_auto_renewal                                            | int                                                        | true     | 是否自动续费选项，付费类型选择包年包月时需要传参，按需计费不需要<ul><li>1 到期自动续费</li><li>0 不自动续费</li></ul> |
| type_id                                                    | string                                                     | true     | 专属队列类型的 id                                            |
| zone                                                       | string                                                     | true     | zone id                                                      |
| cluster_id                                                 | string                                                     | false    | 专属队列所属的集群 id                                        |
| duration                                                   | int                                                        | false    | 设置排队时长                                                 |
| is_auto_renewal                                            | int                                                        | false    | 如果 `paid_type` 为 `reserved`，设置队列需要自动更新         |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | -------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcQueueBindPrivateQueueResponse |
| queue_id                                                   | string                                                     | 队列 id                                   | hpcq-hwrn0agz                    |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                                |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/bindPrivateQueue
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-gk3wfc7e',
                     'name': 'kk',
                     'type_id': 'hpcqt-hh8pyqkl',
                     'paid_type': 'PayForUsed',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcQueueBindPrivateQueueResponse"
	queue_id: "hpcq-hwrn0agz"
	ret_code: 0
}
```
