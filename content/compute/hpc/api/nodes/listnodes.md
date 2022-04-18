---
title: "listnodes"
description: 本小节主要介绍节点列表接口。 
keyword: ehpc,节点列表
weight: 10
collapsible: false
draft: false
---

获取当前集群的所有节点。

## Action

cluster/listNodes

## 请求方式

GET

## 请求参数

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 是否必选 | 描述                                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | :------- | :-------------------------------------------- |
| timestamp                                                  | string                                                     | true     | 使用获取节点api时间戳                         |
| zone                                                       | string                                                     | true     | 所属区域id                                    |
| cluster_id                                                 | string                                                     | false    | 需要查询节点的集群id                          |
| search_word                                                | string                                                     | false    | 模糊查询 支持 keys:[name]                     |
| sort_key                                                   | string                                                     | false    | 可为节点角色                                  |
| status                                                     | string                                                     | false    | 集群节点的状态                                |
| limit                                                      | int                                                        | false    | 页面显示的数据个数，默认10                    |
| offset                                                     | int                                                        | false    | 集群偏移量                                    |
| reverse                                                    | int                                                        | false    | 排序<ul><li>0：ASC</li><li>1：EDSC </li></ul> |
| verbose                                                    | int                                                        | false    | 集群节点的详细操作                            |

## 响应消息

**response elements**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例                          |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :-------------------------------- |
| action                                                     | string                                                     | api 相应动作名称                                             | HpcClusterGetClusterNodesResponse |
| total_count                                                | int                                                        | 集群中节点个数<br />创建集群后默认有一个登录节点<br />如果用户有再新增节点，对应值就 > 1<br />可增加节点类型为：登录节点、计算节点、管控节点 | 1                                 |
| ret_code                                                   | int                                                        | api 执行是否成功，成功为0，其他值均为错误代码                | 0                                 |

**response item**

