---
title: "GetClusterNodes"
description: 
draft: false
weight: 25
---

### 获取集群节点信息

调用get-cluster-nodes获取集群节点。

### **接口说明**

获取集群节点会显示节点所有相关信息。

### 参数

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster_id     | string | false       | 需要查询节点的hpc集群id          |
| limit          | int    | false       | 集合的限制                       |
| offset         | int    | false       | 集群偏移量                       |
| reverse        | int    | false       | 排序 0：ASC 1:EDSC               |
| search_word    | string | false       | 模糊查询 支持 keys:[name]        |
| sort_key       | string | false       | 排序键，默认为排序为节点创建时间 |
| status         | string | false       | 集群节点的状态                   |
| timestamp      | string | true        | 使用获取节点api时间戳            |
| verbose        | int    | false       | 集群节点的详细操作工作           |
| zone           | string | true        | 所属区域id                       |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Sample value | Description |
| --- | --- | --- | --- |
| action | string | HpcClusterListClusterResponse | 响应动作名称 |
| total_count | int | 1 | 集群中节点个数<br>创建集群后默认有一个登录节点，如果用户有再新增节点，对应值就>1</br>可增加节点类型为：登陆节点、计算节点、管控节点。 |
| ret_code | int | 0 | 执行成功与否，成功为0，其他值则为错误代码 |

**Response Item**

| Name                          | Type   | Sample value                   | Description                                                  |
| ----------------------------- | ------ | ------------------------------ | ------------------------------------------------------------ |
| hpc_app_nodes_set             | list   |                                | 集群节点列表信息显示                                         |
| acl_id                        | string | zccmu5y5m                      |                                                              |
| advanced_actions              | string | scale_horizontal,associate_eip | 额外操作可能值scale_horizontal 水平缩放associate 绑定eip     |
| agent_insatlled               | bool   | true                           | 是否已经代理安装可能值true 已代理安装节点flase 未代理安装节点 |
| alarm_status                  | string |                                | 警报状态集群出现故障                                         |
| app_id                        | string | app-w3rfs72o                   | 集群所拥有的应用程序id根据集群所有的应用程序不同，获取到的app_id也不同 |
| app_version                   | string | app-mkfs3s2ok                  | 集群拥有的应用程序版本                                       |
| auto_backup                   | int    | 1                              | 是否自动备份可能值01                                         |
| backup_policy                 | string | null                           | 备份策略                                                     |
| backup_service                | string | null                           | 备份服务                                                     |
| chang_vxnet_service           | string | null                           | 更改网络服务                                                 |
| cluster_id                    | string | cl-jfj8y9zy                    | 节点所存在的集群id                                           |
| console_id                    | string | shanhe                         | 节点所存在的控制台id                                         |
| controller                    | string | self                           | 控制器                                                       |
| cpu                           | int    | 1                              | 节点所在集群所拥有的cpu个数                                  |
| cpu_model                     | string | CascadeLake                    | cpu处理器型号                                                |
| create_time                   | string | 2021-08-17T09:09:09Z           | 节点创建时间                                                 |
| custom_metadata               | string | null                           | 自定义元数据                                                 |
| custom_metadata_scrpit        | string | null                           | 自定义元数据脚本                                             |
| delete_sanpshot_service       | string | null                           | 删除快照服务                                                 |
| destroy_service               | string | null                           | 销毁服务                                                     |
| display_tabs                  | string | null                           | 显示标签                                                     |
| eip                           | string |                                | 是否有绑定eip可能值  为空就表示该节点未绑定eip节点所绑定的eip值 |
| e'ip_class                    | string | null                           | 绑定的eip类                                                  |
| env                           | string |                                | 环境信息，组id，密码、nas路径、用户名、用户id                |
| exchange_reserved_ips_service | string | null                           | 交换保留ip服务                                               |
| extra_vxnets                  | string |                                | 额外的网络                                                   |
| get_nodes_order_service       | string | null                           | 获取节点订购服务                                             |
| global_server_id              | int    | 628573132                      | 全局服务器的id                                               |
| gpu                           | int    | 0                              | gpu                                                          |
| gpu_class                     | int    | 0                              | gpu类型                                                      |
| group_id                      | int    | 1                              | 节点组id                                                     |
| health_chaeck                 | string | null                           | 节点健康检查                                                 |
| host_machine                  | string | shanher02n02                   | 主机名称                                                     |
| hypervisor                    | string | kvm                            | 管理程序名称                                                 |
| iass_agent_install            | bool   | true                           | iass代理安装可能值true 已代理安装false 未代理安装            |
| incremental_backup_supported  | bool   | false                          | 支持增量备份可能值true 支持false 不支持                      |
| init_service                  | list   |                                | 初始化服务信息列表，运行命令信息                             |
| instance                      | list   |                                | 实例信息列表，包含实例id、volume id、区id等相关信息          |
| instance_id                   | string | i-cley6bg3                     | 实例id                                                       |
| instance_type                 | string |                                | 实例类型                                                     |
| interval_custom_service       | string | null                           | 间隔定制服务                                                 |
| is_backup                     | int    | 0                              | 是否备份可能值01                                             |
| keypair_ids                   | string |                                | 密钥id如果存在密钥则显示密钥id未存在怎获取空                 |
| memory                        | int    | 2048                           | 存储大小                                                     |
| moitor                        | string | null                           | 监控                                                         |
| mulit_zone_policy             | string | unsupported                    | 多区域政策                                                   |
| name                          | string | 登录节点1                      | 节点名称                                                     |
| nas_mount_point               | string | /pubilc/shanhe/s07023          | nas文件挂载点挂载由用户自行设置                              |
| node_id                       | string | cln_2ediswnc                   | 节点id                                                       |
| os_reset                      | bool   | false                          | 是否重置操作系统                                             |
| owner                         | string | usr-vceaHsJu                   | 节点所属者                                                   |
| place_group_id                | string | plg-00000003                   | 节点处于何组id                                               |
| private_ip                    | string | 172.20.0.3                     | 私有ip                                                       |
| pub_key                       | string | null                           | 公共密钥                                                     |
| reserved_password             | string |                                | 保留密码                                                     |
| reset_password                | list   |                                | 重置密码列表，包含更改密码、服务参数、超时信息、类型、命令等相关信息 |
| resource_class                | int    | 6                              | 资源类                                                       |
| resatrt_service               | string | null                           | 重启节点服务                                                 |
| restore_service               | string | null                           | 恢复节点服务                                                 |
| role                          | string | login                          | 节点角色类型                                                 |
| root_user_id                  | string | usr-vceaHsJu                   | 根用户id                                                     |
| status                        | string | active                         | 节点状态                                                     |
| status_times                  | string | 2021-08-17T09:11:54Z           | 节点状态获取时间                                             |



