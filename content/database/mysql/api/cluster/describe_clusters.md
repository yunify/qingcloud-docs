---
title: "DescribeClusters"
description: 本小节主要介绍 MySQL Plus 获取集群信息的接口。 
keyword: mysql plus 获取集群信息，获取集群信息
weight: 28
collapsible: false
draft: false
---



获取一个或多个集群的信息。

可根据集群 ID，状态，应用 ID，应用版本 ID，类型，私网 ID，标签等作为过滤条件，来获取集群列表。如果不指定任何过滤条件，则返回你所拥有的所有集群。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| clusters.n | String | 集群 ID。 | Yes |
| apps.n | String | 集群所属的应用 ID，一个或多个。 | No |
| scope | String | 集群的类型。<li>可选类型为 `app`、`cfgmgmt`。<li>默认为 `app` 类型。 |
| app_versions.n | String | 集群所属的应用版本 ID，一个或多个。 | No |
| cluster_name | String | 集群的名称。 | No |
| link | String | 集群的外部依赖。格式如 `{"limits": {"app-d8yrwihf":["v1-1", "v1-2"], "app_id2": []}`。| No |
| external_cluster_id | String | 集群依赖集群。ID。 | No |
| status.n | String | 集群状态。<li>active<li>suspended<li>deleted<li>ceased | No |
| vxnet | String | 网络 ID。 | No |
| auto_scale_step | String | 自动伸缩选项配置。<li> volume_size <li>count | No |
| tags.n | String | 按照标签 ID 过滤。只返回已绑定某标签的资源。 | No |
| owner | String | 按照用户账户过滤。只返回指定账户的资源。 | No |
| verbose | Integer | 是否返回冗长的信息。若为 `1`，则返回集群相关其它资源信息。 | No |
| offset | Integer | 数据偏移量。默认为 0。 | No |
| limit | Integer | 返回数据长度。默认为 20，最大 100。 | No |
| reverse | Integer | 是否逆序。1。为逆序，0 为正序 。 | No |
| zone | String | 区域 ID。注意要小写。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| total_count | Integer | 集群的总数量。 |
| cluster_set | Array | 集群的集合，为 Cluster 格式。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

