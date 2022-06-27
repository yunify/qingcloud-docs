---
title: "createCluster"
description: 本小节主要介绍创建集群接口。 
keyword: mysql plus 新增节点
weight: 20
collapsible: false
draft: false
---

创建 HPC、EHPC 集群，EHPC 集群支持标准模式与精简模式。

## Action

/cluster/createCluster

## 请求方式

POST

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                                         |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| timestamp                                                  | date-time                                                  | true     | 时间戳                                                       |
| gid_number                                                 | int                                                        | true     | gid 编号，用户开通时产生。通过`/permission/{user_id}` 获取   |
| uid_number                                                 | int                                                        | true     | uid 编号，用户开通时产生                                     |
| version_id                                                 | string                                                     | true     | 集群版本 id                                                  |
| cluster_type                                               | string                                                     | true     | hpc集群类型<ul><li>hpc</li><li>ehpc</li></ul>                |
| owner                                                      | string                                                     | true     | 所属者：usr-xxxx                                             |
| zone                                                       | string                                                     | true     | zone id                                                      |
| cluster_conf                                               | string                                                     | true     | 集群配置<br />HPC集群只需配置login节点，HEPC需配置login、compute、controller节点。HEPC配置compute节点需注意cpu核数，compute最小2核zpu，memory也最小为4098。<br />nfs_need、nfs_dns、nfs_export、start_hook_on、nfs_local、nfs_network以上参数为共享软件库。均为固定值，可静态获取后使用。<br /><code>"cluster_conf": { <br />             "cluster": { <br />               "vxnet": "vxnet-xxxx", <br />               "name": “集群名称", <br />               "nas_id": "挂载点id",<br /> "version": "集群版本" <br />               "login": { <br />                 "count": 节点数,<br />                  "cpu": cpu核数(1、2、4、8、12、26),<br />                  "memory": 内存，单位M(2G、4G、12G、26G、40G、80G, <br />                 "nas_mount_point": "挂载点路径"<br />                }, <br />             }, <br />             "env": { <br />               "admin.user": "admin", <br />               "admin.password": "**********", <br />               "admin.user_id": 11017754,<br />                "admin.group_id": 11017754, <br />               "nas_path": "nas路径", <br />               "nfs_need": 1, <br />               "nfs_dns": "10.104.100.99", <br />               "nfs_export": "qingyun.nsccjn.com:/shanhe", <br />               "start_hook_on": 1,<br />                "nfs_local": "/es01/software", <br />               "nfs_network": "10.104.0.0/16"}, <br />             },</code> |
| paid_type                                                  | string                                                     | int      | 支付类型<ul><li>Reserved 包年包月</li><li>PayForUesd 按需计费</li></ul> |
| is_auto_renewal                                            | int                                                        | true     | 是否自动续费<ul><li>0：到期不续费</li><li>1：到期自动续费</li></ul> |
| duration                                                   | int                                                        | true     | 如果paid_type为reserved，则需设置时间段<ul><li>1（1个月）</li><li>3（3个月）</li><li>6（6个月）</li><li>12（12个月）</li><li>36（3年）</li><li>70（5年）</li></ul> |
| deploy_mode                                                | string                                                     | false    | 集群部署模式，HPC集群仅有标准模式，EHPC支持两种模式<ul><li>1：标准模式</li><li>2：精简模式</li></ul> |
| account_service                                            | string                                                     | false    | 账户服务                                                     |
| app_id                                                     | string                                                     | false    | 集群的应用程序 id                                            |
| cluster_id                                                 | string                                                     | false    | hpc 集群 id                                                  |
| cluster_name                                               | string                                                     | false    | hpc 集群 name                                                |
| create_time                                                | string                                                     | false    | 创建时间                                                     |
| cur_cpu                                                    | int                                                        | false    | cur cpu                                                      |
| instance_id                                                | string                                                     | false    | 实例 id                                                      |
| instance_image                                             | string                                                     | false    | 实例图片                                                     |
| nas_id                                                     | string                                                     | false    | nas id                                                       |
| nas_path                                                   | string                                                     | false    | nas path                                                     |
| password                                                   | string                                                     | false    | 密码                                                         |
| pqueue_name                                                | string                                                     | false    | 私有队列名称                                                 |
| pqueue_type_id                                             | string                                                     | false    | 私有队列类型 id                                              |
| scheduler_type                                             | string                                                     | false    | 调度器类型                                                   |
| software_info                                              | string                                                     | false    | 软件信息                                                     |
| status                                                     | string                                                     | false    | 状态                                                         |
| status_time                                                | string                                                     | false    | 状态时间                                                     |
| tasks_running                                              | int                                                        | false    | 执行 hpc 任务的个数                                          |
| tasks_total                                                | int                                                        | false    | hpc 任务总数                                                 |
| user_name                                                  | string                                                     | false    | 用户名                                                       |

## 响应消息

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                     | 取值样例                       |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ---------------------------------------- | :----------------------------- |
| action                                                     | string                                                     | 响应动作                                 | HpcClusterCreateClusterResonse |
| job_id                                                     | string                                                     | 执行操作的操作 id                        | j-ei20x38nikh                  |
| hpc_cluster_id                                             | string                                                     | 所创建的集群 id                          | ehpc-xxxxxx                    |
| ret_code                                                   | int                                                        | 执行成功与否，成功为 0，其它值则为错误值 | 0                              |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/createCluster
&COMMON_PARAMS
requests_body = {
                     "cluster_type": "ehpc",
                     "cluster_name": "EHPC-123",
                     "gid_number": 44730,
                     "uid_number": 44730,
                     "version_id": "appv-26wyuu21",
                     "zone": "jn1a",
                     "deploy_mode": "1",
                     "paid_type": "PayForUsed",
                     "duration": 0,
                     "is_auto_renewal": 0,
                     "cluster_conf": {
                         "cluster": {
                             "vxnet": "vxnet-8r12vbl",
                             "name": "EHPC-123",
                             "nas_id": "jqxefcnp",
                             "login": {
                                 "count": 1,
                                 "cpu": 1,
                                 "memory": 2048,
                                 "nas_mount_point": "/es01/shanhe/xxx20220329"
                             },
                             "controller": {
                                 "count": 1,
                                 "cpu": 1,
                                 "memory": 2048,
                                 "nas_mount_point": "/es01/shanhe/xxx20220329"
                             },
                             "compute":
                                 {"count": 1,
                                  "cpu": 2,
                                  "memory": 4096,
                                  "nas_mount_point": "/es01/shanhe/xxx20220329"
                                  }
                         },
                         "env": {
                             "admin.user": "admin",
                             "admin.password": "(07gAtNOV#9w",
                             "admin.user_id": 44730,
                             "admin.group_id": 44730,
                             "nas_path": "10.103.100.93@o2ib:10.103.100.94@o2ib:/es01/shanhe/xxx20220329",
                             "nfs_need": 1,
                             "nfs_dns": "10.104.100.99",
                             "nfs_export": "shanhe.nsccjn.com:/shanhe",
                             "start_hook_on": 1,
                             "nfs_local": "/es01/software",
                             "nfs_network": "10.104.0.0/16"},
                         "version": "appv-26wyuu21"},
                     "user_id": "usr-IuZxPyn2",
                     "owner": "usr-IuZxPyn2"}
```

### 响应示例

```json
{
  action: "HpcClusterCreateClusterResponse"
	hpc_cluster_id: "ehpc-6pbhlqdn"
	job_id: "j-ei20x38nikj"
	ret_code: 0
}
```
