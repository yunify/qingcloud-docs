---
title: "stopCluster"
description: 本小节主要介绍关闭集群接口。 
keyword: 关闭集群,api
weight: 60
collapsible: false
draft: false
---

活跃的集群可关机，关机期间按需计费集群暂停计费。

## Action

/cluster/stopCluster

## 请求方式

POST

## 请求参数

| 参数        | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述              |
| :---------- | :--------------------------------------------------------- | :------- | :---------------- |
| timestamp   | string                                                     | true     | 时间戳            |
| cluster_ids | array                                                      | true     | 所要关机的集群 id |
| zone        | string                                                     | true     | zone id           |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                       | 取值样例                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------ | :---------------------------- |
| action                                                     | string                                                     | 响应动作                                   | HpcClusterStopClusterResponse |
| job_ids                                                    | string                                                     | 执行成功返回的 job id                      | j-xxxxxxx                     |
| ret_code                                                   | int                                                        | 执行成功与否，成功为 0，其他值则为错误代码 | 0                             |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/stopCluster
```

### 响应示例

```json
{
	action: "HpcClusterStopClusterResponse"
	job_id: "j-4r4p74l1mi8"
	ret_code: 0
}
```
