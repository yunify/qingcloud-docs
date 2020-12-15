---
title: "GetRDBInstanceFiles"
description: 
draft: false
---



获取指定数据库节点的日志文件列表。

获取指定数据库节点的日志文件列表，包括二进制日志和慢查询日志； 如果指定的数据库节点 ID 不存在或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb_instance | String | 数据库节点 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetRDBInstanceFiles
&rdb_instance=rmi-h266tljl
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"GetRDBInstanceFilesResponse",
    "files":{
      "slow_log":[
        {
          "last_modify":"2015-05-25 21:40:55",
          "file":"mysql-slow.log",
          "size":154
        }
      ],
      "binary_log":[
        {
          "last_modify":"2015-05-25 21:41:04",
          "file":"mysql-bin.000001",
          "size":2247
        }
      ]
    },
    "rdb_instance":"rmi-h266tljl",
    "ret_code":0
}
```