| <span style="display:inline-block;width:100px">参数</span> | <span style="display:inline-block;width:100px">类型</span> | 描述                                                         | 取值样例                       |
| :--------------------------------------------------------- | :--------------------------------------------------------- | ------------------------------------------------------------ | :----------------------------- |
| hpc_app_nodes_set                                          | list                                                       | 集群节点列表信息显示                                         | -                              |
| acl_id                                                     | string                                                     | -                                                            | zccmu5y5m                      |
| advanced_actions                                           | string                                                     | 额外操作<br />可能值<ul><li>scale_horizontal 水平缩放</li><li>associate 绑定 eip</li></ul> | scale_horizontal,associate_eip |
| agent_insatlled                                            | bool                                                       | 是否已经代理安装<br />可能值<ul><li>true 已代理安装节点</li><li>flase 未代理安装节点</li></ul> | true                           |
| alarm_status                                               | string                                                     | 警报状态<br />集群出现故障                                   |                                |
| app_id                                                     | string                                                     | 集群所拥有的应用程序 id<br />根据集群所有的应用程序不同，获取到的app_id也不同 | app-w3rfs72o                   |
| app_version                                                | string                                                     | 集群拥有的应用程序版本                                       | app-mkfs3s2ok                  |
| auto_backup                                                | int                                                        | 是否自动备份，可能值：<ul><li>0</li><li>1</li></ul>          | 1                              |
| backup_policy                                              | string                                                     | 备份策略                                                     | null                           |
| backup_service                                             | string                                                     | 备份服务                                                     | null                           |
| chang_vxnet_service                                        | string                                                     | 更改网络服务                                                 | null                           |
| cluster_id                                                 | string                                                     | 节点所存在的集群 id                                          | cl-jfj8y9zy                    |
| console_id                                                 | string                                                     | 节点所存在的控制台 id                                        | shanhe                         |
| controller                                                 | string                                                     | 控制器                                                       | self                           |
| cpu                                                        | int                                                        | 节点所在集群所拥有的 cpu 个数                                | 1                              |
| cpu_model                                                  | string                                                     | cpu 处理器型号                                               | CascadeLake                    |
| create_time                                                | string                                                     | 节点创建时间                                                 | 2021-08-17T09:09:09Z           |
| custom_metadata                                            | string                                                     | 自定义元数据                                                 | null                           |
| custom_metadata_scrpit                                     | string                                                     | 自定义元数据脚本                                             | null                           |
| delete_sanpshot_service                                    | string                                                     | 删除快照服务                                                 | null                           |
| destroy_service                                            | string                                                     | 销毁服务                                                     | null                           |
| display_tabs                                               | string                                                     | 显示标签                                                     | null                           |
| eip                                                        | string                                                     | 是否有绑定eip，可能值<ul><li>为空就表示该节点未绑定eip</li><li>节点所绑定的eip值</li></ul> |                                |
| e'ip_class                                                 | string                                                     | 绑定的eip类                                                  | null                           |
| env                                                        | string                                                     | 环境信息，组id，密码、nas路径、用户名、用户id                |                                |
| exchange_reserved_ips_service                              | string                                                     | 交换保留ip服务                                               | null                           |
| extra_vxnets                                               | string                                                     | 额外的网络                                                   |                                |
| get_nodes_order_service                                    | string                                                     | 获取节点订购服务                                             | null                           |
| global_server_id                                           | int                                                        | 全局服务器的id                                               | 628573132                      |
| gpu                                                        | int                                                        | gpu                                                          | 0                              |
| gpu_class                                                  | int                                                        | gpu类型                                                      | 0                              |
| group_id                                                   | int                                                        | 节点组id                                                     | 1                              |
| health_chaeck                                              | string                                                     | 节点健康检查                                                 | null                           |
| host_machine                                               | string                                                     | 主机名称                                                     | shanher02n02                   |
| hypervisor                                                 | string                                                     | 管理程序名称                                                 | kvm                            |
| iass_agent_install                                         | bool                                                       | iass代理安装<br />可能值<ul><li>true 已代理安装</li><li>false 未代理安装</li></ul> | true                           |
| incremental_backup_supported                               | bool                                                       | 支持增量备份<br />可能值<ul><li>true 支持</li><li>false 不支持</li></ul> | false                          |
| init_service                                               | list                                                       | 初始化服务信息列表，运行命令信息                             |                                |
| instance                                                   | list                                                       | 实例信息列表，包含实例id、volume id、区id等相关信息          |                                |
| instance_id                                                | string                                                     | 实例 id                                                      | i-cley6bg3                     |
| instance_type                                              | string                                                     | 实例类型                                                     |                                |
| interval_custom_service                                    | string                                                     | 间隔定制服务                                                 | null                           |
| is_backup                                                  | int                                                        | 是否备份<br />可能值<ul><li>0</li><li>1                      | 0                              |
| keypair_ids                                                | string                                                     | 密钥id<br />如果存在密钥则显示密钥id<br />未存在怎获取空     |                                |
| memory                                                     | int                                                        | 存储大小                                                     | 2048                           |
| moitor                                                     | string                                                     | 监控                                                         | null                           |
| mulit_zone_policy                                          | string                                                     | 多区域政策                                                   | unsupported                    |
| name                                                       | string                                                     | 节点名称                                                     | 登录节点1                      |
| nas_mount_point                                            | string                                                     | nas文件挂载点<br />挂载由用户自行设置                        | /pubilc/shanhe/s07023          |
| node_id                                                    | string                                                     | 节点 id                                                      | cln_2ediswnc                   |
| os_reset                                                   | bool                                                       | 是否重置操作系统                                             | false                          |
| owner                                                      | string                                                     | 节点所属者                                                   | usr-vceaHsJu                   |
| place_group_id                                             | string                                                     | 节点处于何组 id                                              | plg-00000003                   |
| private_ip                                                 | string                                                     | 私有 ip                                                      | 172.20.0.3                     |
| pub_key                                                    | string                                                     | 公共密钥                                                     | null                           |
| reserved_password                                          | string                                                     | 保留密码                                                     |                                |
| reset_password                                             | list                                                       | 重置密码列表，包含更改密码、服务参数、超时信息、类型、命令等相关信息 |                                |
| resource_class                                             | int                                                        | 资源类                                                       | 6                              |
| resatrt_service                                            | string                                                     | 重启节点服务                                                 | null                           |
| restore_service                                            | string                                                     | 恢复节点服务                                                 | null                           |
| role                                                       | string                                                     | 节点角色类型                                                 | login                          |
| root_user_id                                               | string                                                     | 根用户 id                                                    | usr-vceaHsJu                   |
| status                                                     | string                                                     | 节点状态                                                     | active                         |
| status_times                                               | string                                                     | 节点状态获取时间                                             | 2021-08-17T09:11:54Z           |

## 示例

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/listNodes
&cluster_id=ehpc-qmmvigwe
&COMMON_PARAMS
```

### 响应示例

```json
action: "HpcClusterGetClusterNodesResponse"
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
	env: "				{\"admin_user\":\"admin\",\"nfs_dns\":\"\",\"admin_user_id\":41522,\"nfs_export\":\"\",\"start_hook_on\":0,\"nfs_network\":\"\",\"nfs_need\":0,\"admin_password\":\"*********\",\"admin_group_id\":41522,\"nas_path\":\"10.0.0.7@o2ib:/lustrefs/nscc/s0723\",\"nfs_local\":\"\",\"software\":\"[]\"}"
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
