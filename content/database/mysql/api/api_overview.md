---
title: "API 概览"
description: 本小节主要介绍 MySQL Plus 集群 主要 api。 
keyword: mysql plus 概览；api 概览
draft: false
weight: 06
collapsible: false
---



## 集群接口

|<span style="display:inline-block;width:240px">参数</span> |<span style="display:inline-block;width:320px">描述</span>|
| :--- |  :--- | 
| [DeployAppVersion](../cluster/deploy_app_version)    |  部署指定应用版本的集群。       |
| [DescribeAppVersionAttachments](../cluster/describe_app_version_attachments)    |  获取应用版本的配置文件。       |
| [StartClusters](../cluster/start_clusters)    |  启动集群。       |
| [RestartClusterService](../cluster/restart_cluster_service)    |  重启集群。       |
| [StopClusters](../cluster/stop_clusters)    |  关闭集群。       |
| [CeaseClusters](../cluster/cease_clusters)    |  彻底删除集群。       |
| [DeleteClusters](../cluster/delete_clusters)    |  删除集群。       |
| [RecoverClusters](../cluster/recover_clusters)    |  从回收站恢复集群。       |
| [DescribeAppVersions](../cluster/describe_app_versions)    |  获取应用版本信息。       |
| [DescribeClusterDisplayTabs](../cluster/describe_cluster_display_tabs)    |  获取集群 Display Tab 信息。       |
| [DescribeClusters](../cluster/describe_clusters)    |  获取集群信息。       |
| [DescribeClusterNodes](../cluster/describe_cluster_nodes)    |  获取集群节点信息。       |
| [DescribeClusterJobs](../cluster/describe_cluster_jobs)    |  获取集群操作日志。       |
| [AddClusterNodes](../cluster/add_cluster_nodes)    |  新增集群节点。       |
| [DeleteClusterNodes](../cluster/delete_cluster_nodes)    |  删除集群节点。       |
| [ResizeCluster](../cluster/resize_cluster)    |  扩容集群规格。       |
| [GetClusterMonitor](../cluster/get_cluster_monitor)    |  查看节点监控数据。       |
| [UpdateClusterEnvironment](../cluster/update_cluster_env)    |  修改节点环境变量。       |
| [DescribeClusterEnvironment](../cluster/describe_cluster_env)    |  获取集群节点环境变量。       |
| [AssociateEipToClusterNode](../cluster/associate_eip_to_cluster_node)    |  为集群节点绑定公网 IP。       |
| [DissociateEipFromClusterNode](../cluster/dissociate_eip_from_cluster_node)    |  绑定公网 IP。       |
| [ChangeClusterVxnet](../cluster/change_cluster_vxnet)    |  切换集群私有 IP。       |
| [ExchangeClusterReservedIps](../cluster/exchange_reserved_ips)    | 交换集群预留 IP。       |
| [RunClusterCustomService](../cluster/custom_service)    |  自定义服务。       |

## 自定义服务接口

|<span style="display:inline-block;width:240px">参数</span> |<span style="display:inline-block;width:320px">描述</span>|
| :--- |  :--- | 
| [restart_node](../cluster_service/restart_node)    |  重启某一类型节点。       |
| [rebuildme](../cluster_service/rebuild_node)    |  重建某一类型节点。       |
| [set_readonly](../cluster_service/assign_readonly_node)    |  开关主实例节点只读。       |
| [assignmaster](../cluster_service/assign_master_node)    |  指定主节点。       |
| [configuring_SSL](../cluster_service/config_ssl_node)    |  开启 SSL 传输加密。       |
| [add_user](../cluster_service/add_user)    | 创建数据库用户帐号。       |
| [add_ck_user](../cluster_service/add_ck_user)    |  创建分析实例用户帐号。       |
| [del_user](../cluster_service/delete_user)    |  删除数据库用户帐号。       |
| [del_ck_user](../cluster_service/delete_ck_user)    |  删除分析实例用户帐号。       |
| [migrate_data](../cluster_service/enable_migration)    |  开启数据在线迁移服务。       |
| [stop_migrate](../cluster_service/disable_migration)    |  停止数据在线迁移服务。       |
| [start_standby](../cluster_service/enable_standby)    |  开启异地灾备服务。       |
| [stop_standby](../cluster_service/disable_standby)    |  关闭异地灾备服务。       |
| [promote_standby](../cluster_service/promote_standby)    | 提升灾备。         |
| [start_log_server](../cluster_service/enable_log_server)    |  开启 Caddy Server 日志服务。       |
| [stop_log_server](../cluster_service/disable_log_server)    |  关闭 Caddy Server 日志服务。       |
| [start_zabbix](../cluster_service/enable_zabbix)    |  开启 Zabbix 监控服务。       |
| [stop_zabbix](../cluster_service/disable_zabbix)    |  关闭 Zabbix 监控服务。        |
