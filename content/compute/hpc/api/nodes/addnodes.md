---
title: "addNodes"
description: 本小节主要介绍添加集群节点接口。 
keyword: EHPC,添加集群节点
weight: 20
collapsible: false
draft: false
---

添加集群节点，可以添加1-99个节点。

## Action

/cluster/addNodes

## 请求方式

POST

## 请求参数

| 参数          | 类型      | 是否必要 | 描述                 |
| :------------ | :-------- | :------- | :------------------- |
| timestamp     | date-time | true     | 时间戳               |
| cluster_id    | string    | true     | hpc集群的id          |
| zone          | string    | true     | zone id              |
| node_count    | string    | false    | 集群节点数           |
| node_name     | string    | false    | 需要添加的节点集群id |
| node_role     | string    | false    | 集群节点角色类型     |
| private_ips   | array     | false    | 私有ips              |
| resource_conf | string    | false    | 集群节点角色资源配置 |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                      | 取值样例                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ----------------------------------------- | :-------------------------------- |
| action                                                     | string                                                     | 响应动作                                  | HpcClusterAddClusterNodesResponse |
| job_id                                                     | string                                                     | id                                        | j-1ocwogpabi8                     |
| ret_code                                                   | int                                                        | 执行是否成功，成功为0，其它值则为错误代码 | 0                                 |

## 示例

### 请求示例

```url
https://hpc-api.qingcloud.com/api/cluster/addNodes
```

### 响应示例

```json
{
	action: "HpcClusterAddClusterNodesResponse"
	job_id: "j-5h4i2duatxc"
	ret_code: 0
}
```
