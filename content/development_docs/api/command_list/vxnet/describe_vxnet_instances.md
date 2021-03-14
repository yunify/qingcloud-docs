---
title: "DescribeVxnetInstances"
description: 
draft: false
---



获取私有网络中的云服务器。

可通过云服务器ID，镜像ID，云服务器配置类型，云服务器状态作为过滤条件进行筛选。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络ID | Yes |
| instances.n | String | 云服务器ID | No |
| instance_type | String | 云服务器配置类型 | No |
| status | String | 云服务器状态 | No |
| image | String | 镜像ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| instance_set | Array | JSON 格式的私有网络的云服务器列表，每项数据可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的云服务器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| vxnet_id | String | 私有网络 ID |
| instance_id | String | 云服务器ID |
| instance_name | String | 云服务器名称 |
| description | String | 云服务器描述 |
| instance_type | String | 云服务器类型，配置列表请参考 [_Instance Types_](../../../common/instance_type)。 |
| vcpus_current | Integer | 云服务器CPU核心数目。 |
| memory_current | Integer | 云服务器内存大小，单位为MB。 |
| status | String | 云服务器状态，有效值为pending, running, stopped, suspended，terminated, ceased。<br/>pending： 等待被创建<br/>running： 运行中<br/>stopped： 已关机<br/>suspended： 由于欠费，已被暂停使用<br/>terminated： 已被删除，但处于此状态的云服务器在2小时之内仍可以被恢复为 running 状态<br/>ceased： 已被彻底删除，处于此状态的云服务器无法恢复 |
| transition_status | String | 云服务器过渡状态，有效值为creating, starting, stopping, restarting, suspending，resuming，terminating，recovering，resetting。<br/>creating： 创建中，由 pending 状态变成 running 状态<br/>starting： 启动中，由 stopped 状态变成 running 状态<br/>stopping： 关闭中，由 running 状态变成 stopped 状态<br/>restarting： 重启中<br/>suspending： 欠费暂停中，由 running/stopped 状态变成 suspended 状态<br/>resuming： 恢复中，由 suspended 状态变成 running 状态<br/>terminating： 删除中，由 running/stopped/suspended 状态变成 terminated 状态<br/>recovering： 恢复中，由 terminated 状态变成 running 状态<br/>resetting： 操作系统重置中 |
| create_time | TimeStamp | 云服务器创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 云服务器最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| image_id | String | 云服务器的模板ID。 |
| dhcp_options | Dict | 私有网络中针对该云服务器的 DHCP 配置。 |
| private_ip | String | 云服务器的位于该私有网络的IP。 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeVxnetInstances
&vxnet=vxnet-ytuyg2q
&status=running
&limit=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeVxnetInstancesResponse",
  "instance_set":[
    {
      "vcpus_current":1,
      "instance_id":"i-syx7qtud",
      "image_id":"centos64x64",
      "vxnet_id":"vxnet-ytuyg2q",
      "sequence":0,
      "sub_code":0,
      "transition_status":"",
      "instance_name":"",
      "instance_type":"small_b",
      "create_time":"2013-08-30T09:13:37Z",
      "status":"running",
      "private_ip":"192.168.1.2",
      "description":null,
      "status_time":"2013-08-30T09:13:37Z",
      "nic_id":"52:54:5b:e3:69:f4",
      "dhcp_options":{
        "val2":"domain-name-servers=8.8.8.8",
        "router_static_id":"rtrs-jak6z5nx"
      },
      "memory_current":1024
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
