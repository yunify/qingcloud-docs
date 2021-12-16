---
title: "DescribeClusterNodes"
description: 本小节主要介绍 ClickHouse 获取集群节点信息的接口。 
keyword: ClickHouse 获取集群节点信息，获取集群节点信息
weight: 30
collapsible: false
draft: false
---



获取集群的节点信息。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群 ID。 | Yes |
| cluster_nodes.n | String | 集群节点 ID。 | No |
| role | String | 集群节点角色。 | No |
| verbose | Integer | 是否返回冗长的信息。目前 verbose 只支持为 0。 | No
| offset | Integer | 数据偏移量。默认为0。 | No
| limit | Integer | 返回数据长度。默认为20，最大100。 | No
| reverse | Integer | 是否逆序。1为逆序，0为正序。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| total_count | Integer | 节点的总数量。 |
| node_set | Array | JSON 格式的节点列表。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

### 响应项

https://docs.qingcloud.com/appcenter/docs/specifications/specifications.html

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| app_id | String | 应用 ID。 |
| node_id | String | 节点 ID。 |
| group_id | Integer | 节点所在的 Group ID。 |
| cluster_id | String | 集群 ID。 |
| vxnet_id | String | 节点所在网络 ID。 |
| private_ip | String | 节点的私有 IP 地址。 |
| role | String | 节点的角色。 |
| name | String | 节点名称。 |
| memory | Integer | 节点的内存大小，单位 MB。 |
| app_version | String | 应用版本 ID。 |
| status | String | 节点的状态，`active`。 |
| storage_size| Integer | 节点的存储大小，单位 GB。|
| image_id | String | 节点的镜像 ID。 |
| eip | String | 节点绑定的公网或基础网络 IP。 |
| volume_type | Integer | 节点存储类型。 |
| instance_id | String | 节点的云服务器 ID。 |
| instance_type | String | 节点的云服务器类型。 |
| security_group | String | 节点绑定的防火墙 ID。 |
| cpu | Integer | 节点的 CPU。 |
| health_status | String | 节点的健康状态，`healthy` 或 `unhealthy`。|
| env | String | JSON 格式的环境变量值。　|
| vertical_scaling_policy | String | 节点纵向扩容配置。<li>`sequential` 表示依次扩容。<li>`parallel` 表示同时扩容。 |
| advanced_actions | String | 节点支持的操作。<li>`change_vxnet`表示切换私网。<li>`scael_horizontal`表示横向扩容。|
| agent_installed | boolen | 节点是否安装 agent。 |
| user_access | Integer | 节点是否支持用户 VNC 登录。`0`表示不支持。 |
| gpu_class | Integer | 节点是否支持 GUP。`0`表示不支持，`1`表示支持。 |
| gpu | Integer | 节点的 GUP 数量。`0` 表示当前节点没有 GUP。 |
| single_node_repl | String |单备用节点。 |
| backup_policy | String | 备份策略。 |
| incremental_backup_supported | boolen | 是否支持增量备份。 |
| resource_class | Integer | 节点的资源类型。 |
| hypervisor | Integer | 节点的虚拟化类型。 |
| health_check | String | JSON 格式的健康检查配置。 |
| monitor | String | JSON。格式的数据监控配置。 |
| init_service | String | JSON。格式的初始化命令。 |
| start_service | String | JSON 格式的启动命令。　|
| stop_service | String | JSON 格式的停止命令。 |
| restart_service | String | JSON 格式的重启命令。 |
| scale_in_service | String | JSON 格式的删除节点命令。 |
| scale_out_service | String | JSON 格式的增加节点命令。 |
| destroy_service | String | JSON 格式的销毁命令。|
| restore_service | String | JSON 格式的停止命令。 |
| delete_snapshot_service | String | JSON 格式的删除备份命令。 |
| custom_metadata_script | String | JSON 格式的自定义 metadata 脚本。|
| display_tabs | String | JSON 格式的 display tabs 命令。 |
| backup_service | String | JSON 格式的备份命令。 |
| create_time | TimeStamp | 日志创建时间，为 UTC 时间。格式可参见 ISO8601。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DescribeClusterNodes
&cluster=cl-q1witcdk
&limit=20
&reverse=1
&zone=pke3b
&COMMON_PARAMS
```

### 响应示例

```json
{
  "action":"DescribeClusterNodesResponse",
  "total_count":3,
  "node_set":[
    {
      "passphraseless":"",
      "vertical_scaling_policy":"sequential",
      "vxnet_id":"vxnet-pmefzgi",
      "destroy_service":null,
      "custom_service":null,
      "app_id":"app-tg3lbp0a",
      "advanced_actions":"change_vxnet,scale_horizontal",
      "agent_installed":true,
      "stop_service":{
        "cmd":"/opt/zookeeper/bin/rest.sh stop;/opt/zookeeper/bin/zkServer.sh stop",
        "order":0
      },
      "user_access":0,
      "create_time":"2018-03-04T06:00:15Z",
      "cluster_id":"cl-q1witcdk",
      "private_ip":"192.168.0.3",
      "upgrade_service":null,
      "gpu_class":0,
      "restore_service":null,
      "monitor":{
        "enable":true,
        "items":{
          "received":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "avg":{
            "scale_factor_when_display":1,
            "statistics_type":"avg",
            "value_type":"int",
            "unit":"ms"
          },
          "outstanding":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "max":{
            "scale_factor_when_display":1,
            "statistics_type":"max",
            "value_type":"int",
            "unit":"ms"
          },
          "min":{
            "scale_factor_when_display":1,
            "statistics_type":"min",
            "value_type":"int",
            "unit":"ms"
          },
          "mode":{
            "value_type":"str",
            "enums":[
              "L",
              "F",
              "S"
            ],
            "statistics_type":"latest",
            "unit":""
          },
          "active":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "znode":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"znode_count"
          },
          "sent":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          }
        },
        "alarm":[
          "avg"
        ],
        "cmd":"/opt/zookeeper/bin/get-monitor.sh",
        "groups":{
          "connections":[
            "active",
            "outstanding"
          ],
          "latency":[
            "min",
            "avg",
            "max"
          ],
          "throughput":[
            "received",
            "sent"
          ]
        },
        "display":[
          "mode",
          "latency",
          "throughput",
          "connections",
          "znode"
        ]
      },
      "single_node_repl":"",
      "health_status":"healthy",
      "role":"",
      "incremental_backup_supported":false,
      "env":null,
      "memory":2048,
      "status_time":"2018-03-04T06:02:04Z",
      "restart_service":null,
      "app_version":"appv-70gegwmp",
      "status":"active",
      "health_check":{
        "enable":true,
        "timeout_sec":10,
        "healthy_threshold":2,
        "interval_sec":60,
        "unhealthy_threshold":2,
        "check_cmd":"echo srvr | nc 127.0.0.1 2181",
        "action_cmd":"/opt/zookeeper/bin/restart-server.sh",
        "action_timeout_sec":30
      },
      "scale_in_service":null,
      "transition_status":"",
      "storage_size":10,
      "server_id_upper_bound":255,
      "image_id":"img-svm7yple",
      "init_service":null,
      "repl":"rpp-00000000",
      "gpu":0,
      "name":"",
      "eip":"",
      "start_service":{
        "cmd":"/opt/zookeeper/bin/zkServer.sh start;/opt/zookeeper/bin/rest.sh start",
        "order":0
      },
      "resource_class":0,
      "hypervisor":"kvm",
      "delete_snapshot_service":null,
      "volume_type":0,
      "instance_id":"i-blny8gpg",
      "instance_type":"",
      "scale_out_service":null,
      "node_id":"cln-35iuqdjz",
      "custom_metadata_script":null,
      "security_group":"",
      "alarm_status":"",
      "backup_policy":null,
      "group_id":1,
      "backup_service":null,
      "cpu":1,
      "display_tabs":null
    },
    {
      "passphraseless":"",
      "vertical_scaling_policy":"sequential",
      "vxnet_id":"vxnet-pmefzgi",
      "destroy_service":null,
      "custom_service":null,
      "app_id":"app-tg3lbp0a",
      "advanced_actions":"change_vxnet,scale_horizontal",
      "agent_installed":true,
      "stop_service":{
        "cmd":"/opt/zookeeper/bin/rest.sh stop;/opt/zookeeper/bin/zkServer.sh stop",
        "order":0
      },
      "user_access":0,
      "create_time":"2018-03-04T06:00:15Z",
      "cluster_id":"cl-q1witcdk",
      "private_ip":"192.168.0.2",
      "upgrade_service":null,
      "gpu_class":0,
      "restore_service":null,
      "monitor":{
        "enable":true,
        "items":{
          "received":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "avg":{
            "scale_factor_when_display":1,
            "statistics_type":"avg",
            "value_type":"int",
            "unit":"ms"
          },
          "outstanding":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "max":{
            "scale_factor_when_display":1,
            "statistics_type":"max",
            "value_type":"int",
            "unit":"ms"
          },
          "min":{
            "scale_factor_when_display":1,
            "statistics_type":"min",
            "value_type":"int",
            "unit":"ms"
          },
          "mode":{
            "value_type":"str",
            "enums":[
              "L",
              "F",
              "S"
            ],
            "statistics_type":"latest",
            "unit":""
          },
          "active":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "znode":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"znode_count"
          },
          "sent":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          }
        },
        "alarm":[
          "avg"
        ],
        "cmd":"/opt/zookeeper/bin/get-monitor.sh",
        "groups":{
          "connections":[
            "active",
            "outstanding"
          ],
          "latency":[
            "min",
            "avg",
            "max"
          ],
          "throughput":[
            "received",
            "sent"
          ]
        },
        "display":[
          "mode",
          "latency",
          "throughput",
          "connections",
          "znode"
        ]
      },
      "single_node_repl":"",
      "health_status":"healthy",
      "role":"",
      "incremental_backup_supported":false,
      "env":null,
      "memory":2048,
      "status_time":"2018-03-04T06:01:58Z",
      "restart_service":null,
      "app_version":"appv-70gegwmp",
      "status":"active",
      "health_check":{
        "enable":true,
        "timeout_sec":10,
        "healthy_threshold":2,
        "interval_sec":60,
        "unhealthy_threshold":2,
        "check_cmd":"echo srvr | nc 127.0.0.1 2181",
        "action_cmd":"/opt/zookeeper/bin/restart-server.sh",
        "action_timeout_sec":30
      },
      "scale_in_service":null,
      "transition_status":"",
      "storage_size":10,
      "server_id_upper_bound":255,
      "image_id":"img-svm7yple",
      "init_service":null,
      "repl":"rpp-00000000",
      "gpu":0,
      "name":"",
      "eip":"",
      "start_service":{
        "cmd":"/opt/zookeeper/bin/zkServer.sh start;/opt/zookeeper/bin/rest.sh start",
        "order":0
      },
      "resource_class":0,
      "hypervisor":"kvm",
      "delete_snapshot_service":null,
      "volume_type":0,
      "instance_id":"i-x6uksame",
      "instance_type":"",
      "scale_out_service":null,
      "node_id":"cln-oruuckuo",
      "custom_metadata_script":null,
      "security_group":"",
      "alarm_status":"",
      "backup_policy":null,
      "group_id":2,
      "backup_service":null,
      "cpu":1,
      "display_tabs":null
    },
    {
      "passphraseless":"",
      "vertical_scaling_policy":"sequential",
      "vxnet_id":"vxnet-pmefzgi",
      "destroy_service":null,
      "custom_service":null,
      "app_id":"app-tg3lbp0a",
      "advanced_actions":"change_vxnet,scale_horizontal",
      "agent_installed":true,
      "stop_service":{
        "cmd":"/opt/zookeeper/bin/rest.sh stop;/opt/zookeeper/bin/zkServer.sh stop",
        "order":0
      },
      "user_access":0,
      "create_time":"2018-03-04T06:00:15Z",
      "cluster_id":"cl-q1witcdk",
      "private_ip":"192.168.0.4",
      "upgrade_service":null,
      "gpu_class":0,
      "restore_service":null,
      "monitor":{
        "enable":true,
        "items":{
          "received":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "avg":{
            "scale_factor_when_display":1,
            "statistics_type":"avg",
            "value_type":"int",
            "unit":"ms"
          },
          "outstanding":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "max":{
            "scale_factor_when_display":1,
            "statistics_type":"max",
            "value_type":"int",
            "unit":"ms"
          },
          "min":{
            "scale_factor_when_display":1,
            "statistics_type":"min",
            "value_type":"int",
            "unit":"ms"
          },
          "mode":{
            "value_type":"str",
            "enums":[
              "L",
              "F",
              "S"
            ],
            "statistics_type":"latest",
            "unit":""
          },
          "active":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          },
          "znode":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"znode_count"
          },
          "sent":{
            "scale_factor_when_display":1,
            "statistics_type":"latest",
            "value_type":"int",
            "unit":"count"
          }
        },
        "alarm":[
          "avg"
        ],
        "cmd":"/opt/zookeeper/bin/get-monitor.sh",
        "groups":{
          "connections":[
            "active",
            "outstanding"
          ],
          "latency":[
            "min",
            "avg",
            "max"
          ],
          "throughput":[
            "received",
            "sent"
          ]
        },
        "display":[
          "mode",
          "latency",
          "throughput",
          "connections",
          "znode"
        ]
      },
      "single_node_repl":"",
      "health_status":"healthy",
      "role":"",
      "incremental_backup_supported":false,
      "env":null,
      "memory":2048,
      "status_time":"2018-03-04T06:01:59Z",
      "restart_service":null,
      "app_version":"appv-70gegwmp",
      "status":"active",
      "health_check":{
        "enable":true,
        "timeout_sec":10,
        "healthy_threshold":2,
        "interval_sec":60,
        "unhealthy_threshold":2,
        "check_cmd":"echo srvr | nc 127.0.0.1 2181",
        "action_cmd":"/opt/zookeeper/bin/restart-server.sh",
        "action_timeout_sec":30
      },
      "scale_in_service":null,
      "transition_status":"",
      "storage_size":10,
      "server_id_upper_bound":255,
      "image_id":"img-svm7yple",
      "init_service":null,
      "repl":"rpp-00000000",
      "gpu":0,
      "name":"",
      "eip":"",
      "start_service":{
        "cmd":"/opt/zookeeper/bin/zkServer.sh start;/opt/zookeeper/bin/rest.sh start",
        "order":0
      },
      "resource_class":0,
      "hypervisor":"kvm",
      "delete_snapshot_service":null,
      "volume_type":0,
      "instance_id":"i-aib1f523",
      "instance_type":"",
      "scale_out_service":null,
      "node_id":"cln-yrlus78f",
      "custom_metadata_script":null,
      "security_group":"",
      "alarm_status":"",
      "backup_policy":null,
      "group_id":3,
      "backup_service":null,
      "cpu":1,
      "display_tabs":null
    }
  ],
  "ret_code":0
}

```


