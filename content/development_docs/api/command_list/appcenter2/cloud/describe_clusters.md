---
title: "DescribeClusters"
description: 
draft: false
---



获取一个或多个集群的信息

可根据集群ID，状态，应用ID，应用版本ID，类型，私网ID，标签等作为过滤条件，来获取集群列表。如果不指定任何过滤条件，则返回你所拥有的所有集群。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| clusters.n | String | 集群ID | Yes |
| apps.n | String | 集群所属的应用ID，一个或多个 | No |
| scope | String | 集群的类型，可选类型为app,cfgmgmt，默认为app类型 |
| app_versions.n | String | 集群所属的应用版本ID，一个或多个 | No |
| cluster_name | String | 集群的名称 | No |
| link | String | 集群的外部依赖，格式如`{"limits": {"app-d8yrwihf":["v1-1", "v1-2"], "app_id2": []}`| No |
| external_cluster_id | String | 集群依赖集群ID | No |
| status.n | String | 集群状态: active,suspended,deleted,ceased | No |
| vxnet | String | 网络ID | No |
| auto_scale_step | String | 自动伸缩选项配置: volume_size，count | No |
| tags.n | String | 按照标签ID过滤，只返回已绑定某标签的资源 | No |
| owner | String | 按照用户账户过滤，只返回指定账户的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回集群相关其它资源信息 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| reverse | Integer | 是否逆序，1为逆序，0为正序 | No |
| zone | String | 区域ID，注意要小写 | No |

[_公共参数_](../../../../parameters/)


**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | Integer | 集群的总数量 |
| cluster_set | Array | 集群的集合，为Cluster格式 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

Cluster的格式

| Name | Type | Description |
| --- | --- | --- |
| global_uuid | String | 集群全局uuid |
| auto_backup_time | Integer | -1表示为设置自动备份 |
| health_check_enablement | Dict | 是否设置了健康检查，格式为`{"roleA": true, "roleB": false}`，如应用只有一个角色，则格式为`{"":true}`|
| app_id | String | 集群所属应用的ID |
| custom_service | Dict | 集群的Custom Service配置 |
| advanced_actions | Dict | 集群支持的操作，格式为`{"roleA": ["change_vxnet", "scale_horizontal"]}`, `change_vxnet`表示支持切换私网，`scale_horizontal`表示支持横向伸缩|
| console_id | String | 集群所在的console ID |
| create_time | String | 集群的创建时间 |
| cluster_id | String | 集群的ID |
| owner | String | 集群的所有者ID |
| upgrade_time | String | 集群升级的时间 |
| incremental_backup_supported | String | 集群是否支持增量备份 |
| display_tabs | Dict | 集群的display tabs配置，具体参见开发者文档 |
| cluster_type | Integer | 0表示为AppCenter2.0集群，1表示为AppCenter1.0集群 |
| security_group_id | String | 集群绑定的防火墙ID |
| upgrade_status | String | 集群升级操作的状态 |
| node_count | Integer | 集群的节点数量 |
| app_version | String | 集群所属的应用版本ID |
| role_count | Dict | 集群分角色的节点数量，格式为`{"roleA": 2, "roleB": 1}` |
| status | String | 集群当前的状态，为 active，deleted, ceased, suspended |
| description | String | 集群的描述信息 |
| tags | Array | 集群的tag信息，如果有绑定的话 |
| app_info | Dict | 集群所属的APP信息，格式为`{"app_name":"ZooKeeper", "app_id":"app-dddcsdfs", "icon":"ca-iwsdfsf"}`|
| transition_status | String | 集群的中间状态，为creating,updating,deleting,ceasing|
| root_user_id | String | 集群所属用户的主账号ID |
| name | String | 集群的名称 |
| roles | Array | 集群节点角色　|
| lastest_snapshot_time | String | 最新的备份的时间 |
| vxnet | Dict | 集群所在的网络信息，格式为`{"vxnet_name": "zoo", "vxnet_type": 1, "vxnet_id": "vxnet-diasfd", "vpc_router_id": "rtr-23145adf"}`，vxnet_type为网络的类型，1表示为私有网络，vpc_router_id表示网络所在VPC的ID |
| auto_scale_step | Dict | 集群各角色各项配置参数的自动伸缩步长值，格式为`{"master": {"count": 1}, "slave": {"volume_size": 20}}`，count的值表示该角色每次自动伸缩的节点数量，volume_size的值表示该角色每次自动伸缩的磁盘大小 |
| backup_policy| String | 集群备份的策略，具体参考开发者文档 |
| endpoints | Dict | 集群的endpoints设置，具体参考开发者文档 |
| app_version_info | Dict | 集群所属的应用版本信息，格式为`{ "status_time":"2017-04-21T02:34:24Z", "upgrade_policy":[], "resource_kit":"ca-nx8rerlv", "version_id":"appv-70gegwmp", "name":"QingCloud 1.0 - ZooKeeper 3.4.9" } `|


**Example**

下列返回结果为应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)所创建的集群

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeClusters
&clusters.1=cl-q1witcdk
&limit=20
&reverse=1
&scope=app
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```json
{
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
        "name":"QingCloud 1.0 - ZooKeeper 3.4.9"
      }
    }
  ],
  "ret_code":0
}


```


