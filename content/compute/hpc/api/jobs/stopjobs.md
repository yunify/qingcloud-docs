---
title: "stopJobs"
description: 本小节主要介绍取消作业接口。 
keyword: 取消作业,api
weight: 30
collapsible: false
draft: false
---

取消作业，HPC 集群作业取消则自动结束计费。

## Action

/job/stopJobs

## 请求方式

POST

## 请求参数

| 参数       | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                   |
| :--------- | :--------------------------------------------------------- | :------- | :--------------------- |
| timestamp  | string                                                     | true     | 时间戳                 |
| cluster_id | string                                                     | true     | 需取消作业所在的集群id |
| zone       | string                                                     | true     | zone id                |
| job_ids    | list                                                       | true     | 被取消作业的job id     |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例              |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :-------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcJobStopJobResponse |
| job_uuid                                                   | string                                                     | job uuid                                  | j-b45oj1nzuo6         |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                     |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/job/stopJobs
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'job_ids': ['hpcjob-bp6rj09f'],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcJobStopJobsResponse"
	custom_cmd_result: ["{"job_ids": "5", "ret_code": 0}"]
	0: "{\"job_ids\": \"5\", \"ret_code\": 0}"
	job_uuid: "j-942yi1ah8hd"
	ret_code: 0
}
```
