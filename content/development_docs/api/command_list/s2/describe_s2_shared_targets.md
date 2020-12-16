---
title: "DescribeS2SharedTargets"
description: 
draft: false
---



获取一个或多个共享存储目标

可根据共享存储目标ID，共享存储服务器ID，状态，名称作过滤条件，来获取共享存储目标列表。 如果不指定任何过滤条件，默认返回你所拥有的所有共享存储目标。 如果指定不存在的共享存储目标ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| shared_targets.n | String | 共享存储目标ID | No |
| target_types.n | String | 共享存储目标类型，类型：ISCSI（vsan），NFS和SMB（vnas） | No |
| s2_server_id | String | 共享存储服务器ID | No |
| export_name | String | 共享存储目标名称，或IQN | No |
| search_word | String | 搜索关键词，支持共享存储目标ID，共享存储目标名称 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回共享存储目标相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| s2_shared_target_set | Array | JSON 格式的共享存储目标数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的共享存储目标总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| s2_shared_target_id | String | 共享存储目标ID |
| s2_server_id | String | 共享存储服务器ID |
| export_name | String | 共享存储目标名称,IQN |
| description | String | 共享存储目标描述 |
| target_types | String | 共享存储目标类型. |
| s2_group | Dict | vnas服务类型权限组信息. |
| volumes | Array | 共享目录硬盘信息. |
| create_time | TimeStamp | 共享存储服务器创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 共享存储服务器最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2SharedTargets
&s2_shared_targets.1=s2st-o0lf1gqu
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2SharedTargetsResponse",
  "total_count":1,
  "s2_shared_target_set":[
    {
      "username":"",
      "root_user_id":"usr-cT9nUFvT",
      "s2_server_id":"s2-nx0yvxqg",
      "shared_target_id":"s2st-o0lf1gqu",
      "export_name":"iqn.2014-12.com.qingcloud.s2:sn.test",
      "enabled":1,
      "target_type":"ISCSI",
      "console_id":"qingcloud",
      "controller":"self",
      "create_time":"2015-02-13T00:36:55Z",
      "volumes":{},
      "owner":"usr-cT9nUFvT",
      "password":"",
      "ip_address":"0.0.0.0",
      "port":3260,
      "description":null
    }
  ],
  "ret_code":0
}
```

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2SharedTargets
&target_types.1=NFS
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2SharedTargetsResponse",
  "total_count":1,
  "s2_shared_target_set":[
          "group_id":"s2g-k01j1qtk",
          "s2_server_id":"s2-1x5fa2dx",
          "s2_group":{
            "is_default":1,
            "group_id":"s2g-k01j1qtk",
            "group_type":"NFS_GROUP",
            "group_name":"default nfs group"
          },
          "export_name":"/mnt/test",
          "enabled":1,
          "target_type":"NFS",
          "console_id":"admin",
          "root_user_id":"usr-vrjFlTs3",
          "create_time":"2016-12-16T04:19:11Z",
          "shared_target_id":"s2st-eldx7l02",
          "volumes":[
            {
              "s2_server_id":"s2-1x5fa2dx",
              "shared_target_id":"s2st-eldx7l02",
              "volume_id":"vol-0zv5e17z",
              "root_user_id":"usr-vrjFlTs3",
              "volume_type":0,
              "console_id":"admin",
              "lun_id":"",
              "controller":"self",
              "mode":"w",
              "volume_name":"",
              "owner":"usr-vrjFlTs3",
              "size":10
            }
   ],
   "owner":"usr-vrjFlTs3",
   "error_info":"",
   "controller":"self",
   "description":null
 }

  ],
  "ret_code":0
}
```
