---
title: "getQueueList"
description: 本小节主要介绍获取队列列表接口 
keyword: ehpc, 获取队列列表
weight: 50
collapsible: false
draft: false
---

获取 EHPC 集群队列列表。

## Action

/queue/ehpc/getQueueList

## 请求方式

POST

## 请求参数

| 参数        | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                              |
| :---------- | :--------------------------------------------------------- | :------- | :-------------------------------- |
| timestamp   | date-time                                                  | true     | 时间戳                            |
| cluster_id  | string                                                     | true     | 集群id                            |
| zone        | string                                                     | true     | zone id                           |
| cluster_id  | string                                                     | true     | 需要查看队列所属的 ehpc 集群 id   |
| is_active   | int                                                        | false    | 队列仅活动                        |
| limit       | int                                                        | false    | 页面显示数据个数，默认10，最大100 |
| offset      | int                                                        | false    | 集合偏移量                        |
| queue_ids   | array                                                      | false    | 队列id列表                        |
| reverse     | int                                                        | false    | 排序                              |
| search_word | string                                                     | false    | 模糊查询支持 name                 |
| sort_key    | string                                                     | false    | 排序键，默认创建时间              |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例 |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | -------- |
| action                                                     | string                                                     | 响应动作                                  | -        |
| total_count                                                | int                                                        | total count                               | 1        |
| ret_code                                                   | int                                                        | 操作是否成功，成功为0，其他值则为错误代码 | 0        |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述         | 取值样例               |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------ | ---------------------- |
| hpc_queue_set                                              | list                                                       | hpc 队列设置 | -                      |
| update_time                                                | string                                                     | 更新时间     | "2022-04-01T00:56:58Z" |
| nodelist                                                   | list                                                       | 节点列表     | -                      |
| name                                                       | string                                                     | 队列名       | “默认队列”             |
| default_queue                                              | int                                                        | 缺省队列     | 1                      |
| transition_status                                          | string                                                     | 过渡状态     | “”                     |
| hpcqueue_id                                                | string                                                     | 队列 id      | "ehpcq-6cyb1096"       |
| node_info                                                  | list                                                       | 节点信息     | -                      |
| create_time                                                | string                                                     | 创建时间     | "2022-04-01T00:56:58Z" |
| cluster_id                                                 | string                                                     | 所属集群 id  | "ehpc-2i6bsme6"        |
| user_group                                                 | string                                                     | 用户组       | “”                     |
| console_id                                                 | string                                                     | 控制台 id    | "nscccloud"            |
| partotion_name                                             | string                                                     | 分区名       | "normal"               |
| user_id                                                    | string                                                     | 用户 id      | "usr-vceaHsJu"         |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/ehpc/getQueueList
&cluster_id=ehpc-qmmvigwe
&COMMON_PARAMS
```

### 响应示例

```json
{
	action: "HpcQueueGetEhpcQueueListResponse"
	hpc_queue_set: [{

	cluster_id: "ehpc-2i6bsme6"
	console_id: "nscccloud"
	create_time: "2022-04-01T00:56:58Z"
	default_queue: 1
	hpcqueue_id: "ehpcq-6cyb1096"
	name: "默认队列"
	node_info: [{status: "active", server_id: 1, name: "计算节点1", hpcqueue_id: "ehpcq-6cyb1096",…}]
	nodelist: [1]
	partition_name: "normal"
	spec_detail: {unit_gpu_num: 0, unit_mem_size: 80, name: "默认队列", cpu_num: 26, mem_size: 80, gpu_num: 0,…}
	transition_status: ""
	update_time: "2022-04-01T00:56:58Z"
	user_group: ""
	user_id: "usr-vceaHsJu"

	}]
	ret_code: 0
	total_count: 1
}
```
