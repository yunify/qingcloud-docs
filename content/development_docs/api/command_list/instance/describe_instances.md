---
title: "DescribeInstances"
description: 
draft: false
weight: 2
---

获取一个或多个云服务器

可根据云服务器ID, 状态, 云服务器名称, 镜像ID 作过滤条件, 来获取云服务器列表。 如果不指定任何过滤条件, 默认返回你所拥有的所有云服务器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 云服务器ID | No |
| image_id.n | String | 一个或多个镜像ID | No |
| instance_type.n | String | 云服务器配置类型 | No |
| instance_class | Integer | 云服务器性能类型: 性能型:0, 超高性能型:1, 基础型:101, 企业型:201 | No |
| vcpus_current | Integer | 云服务器CPU的核心数 | No |
| memory_current | Integer | 云服务器内存大小 | No |
| os_disk_size | Integer | 云服务器系统盘大小 | No |
| exclude_reserved | Integer | 是否过滤预留云服务器, 若为1, 则不返回预留云服务器信息 | No |
| status.n | String | 云服务器状态: pending, running, stopped, suspended, terminated, ceased | No |
| search_word | String | 搜索关键词, 支持云服务器ID, 云服务器名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| dedicated_host_group_id | String | 按照专属宿云服务器组过滤 | No |
| dedicated_host_id | String | 按照专属宿云服务器组中某个宿云服务器过滤 | No |
| owner | String | 按照用户账户过滤, 只返回指定账户的资源 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回云服务器相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_set | Array | JSON 格式的云服务器数据列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的云服务器总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| instance_id | String | 云服务器ID |
| instance_name | String | 云服务器名称 |
| description | String | 云服务器描述 |
| instance_type | String | 云服务器类型, 配置列表请参考 [_Instance Types_](../../../common/instance_type/)。 |
| vcpus_current | Integer | 云服务器CPU核心数目。 |
| memory_current | Integer | 云服务器内存大小, 单位为MB。 |
| status | String | 云服务器状态, 有效值为pending, running, stopped, suspended, terminated, ceased。<br/>pending： 等待被创建<br/>running： 运行中<br/>stopped： 已关机<br/>suspended： 由于欠费, 已被暂停使用<br/>terminated： 已被删除, 但处于此状态的云服务器在2小时之内仍可以被恢复为 running 状态<br/>ceased： 已被彻底删除, 处于此状态的云服务器无法恢复 |
| transition_status | String | 云服务器过渡状态, 有效值为creating, starting, stopping, restarting, suspending, resuming, terminating, recovering, resetting。<br/>creating： 创建中, 由 pending 状态变成 running 状态<br/>starting： 启动中, 由 stopped 状态变成 running 状态<br/>stopping： 关闭中, 由 running 状态变成 stopped 状态<br/>restarting： 重启中<br/>suspending： 欠费暂停中, 由 running/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 running 状态<br/>terminating： 删除中, 由 running/stopped/suspended 状态变成 terminated 状态<br/>recovering： 恢复中, 由 terminated 状态变成 running 状态<br/>resetting： 操作系统重置中 |
| create_time | TimeStamp | 云服务器创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 云服务器最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| image | Dict | 云服务器的模板信息。<br/>processor_type： 支持的处理器类型, 有效值为 64bit 和 32bit<br/>platform： 模板平台, 有效值为 linux 和 windows<br/>os_family： 模板操作系统平台, 有效值为 windows, centos, ubuntu, debian, fedora等<br/>image_size： 模板大小<br/>image_name： 模板名称<br/>provider： 模板提供方, 有效值为 系统模板( system ), 自有模板 ( self ) |
| vxnets | Array | 云服务器加入的私有网络信息。<br/>vxnet_id： 私有网络ID<br/>vxnet_name： 私有网络名称<br/>vxnet_type： 私有网络类型, 1 为受管私有网络, 0 为自管私有网络。<br/>nic_id： 云服务器加入私有网络的网卡ID<br/>private_ip： 云服务器位于私有网络中的私有地址 |
| eip | Dict | 云服务器绑定的公网 IP 信息。<br/>eip_id： 公网 IP 的 ID<br/>eip_addr： IP 地址<br/>bandwidth： 带宽(Mbps) |
| security_group | Dict | 云服务器的防火墙信息。<br/>security_group_id： 防火墙ID<br/>is_default： 是否为默认防火墙, 1 为是, 0 为不是。<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| volume_ids | Array | 云服务器上挂载的硬盘ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| keypair_ids | Array | 云服务器上加载的SSH密钥ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| graphics_protocol | String | 图形化访问支持协议 |
| graphics_passwd | String | 图形化访问密码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeInstances
&instances.1=i-ogbndull
&status.1=running
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeInstancesResponse",
  "instance_set":[
    {
      "vcpus_current":1,
      "instance_id":"i-ogbndull",
      "volume_ids":[
        "vol-g7xy7d6g",
        "vol-jg7326gy"
      ],
      "vxnets":[
        {
          "vxnet_name":"primary vxnet",
          "vxnet_type":1,
          "vxnet_id":"vxnet-0",
          "nic_id":"52:54:ef:0c:ed:66",
          "private_ip":"10.50.13.54"
        }
      ],
      "eip":{
        "eip_id":"eip-1234abcd",
        "eip_addr":"121.201.5.5",
        "bandwidth":"50"
      },
      "memory_current":1024,
      "sub_code":0,
      "transition_status":"",
      "instance_name":"",
      "instance_type":"small_b",
      "create_time":"2013-08-28T14:26:03Z",
      "status":"running",
      "description":null,
      "security_group":{
        "is_default":1,
        "security_group_id":"sg-z13kokni"
      },
      "status_time":"2013-08-28T14:26:03Z",
      "image":{
        "processor_type":"64bit",
        "platform":"linux",
        "image_size":20,
        "image_name":"CentOS 6.4 64bit",
        "image_id":"centos64x64",
        "os_family":"centos",
        "provider":"system"
      },
      "keypair_ids":[
        "kp-bn2n77ow",
        "kp-05vfs7zs"
      ]
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