### Cluster 参数项

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| global_uuid | String | 集群全局 UUID 。 |
| auto_backup_time | Integer |自动备份时间。<li> `-1` 表示为设置自动备份。 |
| health_check_enablement | Dict | 是否设置了健康检查。格式为 `{"roleA": true, "roleB": false}`。如应用只有一个角色，则格式为`{"":true}`。|
| app_id | String | 集群所属应用的 ID。 |
| custom_service | Dict | 集群的 Custom Service。配置。 |
| advanced_actions | Dict | 集群支持的操作。格式为`{"roleA": ["change_vxnet", "scale_horizontal"]}`。<li> `change_vxnet`表示支持切换私网。<li>`scale_horizontal`表示支持横向伸缩。|
| console_id | String | 集群所在的 console ID。 |
| create_time | String | 集群的创建时间。 |
| cluster_id | String | 集群的 ID。 |
| owner | String | 集群的所有者 ID。 |
| upgrade_time | String | 集群升级的时间。|
| incremental_backup_supported | String | 集群是否支持增量备份。 |
| display_tabs | Dict | 集群的 display tabs配置。|
| cluster_type | Integer | 0 表示为 AppCenter2.0 集群，1 表示为 AppCenter1.0集群。 |
| security_group_id | String | 集群绑定的防火墙 ID。 |
| upgrade_status | String | 集群升级操作的状态 。|
| node_count | Integer | 集群的节点数量。 |
| app_version | String | 集群所属的应用版本 ID。 |
| role_count | Dict | 集群分角色的节点数量。格式为。`{"roleA": 2, "roleB": 1}`。 |
| status | String | 集群当前的状态。<li> active <li>deleted <li>ceased <li>suspended |
| description | String | 集群的描述信息. |
| tags | Array | 集群的 tag 信息。 |
| app_info | Dict | 集群所属的 APP 信息。格式为 `{"app_name":"ZooKeeper", "app_id":"app-dddcsdfs", "icon":"ca-iwsdfsf"}`。|
| transition_status | String | 集群的中间状态。<li>creating <li>updating <li>deleting <li>ceasing|
| root_user_id | String | 集群所属用户的主账号 ID。 |
| name | String | 集群的名称。 |
| roles | Array | 集群节点角色。　|
| lastest_snapshot_time | String | 最新的备份的时间。 |
| vxnet | Dict | 集群所在的网络信息。格式为 `{"vxnet_name": "zoo", "vxnet_type": 1, "vxnet_id": "vxnet-diasfd", "vpc_router_id": "rtr-23145adf"}`。<li>`vxnet_type` 为网络的类型，`1`表示为私有网络。<li>`vpc_router_id` 表示网络所在 VPC 的 ID。 |
| auto_scale_step | Dict | 集群各角色各项配置参数的自动伸缩步长值。<br>格式为`{"master": {"count": 1}, "slave": {"volume_size": 20}}`。<li>`count`表示该角色每次自动伸缩的节点数量。<li>`volume_size`表示该角色每次自动伸缩的磁盘大小。 |
| backup_policy| String | 集群备份的策略。 |
| endpoints | Dict | 集群的 endpoints 设置。 |
| app_version_info | Dict | 集群所属的应用版本信息。<li>格式为 `{ "status_time":"2017-04-21T02:34:24Z", "upgrade_policy":[], "resource_kit":"ca-nx8rerlv", "version_id":"appv-70gegwmp", "name":"v1.0 - ZooKeeper 3.4.9" } `|

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DescribeClusters
&clusters.1=cl-q1witcdk
&limit=20
&reverse=1
&scope=app
&zone=pek3a
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "action":"DescribeClustersResponse",
  "total_count":1,
  "cluster_set":[
    {
      "auto_backup_time":-1,
      "health_check_enablement":{
        "":true
      },
      "custom_service":{},
      "app_id":"app-tg3lbp0a",
      "advanced_actions":{
        "":"change_vxnet,scale_horizontal"
      },
      "upgrade_policy":[],
      "create_time":"2018-03-04T06:00:15Z",
      "cluster_id":"cl-q1witcdk",
      "owner":"usr-NzTfAWek",
      "upgrade_time":"2018-03-04T06:00:15Z",
      "incremental_backup_supported":false,
      "display_tabs":{},
      "sub_code":0,
      "add_links":null,
      "security_group_id":"",
      "upgrade_status":"",
      "status_time":"2018-03-04T06:02:26Z",
      "node_count":3,
      "app_version":"appv-70gegwmp",
      "role_count":{
        "":3
      },
      "status":"active",
      "description":"",
      "tags":[],
      "app_info":{
        "app_name":"ZooKeeper on QingCloud",
        "app_id":"app-tg3lbp0a",
        "icon":"ca-iwg9qvsx"
      },
      "transition_status":"",
      "partner_access":false,
      "name":"ZooKeeper",
      "roles":[
        ""
      ],
      "auto_scale_step":{
        "":{
          "count":1,
          "volume_size":20
        }
      },
      "lastest_snapshot_time":null,
      "vxnet":{
        "vxnet_name":"",
        "vxnet_type":1,
        "vxnet_id":"vxnet-pmefzgi",
        "vpc_router_id":"rtr-bk8fnw71"
      },
      "debug":false,
      "backup_policy":null,
      "endpoints":{
        "client":{
          "protocol":"tcp",
          "port":2181
        },
        "rest":{
          "protocol":"tcp",
          "port":9998
        }
      },
      "backup":{
        "":false
      },
      "app_version_info":{
        "status_time":"2017-04-21T02:34:24Z",
        "upgrade_policy":[],
        "resource_kit":"ca-nx8rerlv",
        "version_id":"appv-70gegwmp",
        "name":"v1.0 - ZooKeeper 3.4.9"
      }
    }
  ],
  "ret_code":0
}”
```
