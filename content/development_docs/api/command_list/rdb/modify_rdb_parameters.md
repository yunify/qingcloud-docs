---
title: "ModifyRDBParameters"
description: 
draft: false
---



修改指定 RDB 的配置

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb | String | RDB ID | Yes |
| parameters | List of dictionary | 配置项，例如 [{“long_query_time”: 5, {“back_log”: 1024}}] | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| rdb | String | RDB ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeRDBParameters
&rdb=rdb-uccrvnve
&parameters.0.long_query_time=2
&parameters.1.back_log=1024
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyRDBParametersResponse",
  "rdb_id":"rdb-uccrvnve",
  "ret_code":0
}
```
