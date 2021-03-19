---
title: "开发模板规范 - 基础版"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 5
---

## 基本介绍

此规范定义的是开发一个 AppCenter 云应用需要的基本元素，不包括国际化、监控告警和其它高级功能，
旨在让开发者快速入门，详细的规范请参考[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications)。

开发者提交一个应用需要包含以下几个文件：

* config.json <br>
  该文件定义最终用户在控制台部署应用实例时需要填写的表单；
* cluster.json.mustache <br>
  该文件包含创建应用实例时需要用到的镜像、多少类节点、服务启动命令等信息文件。

>注：以上文件不支持 "UTF-8 Unicode (with BOM) text" 文本格式，windows下的编辑器编辑文件默认是此格式，可通过 "格式-> 以utf-8无BOM格式编码" 进行转换。

## 规范

### config.json
此配置文件定义最终用户在创建应用实例的时候需填入的参数信息，参数包括资源信息如 CPU、内存、节点数等，还包括应用本身配置参数等。下面是对每个参数详细的解释：

>注：role_name, common.param名称自定义，cluster 的 name 和 description 不需要自定义。右上角带3个星号(***)表示该项有 sibling (兄弟)节点，开发者提交的时候也要去掉这个标记。另外，env 表示集群的环境变量，是可选项，即可以不用定义此项，每一个变量的 key 会作为配置名直接展示给用户 (key 不能包含空格)，它的 label 属性可以是空字符串 ""。

```json
{
	"type": "array",
	"properties": [{
		"key": "cluster",
		"description": "cluster properties",
		"type": "array",
		"properties": [{
			"key": "name",
			"type": "string",
			"label": "Name",
			"description": "The name of the application",
			"default": "",
			"required": "no"
		}, {
			"key": "description",
			"type": "string",
			"label": "Description",
			"description": "The description of the application",
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
			"key": "role_name",
			"description": "role-based node properties",
			"label": "Role Name",
			"type": "array",
			"properties": [{
				"key": "cpu",
				"label": "CPU",
				"description": "CPUs of each node",
				"type": "integer",
				"default": 1,
				"range": [1, 2, 4, 8, 16],
				"required": "yes"
			}, {
				"key": "memory",
				"label": "Memory",
				"description": "Memory of each node (in MiB)",
				"type": "integer",
				"default": 2048,
				"range": [2048, 8192, 16384, 32768, 49152],
				"required": "yes"
			}, {
				"key": "instance_class",
				"label": "Instance Class",
				"description": "The instance type for the cluster to run，such as high performance，high performance plus",
				"type": "integer",
				"default": 101,
				"range": [101, 202],
				"required": "yes"
			}, {
				"key": "count",
				"label": "Count",
				"description": "Number of nodes for the cluster to create",
				"type": "integer",
				"default": 3,
				"max": 100,
				"min": 1,
				"required": "yes"
			}, {
				"key": "volume_size",
				"label": "Volume Size",
				"description": "The volume size for each instance",
				"type": "integer",
				"default": 10,
				"min": 10,
				"max": 1000,
				"step": 10,
				"required": "yes"
			}]
		}]
	}, {
		"key": "env",
		"description": "Application configuration properties",
		"type": "array",
		"properties": [{***
			"key": "common.param",
			"label": "Common Param",
			"description": "The common.param1 for all nodes",
			"type": "string",
			"default": "value1,value11",
			"range": ["value1", "value11", "value111"],
			"required": "yes"
		}]
	}]
}
```

json 配置项中的每一项，都是一个含有 key、label、description、type、range 等参数的 object。配置项支持嵌套，若 type 为 array，则该项的 properties 填写一个有序列表，在用户部署应用的时候填写配置使用，因此需要注意配置项的顺序。配置项中各参数的解释如下：

