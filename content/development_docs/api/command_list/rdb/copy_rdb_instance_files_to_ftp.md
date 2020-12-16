---
title: "CopyRDBInstanceFilesToFTP"
description: 
draft: false
---



将指定的日志文件拷贝到 FTP 目录。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdb_instance | String | 数据库节点 ID | Yes |
| files.n | String | 日志文件名，比如mysql-slow.log | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

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
&rdb_instance=rmi-h266tljl
&files.1=mysql-bin.000001
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CopyRDBInstanceFilesToFTPResponse",
  "job_id":"j-1hj7qnlq",
  "rdb_instance":"rmi-h266tljl",
  "ret_code":0
}
```
