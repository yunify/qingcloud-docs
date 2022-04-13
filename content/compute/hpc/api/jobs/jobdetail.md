---
title: "jobdetail"
description: 本小节主要介绍查看作业详情接口。 
keyword: 查看作业详情
weight: 50
collapsible: false
draft: false
---

查看作业详情，包括作业的基本信息及运行信息。

## Action

/job/jobdetail/{job_uuid}

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :-------- |
| job_uuid                                                   | string                                                     | true     | 作业 uuid |
| cluster_id                                                 | string                                                     | true     | 集群 id   |
| timestamp                                                  | date-time                                                  | true     | 时间戳    |
| zone                                                       | string                                                     | true     | zone id   |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                   |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | -------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcJobGetJobDetailResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                          |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述             | 取值样例                                    |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ---------------- | ------------------------------------------- |
| hpc_job_set                                                | list                                                       | hpc 详情         | -                                           |
| time_limit                                                 | string                                                     | time limit       | -                                           |
| stdout_redirect_path                                       | string                                                     | 输出路径         | HPC-19152.out                               |
| cpu_usage                                                  | int                                                        | cpu usage        | 0.0                                         |
| software_list                                              | string                                                     | 软件列表         | hpcsw_gromacs_aip                           |
| is_job_temp                                                | string                                                     | 是否为工作模板   | -                                           |
| console_id                                                 | string                                                     | 控制台 id        | nsccloud                                    |
| slots_num                                                  | int                                                        | slots num        | 1                                           |
| cluster_id                                                 | string                                                     | 集群 id          | hpc-roheon1r                                |
| owner                                                      | string                                                     | 所属者           | user-vceaHsJu                               |
| scheduler_queue_name                                       | string                                                     | 队列名           | vis                                         |
| resource_limit                                             | string                                                     | 资源 limit       | -                                           |
| job_status                                                 | string                                                     | 工作状态         | running                                     |
| root_use_id                                                | string                                                     | 根用户 id        | user-vceaHsJu                               |
| user_id                                                    | string                                                     | 用户 id          | user-vceaHsJu                               |
| job_id                                                     | string                                                     | 工作 id          | 19153                                       |
| is_delete                                                  | int                                                        | 是否删除         | 0                                           |
| scheduler_jobid                                            | string                                                     | scheduler job id | -                                           |
| queue_type                                                 | string                                                     | 队列类型         | share_queue                                 |
| submitted_time                                             | string                                                     | 提交时间         | 2021-07-09T03:05:01Z                        |
| submit_type                                                | int                                                        | 提交类型         | 0                                           |
| cmd_line                                                   | string                                                     | 执行命令行       | sleep 10                                    |
| job_priorty                                                | int                                                        | 工作优先级       | 1                                           |
| end_status                                                 | string                                                     | 最终状态         | -                                           |
| stderr_redirect_path                                       | string                                                     | 输入路径         | HPC-19152.err                               |
| stdout_redirect_path_type                                  | string                                                     | 输出路径类型     | select                                      |
| job_name                                                   | string                                                     | 工作名称         | test                                        |
| resource                                                   | string                                                     | 资源             | -                                           |
| end_time                                                   | string                                                     | 结束时间         | -                                           |
| swap                                                       | int                                                        | swap             | 0.2356                                      |
| input_file                                                 | string                                                     | 输出文件         | -                                           |
| mem                                                        | int                                                        | mem              | 0.004                                       |
| core_limit                                                 | string                                                     | core limit       | -                                           |
| job_node_list                                              | string                                                     | 工作节点列表     | -                                           |
| exec_swd                                                   | string                                                     | exec swd         | /public/testing_abcd                        |
| msg                                                        | list                                                       | mesg             | -                                           |
| controller                                                 | string                                                     | 调度器           | self                                        |
| end_reason                                                 | string                                                     | 结束 reason      | -                                           |
| modified_time                                              | string                                                     | 修改文件时间     | 2021-07-09T03:05:56Z                        |
| temp_name                                                  | string                                                     | temp 名称        | -                                           |
| hpcqueue_id                                                | string                                                     | hpc 队列 id      | hpcq-df3u98dr                               |
| cmd_line_type                                              | string                                                     | 执行命令类型     | input                                       |
| pend_reason                                                | string                                                     | 延迟原因         | New job is waiting for scheduling: 1 host;^ |
| cpu_time                                                   | int                                                        | cpu time         | 0.0                                         |
| run_user                                                   | string                                                     | 运行用户         | usr-vceaHsJu                                |
| stderr_redirect_path_type                                  | string                                                     | 输出路径类型     | select                                      |
| reason                                                     | string                                                     | 原因             | -                                           |
| hpcjob_uuid                                                | string                                                     | hpc 工作 uuid    | hpcjob-2uozibrm                             |
| idle                                                       | string                                                     | idle             | false                                       |
| host_name                                                  | string                                                     | 主机名           | -                                           |
| suspend_reson                                              | string                                                     | suspend reson    | -                                           |
| mem_limit                                                  | string                                                     | mem limit        | -                                           |
| queue_alias                                                | string                                                     | 队列别名         | 2222333vis22                                |
| run_time                                                   | int                                                        | 运行时间         | 86                                          |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/job/jobdetail/hpcjob-cz8ngntp
&cluster_id=ehpc-2i6bsme6
&COMMON_PARAMS
```

### 响应示例

```json
{
action: "HpcJobGetJobDetailResponse"
hpc_job_set: [{
	cluster_id: "ehpc-2i6bsme6"
	cluster_type: "ehpc"
	cmd_line: "sleep 100"
	cmd_line_type: "input"
	console_id: "nscccloud"
	controller: "self"
	core_limit: 1
	end_status: "0"
	end_time: null
	exec_cwd: "home/admin/output/Customize20220401112325"
	host_name: ""
	hpcjob_uuid: "hpcjob-cz8ngntp"
	hpcqueue_id: "ehpcq-6cyb1096"
	input_file: ""
	is_delete: 0
	is_job_temp: null
	job_id: 7
	job_name: "作业-XaLEL"
	job_node_list: "[]"
	job_priority: 1
	job_status: "cancelled"
	mem_limit: null
	modified_time: "2022-04-01T03:24:09Z"
	order_name: 0
	output_dir: "home/admin/output/Customize20220401112325"
	owner: "usr-vceaHsJu"
	queue_type: ""
	reason: "Resources"
	resource_limit: ""
	resources: "{}"
	root_user_id: "usr-vceaHsJu"
	run_time: "5"
	run_user: "admin"
	scheduler_jobid: ""
	scheduler_queue_name: "slurm"
	slots_num: "1"
	software_list: ""
	started_time: "2022-04-01T03:24:04Z"
	stderr_redirect_path: "home/admin/output/Customize20220401112325/job-7.err"
	stderr_redirect_path_type: ""
	stdout_redirect_path: "home/admin/output/Customize20220401112325/job-7.out"
	stdout_redirect_path_type: ""
	submit_type: 0
	submitted_time: "2022-04-01T03:23:25Z"
	sw_param: ""
	temp_name: null
	time_limit: null
	user_id: "usr-vceaHsJu"
}]
ret_code: 0
}
```
