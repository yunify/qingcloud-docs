---
title: "deleteJobs"
description: 本小节主要介绍删除作业接口。 
keyword: EHPC,删除作业
weight: 40
collapsible: false
draft: false
---

删除作业，可多个一起删除。

## Action

/job/deleteJobs

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述             |
| :--------------------------------------------------------- | :--------------------------------------------------------- | -------- | :--------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳           |
| cluster_id                                                 | string                                                     | true     | 集群id           |
| zone                                                       | string                                                     | true     | zone id          |
| job_ids                                                    | array                                                      | true     | 需要删除的作业id |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :---------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcJobDeleteJobResponse |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                       |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/job/deleteJobs
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'job_ids': ['hpcjob-bp6rj09f'],
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcJobDeleteJobsResponse"
	ret_code: 0
}
```
