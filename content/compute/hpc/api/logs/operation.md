---
title: "operation"
description: 本小节主要介绍查看日志详情接口。 
keyword: 查看日志详情，ehpc
weight: 10
collapsible: false
draft: false
---

集群操作日志，集群所有操作都会怡日志方式存储，不论成功失败。可使用 job_id 查看日志详情。

## Action

/operation

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                                       |
| zone                                                       | string                                                     | true     | zone id                                                      |
| jobs                                                       | string                                                     | false    | job id                                                       |
| status                                                     | string                                                     | false    | 日志操作状态<ul><li>pending：执行中</li><li>successful：成功</li><li>failed：失败</li></ul> |
| job_action                                                 | string                                                     | false    | 日志 action                                                  |
| resource_ids                                               | string                                                     | false    | 日志资源 id、集群id，不加此参数时，默认查询所有日志。        |
| owner                                                      | string                                                     | false    | 日志所属者                                                   |
| directive                                                  | string                                                     | false    | 日志                                                         |
| verbose                                                    | int                                                        | false    | 是否获取相关信息                                             |
| offset                                                     | int                                                        | false    | 集合偏移量                                                   |
| limit                                                      | int                                                        | false    | 页面显示数据个数，默认10，最大100                            |
| reverse                                                    | int                                                        | false    | 排序操作<ul><li>0：ASC</li><li>1：DESC</li></ul>             |
| search_word                                                | string                                                     | false    | 关键词搜索，默认支持 [name] 搜索                             |
| start_time                                                 | date-time                                                  | false    | 日志开始时间                                                 |
| end_time                                                   | date-time                                                  | false    | 日志结束时间                                                 |
| action_describe                                            | string                                                     | false    | 日志                                                         |
| job_ids                                                    | string                                                     | false    | 日志操作 job id                                              |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :-------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcOperationListOperationResponse |
| total_count                                                | int                                                        | 统计查询到的日志个数                      | 1                                 |
| ret_code                                                   | int                                                        | 操作成功与否，成功为0，其他值则为错误代码 | 0                                 |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述             | 取值样例                                  |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ---------------- | :---------------------------------------- |
| job_set                                                    | array                                                      | 操作日志合集     | -                                         |
| action_describe                                            | string                                                     | 日志 action 描述 | 从队列移除节点                            |
| create_time                                                | date_time                                                  | 日志创建时间     | 2022-04-06T01：26：33Z                    |
| error_codes                                                | string                                                     | 错误值           | -                                         |
| job_action                                                 | string                                                     | 日志 action      | HpcQueueRemoveEhpcQueueNodes              |
| job_id                                                     | string                                                     | 日志 job id      | j-8ajjp28fps8                             |
| owner                                                      | string                                                     | 日志 owner       | usr-GxkSGFDs                              |
| resource_ids                                               | string                                                     | 日志操作所属资源 | ehpc-czkekzfz ehpcq-rg0vaycm cln-w1xufnk9 |
| status                                                     | string                                                     | 日志执行状态     | successful                                |
| status_time                                                | date-time                                                  | 日志状态更新时间 | 2022-04-06T01:26:40Z                      |
| submitter                                                  | string                                                     | 操作运行节点     | nscca-hpc1                                |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/operation
&COMMON_PARAMS
```

### 响应示例

```json
{
	action: "HpcOperationListOperationResponse"
	data: {}
	job_set: [{
	action_describe: "从队列移除节点"
	create_time: "2022-04-06T01:26:33Z"
	error_codes: ""
	job_action: "HpcQueueRemoveEhpcQueueNodes"
	job_id: "j-8ajjp28fps8"
	owner: "usr-GxkSGFDs"
	resource_ids: "ehpc-czkekzfz ehpcq-rg0vaycm cln-w1xufnk9"
	status: "successful"
	status_time: "2022-04-06T01:26:40Z"
	submitter: "nscca-hpc1"
	task_count: null
	}]
ret_code: 0
total_count: 1
}
```
