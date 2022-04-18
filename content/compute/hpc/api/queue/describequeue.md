---
title: "describeQueue"
description: 本小节主要介绍查看队列详情。 
keyword: 查看队列详情
weight: 10
collapsible: false
draft: false
---

如有多个队列可以选择需要查看的队列进行查看。

## Action

/queue/describeQueue

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :------------------------ |
| timestamp                                                  | date-time                                                  | true     | 进行当前 api 操作的时间戳 |
| cluster_id                                                 | string                                                     | true     | 需要查看的队列所属集群 id |
| id                                                         | string                                                     | true     | 队列专属 id               |
| zone                                                       | string                                                     | true     | 所属区域 id               |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :---------------------------- |
| action                                                     | string                                                     | api 响应动作名称                                             | HpcQueueDescribeQueueResponse |
| ret_code                                                   | int                                                        | 操作是否执行成功可能值<ul><li>0：操作执行成功</li><li>5000：执行错误，会返回一个错误提示</li></ul> | 0                             |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | 类型   | 描述                                                         | 取值样例            |
| :--------------------------------------------------------- | :----- | ------------------------------------------------------------ | ------------------- |
| spec_detail                                                | list   | spec 详情                                                    | -                   |
| console_id                                                 | string | 控制台 id                                                    | -                   |
| controller                                                 | string | 控制器<br />说明当前队列是由哪个控制器控制<br />self 自己    | self                |
| cpu_num                                                    | int    | cpu 编号，由系统自动分配                                     | 380                 |
| create_time                                                | string | 队列创建时间                                                 | 2020-11-23T09:08:07 |
| gpu_num                                                    | int    | gpu 编号                                                     | 0                   |
| hpcqueue_type_id                                           | string | hpc 队列类型 id                                              | hpcqt-k2i40mpi      |
| mem_size                                                   | int    | 内存大小                                                     | 905                 |
| name                                                       | string | 名称<br />可能值<ul><li>共享队列</li><li>专属队列</li></ul>  | 共享队列            |
| node_list                                                  | list   | 队列节点列表<br />如果当前查看队列拥有节点就以列表形式显示<br />如当前队列无节点就返回 null | null                |
| node_num                                                   | int    | 队列节规格                                                   | 5                   |
| owner                                                      | string | 队列所属者                                                   |                     |
| phy_hpc_type                                               | int    | 物理 hpc 类型                                                | 0                   |
| root_user_id                                               | string | 根用户 id                                                    |                     |
| unit_cpu_num                                               | int    | 单位 cpu 数量                                                | 65                  |
| unit_gpu_num                                               | int    | 单位 gpu 数量                                                | 0                   |
| unit_mem_size                                              | int    | 单位成员大小                                                 | 181                 |
| total_gpus                                                 | int    | gpu 个数                                                     | 0                   |
| total_mems                                                 | int    | 内存总计                                                     | 750                 |
| total_slots                                                | int    | 插槽总数                                                     | 224                 |
| type_id                                                    | string | 类型 id                                                      | hpcqt_k2i40mpi      |
| update_time                                                | string | 更新时间                                                     | 2020-11-23T10:16:23 |
| user_group                                                 | string | 用户组                                                       | null                |
| user_id                                                    | string | 用户 id                                                      | null                |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/queue/describeQueue
&cluster_id=ehpc-cch2t15o
&id=ehpcq-rdvf195w
&COMMON_PARAMS
```

### 响应示例

```json
action: "HpcQueueDescribeQueueResponse"
detail:[
	{ avail_gpus: 0
	avail_mems: 4
	avail_slots: 2
	belong: ""
	categories: "share_queue"
	cluster_id: "ehpc-cch2t15o"
	compute_num: 1
	controller: "self"
	create_time: "2021-08-19T15:25:58"
	duration: ""
	free_slots: ""
	hpcqueue_id: "ehpcq-rdvf195w"
	is_auto_renewal: ""
	is_bind: ""
	name: "共享队列"
	njobs: 0
	npend: 0
	nrun: 0
	nstop: 0
	paid_type: ""
	price: 0
	rent_end_time: ""
	rent_start_time: ""
	scheduler_queue_name: "共享队列"
	spec_detail: {
	console_id: ""
	controller: "self"
	cpu_num: 2
	create_time: "2021-08-19T15:25:58"
	gpu_num: 0
	hpcqueue_type_id: ""
	mem_size: 4
	name: "共享队列"}
	node_list: [1]
	node_num: 1
	owner: "usr-vceaHsJu"
	"root_user_id: ": ""
	unit_cpu_num: 0
	unit_gpu_num: 0
	unit_mem_size: 0
	total_gpus: 0
	total_mems: 4
	total_slots: 2
	type_id: ""
	update_time: "2021-08-19T15:25:58"
	user_group: ""
	user_id: "usr-vceaHsJu"}]
ret_code: 0}
```
