---
title: "PurgeRDBLogs"
description: 
draft: false
---



将指定的日志文件拷贝到 FTP 目录。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb | String | RDB ID | Yes |
| rdb_instance | String | 数据库节点 ID | Yes |
| log_type | String | 日志类型，binary_log，slow_log，error_log | Yes |
| before_file | String | binlog日志文件名 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CopyRDBInstanceFilesToFTP
&rdb=rdb-1j6omffs
&rdb_instance=rmi-h266tljl
&log_type=binary_log
&before_file=mysql-bin.000005
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
       "action":"PurgeRDBLogsResponse",
       "ret_code":0,
       "job_id":"j-cu59v8ro",
       "rdb":"rdb-1j6omffs"
}
```
