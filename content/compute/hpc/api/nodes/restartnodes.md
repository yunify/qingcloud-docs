---
title: "restartNodes"
description: 本小节主要介绍重启节点接口。 
keyword: ehpc, 重启节点
weight: 40
collapsible: false
draft: false
---

重启节点。

## Action

/cluster/restartNodes

## 请求方式

POST

## 请求参数

| 参数       | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                  |
| :--------- | :--------------------------------------------------------- | :------- | :-------------------- |
| timestamp  | date-time                                                  | true     | 时间戳                |
| cluster_id | string                                                     | true     | 需要重启节点的集群 id |
| node_ids   | array                                                      | true     | 需要重启节点 id       |
| zone       | string                                                     | true     | zone id               |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | <span style="display:inline-block;width:380px">描述</span> | 取值样例                              |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------- |
| action                                                     | string                                                     | 响应动作                                                   | HpcClusterRestartClusterNodesResponse |
| job_id                                                     | string                                                     | 操作执行的id                                               | j-xxxxx                               |
| ret_code                                                   | int                                                        | 执行成功与否，成功为0，其他值则为错误代码                  | 0                                     |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/restartNodes
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'node_ids': ['cln-hzzvbtnh'],  
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcClusterRestartClusterNodesResponse"
	job_id: "j-he18e4khem2"
	ret_code: 0
}
```
