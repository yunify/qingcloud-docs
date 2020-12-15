---
title: "DescribeMongos"
description: 
draft: false
---



获取 Mongo 集群相关的信息。

可根据 Mongo ID，状态，Mongo 名称作过滤条件，来获取 Mongo 集群列表。 如果不指定任何过滤条件，默认返回你所拥有的所有 Mongo 集群。 如果指定不存在的 Mongo ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongos.n | String | Mongo ID | No |
| status.n | String | Mongo 状态: 有效值包括 pending, active, stopped, suspended, deleted, ceased | No |
| mongo_name | String | Mongo 名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为 1，则返回 Mongo 相关的其他资源的详细信息。 | No |
| offset | Integer | 数据偏移量，默认为 0 | No |
| limit | Integer | 返回数据长度，默认为 20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| mongo_set | Array | JSON 格式的 Mongo 数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的 Mongo 集群总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| mongo_id | String | Mongo ID |
| auto_backup_time | Integer | 自动备份时间（UTC 时间的 hour 部分） |
| create_time | TimeStamp | 创建时间，为 UTC 时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime) |
| alarm_status | String | 告警状态，有效值包括 ok, alarm, insufficient |
| mongo_name | String | Mongo 名称 |
| status_time | TimeStamp | Mongo 最近一次状态变更时间，为 UTC 时间 |
| vxnets | Dict |Mongo 所属私有网络的信息<br/>vxnet_name: 私有网络名称<br/>vxnet_id: 私有网络 ID |
| status | String | Mongo 状态，有效值包括 pending, active, stopped, deleted, suspended, ceased |
| description | String | Mongo 描述 |
| transition_status | string | Mongo 过渡状态，有效值包括：<br/>creating: 创建中，由 pending 状态变成 active 状态<br/>stopping: 关闭中，由 active 状态变成 stopped 状态<br/>starting: 启动中，由 stopped 状态变成 active 状态<br/>deleting: 删除中，由 active/stopped 状态变成 deleted 状态<br/>resizing: 扩容中<br/>suspending: 暂停中<br/>vxnet-changing: 正在切换 Mongo 所属私有网络<br/>snapshot-creating: 备份创建中<br/>instances-adding: 正在创建 replica set 节点<br/>instances-removing: 正在删除 replica set 节点<br/>pg-applying: 正在应用 Mongo 配置 |
| storage_size | Integer | Mongo 当前最大存储空间 |
| mongo_type | Integer | Mongo 配置型号 |
| auto_minor_ver_upgrade | Integer | 是否允许自动升 MongoDB 的小版本号 |
| lastest_snapshot_time | TimeStamp | Mongo 最后一次备份时间，为 UTC 时间 |
| mongo_version | String | MongoDB 版本号 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeMongos
&mongos.1=mongo-kc3mw87t
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeMongosResponse",
  "mongo_set":[
    {
      "status":"active",
      "mongo_name":"",
      "description":"",
      "auto_backup_time":99,
      "root_user_id":"usr-cTQiMLu8",
      "latest_snapshot_time":"",
      "sub_code":0,
      "transition_status":"",
      "storage_size":40,
      "console_id":"qingcloud",
      "mongo_id":"mongo-kc3mw87t",
      "mongo_version":"3.0",
      "controller":"self",
      "create_time":"2015-06-12T03:32:20Z",
      "owner":"usr-cTQiMLu8",
      "status_time":"2015-06-12T04:04:02Z",
      "mongo_type":1,
      "auto_minor_ver_upgrade":1,
      "vxnet":{
        "vxnet_name":"",
        "vxnet_id":"vxnet-dls87x2"
      }
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
