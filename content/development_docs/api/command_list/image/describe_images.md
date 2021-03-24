---
title: "DescribeImages"
description: 
draft: false
---



获取一个或多个镜像

可根据镜像ID，状态，镜像名称、操作系统平台作过滤条件，来获取镜像列表。 如果不指定任何过滤条件，默认返回你所拥有的所有镜像。 如果指定不存在的镜像ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| images.n | String | 镜像ID | No |
| processor_type | String | 镜像支持的处理器类型，有效值为 64bit 和 32bit | No |
| os_family | String | 镜像操作系统发行版，有效值为 centos，ubuntu，debian，fedora 和 windows 等 | No |
| visibility | String | 镜像的可见范围，有效值为 public 和 private | No |
| provider | String | 镜像提供者。初始青云系统会提供一系列默认镜像，其 provider 为 system 。 当用户捕获云服务器后，被捕获的“自有”镜像的 provider 为 self 。<br/>参见<br/>[_CaptureInstance_](../capture_instance/) | No |
| status.n | String | 镜像状态: pending, available, deprecated, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词，支持镜像ID，镜像名称 | No |
| verbose | Integer | 是否返回冗长的信息，目前 verbose 只支持为 0。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| image_set | Array | JSON 格式的镜像数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的镜像总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| image_id | String | 镜像ID |
| image_name | String | 镜像名称 |
| description | String | 镜像描述 |
| size | Integer | 镜像空间大小，单位为 GB |
| processor_type | String | 镜像支持的处理器类型，有效值为 64位 ( 64bit ) 和 32位 ( 32bit ) |
| platform | String | 镜像操作系统平台，有效值为 linux 和 windows |
| os_family | String | 镜像操作系统发行版，有效值为 centos，ubuntu，debian，fedora 和 windows 等 |
| visibility | String | 镜像的可见范围，有效值为 public 和 private<br/>public: 对所有人可见，例如系统提供的镜像<br/>private: 只对镜像所有者可见，例如用户的自有镜像 |
| provider | String | 镜像提供者，有效值为 system 和 self<br/>system: 镜像提供者为青云系统<br/>self: 镜像提供者为用户自己 |
| owner | String | 镜像提供者ID |
| recommended_type | String | 运行该镜像的推荐云服务器配置 |
| status | String | 镜像状态，有效值为pending, available, deprecated, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>available： 可用状态，此时可以基于该镜像创建云服务器。<br/>deprecated： 已被弃用，此时不再可以基于该镜像创建新的云服务器，但不影响已有云服务器的正常使用。<br/>suspended： 由于欠费，已被暂停使用<br/>deleted： 已被删除，但处于此状态的镜像在2小时之内仍可以被恢复为 available 状态<br/>ceased： 已被彻底删除，处于此状态的镜像无法恢复 |
| transition_status | String | 镜像过渡状态，有效值为creating, suspending，resuming，deleting，recovering。<br/>creating： 创建中，由 pending 状态变成 available 状态<br/>suspending： 欠费暂停中，由 available 状态变成 suspended 状态<br/>resuming： 恢复中，由 suspended 状态变成 available 状态<br/>deleting： 删除中，由 available/suspended 状态变成 deleted 状态<br/>recovering： 恢复中，由 deleted 状态变成 available 状态 |
| create_time | TimeStamp | 镜像创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 镜像最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeImages
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeImagesResponse",
  "total_count":9,
  "image_set":[
    {
      "status":"ceased",
      "processor_type":"64bit",
      "image_id":"img-37amqany",
      "sub_code":1,
      "transition_status":"",
      "recommended_type":"small_b",
      "image_name":"",
      "visibility":"private",
      "platform":"linux",
      "create_time":"2013-08-07T18:16:32Z",
      "os_family":"centos",
      "provider":"self",
      "owner":"usr-1234abcd",
      "status_time":"2013-08-17T08:16:33Z",
      "size":20,
      "description":null
    }
  ],
  "ret_code":0
}
```
