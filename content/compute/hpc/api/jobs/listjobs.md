---
title: "listjobs"
description: 本小节主要介绍获取到当前集群中正在运行、运行完成的作业接口。 
keyword: 作业列表,ehpc
weight: 10
collapsible: false
draft: false
---

获取当前集群中的作业队列接口，可以获取到当前集群中正在运行、运行完成的作业。

## Action

job/list

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                                       |
| zone                                                       | string                                                     | true     | 所属区域 id                                                  |
| cluster_id                                                 | string                                                     | true     | 需要获取作业列表的集群 id                                    |
| jobs_status                                                | string                                                     | false    | 作业状态<ul><li>pending 排队中</li><li>finished 运行完成</li><li>running 运行中</li><li>exited 失败</li><li>cancelled 取消</li></ul> |
| limit                                                      | int                                                        | false    | 页面显示数据个数，默认为10，最大100                          |
| offset                                                     | int                                                        | false    | 集合偏移量                                                   |
| queue_name                                                 | string                                                     | false    | 要过滤的队列名称                                             |
| reverse                                                    | int                                                        | false    | 是否按排序键反转进行排序                                     |
| run_user                                                   | string                                                     | false    | 运行作业的用户                                               |
| search_word                                                | string                                                     | false    | 搜索关键词                                                   |
| sort_key                                                   | string                                                     | false    | 排序键排序                                                   |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例               |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :--------------------- |
| action                                                     | string                                                     | 获取队列的响应名称                                           | HpcJobListJobsResponse |
| total_count                                                | int                                                        | 作业信息个数<br />在当前集群获取到作业信息<br />包括运行中运行结束的作业个数总和 | 2                      |
| ret_code                                                   | int                                                        | 执行成功与否<br />执行成功为0<br />其他值则为错误代码        | 0                      |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例             |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :------------------- |
| hpc_job_set                                                | list                                                       | 当前集群作业列表                                             | -                    |
| categories                                                 | string                                                     | 作业所属队列类型，可能<ul><li>share_queue 共享队列</li><li>dedicated_queue 专属队列</li></ul> | share_queue          |
| cmd_line                                                   | string                                                     | 作业执行命令<br />由用户自行输入                             | sleep 10             |
| core_limit                                                 | int                                                        | 核心限制数                                                   | 1                    |
| exec_cwd                                                   | string                                                     | 执行命令路径                                                 | /public/shanhe/s0723 |
| hpcjob_uuid                                                | string                                                     | hpc 作业 uuid                                                | hpcjoc-o0ov1wbb      |
| hpcqueue_id                                                | string                                                     | hpc 队列 id                                                  | hpcq-df3u98dr        |
| hpq_name                                                   | string                                                     | 作业所属队列名称                                             | 2222333vis22         |
| job_id                                                     | int                                                        | 作业 id                                                      | 19948                |
| job_name                                                   | string                                                     | 作业名称                                                     | 作业-elDVm           |
| job_node_list                                              | string                                                     | 作业节点列表                                                 | -                    |
| job_priority                                               | int                                                        | 作业优先级                                                   | 1                    |
| job_status                                                 | string                                                     | 作业执行状态，可能值：<ul><li>finished </li><li>stopped</li><li>running</li></ul> | finished             |
| mem_limit                                                  | string                                                     | 成员限制                                                     | null                 |
| modified_time                                              | string                                                     | 作业修改时间                                                 | 2021-08-19T14:06:41  |
| name                                                       | string                                                     | 作业选择的需要运行的队列名称                                 | 2222333vis22         |
| queue_name                                                 | string                                                     | 作业运行的队列名称                                           | 2222333vis22         |
| run_user                                                   | string                                                     | 运行作业用户                                                 | usr-vceaHsJu         |
| scheduler_queue_name                                       | string                                                     | 调度器队列名称                                               | vis                  |
| started_time                                               | string                                                     | 作业开始时间                                                 | 2021-08-19T14:06:41  |
| stderr_redirect_path                                       | string                                                     | stderr 重定向路径                                            | HPC-19453.err        |
| stdout_redirect_path                                       | string                                                     | stdout 重定向路径                                            | HPC-19453.out        |
| submitted_time                                             | string                                                     | 作业提交时间                                                 | 2021-08-19T14:06:21  |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/job/list
&cluster_id=ehpc-qmmvigwe
&COMMON_PARAMS
```

### 响应示例

```json
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
