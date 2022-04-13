---
title: "resizeCluster"
description: 本小节主要介绍弹性高性能计算 EHPC 扩容、缩容接口。 
keyword: EHPC 扩容,缩容接口
weight: 100
collapsible: false
draft: false
---

扩容缩容集群，主要是对节点进行扩容缩容。扩容最高值26核80G，缩容最低值为1核2G。HPC集群只可对登录节点操作，EHPC集群可对管控、计算、登录节点操作。降低配置若价格为负数，则表明会退还费用。

## Action

/cluster/resizeCluster

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | -------- | :----------------------------------------------------------- |
| timestamp                                                  | string                                                     | true     | 时间戳                                                       |
| cluster_id                                                 | string                                                     | true     | 扩、缩容的集群id                                             |
| node_role                                                  | string                                                     | true     | 节点角色<ul><li>controller</li><li>login</li><li>compute</li></ul> |
| cpu                                                        | int                                                        | true     | 节点 cpu 核数<ul><li>1</li><li>2</li><li>4</li><li>8</li><li>12</li><li>26</li></ul> |
| memory                                                     | string                                                     | true     | 节点内存（MB）<ul><li>2048</li><li>4096</li><li>12288</li><li>24576</li><li>40960</li><li>81920</li></ul> |
| zone                                                       | string                                                     | true     | zone id                                                      |
| instance_class                                             | string                                                     | false    | 实例类                                                       |
| node_role                                                  | string                                                     | false    | 要调整大小节点角色                                           |
| storage_size                                               | string                                                     | false    | 集群节点存储容量（GB）                                       |

## 响应消息

**response parameters**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                       | 取值样例                        |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------ | :------------------------------ |
| action                                                     | string                                                     | job id                                     | HpcClusterResizeClusterResponse |
| job_id                                                     | string                                                     | 响应动作                                   | j-mf0edjt0ji4                   |
| ret_code                                                   | int                                                        | 执行成功与否，成功为 0，其他值则为错误代码 | 0                               |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述         | 取值样例    |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------ | :---------- |
| resize_info                                                | array                                                      | 调整集群信息 | -           |
| resource_class                                             | int                                                        | 资源类       | 6           |
| cpu_model                                                  | string                                                     | cpu模型      | CascadeLake |
| volume_type                                                | int                                                        | volume_type  | 0           |
| role                                                       | string                                                     | 角色         | login       |
| memory                                                     | int                                                        | 内存大小     | 4096        |
| gpu                                                        | int                                                        | gpu          | 0           |
| cpu                                                        | int                                                        | cpu          | 2           |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/resizeCluster
&COMMON_PARAMS
requests_body = {'cluster_id': 'ehpc-gk3wfc7e',
                     'cpu': '4',
                     'memory': '12288',
                     'node_role': 'compute',
                     'zone': 'jn1a'}
```

### 响应示例

```json
{
	action: "HpcClusterResizeClusterResponse"
	job_id: "j-7azwpyfm9oz"
	resize_info: [{cpu: 26
	cpu_model: "CascadeLake"
	gpu: 0
	memory: 81920
	resource_class: 1202
	role: "compute"
	volume_type: 0}]
	ret_code: 0
}
```