参数 | 描述         
| - | - |
key|对应 [cluster.json.mustache](#clusterjsonmustache) 文件索引的值，例如 {{cluster.name}} 表示 config.json 中 cluster 内 key=name 的项用户所填写的值。
label|用户部署应用时，填写配置项的名称。
description|用户部署应用时，填写配置项的描述。
type |该配置项的类型，请参考 [数据类型](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications#数据类型)。
range |限定配置项的取值范围，是一个可枚举的数组。
min|若配置项 type 为 integer 或 number (浮点数)，指定该项的最小值。
max |若配置项 type 为 integer 或 number (浮点数)，指定该项的最大值。
step |若配置项是 volume_size，指定硬盘每次调整的最小步长单位。在每个云服务器挂多块盘时，通常需要指定该项。
required |是否为必填项
default |该项的默认取值，若 required 设为 "no"，default 值必须提供。

一些系统预留(即必须提供)的项含义如下：

参数 | 描述         
| - | - |
name |创建应用时用户填入的名称
description |创建应用时用户填入描述信息
vxnet |创建应用时所在网络ID

### cluster.json.mustache

该文件是在用户创建应用时需要传给青云 API 的参数，这些信息的具体值是来自用户在 UI 上根据 config.json 定义的变量的输入，每个字段的具体描述如下：

>注：role, volume, services, env 和 advanced_actions 为可选项，如果不定义 role 则意味着这是个单角色的应用；不定义 volume 则表示该节点没有挂盘，只有系统盘；右上角带3个星号(*)表示该项有 sibling (兄弟)节点，开发者提交的时候也要去掉这个标记。

```mustache
{
	"name": {{cluster.name}},
	"description": {{cluster.description}},
	"vxnet": {{cluster.vxnet}},
	"nodes": [{***
		"role": "role_name",
		"container": {
			"type": "kvm",
			"image": "img-skhdp16m",
			"zone": "pek3"
		},
		"count": {{cluster.role_name.count}},
		"cpu": {{cluster.role_name.cpu}},
		"memory": {{cluster.role_name.memory}},
		"instance_class": {{cluster.role_name.instance_class}},
		"volume": {
			"size": {{cluster.role_name.volume_size}}
		},
		"services": {
			"init": {
				"order": 1,
				"cmd": "mkdir -p /bigdata1/myapp;/opt/myapp/bin/init-cluster.sh"
			},
			"start": {
				"cmd": "/opt/myapp/bin/start-server.sh"
			},
			"stop": {
				"cmd": "/opt/myapp/bin/stop-server.sh"
			},
			"scale_out": {
				"cmd": "/opt/myapp/sbin/scale-out.sh"
			},
			"scale_in": {
				"cmd": "/opt/myapp/sbin/scale-in.sh"
			},
			"destroy": {
				"cmd": "/opt/myapp/sbin/destroy-server.sh"
			}
		}
	}],
	"env": {
		"common.param"***: {{env.common_param}}
	},
	"advanced_actions": ["change_vxnet", "scale_horizontal"]
}
```

参数 | 参数 | 参数 | 描述         
| - | - | - | - |
name |\-|\-|新建应用的名称，必填项，但值可以为空。
description |\-|\-|新建应用描述，必填项，但值可以为空。
vxnet |\-|\-|新建应用所在网络 ID，必填项。
nodes |\-|\-|新建应用节点信息，必填项。一个应用的节点可能是无角色区分的，这个时候 nodes 只有一种角色的信息；也可能是多角色组成的复杂应用，这个时候 nodes 就是这些角色节点信息组成的一个数组。
\-|role |\-|多角色节点应用必填项，单角色应用可以无此项。角色名称自定义，但必须和 config.json 里定义的名字一致。
\-|container |\-|镜像信息，必填项。
\-|\-|type |镜像类型，目前支持 kvm，docker。
\-|\-|image |镜像 ID，开发者根据镜像制作指南制作的以 img开头的镜像 ID，如果是 docker 则是 docker image name，包含 tag 部分。
\-|\-|zone |镜像制作时所属区域 (如果是 docker 镜像，则无需填写该字段)
\-|count |\-|节点个数，必填项，可以为0，但集群节点总数必须大于0。
\-|cpu |\-|每个节点 cpu 个数，可选值范围：1, 2, 4, 8, 12, 16, 24, 32, 64。
\-|memory |\-|每个节点内存大小，单位 MiB。可选值范围：1024, 2048, 4096, 6144, 8192, 12288, 16384, 24576, 32768, 40960, 49152, 65536, 81920, 98304, 114688, 131072, 163840, 196608, 229376, 262144, 327680。
\-|instance\_class |\-|每个节点云服务器类型，可选值范围：101，202，301。其中 101 表示基础型云服务器，202 表示企业型 e2 云服务器，301 表示专业增强型云服务器。
\-|volume |\-|每个节点数据盘信息，如果此类节点不需要数据盘，不需要填写此项。
\-|size |\-|每个节点数据容量大小，单位 GiB，必填项。单张容量盘最小 100G，最大 5000G；单张性能盘，超高性能盘，基础型盘，企业级盘最小 10G，最大 2000G，且步长大小需是 10 的整数倍。单张 NeonSAN 盘最小 100G，最大 50000G，且步长大小需是 100 的整数倍。Linux 系统默认挂载在 /data 目录下。
\-|services　|\-|应用本身服务的初始化、启停等指令，青云 AppCenter 调度系统会发送这些命令到指定节点执行。非必填项。
\-|\-|init　|初始化命令，在创建集群或者新加节点时会触发该命令的执行。**order** 控制不同角色节点之间执行此命令顺序。比如主从节点，有时候需要主节点先启动服务，从节点后启动服务，非必填项。**cmd** 具体需执行的命令，默认在节点 start 服务之前执行，必填项。
\-|\-|start |服务启动命令，具体参数参考初始化命令 init。
\-|\-|stop　|停止服务命令，具体参数参考初始化命令 init。
\-|\-|scale\_out　|加节点时在非新加节点上需执行的命令，具体参数参考初始化命令 init。
\-|\-|scale\_in |删除节点时在非删除节点上需执行的命令，在节点 stop 服务之前执行，具体参数参考初始化命令 init。
\-|\-|destroy |销毁命令，在删除集群或者节点时会触发该命令的执行，默认在节点 stop 服务或 scale_in 服务之前执行，通常用作删除资源之前检查安全性，具体参数参考初始化命令 init。
\-|\-|\-|这些命令在集群的生命周期中流程请见 [应用实例生命周期](/appcenter/dev-platform/cluster-developer-guide/specifications/lifecycle)。
env |\-|\-|应用参数配置，比如 ZooKeeper 的 zoo.cfg 里的参数配置等。
advanced\_actions |\-|\-|集群支持高级操作，目前支持两类：变换网络 (change\_vxnet) 和横向伸缩 (scale\_horizontal) 即增加节点或删除节点，这是因为有些应用尤其传统应用并不适合云的弹性要求，因此如果您的应用支持切换网络则加上 change_vxnet，如果支持横向伸缩则加上 scale\_horizontal。如果只有某一类角色需要切换网络或添加/删除节点，其它类型节点不支持，则可以只写到这个角色节点里。如果不支持此类操作则需去掉相应的定义，否则用户在界面看见有此功能而实际上是不支持的。
