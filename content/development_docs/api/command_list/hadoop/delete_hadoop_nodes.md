---
title: "DeleteHadoopNodes"
description: 
draft: false
---



删除 Hadoop 服务 slave 节点。

警告

该删除操作为不可逆操作，节点被删除之后不能被恢复，一次只能删除一个节点，并且必须等到上个节点删除后且 decommission 结束才能删除下一个节点，详情见 [Hadoop 弹性伸缩](https://docs.qingcloud.com/product/big_data/hadoop.html#id6)。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| hadoop | String | Hadoop 服务ID | Yes |
| hadoop_nodes.n | String | 需要删除的 Hadoop slave 节点ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| hadoop_id | String | Hadoop 服务ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteHadoopNodes
&hadoop=hdp-aki0ug64
&hadoop_nodes.0=hdpn-a06ryhba
&hadoop_nodes.1=hdpn-gkhdplr8z
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteHadoopNodesResponse",
  "job_id":"j-t6lkz30c",
  "hadoop_id":"hdp-aki0ug64",
  "ret_code":0
}
```
