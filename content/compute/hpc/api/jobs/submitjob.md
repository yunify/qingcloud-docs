---
title: "submitjob"
description: 本小节主要介绍提交作业接口。 
keyword: ehpc, 提交作业
weight: 20
collapsible: false
draft: false
---

可通过专属队列、共享队列提交作业，也可选择软件运行。作业执行命令可有两种选择方式，一种为手动输入liunx可执行的命令，另一种为选择文件运行。

## Action

job/submitJob

## 请求方式

POST

## 请求参数

| 参数                 | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                   |
| :------------------- | :--------------------------------------------------------- | :------- | :--------------------- |
| timestamp            | string                                                     | true     | 时间戳                 |
| cluster_id           | string                                                     | true     | 作业所存在的集群id     |
| zone                 | string                                                     | true     | zone id                |
| run_user             | string                                                     | true     | 作业文件的运行用户     |
| name                 | string                                                     | true     | 作业名称               |
| cmd_line             | string                                                     | false    | 作业命令行             |
| core_limit           | int                                                        | false    | 核心数                 |
| hpcqueue_id          | string                                                     | false    | 运行作业队列id         |
| input_file           | string                                                     | false    | 作业输入文件路径       |
| mem_limit            | int                                                        | false    | 作业内存限制           |
| resource_limit       | string                                                     | false    | 作业使用的资源限制     |
| scheduler_queue_name | string                                                     | false    | 作业队列               |
| stderr_redirect_path | string                                                     | false    | 作业标准错误重定向路径 |
| stdout_redirect_path | string                                                     | false    | 作业标准输出重定向路径 |
| time_limit           | int                                                        | false    | 作业执行时间限制       |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | ----------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcJobSubmitJobResponse |
| job_status                                                 | string                                                     | 作业状态                                  | pending                 |
| hpcjob_uuid                                                | string                                                     | hpc 作业 id                               | hpcjob-r9cb3r02         |
| job_id                                                     | string                                                     | 操作id                                    | 19152                   |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                       |

## 示例

### 请求示例

```url
https://hpc-api.qingcloud.com/api/job/submitJob
```

### 响应示例

```json
{ 
   action: "HpcJobSubmitJobResponse"
   hpcjob_uuid: "hpcjob-bc2n5lyb"
   job_id: "1547554"
   job_status: "pending"
   ret_code: 0
}
```
