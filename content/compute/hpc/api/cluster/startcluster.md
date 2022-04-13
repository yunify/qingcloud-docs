---
title: "startCluster"
description: 本小节主要介绍启动已暂停的集群接口。 
keyword: 启动集群, ehpc
weight: 50
collapsible: false
draft: false
---

启动已暂停的集群。

## Action

/cluster/startClusrer

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述            |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :-------------- |
| timestamp                                                  | string                                                     | true     | 时间戳          |
| cluster_ids                                                | array                                                      | true     | 所启动的集群 id |
| zone                                                       | string                                                     | true     | zone id         |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :---------------------------------------- | ----------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcStartClusterResponse |
| job_ids                                                    | string                                                     | 启动集群的job_id                          | j-xxxxxx                |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码 | 0                       |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/startCluster
```

### 响应示例

```json
{
	action: "HpcClusterStartClusterResponse", 
	job_id: "j-5lggvldskpm", 
	ret_code: 0
}
```
