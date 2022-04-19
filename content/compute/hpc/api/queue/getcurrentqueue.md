---
title: "getCurrentQueue"
description: 本小节主要介绍 HPC 队列列表接口。 
keyword: hpc 队列列表
weight: 20
collapsible: false
draft: false
---

获取当前集群队列会显示队列相关信息，集群默认两个专属队列，是创建集群就存在的。

## Action

/queue/getCurrentQueue

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 使用当前api时间戳                                            |
| zone_id                                                    | string                                                     | true     | 所属区域id                                                   |
| cluster_id                                                 | string                                                     | true     | 专属队列所属的集群id                                         |
| belong                                                     | int                                                        | false    | 队列的所属类型 0：shared；1：private； -1：all ；default：all |
| limit                                                      | string                                                     | false    | 页面显示数据个数，默认10，最大100                            |
| offset                                                     | int                                                        | false    | 集合偏移量                                                   |
| reverse                                                    | int                                                        | false    | 是否按照排序反转进行排序                                     |
| search_word                                                | string                                                     | false    | 模糊查询 支持 可是：[resource_id，name]                      |
| sort_key                                                   | string                                                     | false    | 按排序键排序                                                 |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | 类型   | 描述                                               | 取值样例                        |
| :--------------------------------------------------------- | :----- | -------------------------------------------------- | :------------------------------ |
| action                                                     | string | api 响应动作名称                                   | HpcQueueGetCurrentQueueResponse |
| total_count                                                | int    | 当前队列总个数                                     | 2                               |
| ret_code                                                   | int    | 执行成功与否<br />成功为 0<br />其他值则为错误代码 | 0                               |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | 类型   | 描述                                                         | 取值样例             |
| :--------------------------------------------------------- | :----- | ------------------------------------------------------------ | :------------------- |
| queue_set                                                  | list   | 队列详细信息                                                 | -                    |
| paid_type                                                  | string | 队列费用支付类型                                             | PayForUsed           |
| upate_time                                                 | string | 队列更新时间                                                 | 2020-06-22T06:23:00Z |
| rent_start_time                                            | string | 队列租金开始计费时间                                         | null                 |
| name                                                       | string | 队列名称                                                     | medium               |
| type_id                                                    | string | 队列类型 id                                                  | hpcqt-k2i40mpi       |
| rent_end_time                                              | string | 队列租金结束时间                                             | null                 |
| pice                                                       | string | 价格                                                         | 0                    |
| belong                                                     | int    | 队列的所属类型 <br />可能值<ul><li>0：shared</li><li>1：private</li><li>-1：all</li><li>default：all</li></ul> | 0                    |
| ia_auto_renewal                                            | int    | 是否自动更新                                                 | 0                    |
| hpcqueue_id                                                | string | hpc 队列 id                                                  | hpcq-13ghjh34dr      |
| create_time                                                | string | 队列创建时间                                                 | 2020-09-17T06:23:00Z |
| cluster_id                                                 | string | 队列所属集群 id                                              | null                 |
| user_group                                                 | string | 队列所属用户组                                               | null                 |
| duration                                                   | int    | 持续时间                                                     | 0                    |
| user_id                                                    | string | 用户 id                                                      | null                 |
| schedule_queue_name                                        | string | 调度器队列名称                                               | medium               |
| is_bind                                                    | int    | 队列是否绑定                                                 | 0                    |
| categories                                                 | string | 队列类别，可能值：<ul><li>share_queue 共享队列</li><li>private_queue 专属队列</li></ul> | share_queue          |
| spce_detail                                                | list   | 规范细节                                                     |                      |
| unit_gpu_num                                               | int    | 单位 gpu 数量                                                | 0                    |
| unit_men_size                                              | int    | 单位成员大小                                                 | 65                   |
| name                                                       | string | 名称，可能值：<ul><li>共享队列</li><li>专属队列</li></ul>    | 共享队列             |
| cpu_num                                                    | int    | cpu 数量                                                     | 380                  |
| mem_size                                                   | int    | 成员大小                                                     | 905                  |
| gpu_num                                                    | int    | gpu 数量                                                     | 0                    |
| hcpqueue_type_id                                           | string | hpc 队列类型 id                                              | hpcqt-k2i40mpi       |
| node_list                                                  | string | 节点列表                                                     | null                 |
| create_time                                                | string | 创建时间                                                     | 2020-11-12T20:01:04Z |
| node_num                                                   | int    | 节点数量                                                     | 5                    |
| unit_cpu_num                                               | int    | 单位 cpu 数量                                                | 0                    |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/getCurrentQueue
&cluster_id=hpc-n2yopbte
&COMMON_PARAMS
```

### 响应示例

```json
{
  action: "HpcQueueGetCurrentQueueResponse"
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
