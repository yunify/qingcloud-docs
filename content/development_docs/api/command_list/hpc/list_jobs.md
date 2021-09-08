---
title: "ListJobs"
description: 
draft: false
weight: 30
---

### 获取集群作业信息

调用list-jobs可以获取当前集群中的作业列表。

### **接口说明**

获取当前集群中的作业队列接口可以获取到当前集群中正在运行、运行完成的作业。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster_id     | string | true        | 需要获取作业列表的集群id |
| jobs_status    | string | false       | 作业状态                 |
| limit          | int    | false       | 集合限制                 |
| offset         | int    | false       | 集合偏移量               |
| queue_name     | string | false       | 要过滤的队列名称         |
| reverse        | int    | false       | 是否按排序键反转进行排序 |
| run_user       | string | false       | 运行作业的用户           |
| search_word    | string | false       | 搜索关键词               |
| sort_key       | string | false       | 排序键排序               |
| timestamp      | string | true        | 执行当前api的时间戳      |
| zone           | string | true        | 所属区域id               |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| total_count | int | 2 | 作业信息个数<br>在当前集群获取到作业信息，包括运行中运行结束的作业个数总和。</br> |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Response Item**

| Name                 | Type   | Sample value                          | Description                                                  |
| -------------------- | ------ | ------------------------------------- | ------------------------------------------------------------ |
| hpc_job_set          | list   |                                       | 当前集群作业列表                                             |
| categories           | string | share_queue                           | 作业所属队列类型可能值share_queue 共享队列dedicated_queue 专属队列 |
| cmd_line             | string | sleep 10                              | 作业执行命令由用户自行输入                                   |
| core_limit           | int    | 1                                     | 核心限制数                                                   |
| exec_cwd             | string | /public/shanhe/s0723                  | 执行命令路径                                                 |
| hpcjob_uuid          | string | hpcjoc-o0ov1wbb                       | hpc作业uuid                                                  |
| hpcqueue_id          | string | hpcq-df3u98dr                         | hpc队列id                                                    |
| hpq_name             | string | 2222333vis22                          | 作业所属队列名称                                             |
| job_id               | int    | 19948                                 | 作业id                                                       |
| job_name             | string | 作业-elDVm                            | 作业名称                                                     |
| job_node_list        | string |                                       | 作业节点列表                                                 |
| job_priority         | int    | 1                                     | 作业优先级                                                   |
| job_status           | string | finished                              | 作业执行状态可能值finished stoppedrunning                    |
| mem_limit            | string | null                                  | 成员限制                                                     |
| modified_time        | string | 2021-08-19T14:06:41                   | 作业修改时间                                                 |
| name                 | string | 2222333vis22                          | 作业选择的需要运行的队列名称                                 |
| queue_name           | string | 2222333vis22                          | 作业运行的队列名称                                           |
| run_user             | string | usr-vceaHsJu                          | 运行作业用户                                                 |
| scheduler_queue_name | string | vis                                   | 调度器队列名称                                               |
| started_time         | string | 2021-08-19T14:06:41                   | 作业开始时间                                                 |
| stderr_redirect_path | string | [HPC-19453.er](http://hpc-19453.er/)r | stderr重定向路径                                             |
| stdout_redirect_path | string | [HPC-19453.](http://hpc-19453.er/)out | stdout重定向路径                                             |
| submitted_time       | string | 2021-08-19T14:06:21                   | 作业提交时间                                                 |



**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/job/list
```

_Example Response_:

```
action: "HpcJobListJobsResponse"

hpc_job_set: [

{cmd_line: "sleep 1000"

core_limit: 1

exec_cwd: "/public/shanhe/s0723"

hpcjob_uuid: "hpcjob-vka21yhq"

hpcqueue_id: "hpcq-df3u98dr"

hpq_name: "2222333vis22"

job_id: 19453

job_name: "作业-cwOOs"

job_node_list: ""

job_priority: 1

job_status: "running"

mem_limit: null

modified_time: "2021-08-19T14:06:41"

name: "2222333vis22"

queue_name: "2222333vis22"

run_user: "usr-vceaHsJu"

scheduler_queue_name: "vis"

started_time: "2021-08-19T14:06:41"

stderr_redirect_path: "HPC-19453.err"

stdout_redirect_path: "HPC-19453.out"

submitted_time: "2021-08-19T14:06:21"}]

ret_code: 0

total_count: 1}
```

**错误码**

| ret_code | name                         | error info                                  |
| -------- | ---------------------------- | ------------------------------------------- |
| 5000     | ERR_MSG_LIST_HPC_JOBS_FAILED | list hpc job failed<br>获取HPC作业失败</br> |

