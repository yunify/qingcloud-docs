---
title: "返回结构"
description: 本小节主要介绍弹性高性能计算 EHPC API 返回结构。 
keyword: ehpc 返回结构；API 返回结构
draft: false
weight: 30
collapsible: false
---

## 返回结构

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:380px">描述</span>   | <span style="display:inline-block;width:200px">说明</span>   |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 指令名称                                                   | API 返回的指令名称 ( action )，例如 `HpcJobListJobsResponse` 。 | API 返回的指令名称一般以 “API 请求指令名称” + “Response” 来表示。 |
| 返回码                                                     | 返回码 ( ret_code ) 用来表示 API 请求的返回值。`ret_code = 0` 表示 API 请求正常；`ret_code != 0` 表示 API 请求错误。 | 详情可见 [错误码](../../error_code)                          |
| 返回统计                                                   | 返回统计（total_count）用来表示 API 请求的数据统计，total_count = 1 表示当前获取到 1 条数据；查询类接口有此返回参数；修改、删除、增加类 API 没有数据统计。 |                                                              |
| 返回参数                                                   | 返回参数响应消息。                                           | -                                                            |

### 返回示例

API 的返回结果为 JSON 结构，这是一个 `HpcJobListJobs` 的 API 请求返回：

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