**Example**

_Example Request_:

```
https://hpc.api.shanhe.com:443/api/cluster/listNodes
```

_Example Response_:

```
{action: "HpcClusterGetClusterNodesResponse"

hpc_app_nodes_set: [

 {acl_id: "8n0fm52nf"

advanced_actions: "scale_horizontal,associate_eip"

agent_installed: true

alarm_status: ""

app_id: "app-3nfkjxro"

app_version: "appv-1is7nks7"

auto_backup: 1

backup_policy: null

backup_service: null

change_vxnet_service: null

cluster_id: "cl-v0jpwmsr"

console_id: "shanhe"

controller: "self"

cpu: 1

cpu_model: "CascadeLake"

create_time: "2021-08-19T07:24:07Z"

custom_metadata: null

custom_metadata_script: null

custom_service: null

delete_snapshot_service: null

destroy_service: null

display_tabs: {cluster_user: {roles_to_execute_on: ["controller"], cmd: "userctl list"},…}

eip: ""

eip_class: null

env: "{\"admin_user\":\"admin\",\"nfs_dns\":\"\",\"admin_user_id\":41522,\"nfs_export\":\"\",\"start_hook_on\":0,\"nfs_network\":\"\",\"nfs_need\":0,\"admin_password\":\"*********\",\"admin_group_id\":41522,\"nas_path\":\"10.0.0.7@o2ib:/lustrefs/nscc/s0723\",\"nfs_local\":\"\",\"software\":\"[]\"}"

exchange_reserved_ips_service: null

extra_vxnets: "{\"ib\":{\"vxnet_id\":\"vxnet-ib\",\"private_ip\":\"10.0.50.169\"},\"vxnet\":{\"vxnet_id\":\"vxnet-kdmf8xw\",\"private_ip\":\"172.20.0.2\"}}"

get_nodes_order_service: null

global_server_id: 223623828

gpu: 0

gpu_class: 0

group_id: 1

health_check: {

check_cmd: "appctl check"

enable: true

healthy_threshold: 3

interval_sec: 60

timeout_sec: 10

unhealthy_threshold: 3}

health_status: "healthy"

host_machine: "nsccr04n02"

hypervisor: "kvm"

iaas_agent_installed: true

image_id: "img-bzldftez"

incremental_backup_supported: false

init_service: {cmd: "appctl init"}

instance: {instance_id: "i-9csyilte", volume_ids: "", zone_id: "shanhe"}

instance_id: "i-9csyilte"

instance_type: ""

interval_custom_service: null

is_backup: 0

keypair_ids: ""

memory: 2048

monitor: {enable: false, items: {,…}, alarm: [], cmd: "/opt/app/monitor/login_monitor.sh",…}

multi_zone_policy: "unsupported"

name: "登录节点1"

nas_mount_point: "/public/shanhe/s0723"

node_id: "cln-wx6w1ef2"

os_reset: false

owner: "usr-vceaHsJu"

passphraseless: ""

place_group_id: "plg-9nhqd2t9"

private_ip: "172.20.0.2"

pub_key: null

queue_info: {}

rebuild_service: null

repl: "rpp-00000000"

reserved_ips: null

resource_class: 1101

restart_service: {cmd: "appctl restart", order: 2}

restore_service: null

role: "login"

rollback_service: null

root_user_id: "usr-vceaHsJu"

scale_in_service: null

scale_out_service: null

scale_vertical_service: null

security_group: ""

security_groups: []

server_id: 1

server_id_upper_bound: null

single_node_repl: ""

sriov_nic: false

start_service: {cmd: "appctl start", order: 2}

status: "active"

status_time: "2021-08-19T07:25:01Z"

stop_service: {cmd: "appctl stop", order: 1}

storage_size: 0

transition_status: ""

unsupported_actions: null

upgrade_service: null

user_access: 1

vertical_scaling_policy: "parallel"

volume_ids: null

volume_type: 0

vxnet_id: "vxnet-kdmf8xw"}]

ret_code: 0

total_count: 3}


```

**错误码**

| ret_code | name                                    | error info                                                   |
| -------- | --------------------------------------- | ------------------------------------------------------------ |
| 5000     | ERR_MSG_CANNOT_ACCESS_ALL_CLUSTER_NODES | cannot access all nodes of cluster [%s]<br>无法访问集群[%s]所有节点</br> |

