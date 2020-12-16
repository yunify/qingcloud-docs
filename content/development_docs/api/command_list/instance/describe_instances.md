---
title: "DescribeInstances"
description: 
draft: false
weight: 2
---

获取一个或多个主机

可根据主机ID, 状态, 主机名称, 映像ID 作过滤条件, 来获取主机列表。 如果不指定任何过滤条件, 默认返回你所拥有的所有主机。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 主机ID | No |
| image_id.n | String | 一个或多个映像ID | No |
| instance_type.n | String | 主机配置类型 | No |
| instance_class | Integer | 主机性能类型: 性能型:0, 超高性能型:1, 基础型:101, 企业型:201 | No |
| vcpus_current | Integer | 主机CPU的核心数 | No |
| memory_current | Integer | 主机内存大小 | No |
| os_disk_size | Integer | 主机系统盘大小 | No |
| exclude_reserved | Integer | 是否过滤预留主机, 若为1, 则不返回预留主机信息 | No |
| status.n | String | 主机状态: pending, running, stopped, suspended, terminated, ceased | No |
| search_word | String | 搜索关键词, 支持主机ID, 主机名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| dedicated_host_group_id | String | 按照专属宿主机组过滤 | No |
| dedicated_host_id | String | 按照专属宿主机组中某个宿主机过滤 | No |
| owner | String | 按照用户账户过滤, 只返回指定账户的资源 | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回主机相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_set | Array | JSON 格式的主机数据列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的主机总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| instance_id | String | 主机ID |
| instance_name | String | 主机名称 |
| description | String | 主机描述 |
| instance_type | String | 主机类型, 配置列表请参考 [_Instance Types_](../../../common/instance_type/)。 |
| vcpus_current | Integer | 主机CPU核心数目。 |
| memory_current | Integer | 主机内存大小, 单位为MB。 |
| status | String | 主机状态, 有效值为pending, running, stopped, suspended, terminated, ceased。<br/>pending： 等待被创建<br/>running： 运行中<br/>stopped： 已关机<br/>suspended： 由于欠费, 已被暂停使用<br/>terminated： 已被删除, 但处于此状态的主机在2小时之内仍可以被恢复为 running 状态<br/>ceased： 已被彻底删除, 处于此状态的主机无法恢复 |
| transition_status | String | 主机过渡状态, 有效值为creating, starting, stopping, restarting, suspending, resuming, terminating, recovering, resetting。<br/>creating： 创建中, 由 pending 状态变成 running 状态<br/>starting： 启动中, 由 stopped 状态变成 running 状态<br/>stopping： 关闭中, 由 running 状态变成 stopped 状态<br/>restarting： 重启中<br/>suspending： 欠费暂停中, 由 running/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 running 状态<br/>terminating： 删除中, 由 running/stopped/suspended 状态变成 terminated 状态<br/>recovering： 恢复中, 由 terminated 状态变成 running 状态<br/>resetting： 操作系统重置中 |
| create_time | TimeStamp | 主机创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 主机最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| image | Dict | 主机的模板信息。<br/>processor_type： 支持的处理器类型, 有效值为 64bit 和 32bit<br/>platform： 模板平台, 有效值为 linux 和 windows<br/>os_family： 模板操作系统平台, 有效值为 windows, centos, ubuntu, debian, fedora等<br/>image_size： 模板大小<br/>image_name： 模板名称<br/>provider： 模板提供方, 有效值为 系统模板( system ), 自有模板 ( self ) |
| vxnets | Array | 主机加入的私有网络信息。<br/>vxnet_id： 私有网络ID<br/>vxnet_name： 私有网络名称<br/>vxnet_type： 私有网络类型, 1 为受管私有网络, 0 为自管私有网络。<br/>nic_id： 主机加入私有网络的网卡ID<br/>private_ip： 主机位于私有网络中的私有地址 |
| eip | Dict | 主机绑定的公网 IP 信息。<br/>eip_id： 公网 IP 的 ID<br/>eip_addr： IP 地址<br/>bandwidth： 带宽(Mbps) |
| security_group | Dict | 主机的防火墙信息。<br/>security_group_id： 防火墙ID<br/>is_default： 是否为默认防火墙, 1 为是, 0 为不是。<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| volume_ids | Array | 主机上挂载的硬盘ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| keypair_ids | Array | 主机上加载的SSH密钥ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
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
