---
title: "DescribeQueue"
description: 
draft: false
weight: 5
---

### 集群队列详情

通过`describe-queue`接口可以获取当前集群队列详情。

### **接口说明**

如有多个队列可以选择需要查看的队列进行查看。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster_id     | string | true        | 当前集群id              |
| id             | string | true        | 队列专属id              |
| timestamp      | string | true        | 进行当前api操作的时间戳 |
| zone           | string | true        | 所属区域id              |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| ret_code | int | 0 | 操作是否执行成功<br>0：执行成功</br><br>5000：执行错误，会返回一个错误提示。 |

**Response Item**

| Name             | Type   | Sample value        | Description                                                  |
| ---------------- | ------ | ------------------- | ------------------------------------------------------------ |
| spec_detail      | list   |                     | spec 详情                                                    |
| console_id       | string |                     | 控制台id                                                     |
| controller       | string | self                | 控制器说明当前队列是由哪个控制器控制self 自己                |
| cpu_num          | int    | 380                 | cpu编号由系统自动分配                                        |
| create_time      | string | 2020-11-23T09:08:07 | 队列创建时间                                                 |
| gpu_num          | int    | 0                   | gpu编号                                                      |
| hpcqueue_type_id | string | hpcqt-k2i40mpi      | hpc队列类型id                                                |
| mem_size         | int    | 905                 | 内存大小                                                     |
| name             | string | 共享队列            | 名称可能值共享队列专属队列                                   |
| node_list        | list   | null                | 队列节点列表如果当前查看队列拥有节点就以列表形式显示如当前队列无节点就返回null |
| node_num         | int    | 5                   | 队列节规格                                                   |
| owner            | string |                     | 队列所属者                                                   |
| phy_hpc_type     | int    | 0                   | 物理hpc类型                                                  |
| root_user_id     | string |                     | 根用户id                                                     |
| unit_cpu_num     | int    | 65                  | 单位cpu数量                                                  |
| unit_gpu_num     | int    | 0                   | 单位gpu数量                                                  |
| unit_mem_size    | int    | 181                 | 单位成员大小                                                 |
| total_gpus       | int    | 0                   | gpu个数                                                      |
| total_mems       | int    | 750                 | 内存总计                                                     |
| total_slots      | int    | 224                 | 插槽总数                                                     |
| type_id          | string | hpcqt_k2i40mpi      | 类型id                                                       |
| update_time      | string | 2020-11-23T10:16:23 | 更新时间                                                     |
| user_group       | string | null                | 用户组                                                       |
| user_id          | string | null                | 用户id                                                       |
| detail           | list   |                     | 队列细节列表                                                 |
| avail_gpus       | int    | 0                   | 使用gpu的编号                                                |
| avail_mems       | int    | 618                 | 使用成员的名称                                               |
| avail_slots      | int    | 136                 | 可用插槽                                                     |
| belong           | int    | 0                   | 队列的所属类型 可能值<br>0：shared</br><br>1：private</br><br>-1：all </br><br>default：all</br> |
| categories       | string | share_queue         | 队列类别可能值share_queue<br>private_queue</br>              |
| cluster_id       | string | null                | 所属集群id                                                   |
| console_id       | string |                     | 所属控制台id                                                 |
| controller       | string | self                | 控制器                                                       |
| create_time      | string | 2020-11-23T09:08:07 | 队列创建时间                                                 |
| duration         | int    | 0                   | duration                                                     |
| free_slots       | int    | 244                 | 免费插槽                                                     |
| hpcqueue_id      | string | hpcq_df3u98dr       | hpc队列id所查看的队列id                                      |
| hpq_id           | string |                     | hpcid                                                        |
| ia_auto_renewal  | int    | 0                   | 是否自动续订可能值<br>0 不自动续订</br><br>1  到期自动续订</br> |
| is_bind          | int    | 0                   | 是否绑定可能值<br>0 未绑定</br><br>1 绑定</br>               |
| name             | string | 2222333vis22        | 队列名称                                                     |
| njobs            | int    | 74                  | 作业                                                         |
| npend            | int    | 0                   | 待定                                                         |
| nrun             | int    | 0                   | 运行                                                         |
| nstop            | int    | 0                   | 停止                                                         |
| owner            | string |                     | 队列所属者                                                   |
| paid_type        | string | PayForUsed          | 队列支付类型                                                 |
| price            | int    | 0                   | 队列价格                                                     |
| rent_end_time    | string | null                | 队列租金结束时间                                             |
| rent_start_time  | string | null                | 队列租金开始时间                                             |
| root_user_id     | string |                     | 根用户id                                                     |

**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/queue/describeQueue

```

_Example Response_:

```
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

**错误码**

| ret_code | name                            | error info                                    |
| -------- | ------------------------------- | --------------------------------------------- |
| 5000     | `ERR_MSG_DESCRIBE_QUEUE_FAILED` | describe queue faild<br>获取队列详情失败</br> |

