---
title: "API 概览"
description: 本小节主要介绍 ClickHouse 集群 主要 api。 
keyword: ClickHouse 概览；api 概览
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
| [RunClusterCustomService](../cluster/custom_service)    |  自定义服务。       |

## 自定义服务接口

|<span style="display:inline-block;width:240px">参数</span> |<span style="display:inline-block;width:320px">描述</span>|
| :--- |  :--- | 
| [add_users](../cluster_service/add_user)    | 创建数据库用户帐号。       |
| [modify_users](../cluster_service/modify_user)    | 修改数据库用户帐号信息。       |
| [remove_users](../cluster_service/delete_user)    |  删除数据库用户帐号。       |
| [start_caddy](../cluster_service/enable_log_server)    |  开启 Caddy Server 日志服务。       |
| [stop_caddy](../cluster_service/disable_log_server)    |  关闭 Caddy Server 日志服务。       |
| [create_oss_policies](../cluster_service/create_oss_policies)    |  创建对象存储服务。       |
| [delete_oss_policies](../cluster_service/delete_oss_policies)    |  删除对象存储服务。        |
