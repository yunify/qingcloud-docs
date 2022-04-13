---
title: "addNodes"
description: 本小节主要介绍添加集群节点接口。 
keyword: EHPC,添加集群节点
weight: 20
collapsible: false
draft: false
---

添加集群节点，可以添加 1-99 个节点。

## Action

/cluster/addNodes

## 请求方式

POST

## 请求参数

| 参数          | 类型      | 是否必要 | 描述                                                         |
| :------------ | :-------- | :------- | :----------------------------------------------------------- |
| timestamp     | date-time | true     | 时间戳                                                       |
| cluster_id    | string    | true     | hpc 集群的 id                                                |
| node_role     | string    | false    | 集群节点角色类型，HPC 集群可添加登录节点，EHPC 集群可添加登录、计算节点。<ul><li>login</li><li>compute</li></ul> |
| node_count    | string    | false    | 集群节点数，最小 1，最大 99                                  |
| zone          | string    | true     | zone id                                                      |
| node_name     | string    | false    | 需要添加的节点集群 id                                        |
| private_ips   | array     | false    | 私有 ips                                                     |
| resource_conf | string    | false    | 集群节点角色资源配置                                         |

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
https://hpc.api.qingcloud.com/api/cluster/addNodes
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-8jqdq0mz',
                     'node_role': 'login',
                     'node_count': '1',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcClusterAddClusterNodesResponse"
	job_id: "j-5h4i2duatxc"
	ret_code: 0
}
```
