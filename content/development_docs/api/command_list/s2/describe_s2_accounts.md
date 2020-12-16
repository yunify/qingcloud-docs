---
title: "DescribeS2Accounts"
description: 
draft: false
---



获取一个或多个共享存储用户访问账号

可根据访问账号ID，账号类型，账号名称来获取账户的列表。 如果不指定任何过滤条件，默认返回你所拥有的所有账户列表。 如果指定不存在的账户ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_accounts.n | String | 共享存储用户访问资源账号ID | No |
| account_types.n | String | 账号的类型，为NFS，SMB类型 | No |
| account_name | String | 账号名称 | No |
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
| s2_account_set | Array | JSON 格式的共享存储目标数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的共享存储目标总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| opt_parameters | String | 账号配置的参数选项 |
| account_type | String | 访问账号的类型 |
| account_id | String | 访问账号的 ID |
| description | String | 共享存储目标描述 |
| account_name | String | 访问账号的名称 |
| nfs_ipaddr | String | NFS协议访问IP地址 |
| create_time | TimeStamp | 账号创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2Accounts
&s2_accounts.1=s2a-cpuwpquf
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2AccountsResponse",
  "total_count":1,
  "s2_account_set":[
    {
      "opt_parameters":"squash=no_root_squash,sync=sync",
      "account_type":"NFS",
      "account_id":"s2a-cpuwpquf",
      "controller":"self",
      "console_id":"admin",
      "nfs_ipaddr":"12.1.112.1",
      "root_user_id":"usr-vrjFlTs3",
      "create_time":"2016-12-16T05:36:07Z",
      "owner":"usr-vrjFlTs3",
      "account_name":"",
      "description":null
    }
  ],
  "ret_code":0
}
```
