---
title: "GetCurrentQueue"
description: 
draft: false
weight: 35
---

### 获取当前集群队列信息

调用get-current-queue将获取到当前集群所拥有的所有队列列表。

### **接口说明**

获取当前集群队列会显示队列相关信息，集群默认两个专属队列，是创建集群就存在的。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| belong         | int    | false       | 队列的所属类型 0：shared；1：private； -1：all ；default：all |
| cluster_id     | string | true        | 专属队列所属的集群id                                         |
| limit          | string | false       | 集合限制                                                     |
| offset         | int    | false       | 集合偏移量                                                   |
| reverse        | int    | false       | 是否按照排序反转进行排序                                     |
| search_word    | string | false       | 模糊查询 支持 可是：[resource_id，name]                      |
| sort_key       | string | false       | 按排序键排序                                                 |
| timestamp      | string | true        | 使用当前api时间戳                                            |
| zone_id        | string | true        | 所属区域id                                                   |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| total_count | int | 2 | 当前队列总个数 |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Response Item**

| Name                | Type   | Sample value         | Description                                                 |
| ------------------- | ------ | -------------------- | ----------------------------------------------------------- |
| queue_set           | list   |                      | 队列详细信息                                                |
| paid_type           | string | PayForUsed           | 队列费用支付类型                                            |
| upate_time          | string | 2020-06-22T06:23:00Z | 队列更新时间                                                |
| rent_start_time     | string | null                 | 队列租金开始计费时间                                        |
| name                | string | medium               | 队列名称                                                    |
| type_id             | string | hpcqt-k2i40mpi       | 队列类型id                                                  |
| rent_end_time       | string | null                 | 队列租金结束时间                                            |
| pice                | string | 0                    | 价格                                                        |
| belong              | int    | 0                    | 队列的所属类型 可能值0：shared1：private-1：alldefault：all |
| ia_auto_renewal     | int    | 0                    | 是否自动更新                                                |
| hpcqueue_id         | string | hpcq-13ghjh34dr      | hpc队列id                                                   |
| create_time         | string | 2020-09-17T06:23:00Z | 队列创建时间                                                |
| cluster_id          | string | null                 | 队列所属集群id                                              |
| user_group          | string | null                 | 队列所属用户组                                              |
| duration            | int    | 0                    | 持续时间                                                    |
| user_id             | string | null                 | 用户id                                                      |
| schedule_queue_name | string | medium               | 调度器队列名称                                              |
| is_bind             | int    | 0                    | 队列是否绑定                                                |
| categories          | string | share_queue          | 队列类别可能值share_queue 共享队列private_queue 专属队列    |
| spce_detail         | list   |                      | 规范细节                                                    |
| unit_gpu_num        | int    | 0                    | 单位gpu数量                                                 |
| unit_men_size       | int    | 65                   | 单位成员大小                                                |
| name                | string | 共享队列             | 名称可能值共享队列专属队列                                  |
| cpu_num             | int    | 380                  | cpu数量                                                     |
| mem_size            | int    | 905                  | 成员大小                                                    |
| gpu_num             | int    | 0                    | gpu数量                                                     |
| hcpqueue_type_id    | string | hpcqt-k2i40mpi       | hpc队列类型id                                               |
| node_list           | string | null                 | 节点列表                                                    |
| craete_time         | string | 2020-11-12T20:01:04Z | 创建时间                                                    |
| node_num            | int    | 5                    | 节点数量                                                    |
| unit_cpu_num        | int    | 0                    | 单位cpu数量                                                 |

**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/queue/getCurrentQueue
```

_Example Response_:

```
{action: "HpcQueueGetCurrentQueueResponse"

queues_set: [{

belong: 0

categories: "share_queue"

cluster_id: null

create_time: "2020-09-17T06:23:00Z"

duration: 0

hpcqueue_id: "hpcq-13ghjh34dr"

is_auto_renewal: 0

is_bind: 0

name: "medium"

paid_type: "PayForUsed"

price: 0

rent_end_time: null

rent_start_time: null

scheduler_queue_name: "medium"

spec_detail: {

cpu_num: 380

create_time: "2020-11-12T20:01:04"

gpu_num: 0

hpcqueue_type_id: "hpcqt-k2i40mpi"

mem_size: 905

name: "共享队列"

node_list: null

node_num: 5

unit_cpu_num: 65

unit_gpu_num: 0

unit_mem_size: 181}

type_id: "hpcqt-k2i40mpi"

update_time: "2020-06-22T06:23:00Z"

user_group: null

user_id: null}]

ret_code: 0}
```

**错误码**

| ret_code | name                             | error info                                                   |
| -------- | -------------------------------- | ------------------------------------------------------------ |
| 5000     | ERR_MSG_GET_CURRENT_QUEUE_FAILED | get current private queue failed<br>获取当前用户有效专属队列失败</br> |

