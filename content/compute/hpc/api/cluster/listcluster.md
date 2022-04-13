---
title: "listcluster"
description: 本小节主要介绍弹性高性能 EHPC 的集群列表。 
keyword: EHPC,集群列表
weight: 10
collapsible: false
draft: false
---

可通过 cluster_type 参数区分获取 HPC 集群列表、EHPC 集群列表。

## Action

/cluster/list

## 请求方式

GET

## 请求参数

| 参数          | 类型      | 是否必要 | 描述                                                         |
| :------------ | :-------- | :------- | :----------------------------------------------------------- |
| timestamp     | date-time | true     | 时间戳                                                       |
| zone          | string    | true     | 所属区域 id                                                  |
| owner         | string    | true     | owner                                                        |
| cluster_id    | string    | false    | hpc 集群的集群 id，若加上此参数则会精确查找集群。            |
| cluster_type  | string    | false    | hpc集群的类型，若请求时不增加此参数，则会获取当前用户下的活跃、关机、暂停、创建中的集群，请求时加上此参数，则会根据集群类型区分请求。<ul><li>hpc</li><li>ehpc</li></ul> |
| run_user      | string    | false    | 运行作业用户                                                 |
| search_word   | string    | false    | 模糊查询，支持 keys：[name]                                  |
| shared_status | string    | false    | 集群的共享状态                                               |
| sort_key      | string    | false    | 排序键 默认为集群创建时间                                    |
| status        | string    | false    | 查询集群的状态["pending"、"active"、"stopped"、”suspended"]  |
| limit         | int       | false    | 页面显示记录的个数，默认 10，最大 100                        |
| offset        | int       | false    | 集合偏移量                                                   |
| reverse       | int       | false    | 排序操作 <ul><li>0：ASC</li><li>1：DESC</li></ul>            |
| verbose       | int       | false    | 是否获取 appcent 相关的集群信息<br /><ul><li>1</li><li>0</li></ul> |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 取值样例                                                     | 描述                                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- | :---------------------------------------- |
| action                                                     | string                                                     | 响应动作名称                                                 | HpcClusterListClusterResponse             |
| total_count                                                | int                                                        | 统计集群的总数<br />进行集群查询操作所获取到的集群个数。<br />HPC集群可能为0、1<br />EHPC集群可能为0、1+ | 1                                         |
| ret_code                                                   | int                                                        | 0                                                            | 执行成功与否，成功为0，其他值则为错误代码 |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例                           |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- | ---------------------------------- |
| cluster_set                                                | list                                                       | 所获取到的集群详细信息，以列表形式显示。                     | -                                  |
| app_cluster                                                | list                                                       | 集群的 appcent 相关信息，包含集群应用程序动作、信息、应用版本信息、自动缩放步骤、备份信息、cpu内存使用情况、客户服务、健康检查、节点、价格、角色总数、虚拟网络角色、不受支持操作、虚拟网络等相关信息 | -                                  |
| app_cluster_id                                             | string                                                     | 集群 appcent_id                                              | cl-zog7clgi                        |
| cluster_id                                                 | string                                                     | 获取到的集群id                                               | ehpc-ut2ua3b0                      |
| cluster_name                                               | string                                                     | 集群名称                                                     | test-hpc-kk                        |
| cluster_type                                               | string                                                     | 集群类型可能值<ul><li>ehpc</li><li>hpc</li></ul>             | hpc                                |
| create_time                                                | string                                                     | 集群创建时间                                                 | 2021-8-18T13：11：45Z              |
| description                                                | string                                                     | 集群描述，可能值<ul><li>创建集群时增加过描述，就会显示描述</li><li>“ ”这种情况说明在创建集群时未增加描述</li></ul> | -                                  |
| nas_id                                                     | string                                                     | nas id                                                       |                                    |
| nas_mout_point                                             | string                                                     | 获取该集群文件存储的挂载点路径<br />根据每个集群挂点点不同，获取到的挂载点也不同 | /pubilc/shanhe/0704                |
| nas_path                                                   | string                                                     | nas路径。根据每个集群所选择的nas路径不同，获取到的nas路径不同 | 10.0.0.8@03ib:/lustrefs/shane/0704 |
| nas_shared_path                                            | string                                                     | nas 共享路径与 nas路径一致                                   | /0704                              |
| paid_type                                                  | string                                                     | 集群费用支付类可能值<ul><li>PayForUsed</li><li>Reserved</li></ul> | PayForUsed                         |
| schedule_type                                              | string                                                     | 调度程序类型：slurm                                          | slurm                              |
| toatl_node_count                                           | int                                                        | 集群所拥有的节点数。<br />根据集群所拥有的节点数不同，获取到的值也不同。<br />节点包括登录节点、管控节点、计算节点。 | 1                                  |
| cluster_sw                                                 | list                                                       | 集群所拥有的软件列表                                         | -                                  |
| description                                                | string                                                     | 对应集群软件描述<br />集群软件不同对应描述也不同，可能值<ul><li>vasp</li><li>lammp</li></ul>更多软件信息请点击“软件中心“。 | lammps 20200721 with mpich         |
| hpcsw_id                                                   | string                                                     | hpc 软件 id <br />软件不同 id 也不相同                       | hpcsw_lammps                       |
| sw_name                                                    | string                                                     | 软件名称                                                     | lammps-mpich                       |
| sw_ver                                                     | string                                                     | 软件版本                                                     | 2020                               |
| project_info                                               | list                                                       | 集群项目信息                                                 | -                                  |
| projet_role                                                | string                                                     | 项目角色                                                     | none                               |
| shared_status                                              | string                                                     | 项目共享状态，可能值<ul><li>shared：共享状态</li><li>not_shared：未共享</li></ul> | not_shared                         |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/list
&owner=usr-vceaHsJu
&verbose=1
&cluster_type=hpc
&COMMON_PARAMS
```

### 响应示例

```json
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
