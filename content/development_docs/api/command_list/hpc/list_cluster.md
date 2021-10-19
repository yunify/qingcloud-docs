---
title: "ListCluster"
description: 
draft: false
weight: 1
---

### 获取集群基本信息

调用list-cluster可以查看到所有集群的信息，包含集群列表和集群详情，返回了集群所有信息

### **接口说明**

集群列表集合会显现存在于当前环境中所有集群相关信息

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster_id | string | false       | hpc集群的集群id            |
| cluster_type | string | false | hpc集群的类型 |
| limit | int | false | 集合的限制 |
| offset | int | false | 集合偏移量 |
| reverse | int | false | 排序操作 0：ASC 1:DESC |
| run_user | string | false | 运行作业用户 |
| search_word | string | false | 模糊查询 支持 keys：[name] |
| shared_status | string | false | 集群的共享状态 |
| sort_key | string | false | 排序键 默认为集群创建时间 |
| status | string | false | 集群节点状态 |
| timestamp | string | true | 使用当前api的时间戳 |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| total_count | int | 1 | 统计集群的总数<br>进行集群查询操作所获取到的集群个数</br>如当前环境有1个集群，值则为1 |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/cluster/list
```

_Example Response_:

```
{action: "HpcClusterListClusterResponse"

cluster_set: [

{app_cluster: {

app_cluster_id: "cl-jfj8y9zy"

cluster_id: "hpc-qig9xu97"

cluster_name: "hpc-test"

cluster_status: "active"

cluster_sw: []

cluster_type: "hpc"

cpu_hours: 446.200560295289

create_time: "2021-08-17T09:11:16Z"

deleted_job_count: 0

description: " "

finished_job_count: 2

mem_hours: 1.76339637934081

nas_id: "2cgki7pe"

nas_mount_point: "/public/shanhe/s0723"

nas_path: "10.0.0.7@o2ib:/lustrefs/shanhe/s0723"

nas_shared_path: "/s0723"

paid_type: "PayForUsed"

pending_job_count: 1

project_info: {shared_status: "not_shared", project_role: "none"}

running_job_count: 2

scheduler_type: "默认调度器"

stopped_job_count: 1

total_node_count: 1}

}]

ret_code: 0

total_count: 1}
```

**错误码**

| ret_code | name                    | error info                                                   |
| -------- | ----------------------- | ------------------------------------------------------------ |
| 5000     | ERR_LIST_CLUSTER_FAILED | get user[%s] hpc cluster failed<br>获取用户[%s]超算hpc集群失败</br> |

