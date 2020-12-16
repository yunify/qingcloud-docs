---
title: "DescribeS2Groups"
description: 
draft: false
---



获取一个或多个共享存储权限组列表

可根据权限组ID，权限组类型，权限组名称来获取账户的列表。 如果不指定任何过滤条件，默认返回你所拥有的所有权限组列表。 如果指定不存在的权限组ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_groups.n | String | 共享存储权限组 ID | No |
| group_types.n | String | 权限组的类型，为NFS_GROUP，SMB_GROUP类型 | No |
| account_name | String | 权限组名称 | No |
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
| s2_group_set | Array | JSON 格式的权限组列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的共享存储目标总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| group_id | String | 权限组 ID |
| group_type | String | 权限组的类型 |
| is_default | Integer | 是否是缺省权限组（缺省权限组不可删除） |
| description | String | 共享存储目标描述 |
| group_name | String | 权限组的名称 |
| create_time | TimeStamp | 权限组创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2Accounts
&s2_groups.1=s2g-cb7rn8rk
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2GroupsResponse",
  "total_count":1,
  "s2_group_set":[
    {
      "group_id":"s2g-cb7rn8rk",
      "description":null,
      "controller":"self",
      "group_name":"default smb group",
      "is_default":1,
      "root_user_id":"usr-vrjFlTs3",
      "create_time":"2016-12-16T04:19:03Z",
      "owner":"usr-vrjFlTs3",
      "console_id":"admin",
      "group_type":"SMB_GROUP"
    }
  ],
  "ret_code":0
}
```
