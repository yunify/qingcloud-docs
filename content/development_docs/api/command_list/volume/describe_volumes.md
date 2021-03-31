---
title: "DescribeVolumes"
description: 
draft: false
---



获取一个或多个硬盘

可根据硬盘ID，状态，硬盘名称作过滤条件，来获取硬盘列表。 如果不指定任何过滤条件，默认返回你所拥有的所有硬盘。 如果指定不存在的硬盘ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| volumes.n | String | 硬盘ID | No |
| volume_type | Integer | 硬盘类型:<br/>*   性能型是 0<br/>*   超高性能型是 3 (只能与超高性能云服务器挂载，目前只支持北京2区)，<br/>*   容量型因技术升级过程中，在各区的 type 值略有不同:<br/>    北京1区，亚太1区：容量型是 1<br/>    北京2区，广东1区：容量型是 2 | No |
| status.n | String | 硬盘状态: pending, available, in-use, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词，支持硬盘ID，硬盘名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，目前 verbose 只支持为 0 。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| volume_set | Array | JSON 格式的硬盘数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的硬盘总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| volume_id | String | 硬盘ID |
| volume_name | String | 硬盘名称 |
| description | String | 硬盘描述 |
| size | Integer | 硬盘空间大小，单位为 GB |
| status | String | 硬盘状态，有效值为pending, available, in-use, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>available： 可用状态，此时硬盘可以加载到云服务器上。<br/>in-use： 使用中，此时硬盘已经加载到云服务器上。<br/>suspended： 由于欠费，已被暂停使用<br/>deleted： 已被删除，但处于此状态的硬盘在2小时之内仍可以被恢复为 available 状态<br/>ceased： 已被彻底删除，处于此状态的硬盘无法恢复 |
| transition_status | String | 硬盘过渡状态，有效值为creating, attaching, detaching, suspending，resuming，deleting，recovering。<br/>creating： 创建中，由 pending 状态变成 available 状态<br/>attaching： 加载到云服务器中，由 available 状态变成 in-use 状态<br/>detaching： 从云服务器卸载中，由 in-use 状态变成 available 状态<br/>suspending： 欠费暂停中，由 available/in-use 状态变成 suspended 状态<br/>resuming： 恢复中，由 suspended 状态变成 available 状态<br/>deleting： 删除中，由 available/in-use/suspended 状态变成 deleted 状态<br/>recovering： 恢复中，由 deleted 状态变成 available 状态 |
| create_time | TimeStamp | 硬盘创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 硬盘最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| instance | Dict | 硬盘加载的云服务器信息.<br/>instance_id： 云服务器ID<br/>instance_name： 云服务器名称<br/>device：硬盘在云服务器系统中的设备名 |
| owner | String | 硬盘的所属用户 |
| volume_type | Integer | 硬盘类型:<br/>*   性能型是 0<br/>*   超高性能型是 3 (只能与超高性能云服务器挂载，目前只支持北京2区)，<br/>*   容量型因技术升级过程中，在各区的 type 值略有不同:<br/>    北京1区，亚太1区：容量型是 1<br/>    北京2区，广东1区：容量型是 2 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeVolumes
&status=in-use
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeVolumesResponse",
  "total_count":1,
  "volume_set":[
    {
      "status":"in-use",
      "description":null,
      "volume_name":"vol 2",
      "sub_code":0,
      "transition_status":"",
      "instance":{
        "instance_id":"i-ogbndull",
        "instance_name":"",
        "device": "/dev/sdb"
      },
      "create_time":"2013-08-30T05:13:25Z",
      "volume_id":"vol-g7xy7d6g",
      "status_time":"2013-08-30T05:13:32Z",
      "size":10
    }
  ],
  "ret_code":0
}
```
