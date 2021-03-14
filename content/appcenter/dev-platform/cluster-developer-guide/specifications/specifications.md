---
title: "开发模板规范 - 完整版"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 6
---

## 基本介绍

如果想快速了解规范可以先阅读[应用开发模板规范 - 基础版](/appcenter/dev-platform/cluster-developer-guide/specifications/basic-specifications)。

开发者提交一个应用需要包含以下几个文件：

* config.json

  该文件包含最终用户创建此应用实例时需设置的参数等信息，包括各种角色的节点配置、参数配置等。

* cluster.json.mustache

  该文件包含创建此应用实例时的基础架构、应用实例生命周期管理和自定义监控告警等信息，这是一个改进版的 [mustache](http://mustache.github.io/) 文件。

* replace_policy.json
  
  类型替换策略
  
config.json 定义用户在 QingCloud 控制台部署应用时需要填写的表单。控制台支持语言国际化，默认情况下，所有语言都会按配置项中的 label 和 description 展示表单。另外，cluster.json.mustache 文件中的 custom service、监控项等，会使用 key 作为国际化展示。如果您想要适应不同的语言，需要在提交的应用中包含一个 locale 文件夹，并添加对应语言的翻译文件，如：
  
* locale/en.json

  英文翻译文件

* locale/zh-cn.json

  中文翻译文件

具体的翻译文件格式，请参考 [国际化](#国际化)

>注：以上文件不支持 "UTF-8 Unicode (with BOM) text" 文本格式，windows下的编辑器编辑文件默认是此格式，可通过 "格式-> 以utf-8无BOM格式编码" 进行转换。

## 规范

### config.json

此配置文件定义用户在创建应用的时候需填入的参数信息，参数包括资源信息如 CPU、内存、节点数等，还包括应用本身配置参数以及外面依赖集群信息等。

> 对于弹性裸金属服务器BM(BareMetal)类型的应用，不需要在 `config.json` 中配置CPU、内存、硬盘大小等信息，只需要配置弹性裸金属服务器的类型 `instance_type` 即可。

这些信息有集群级别的全局设置，也有基于角色节点级别的信息设置。下面是对每个参数详细的解释：

>注：role_name,	common.param名称自定义，右上角带3个星号(*)表示该项有 sibling (兄弟)节点，开发者提交的时候也要去掉这个标记。cluster 的 name 和 description 不需要自定义。另外，env 表示集群的环境变量，每一个变量的 key 会作为配置名直接展示给用户(key不能包含空格)，它的 label 属性可以是空字符串 ""。

```json
{
    "type": "array",
    "properties": [{
        "key": "cluster",
        "description": "cluster properties",
        "type": "array",
        "properties": [{
            "key": "name",
            "label": "Name",
            "description": "The name of the application",
            "type": "string",
            "default": "",
            "required": "no"
        }, {
            "key": "resource_group",
            "label": "Resource Configuration",
            "description": "The resource configuration of the service",
            "type": "string",
            "customizable": true,
            "default": "Standard",
            "range": ["Standard", "Enterprise", "Enterprise Plus"]
        }, {
            "key": "description",
            "label": "Description",
            "description": "The description of the application",
            "type": "string",
            "default": "",
            "required": "no"
        }, {
            "key": "vxnet",
            "label": "VxNet",
            "description": "The vxnet that the application will join",
            "type": "string",
            "default": "",
            "required": "yes"
        }, {***
            "key": "external_service",
            "label": "External Service",
            "description": "Choose an external service to use",
            "type": "service",
            "limits": {
                "app-id"***: ["app-version"***]
            },
            "allowed_operations": ["add", "modify", "delete"],
            "default": "",
            "required": "yes"
        }, {***
            "key": "role_name",
            "description": "role-based node properties",
            "label": "Role Name",
            "type": "array",
            "properties": [{
                "key": "loadbalancer",
                "label": "Loadbalancer Service",
                "description": "Choose a loadbalancer service to use",
                "type": "loadbalancer",
                "port": 80,
                "default": [],
                "required": "yes"
            }, {
                "key": "cpu",
                "label": "CPU",
                "description": "CPUs of each node",
                "type": "integer",
                "default": 1,
                "range": [1, 2, 4, 8, 16],
                "required": "yes",
                "resource_group": [1, 4, 16]
            }, {
                "key": "cpu_model",
                "label": "CPU Microarchitecture",
                "description": "CPU Microarchitecture",
                "type": "string",
                "default": "Westmere",
                "changeable_when_create": false,
                "range": [
                    "",
                    "Westmere",
                    "SandyBridge",
                    "IvyBridge",
                    "Haswell",
                    "Broadwell",
                    "Skylake",
                    "CascadeLake"
                ],
                "required": "no"
            }, {
                "key": "memory",
                "label": "Memory",
                "description": "Memory of each node (in MiB)",
                "type": "integer",
                "default": 2048,
                "range": [2048, 8192, 16384, 32768, 49152],
                "required": "yes"
            }, {
                "key": "gpu",
                "label": "GPU",
                "description": "GPUs of each node",
                "type": "integer",
                "default": 1,
                "range": [0, 1, 2],
                "required": "yes"
            }, {
                "key": "count",
                "label": "Count",
                "description": "Number of nodes for the cluster to create",
                "type": "integer",
                "default": 3,
                "max": 100,
                "min": 1,
                "required": "yes",
                "auto_scale_step": 2,
                "resource_group": [3, 5, 7]
            }, {
                "key": "instance_class",
                "label": "Instance Class",
                "description": "The instance type for the cluster to run，such as high performance，high performance plus",
                "type": "integer",
                "default": 101,
                "range": [101, 202],
                "required": "yes"
            }, {
                "key": "gpu_class",
                "label": "GPU Class",
                "description": "The gpu type for the cluster to run，such as high performance",
                "type": "integer",
                "default": 0,
                "range": [0, 2],
                "required": "yes"
            }, {
                "key": "volume_class",
                "label": "Volume Class",
                "description": "The volume type for each instance，such as high performance，high performance plus，high capacity",
                "type": "integer",
                "default": 100,
                "range": [100, 200, 5],
                "required": "yes"
            }, {
                "key": "volume_size",
                "label": "Volume Size",
                "description": "The volume size for each instance",
                "type": "integer",
                "default": 10,
                "min": 10,
                "step": 10,
                "auto_scale_step": 10,
                "required": "yes"
            }, {
                "key": "replica",
                "label": "Replica",
                "description": "The replica number for each node with this role",
                "type": "integer",
                "default": 1,
                "required": "yes"
            }]
        }]
    }, {
        "key": "env",
        "description": "application configuration properties",
        "type": "array",
        "properties": [{***
            "key": "common.param",
            "label": "Common Param",
            "description": "The common.param1 for all nodes",
            "type": "string",
            "changeable": true,
            "default": "value1,value11",
            "separator": ",",
            "range": ["value1", "value11", "value111"],
            "multichoice": true, 
            "system": false,
            "required": "yes",
            "expanded": true
        }, {***
            "key": "role_name",
            "description": "The role configuration properties of the application",
            "type": "array",
            "properties": [{***
                "key": "param",
                "label": "Role Param",
                "description": "The param for all slave nodes",
                "type": "string",
                "changeable": true,
                "default": "value1",
                "range": ["value1", "value11"],
                "required": "yes"
            }]
        }]
    }, {
        "key": "service_params",
        "description": "Custom service configuration properties",
        "type": "array",
        "properties": [{***
            "key": "common.param",
            "label": "Common Param",
            "description": "The common.param1 for all nodes",
            "type": "string",
            "default": "value1,value11",
            "separator": ",",
            "range": ["value1", "value11", "value111"],
            "multichoice": true,
            "required": "yes"
        }, {***
            "key": "role_name",
            "description": "Custom service the role (role_name) configuration properties",
            "type": "array",
            "properties": [{***
                "key": "param",
                "label": "Role Param",
                "description": "The param for all slave nodes",
                "type": "string",
                "pattern": "^value.+",
                "default": "value1",
                "range": ["value1", "value11"],
                "required": "yes"
            }]
        }]
    }]
}
```

对于弹性裸金属服务器 BM(BareMetal) 类型的应用，我们无需配置 CPU、内存、硬盘大小等参数，只需指定弹性裸金属服务器的类型即可，示例见 [config.json](/appcenter/dev-platform/cluster-developer-guide/specifications/bm/config.json)，与 `KVM` 类型应用稍有不同。

json 配置项中的每一项，都是一个含有 key、label、description、type、range 等参数的 object。配置项支持嵌套，若 type 为 array，则该项的 properties 填写一个有序列表，在用户部署应用的时候填写配置使用，因此需要注意配置项的顺序。配置项中各参数的解释如下：

| 参数| 描述 |
| --- | --- |
key|对应 [cluster.json.mustache](#clusterjsonmustache) 文件索引的值，例如 {{cluster.name}} 表示 config.json 中 cluster 内 key=name 的项用户所填写的值。
label|用户部署应用时，填写配置项的名称。如果提供了国际化的配置文件，会进行国际化。
description|用户部署应用时，填写配置项的描述。如果提供了国际化的配置文件，会进行国际化。
type|该配置项的类型，请参考 [数据类型](#数据类型)。
range|限定配置项的取值范围，是一个可枚举的数组。
multichoice|和 range 配合使用，定义为 true 则为多选，默认是 false 为单选。
separator|定义 multichoice 为 true 时有效，多选后多个值连接所使用的分隔符，默认值为逗号。
min|若配置项 type 为 integer 或 number(浮点数)，指定该项的最小值。
max|若配置项 type 为 integer 或 number(浮点数)，指定该项的最大值。若配置项是 volume_size，通常不建议指定该值。
step|若配置项是 volume_size，指定硬盘每次调整的最小步长单位。在每个云服务器挂多块盘时，通常需要指定该项。
auto_scale_step|自动伸缩的步长。若配置项是 volume_size，指定硬盘每次自动伸缩的步长单位；若配置项是 count，指定该类角色节点数自动伸缩的步长单位，可参考[自动伸缩](/operation/autoscaling/intro/intro/)。
pattern|正则表达式，可用该值规范填写内容。
default|该项的默认取值，若 required 设为 "no"，default 值必须提供。
customizable|若配置项是 resource_group，该项表示用户部署应用时，除 resource_group 中定义好的组合外，是否允许自定义。默认值是 true。
changeable_when_create|指示在用户`部署`时，是否允许修改该配置项。默认值是 true。
system|定义在某个 env 下，如果是 true，就会将这个变量的展示提升到最上层，优先让用户看到并选择。默认值是 false。
expanded|是否展开配置项，值范围：true、false。部署集群时，true 值会将配置项展开，false 值会将配置项折叠，优先级最高。
required|是否为必填项，值范围：yes、no。部署集群时，yes 值会将配置项展开，no 值会将配置项会折叠，优先级低于 expanded。
changeable|如果为 false 表示该项用户在创建应用实例时候需要赋值，创建完毕以后则不能修改，比如数据库实例用户名和密码等类型的参数，默认值为 true。
dependencies|当前配置项与其他配置项有依赖关系，值为：[{"refkey":"xxx","values":["value"],"operator":"in"}]，其中 refkey 表示依赖的同一级别的且有 range 配置项的 key；values 表示当选中依赖的配置项 key 的 value 值范围；operator 可选值为 in 或 nin，分别在 values 范围内或不在 values 范围内。样例参考：[环境变量里如何支持层级联动关系](/appcenter/dev-platform/faq/cluster-faqs#35-环境变量里如何支持层级联动关系)
associate_mode|type 是 eip 的 env 中，可定义此参数，表示公网 IP 绑定模式：0 为外部绑定，1 为内部绑定，默认是 0。

一些系统预留(即必须提供)的项含义如下：

| 参数| 描述 |
| --- | --- |
name|创建应用时用户填入的名称
description|创建应用时用户填入描述信息
vxnet|创建应用时所在网络ID

一些特殊项含义如下：

| 参数| 描述 |
| --- | --- |
external\_service|此应用依赖外部应用信息，名称可以任意定义，即可以命名为 zk_service 表示依赖 ZooKeeper，用户可以选择在同一 VPC 中满足 limits 限定条件的集群作为此应用依赖的服务。<br>limits 限定条件可以指定应用所依赖服务的 app id 及 app version。<br>`allowed_operations`　定义了在集群创建完成后，用户可对集群依赖进行的操作。<br>`add` 表示用户可以在集群创建后添加外部依赖集群，即使现在仍然有集群，仍然可添加<br>`modify` 表示用户可以对集群中现有的依赖集群进行替换，替换成允许的应用版本的其它集群<br> `delete` 表示用户可以删除集群中现有的依赖集群，如果未定义 `add` 操作，则删除之后不能再添加回来
resource\_group|用来说明当前这个集群支持哪些配置组合，必须定义range。<br>在 role 下的 cpu/memory/count/instance_class/volume_size/volume_class/replica 里面可以定义 resource_group,<br>表示每个 resource_group 对应的值。


### cluster.json.mustache
该文件是在用户创建应用时需要传给青云 API 的参数，这些信息的具体值是来自用户在 UI 上根据 config.json 定义的变量的输入，每个字段的具体描述如下：

>注： 右上角带3个星号(*)表示该项有 sibling (兄弟)节点，开发者提交的时候也要去掉这个标记。advanced_actions 的内容可以添加在国际化中，在控制台用户操作时展示。

> 对于弹性裸金属服务器 BM(BareMetal) 的应用，配置文件会稍有不同，具体是无需配置CPU、内存、硬盘大小，类型等信息，因为弹性裸金属服务器的这些信息是固定的。具体配置文件可以参见 [cluster.json.mustache](/appcenter/dev-platform/cluster-developer-guide/specifications/bm/cluster.json.mustache)


```mustache
{
    "name": {{cluster.name}},
    "description": {{cluster.description}},
    "vxnet": {{cluster.vxnet}},
    "need_tag": false,
    "links": {
        "external_service"***: {{cluster.external_service}}
    },
    "exclude_node_columns": ["private_ip"],
    "need_intranet_api_server": false,
    "backup_policy": "device",
    "incremental_backup_supported": false,
    "upgrade_policy": [
        "appv-xxxxxxxx",
        "appv-yyyyyyyy"
    ],
    "upgrading_policy": "parallel",
    "nodes": [{***
        "role": "role_name",
        "loadbalancer": {{cluster.role_name.loadbalancer}},
        "container": {
            "type": "kvm",
            "image": "img-skhdp16m",
            "zone": "pek3a"
        },       
        "cpu": {{cluster.role_name.cpu}},
        "cpu_model": {{cluster.role_name.cpu_model}},
        "memory": {{cluster.role_name.memory}},
        "instance_class": {{cluster.role_name.instance_class}},
        "gpu": {{cluster.role_name.gpu}},
        "gpu_class": {{cluster.role_name.gpu_class}},
        "count": {{cluster.role_name.count}},
        "volume": {
            "size": {{cluster.role_name.volume_size}},
            "mount_point": "/data",
            "mount_options": "defaults,noatime",
            "filesystem": "ext4",
            "class": {{cluster.role_name.volume_class}}
        },
        "replica": {{cluster.role_name.replica}},
        "extra_quota": {
            "cpu": 2,
            "memory": 8,
            "instance_class": 101,
            "gpu": 2,
            "gpu_class": 0,
            "count": 2,
            "volume": {
                "size": 20,
                "count": 2,
                "class": 100
            },
            "loadbalancer": 2,
            "bucket": 2,
            "security_group": 2
        },
        "reserved_ips": {
            "wvip": {
                "value": ""
            }
        },
        "passphraseless": "ssh-dsa",
        "vertical_scaling_policy": "parallel",
        "user_access": false,
        "eip_class": "base",
        "services": {
            "init": {
                "nodes_to_execute_on": 1,
                "post_start_service": false,
                "cmd": "mkdir -p /bigdata1/myapp;/opt/myapp/bin/init-cluster.sh"
            },
            "start": {
                "order": 1,
                "cmd": "/opt/myapp/bin/start-server.sh"
            },
            "stop": {
                "cmd": "/opt/myapp/bin/stop-server.sh"
            },
            "scale_out": {
                "pre_check": "/opt/myapp/sbin/scale-out-pre-check.sh",
                "cmd": "/opt/myapp/sbin/scale-out.sh"
            },
            "scale_in": {
                "pre_check": "/opt/myapp/sbin/scale-in-pre-check.sh",
                "cmd": "/opt/myapp/sbin/scale-in.sh",
                "timeout": 86400
            },
            "restart": {
                "cmd": "/opt/myapp/sbin/restart-server.sh"
            },
            "destroy": {
                "allow_force": true,
                "nodes_to_execute_on": 1,
                "post_stop_service": true,
                "cmd": "/opt/myapp/sbin/destroy-server.sh"
            },
            "upgrade": {
                "cmd": "/opt/myapp/sbin/upgrade.sh"
            },
            "rollback": {
                "cmd": "/opt/myapp/bin/rollback.sh"
            },
            "get_nodes_order": {
                "event": ["upgrade", "rollback", "scale_vertical"],
                "cmd": "/opt/myapp/bin/get-nodes-order.sh"
            },
            "backup": {
                "cmd": "/opt/myapp/sbin/backup.sh",
                "nodes_to_execute_on": 1,
                "with_replica": false,
                "order": 1,
                "service_params": {
                    "service_param"***: {{service_params.role_name.param}}
                },
                "timeout": 86400
            },
            "restore": {
                "cmd": "/opt/myapp/sbin/restore.sh",
                "nodes_to_execute_on": 1,
                "with_replica": false,
                "order": 1,
                "service_params": {
                    "service_param"***: {{service_params.role_name.param}}
                },
                "timeout": 86400,
            },
            "delete_snapshot": {
                "cmd": "/opt/myapp/sbin/delete_snapshot.sh",
                "nodes_to_execute_on": 1,
                "order": 1,
                "service_params": {
                    "service_param"***: {{service_params.role_name.param}}
                },
                "timeout": 86400
            },
            "custom_service"***: {
                "type": "custom",
                "cmd": "/opt/myapp/sbin/custom_service.sh",
                "timeout": 86400,
                "service_params": {
                    "service_param"***: {{service_params.role_name.param}}
                }
            }
        },
        "server_id_upper_bound": 255,
        "env": {
            "param"***: {{env.role_name.param}}
        },
        "agent_installed": true,
        "custom_metadata": {
            "cmd": "/opt/myapp/sbin/get_token.sh"
        },
        "health_check": {
            "enable": true,
            "interval_sec": 60,
            "timeout_sec": 10,
            "action_timeout_sec": 30,
            "healthy_threshold": 3,
            "unhealthy_threshold": 3,
            "check_cmd": "/opt/myapp/bin/check.sh",
            "action_cmd": "/opt/myapp/bin/action.sh"
        },
        "monitor": {
            "enable": true,
            "cmd": "/opt/myapp/bin/monitor.sh",
            "items": {
                "item_name_x"***: {
                    "unit": "",
                    "value_type": "str",
                    "statistics_type": "avg",
                    "scale_factor_when_display": 1,
                    "enums": ["value_y"***]
                }
            },
            "groups": {
                "group_name_z"***: ["item_name_x"***]
            },
            "display": ["group_name_z"***, "item_name_x"***],
            "alarm": ["item_name_x"***]
        }
    }],
    "env": {
        "common.param"***: {{env.common_param}}
    },
    "advanced_actions": ["change_vxnet", "scale_horizontal", "associate_eip"],
    "endpoints": {
        "client": {
            "port": 2181,
            "protocol": "tcp"
        },
        "reserved_ips": {
            "rvip": {
                "value": ""
            }
        }
    },
    "metadata_root_access": false,
    "health_check": {
        "enable": true,
        "interval_sec": 60,
        "timeout_sec": 10,
        "action_timeout_sec": 30,
        "healthy_threshold": 3,
        "unhealthy_threshold": 3,
        "check_cmd": "/opt/myapp/bin/check.sh",
        "action_cmd": "/opt/myapp/bin/action.sh"
    },
    "monitor": {
        "enable": true,
        "cmd": "/opt/myapp/bin/monitor.sh",
        "items": {
            "item_name_x"***: {
                "unit": "",
                "value_type": "str",
                "statistics_type": "avg",
                "scale_factor_when_display": 1,
                "enums": ["value_y"***]
            }
        },
        "groups": {
            "group_name_z"***: ["item_name_x"***]
        },
        "display": ["group_name_z"***, "item_name_x"***],
        "alarm": ["item_name_x"***]
    },
    "display_tabs": {
        "node_details_tab": {
            "cmd": "/opt/myapp/bin/node_details_tab.sh",
            "roles_to_execute_on": ["master", "slave"],
            "description": "More infomation about nodes",
            "timeout": 10
        }
    }
}
```

#### name

新建应用的名称，必填项，但值可以为空。

#### description

新建应用描述，必填项，但值可以为空。

#### vxnet

新建应用所在网络 ID，必填项。

#### need_tag

部署的集群内会创建一些其他资源，希望这些资源与集群同生命周期：随着集群销毁一并销毁。
need_tag 值为 true 时，会为集群绑定一个 tag_id，并注册到 metadata service，
参见[Metadata 服务](/appcenter/dev-platform/cluster-developer-guide/metadata/metadata-service#cluster)中的 cluster_tag，
所有集群内通过 api 创建的资源，需要调用 api 绑定上这个 tag_id,
这样创建的资源，会在集群详情页以列表形式展示给用户，支持的资源包括：
volume、loadbalancer、eip、security_group、snapshot、nic。

#### need_intranet_api_server
部署的集群，是否需要依赖 intranet api server，进行云平台 api 的调用。若环境基础网络中未部署 intranet api server，会报错。

#### exclude_node_columns

部署后的集群详情页中，哪些列不需要展示，目前支持 private_ip 表示不展示 ip 列，非必填项。

#### links

新建应用可能会依赖外部应用，比如 Kafka 依赖 ZooKeeper，依赖名称可以任意命名，不一定是 external\_service，比如命名为 zk\_service；可以依赖多个外部应用，非必填项。

> 集群创建完成后，可对集群的依赖进行修改。用户可进行的操作在 `config.json` 外部依赖 `allowed_operations` 定义   
> `add` 表示用户可以在集群创建后添加外部依赖集群，即使现在仍然有集群，仍然可添加   
> `modify` 表示用户可以对集群中现有的依赖集群进行替换，替换成允许的应用版本的其它集群   
> `delete` 表示用户可以删除集群中现有的依赖集群，如果未定义 `add` 操作，则删除之后不能再添加回来

#### backup_policy

定义应用的备份策略，支持 "device" 和 "custom" 两种类型。"device" 表示对节点的挂盘做snapshot；"custom" 则是使用自定义的备份命令进行备份操作，比如备份到某个目录，或拷贝到某个节点。非必填项。

#### incremental_backup_supported

定义应用是否支持增量备份。备份分为全量备份和增量备份，全量备份每次创建新的备份链，而增量备份会在原有备份链上基于上一个备份点创建新的备份点，删除备份链上某一备份点后，其后的所有备份点都会被相应删除。默认值为 false 表示只支持全量备份，非必填项。

#### upgrade\_policy

定义当前应用的哪些版本可以升级到当前版本，新老版本之间 role 必须相同，数据盘挂载位置必须一致。由于升级后会替换集群的镜像，所以在开发阶段_请仔细测试升级功能_。

#### upgrading_policy

定义版本升级的模式，支持parallel、sequential、in-place-parallel 和 in-place-sequential，默认是parallel，非必填项。
> 注：升级后再开启集群将会以<strong>新版本的镜像</strong>启动。对于 user\_access 为 true 的节点也会使用新的镜像启动，请在使用说明中提醒用户自行备份 user\_access 为 true 节点上的数据。

* parallel：并行升级，需要关闭集群才能执行，集群节点会同 时启动并执行升级，因此升级的过程中集群提供的服务会短时中断，升级失败时，需先关闭集群再降级或启动。
* sequential：滚动升级，需要集群在开机状态才能执行，集群节点会逐个重启并执行升级，这样集群提供的服务不会中断，滚动升级的流程参考[集群升级](/appcenter/dev-platform/cluster-developer-guide/specifications/lifecycle#滚动升级)，升级失败时，需先关闭集群再降级或启动。
* in-place-parallel：原地并行升级，不更新 image，所以不需要重启云服务器，定义方式可以参考：[如何定义原地升级方式](/appcenter/dev-platform/faq/cluster-faqs#36-如何定义原地升级方式)，拷贝数据完成后，按照 upgrade 的 order 顺序，并行执行 cmd。升级失败时，只支持集群活跃状态下再次升级或降级，降级时，按照 rollback 的 order 顺序，并行执行 cmd。升级完成后，关闭集群再启动集群会替换 image（只有在升级或降级成功后才会替换；升级失败，关闭启动，不会更新 image）。
* in-place-sequential：原地串行升级，不更新 image，所以不需要重启云服务器，定义方式可以参考：[如何定义原地升级方式](/appcenter/dev-platform/faq/cluster-faqs#36-如何定义原地升级方式)，拷贝数据完成后，按照 get_nodes_order 的执行结果，以及 upgrade 的 order 顺序，串行执行 cmd。升级失败时，只支持集群活跃状态下再次升级或降级，降级时，按照 get_nodes_order 的执行结果，以及 rollback 的 order 顺序，串行执行 cmd。升级完成后，关闭集群再启动集群会替换 image（只有在升级或降级成功后才会替换；升级失败，关闭启动，不会更新 image）。

#### nodes

新建应用节点信息，必填项。一个应用的节点可能是无角色区分的，这个时候 nodes 只有一种角色的信息；也可能是多角色组成的复杂应用，这个时候 nodes 就是这些角色节点信息组成的一个数组。

##### role

多角色节点应用必填项，单角色应用可以无此项。角色名称自定义，但必须和 config.json 里定义的名字一致。

##### loadbalancer

新建应用可能会依赖负载均衡器，不同角色 (role) 以依赖不同的负载均衡器。

##### container

镜像信息，必填项。

| 参数 | 描述 |
| --- | --- |
type|镜像类型，目前支持 kvm，docker。
image|镜像 ID，开发者根据镜像制作指南制作的以 img- 开头的镜像 ID，如果是 docker 则是 docker image name，包含 tag 部分。
zone|镜像制作时所属区域 (如果是 docker 镜像，则无需填写该字段)

##### cpu

每个节点 cpu 个数，可选值范围：1, 2, 4, 8, 12, 16, 24, 32, 64。

##### cpu_model

节点的 CPU 体系结构，可选值范围：Westmere、SandyBridge、IvyBridge、Haswell、Broadwell、Skylake、CascadeLake。 [查看对应的 CPU 指令集](https://docs.qingcloud.com/product/computing/cpu_instruction_set)

##### memory

每个节点内存大小，单位 MiB。可选值范围：1024, 2048, 4096, 6144, 8192, 12288, 16384, 24576, 32768, 40960, 49152, 65536, 81920, 98304, 114688, 131072, 163840, 196608, 229376, 262144, 327680。

##### instance\_class

节点类型，可选值范围：0, 1, 101, 201, 202, 301。其中 0 表示性能云服务器，1 表示超高性能云服务器，101 表示基础型云服务器，201 表示企业型 e1 云服务器，202 表示企业型 e2 云服务器，301 表示专业增强型云服务器。可选项，默认值为 0。
> 建议值：101, 202, 301。其中 0, 1, 201 这三种云服务器类型，会逐步做下架处理，故不建议使用。

##### gpu

每个节点 gpu 个数，可选值范围：0, 1, 2, 4, 8。目前仅在 北京3区-A(pek3a)，北京3区(pek3b，pek3c，pek3d) 和 上海1区(sh1a) 可创建带 gpu 的集群, 具体使用方式参考[GPU 云服务器](/compute/vm/manual/gpu_instance/)

##### gpu\_class

节点 gpu 类型，可选值范围：0，2。其中 0 表示 NVIDIA GPU，2 表示 AMD GPU。可选项，默认值为0。

##### count

节点个数，必填项，可以为0，但集群节点总数必须大于0。

##### volume

每个节点数据盘信息，如果此类节点不需要数据盘，不需要填写此项。

| 参数|描述|
| --- | --- |
size|每个节点数据容量大小，单位 GiB，注：是单个节点总容量大小，不是每个挂盘容量大小，如果有多个挂盘，则容量平均分配到每个挂盘上，必填项。单张容量盘最大5000G，单张性能盘和超高性能盘最大1000G，且单张步长大小需是10的整数倍。
mount\_point|每个节点数据盘挂载路径，可以是单个数据盘， 也可以有多个数据盘，多个数据盘以数组形式表示，如 "mount\_point": ["/data1","/data2"]。如果image是基于 Linux 操作系统，默认挂载路径为 /data; 如果 image 是基于 Windows 操作系统，默认挂载路径是 d:, 挂载路径是盘符（后面须带冒号，可选的盘符名从 d 开始，z 结束）。目前最大支持3块数据盘挂载到节点上。请注意，如果挂载了多块数据盘，config.json 对应的 volume\_size 部分，最好设置一下 min，step 这 2 个值，以配置创建集群、扩容集群时的范围和步长。例如挂载盘数为3，可以指定 `{min: 30, step: 30}` 。
mount\_options|描述数据盘的挂接方式，默认值 ext4 是 defaults,noatime，xfs 是 rw,noatime,inode64,allocsize=16m。
filesystem|数据盘文件系统类型。如果 image 是基于 Linux 操作系统，目前支持 ext4 和 xfs，默认为 ext4; 如果 image 是基于 Windows 操作系统，目前支持 ntfs, 默认为 ntfs。
class|数据盘类型，支持 0、2、3、5、6、100、200 其中 0 表示性能盘，3 表示超高性能盘，2 表示容量盘，5 表示 NeonSAN，6 表示 NeonSAN 容量盘，100 表示基础型硬盘，200 表示企业性硬盘。可选项，如果不写此项，数据盘类型和云服务器类型一样，即性能云服务器挂载性能硬盘，超高性能云服务器挂载超高性能硬盘，基础型云服务器挂载基础型硬盘，企业型云服务器和专业增强型云服务器挂载企业型硬盘。容量盘、NeonSAN、NeonSAN 容量盘可以挂载在不同类型云服务器上，容量盘是通过网络协议挂载的，所以性能相对来说比较差，通常来说如果不是提供必须基于容量盘的服务，最好去掉这个选项，大容量存储可以考虑 [NeonSAN](https://www.qingcloud.com/products/qingstor-neonsan/) 或者[对象存储 QingStor](/storage/object-storage/intro/object-storage/)。

> 建议值：100, 200。其中 0, 3 这两种云服务器类型，会逐步做下架处理，故不建议使用。

##### replica

此类节点每个节点的副本个数，这是给分片式 (即多主多从，如 redis cluster) 分布式系统使用的功能，定义每个分片的 master 有多少个 replica。
这类应用需要指定 role 名称比如 master，副本节点的 role 系统会自动在 master 添加 -replica 后缀，如 master-replica。
因此开发者在定义节点角色名称时不能定义后缀为 "-replica"，这是一个系统保留命名规则。replica 为非必填项。

##### extra_quota

除了集群内部资源以外，额外需要使用的资源列表。这些独立资源都有自己的配额限制，部署带有 extra_quota 的集群时，会对 extra_quota 中的资源进行额外的配额校验，校验失败会提示用户申请特定资源的配额，防止资源配额不足而导致的部署失败。

| 参数 | - | 描述 |
| --- | --- | --- |
| cpu | - | 需要校验的总 cpu 个数 |
| memory | - | 需要校验的总 memory 大小，单位 MiB |
| instance_class | - | 需要校验节点类型，如果未定义，则以当前节点的 instance_class 进行校验 |
| gpu | - | 需要校验的总 gpu 个数 |
| gpu_class | - | 需要校验的节点 gpu 类型，如果未定义，则以当前节点的 gpu_class 进行校验 |
| count | - | 需要校验的总节点个数 |
| volume | - | 需要校验的 volume 信息 |
| - | size | 需要校验的总数据盘大小，单位 GiB |
| - | count | 需要校验的总数据盘个数 |
| - | class | 需要校验的数据盘类型，如果未定义，则以当前节点的 volume class 进行校验 |
| loadbalancer | - | 需要校验的总负载均衡器个数 |
| bucket | - | 需要校验的总对象存储 bucket 个数 |
| security_group | - | 需要校验的总防火墙个数 |

##### reserved_ips

表示集群要预留一些 IP 资源给当前角色节点，由应用自己来分配使用，如果无此需求可不定义。

##### passphraseless　

生成密钥信息，即提供此类节点能无密码登录其它节点的可能性，但青云调度系统只负责把此信息注册到 metadata service 中，开发者自行去获取密钥配置云服务器。目前支持 ssh-dsa, ssh-rsa，非必填项。

##### vertical\_scaling\_policy

配置纵向伸缩时的操作策略，目前支持：sequential 和 parallel，默认是 parallel 即并行操作，非必填项。比如 ZooKeeper 在扩容时希望不影响对外服务，可设置该值为 sequential，串行重启。

##### user_access　

是否允许用户访问，true 表示该角色节点允许用户通过 vnc 登录，默认值为 false，
该镜像的初始用户名和密码需要在“版本描述”中写清楚以便告知用户。
允许用户登陆的节点在集群非活跃状态如关闭时不会销毁云服务器，所以用户可以往这类云服务器写入数据。
而其它云服务器是不会持久化数据，必须在挂盘上持久化数据，
参见[制作 KVM 镜像](/appcenter/dev-platform/cluster-developer-guide/image-build/build/#制作-kvm-镜像)。

##### eip\_class

是否为节点绑定基础网络ip，只支持值为`base`，表示绑定基础网络ip。如果配置此项，则在集群创建时会自动为角色中的每个节点绑定基础网络ip，并给基础绑定上默认的防火墙。如果在集群横向扩容的过程中，配置了此项的角色节点数量为0，则会自动解绑集群防火墙。

##### server\_id\_upper\_bound

节点的 index 的上限，从1开始记起，有些服务如 ZooKeeper 要求这个 index (myid) 必须控制在某一个范围内。缺省没有上限，非必填项。

##### services　

应用本身服务的初始化、启停等指令，青云 AppCenter 调度系统会发送这些命令到指定节点执行，非必填项。

###### init　

初始化命令，在创建集群或者新加节点时会触发该命令的执行。

| 参数 | 描述 |
| --- | --- |
nodes\_to\_execute_on|控制此命令在此类角色节点上某几个节点上执行，如果需要在所有此类节点上执行该命令可不填此项。
post\_start\_service|控制初始化命令是在 [start](#start) 命令执行完毕后执行还是之前执行，如果 post\_start\_service 为 true 则表示 init 在 start 后执行；默认 (即不加此项) 是之前执行。此项是 init 独有。
order|控制不同角色节点之间执行此命令顺序。比如主从节点，有时候需要主节点先启动服务，从节点后启动服务，非必填项。
cmd|具体需执行的命令，必填项。如果 image 是基于 Windows 操作系统，目前仅支持 bat 脚本，且脚本需通过变量 %ERRORLEVEL% 设定返回值。
timeout|执行该命令 timeout 时间(单位秒)，系统默认10分钟，由于某些命令可能需要迁移数据而耗时比较长，这种情况下需要计算出最长可能时间，最大值是86400，非必填项。

###### start

服务启动命令，具体参数参考初始化命令 init。

###### stop　

停止服务命令，具体参数参考初始化命令 init。

###### scale\_out　

加节点时在非新加节点上需执行的命令，具体参数参考初始化命令 init。
同时系统会捕获这个命令的非0返回值作为错误码, 
参考[执行操作失败时如何展示给用户错误提示](/appcenter/dev-platform/faq/cluster-faqs#21-执行操作失败时如何展示给用户错误提示)。

| 参数 | 描述 |
| --- | --- |
pre\_check|删除节点时在非删除节点上执行的预检查命令，若返回非0值表示不可删除节点。
此项是 scale\_in 和 scale\_out 独有。

###### scale\_in

删除节点时在非删除节点上需执行的命令，具体参数参考初始化命令 init。
同时系统会捕获这个命令的非0返回值作为错误码, 
参考[执行操作失败时如何展示给用户错误提示](/appcenter/dev-platform/faq/cluster-faqs#21-执行操作失败时如何展示给用户错误提示)。

| 参数|描述|
| --- | --- |
pre\_check|删除节点时在非删除节点上执行的预检查命令，若返回非0值表示不可删除节点。此项是 scale\_in 和 scale\_out 独有。

###### restart

服务重启动命令，具体参数参考初始化命令 init。

###### destroy

销毁命令，在删除集群或者节点时会触发该命令的执行，通常用作删除资源之前检查安全性，具体参数参考初始化命令 init。

| 参数|描述|
| --- | --- |
allow\_force |是否允许强制删除, 默认值为 true 表示允许强制删除该节点, 强制删除时即使 destroy 的 cmd 返回非 0 值也会继续将节点删除。

###### post\_stop\_service　

控制销毁命令是在 [stop](#stop) 命令执行完毕后执行还是之前执行，如果 post\_stop\_service 为 true 则表示 destroy 在 stop 后执行；默认 (即不加此项) 是之前执行。此项是 destroy 独有。

###### upgrade

升级集群后执行的命令，具体参数参考初始化命令 init。

###### get_nodes_order

在特定生命周期，以 cmd 的返回结果作为执行指令的顺序。具体参数参考初始化命令 init。
参考[串行纵向扩容或滚动升级时，如何按照一定顺序进行操作](/appcenter/dev-platform/faq/cluster-faqs#38-串行纵向扩容或滚动升级时如何按照一定顺序进行操作)。

| 参数 | 描述 |
| --- | --- |
  | event | 可选值：upgrade, rollback, scale_vertical。表示在定义的生命周期到来时，使用 get_nodes_order 中 cmd 的执行结果作为该生命周期节点的操作顺序。 |

###### rollback

升级失败，集群为活跃状态时进行降级操作，会被调用。具体参数参考初始化命令 init。

###### backup

定义该角色的备份操作，若不定义表示该角色不支持备份。若 "backup_policy" 定义为 "custom" 则必须定义 cmd；若 "backup_policy" 定义为 "device" 可不定义 cmd，具体参数参考初始化命令 init，除此之外自定义的服务参数还有：

| 参数|描述|
| --- | --- |
service\_params|service\_params 中定义这个 cmd 所需要传的参数，json 格式，非必须项，参数具体定义在 config.json 里，可参考 env 的定义方式。
with_replica | 备份操作是否在 replica 节点上执行，默认值为 false。

> 注：提供手动备份的同时也会提供 "定时自动备份" 支持，手动备份时会以 json 形式传入用户填入具体 "service\_params" 到 backup 的 cmd，而 "定时自动备份" 操作时不会传入参数。

###### restore

定义该角色的备份恢复操作。若该角色定义该服务，恢复时使用 restore 进行恢复；若该角色未定义该服务，恢复时使用 start 进行恢复。具体参数参考备份命令 backup。

| 参数|描述|
| --- | --- |
with_replica | 备份恢复操作是否在 replica 节点上执行，默认值为 false。

> 注：若 "backup_policy" 定义为 "custom"，备份恢复操作会在当前集群完成；若 "backup_policy" 定义为 "device"，备份恢复操作会使用挂盘的 snapshot 创建一个新的集群。

###### delete_snapshot

定义备份删除操作。若 "backup_policy" 定义为 "custom" 则必须定义 cmd；若 "backup_policy" 定义为 "device" 可不定义 cmd。具体参数参考备份命令 backup。

这几个服务都是系统定义的；除了 post\_start\_service 是 init, upgrade 独有、post\_stop\_service 是 destroy 独有之外，其它配置项每个服务都可配置，比如控制 stop 服务 order 等。
这些命令的执行顺序请见 [应用实例生命周期](/appcenter/dev-platform/cluster-developer-guide/specifications/lifecycle)。

##### custom_service

用户自定义命令，具体参数参考备份命令 backup，除此之外自定义的服务参数还有：

| 参数|描述|
| --- | --- |
type |custom 表示这个服务是自定义的， 自定义的名字 (即 key，此处为 custom_service) 开发者自行定义。

> 注：用户可以自定义多个服务。自定义服务在用户使用时，展示的服务名就是该 service 的 key。如果想要对其进行国际化，可以在 locale 中添加它的翻译。

##### env

特定角色节点的应用参数配置，每类应用有自身特有的可配置应用参数，每类节点也会有不同于应用全局级别的可配置参数。注意：节点之间或节点与集群全局之间的参数没有任何关系，都是独立的。

##### agent\_installed

如果用户想利用这套框架管理纯云服务器集群，则可以不用装青云提供的 App agent，同时需要指定这个参数为 false，否则系统会提示错误，该参数默认为 true。

##### custom\_metadata

节点通过脚本生成的 token (string 类型或返回 json 格式的 string) 需要注册到 metadata service 里供其它节点使用，例如开源容器集群管理系统 (Docker Swarm, Kuburnetes) 会用到此类信息。它是在 start service 之前执行，如果 start 之前有 init 则在 init 之后 start 之前执行。

##### health\_check

特定角色节点的健康检查配置，每类应用有自身特有的可配置健康检查参数，
每类节点也会有不同于应用全局级别的可配置健康检查参数。详情请见 [应用 health check](#health_check-1)。

#### env

应用参数配置，比如 ZooKeeper的 zoo.cfg 里的参数配置等。

#### advanced\_actions

集群支持高级操作，分别为:
* 横向伸缩 (scale\_horizontal) 即增加节点或删除节点，如果支持横向伸缩可以加上 scale\_horizontal。
* 变换网络 (change\_vxnet) 如果您的应用支持切换网络可以加上 change\_vxnet。
* 绑定公网IP (associate\_eip) 如果该角色的节点需要直接绑定公网IP可以加上 associate\_eip，**注意**: 绑定公网IP会给这个集群绑定默认集群防火墙, 其他集群如果需要访问这个集群请在集群防火墙中添加对应放行规则。

> 如果只有某一类角色支持高级操作，其它类型节点不支持，则可以只写到这个角色节点里。如果不支持此类操作则需去掉相应的定义，否则用户在界面看见有此功能而实际上是不支持的。**请仔细测试您在advanced\_actions中定义的功能**

#### endpoints

应用可定义 endpoints 供第三方使用，服务名称可以自定义，但建议使用通用的名称比如 client，manager 等，这样第三方应用使用的时候更方便一些，被第三方应用使用的可能性更大一些。详细的服务信息必须包括 port，但 protocol 非必须项，即可以不提供 protocol 信息。port 除可以是整数端口外，也可以是一个指向 env 的变量，如 "port":"env.port"或 "port":"role_name.env.port"，这样用户在更新这个变量的时候会自动更新其关联的 endpoint 端口。如果您的应用是一个大家熟知的且 enpoint 不会被修改，可以省略这一定义，比如 ZooKeeper，通用端口是 2181，所以可以省略掉。

#### reserved\_ips

表示集群要预留一些 IP 资源，由应用自己来分配使用，如果无此需求可不定义。预留 IP 的成员名称由开发者指定，比如这里定义为 "rvip"，暂时不支持指定 IP，所以定义时 "value" 的值为空。然后系统会为该集群分配一个 IP 并更新到 "value" 中。比如系统预留了 192.168.0.250 这个地址给 "rvip"，则 reserved_ips 的信息为：
```json
{
    "reserved_ips": {
        "rvip": {
            "value":"192.168.0.250"
        }
    }
}
```

#### metadata\_root\_access

有一些应用用来管理其它应用，因此需要通过 metadata service 获取其它应用实例的信息，默认情况下 (metadata_root_access 为 false) 本应用只能获取自身集群 (即 self) 的信息和通过 self 下的 links 获取外部集群信息，如果设置 metadata_root_access 为 true，则能获取 metadata service 下所有集群的信息。如果您的应用不属于此类管理型应用，则不用设置此项。

下例示范 tmpl 模板文件遍历所有集群节点 ip 地址 (假定都是无角色的节点)

```text
{{range gets "/clusters/*/hosts/*/ip"}}{{.Value}}
{{end}}
```

下例示范 tmpl 模板文件遍历某一类 App 的所有集群

```text
{{$appID := "app-pjkzvd1"}}
{{range gets"/clusters/*/cluster/app_id" | filter $appID}}
{{$string := split .Key "/"}}
{{$cluster_id := (index $string 2)}}
{{end}}
```

下例示范 tmpl 模板文件遍历某几类 App 的所有集群
```text
{{$appID1 := "app-pjkzvd1"}}
{{$appID2 := "app-ascz121"}}
{{$appID3 := "app-mjkrm56"}}
{{$exp := printf "%s|%s|%s" $appID1 $appID2 $appID3}}
{{range gets"/clusters/*/cluster/app_id" | filter $exp}}
{{$string := split .Key "/"}}
{{$cluster_id := (index $string 2)}}
{{end}}
```

#### health_check

应用可以配置健康检查，详细的配置参数如下：

| 参数|描述|
| --- | --- |
enable|是否开启健康检查，默认值为 false。
interval_sec|健康检查的周期，默认值为 60，最小值不小于 60。
timeout_sec|健康检查脚本执行的超时时间，默认值为 10，最小值不小于 3，最大值不能超过 interval_sec。
action_timeout_sec|动作脚本执行的超时时间，默认值为 30，最小值不小于 3。
healthy_threshold|节点状态变为健康时，连续健康检查成功所需的最小次数，默认值为 3，最小值不小于 2。
unhealthy_threshold|节点状态变为非健康时，连续健康检查失败所需的最小次数，默认值为 3，最小值不小于 2。
check_cmd|健康检查脚本。如果本次检查节点正常，脚本应返回0，否则返回非0值。如果 image 是基于 Windows 操作系统，目前仅支持 bat 脚本。
action_cmd|节点状态变为非健康时，触发的动作脚本。如果 image 是基于 Windows 操作系统，目前仅支持 bat 脚本。

应用节点会继承应用的健康检查配置，当应用节点配置了相同的健康检查参数时，优先使用节点的配置。注明：前端在创建集群之后需要等大约５分钟左右服务检测才会展现出来。

#### monitor

应用可以配置可采集的监控数据，详细的配置参数如下：

##### enable

是否开启监控，默认值为 false。

##### cmd

监控数据采集脚本。脚本应保证在5秒内完成，采集的数据以 JSON Object 的方式输出，JSON Object 的 key 是监控项的名字 (item_name)，value 是监控项的值，例如： {"received": 1200，"sent": 1234，"connections": 10}。如果 image 是基于 Windows 操作系统，目前仅支持 bat 脚本。

##### items

设置采集的监控项，监控项的个数不能超过50。"items" 对应的值是一个 JSON Object，该 JSON Object 的 key 是监控项的名字 (item_name)，value 是监控项配置，详细的监控项配置参数如下：

- unit : 监控项的计量单位，默认值为空字符串("")。
- enums: 当 value_type 为 "str" 的时候才需要该字段，枚举出该监控项可能的 value 值(为了方便用户配置告警)。
- scale_factor_when_display: 指定在前端展示时，采集数据的放大倍数，默认值为1。该配置只支持值类型为 "int" (整型)的监控数据。
- value_type : 监控项的值类型,目前支持 "int" (整型)和 "str" (字符串型)，默认值为 "int"。对于浮点型数据，可以通过乘于一个倍数(例如100)将其转化成整型，并将 scale_factor_when_display 设为该倍数的倒数(例如0.01)来实现数据的采集。
- statistics\_type : 指定监控项值的统计方式，目前支持如下方式：

| 参数|描述|
| --- | --- |
min|取监控项在统计区间内采集数据的最小值
max|取监控项在统计区间内采集数据的最大值
avg|取监控项在统计区间内采集数据的平均值
delta|取监控项在统计区间内采集数据的变化值，如果变化值小于0,则设为0。
rate|取监控项在统计区间内采集数据的变化率
mode|取监控项在统计区间内采集数据的众数(即出现次数最多的一个值)
median|取监控项在统计区间内采集数据的中位数
latest|取监控项在统计区间内采集数据的最新值

值类型为 "int" (整型)的监控数据，支持以上所有类型的统计方式，默认的统计方式为 "avg"。
值类型为 "str" (字符串型)的监控数据，只支持 "mode" 和 "latest" 两种统计方式，默认的统计方式为 "latest"。

##### groups

设置监控组，每个监控组可以包含1～5个监控项。"groups" 对应的值是一个 JSON Object，该 JSON Object 的 key 是监控组的名字 (group_name)，value 是一个 JSON Array，该 Array 中的每个元素是一个监控项的名字 (item_name)。

##### display

指定监控数据的显示顺序，其值是一个 JSON Array，该 JSON Array 中的每个元素可以是一个监控组的名字 (group_name)，也可以是一个监控项的名字 (item_name)。item_name 和 group_name 会进行国际化，如果想要提供各语言环境下的监控项描述，请提供翻译文件。

##### alarm

告警指标，其值是一个 JSON Array，该 JSON Array 中的每个元素必须是上面某个监控项的名字 (item_name)，这里的每一项都会成为"控制台-管理-监控告警"下的一个告警指标。

应用节点会继承应用的监控配置，当应用节点配置了相同的监控参数时，优先使用节点的配置。注明：前端在创建集群之后需要等５分钟监控项才会展现出来。

#### display_tabs 
自定义TAB页，TAB页中的信息会以表格的形式展现出来。开发者可以配置此项以在集群详情页显示更多的自定义信息。例如，集群发生主从切换后，节点新的主从信息，节点新的状态。配置应用于整个集群，不支持分角色定义。

- **node_details_tab**　必填项，需展示的TAB页标题，该key为自定义并且可定义多个，但最多不超过**5**个，该标题可定义国际化。

- **cmd**　必填项，开发者自定义的命令，调度系统会随机选择集群中的节点去执行。返回的结果需是完整的JSON格式字符串，表格标题以`labels`来标识，数据行以`data`，所以命令执行返回的JSON必须包含这两个键。标题的个数不能超过**５**个，数据的行数不能超过**225**行。例如

```json
{
    "labels": ["node_id", "role"], 
    "data":
    [
        ["cln-xyzw1234", "master"], 
        ["cln-xyzw1235", "slave"]
    ]
}
```

- **roles\_to\_execute_on** 非必填项，如填写此项，则命令只会在指定的角色节点上执行，若集群创建完成时，没有指定角色的节点存在则会报错。不配置此项则会在所有的节点里随机选取节点执行。

- **description** 非必填项，显示在表格的顶部，起到描述表格的作用，帮助用户更好地理解表格的内容，该描述可以定义国际化。

- **timeout** 非必填项，命令执行的timeout时长，单位s，最大值和默认值为10，如果命令执行时长超过最大值将被终止。

### replace_policy.json

此配置文件可以根据区域的不同，替换用户所能部署的资源情况。
```json
{
    "pek3b": {
        "instance_class": [{
            "src": "0",
            "dst": 101
        }, {
            "src": "1",
            "dst": 202
        }],
        "volume_class": [{
            "src": "0",
            "dst": 100
        }, {
            "src": "3",
            "dst": 200
        }]
    },
    "gd2b": {
        "cpu_model": [{
            "src": "Broadwell",
            "dst": "CascadeLake"
        }]
    }
}
```

上述配置，在 pek3b 部署当前版本的集群时，配置包中 instance_class 为 0 值时，会自动替换为 101 展示和部署。
> 一般情况无需此文件

### 数据类型

config.json 文件里对每个变量需要定义其类型、取值范围、默认值等，其中类型和默认值为必填项。

| 参数 | 参数 | 描述 |
| --- | --- | --- |
type|\-|变量数据类型，支持：integer、boolean、string、number (浮点数)、array、service、loadbalancer、password、accesskey、vxnet、eip。
\-|service|新应用可能会依赖外部应用，比如 Kafka 依赖 ZooKeeper，应用使用该类型表示。
\-|loadbalancer|负载均衡器，可以使用该类型表示，定义时需要同时定义负载均衡器后端服务端口参数：port，比如搭建的 HTTP 的 web server，可以指定 port 为 80。需要使用负载均衡器监听多个 port 时，可将 port 定义为数组，如 port: \[80,443\] 
\-|password|可在 env 或 service_params 变量中使用，界面会用密码形式显示输入。
\-|accesskey|可在 env 变量中使用，用户选择当前账号下的 API 密钥 ID，系统会将其对应密钥一并注册到 metadata service，参见[Metadata 服务](/appcenter/dev-platform/cluster-developer-guide/metadata/metadata-service#env)以及[如何使用环境变量里的accesskey类型数据](/appcenter/dev-platform/faq/cluster-faqs#34-如何使用环境变量里的accesskey类型数据)。
\-|vxnet|可在 env 变量中使用，系统会校验用户选择或输入的私有网络 ID，多个私有网络 ID 以空格隔开。
\-|eip|可在 env 变量中使用，系统会校验用户选择或输入的公网 IP，多个公网 IP 会以空格隔开。

### 国际化

config.json 中的 label 和 description 在控制台呈现时，默认使用配置文件中定义的内容。另外，一些自定义的服务、监控项也会直接展示到集群使用者的操作界面上。控制台的用户切换语言时，不改变该描述。如果您想让不同语言场景的用户能看到该语言的描述，请在提交的包中添加 locale 文件夹，并根据您希望国际化的语言提供翻译文件。

翻译文件是“语言名称.json”这样的格式，如 locale/en.json，locale/zh-cn.json。例如简体中文的翻译文件 zh-cn.json 内容示例如下：

```json
{
    "Master": "主节点",
    "Slave": "从节点",
    "CPU": "CPU",
    "Memory": "内存",
    "VxNet": "私有网络",
    "The name of the service": "服务名称",
    "The description of the service": "服务描述",
    "CPUs of each node": "每个节点的 CPU 数量",
    "Memory of each node (in MiB)": "每个节点的内存大小（单位 MiB）",
    "The vxnet that the application will join": "应用运行的私有网络环境",
    "change_vxnet": "切换私有网络",
    "scale_horizontal": "横向扩容",
    "err_code1": "主从切换中，无法删除节点",
    "notice_when_upgrade": "此版本不兼容旧版 API"
}
```

进行国际化的配置内容包括：

- config.json 文件中，角色名称、节点配置、私有网络、外部依赖、环境变量 env 各配置项的 label 作为待填写项名称，description 作为待填项的描述。label 和 description 会进行国际化。
- cluster.json.mustache 文件中 type 为 custom 的 service，会使用 service 的 key 作为用户执行自定义服务的展示内容，并进行国际化。
- cluster.json.mustache 文件中 monitor 部分的 group_name，item_name，会在用户看到的监控视图中，作为监控项名称展示，并进行国际化。
- type 为 custom 的 service、新增节点、删除节点在执行 cmd 返回非 0 值时，视为操作失败，可以将 err_code 后面跟着退出码（err_code1）作为 key，value 为展示给用户的错误提示，样例参考：[执行操作失败时如何展示给用户错误提示](/appcenter/dev-platform/faq/cluster-faqs#21-执行操作失败时如何展示给用户错误提示)
- 升级操作时可给用户弹出提示，key 为 notice_when_upgrade，value 为提示内容。样例参考：[升级操作时如何给用户弹出提示](/appcenter/dev-platform/faq/cluster-faqs#37-升级操作时如何给用户弹出提示)
