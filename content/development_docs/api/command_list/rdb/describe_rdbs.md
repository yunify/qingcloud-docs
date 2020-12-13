---
title: "DescribeRDBs"
description: 
draft: false
---



获取一个或多个数据库集群信息。

可根据数据库集群 ID，状态，数据库集群名称作过滤条件，来获取数据库集群列表。 如果不指定任何过滤条件，默认返回你所拥有的所有数据库集群。 如果指定不存在的路由器ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdbs.n | String | 数据库集群 ID | No |
| rdb_engine | String | 数据库类型，支持 mysql 和 psql，注意该值是大小写敏感的；默认值为 mysql | No |
| status.n | String | 数据库集群状态: 有效值包括 pending, active, stopped, suspended, deleted, ceased | No |
| rdb_name | String | 数据库集群名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回数据库集群相关的其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_set | Array | JSON 格式的路由器数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的路由器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| rdb_id | String | 数据库集群 ID |
| auto_backup_time | Integer | 自动备份时间 |
| create_time | TimeStamp | 创建时间，为 UTC 时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime) |
| alarm_status | String | 告警状态，有效值包括 ok, alarm, insufficient |
| rdb_name | String | 数据库集群名称 |
| master_ip | String | 数据库主节点 IP |
| status_time | TimeStamp | 数据库集群最近一次状态变更时间，为 UTC 时间 |
| vxnets | Dict |数据库集群所属私有网络的信息<br/>vxnet_name: 私有网络名称<br/>vxnet_id: 私有网络 ID |
| status | String | 数据库集群状态，有效值包括 pending, active, stopped, deleted, suspended, ceased |
| description | String | 数据库集群描述 |
| transition_status | string |数据库集群过渡状态，有效值包括：<br/>creating: 创建中，由 pending 状态变成 active 状态<br/>stopping: 关闭中，由 active 状态变成 stopped 状态<br/>starting: 启动中，由 stopped 状态变成 active 状态<br/>deleting: 删除中，由 active/stopped 状态变成 deleted 状态<br/>backup-creating: 备份创建中<br/>temp-creating: 临时实例创建中<br/>configuring: 数据库集群配置生成中<br/>switching: 数据库主从切换中<br/>invalid-tackling: 数据库集群异常处理中<br/>resizing: 扩容中<br/>suspending: 暂停中<br/>ceasing: 数据库集群销毁中<br/>instance-ceasing: 数据库集群实例销毁中<br/>vxnet-leaving: 数据库集群脱离私有网络中<br/>vxnet-joining: 数据库集群加入私有网络中 |
| storage_size | Integer | 数据库集群当前最大存储空间 |
| rdb_type | Integer | 数据库集群配置型号 |
| auto_minor_ver_upgrade | Integer | 是否允许自动升级数据库的小版本号 |
| lastest_snapshot_time | TimeStamp | 数据库集群最后一次备份时间，为 UTC 时间 |
| engine_version | String | 数据库服务器版本号 |
| rdb_engine | String | 数据库服务器类型 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeRDBs
&rdbs.1=rdb-wsiqcwia
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeRDBsResponse",
  "total_count":1,
  "rdb_set":[
    {
      "rdb_id":"rdb-wsiqcwia",
      "auto_backup_time":99,
      "console_id":"qingcloud",
      "create_time":"2014-09-17T15:24:26Z",
      "alarm_status":"",
      "owner":"usr-cT9nUFvT",
      "rdb_name":"test_rdb_all",
      "sub_code":0,
      "master_ip":"192.168.1.2",
      "status_time":"2014-09-17T07:24:43Z",
      "vxnet":{
        "vxnet_name":"test_rdb_all",
        "vxnet_id":"vxnet-cxnfnq6"
      },
      "status":"active",
      "description":"",
      "transition_status":"",
      "storage_size":20,
      "controller":"self",
      "rdb_type":1,
      "auto_minor_ver_upgrade":1,
      "lastest_snapshot_time":"2014-09-17T07:26:11Z",
      "engine_version":"5.5",
      "root_user_id":"usr-cT9nUFvT",
      "rdb_engine":"mysql"
    }
  ],
  "ret_code":0
}
```
