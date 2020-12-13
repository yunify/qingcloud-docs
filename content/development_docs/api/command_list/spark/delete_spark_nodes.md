---
title: "DeleteSparkNodes"
description: 
draft: false
---



删除 Spark 服务 worker 节点。

警告

该删除操作为不可逆操作，节点被删除之后不能被恢复，对使用 HDFS 的 Spark，一次只能删除一个节点，并且必须等到上个节点删除后且 decommission 结束才能删除下一个节点，详情见 [Spark 弹性伸缩](https://docs.qingcloud.com/product/big_data/spark.html#id6)。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| spark | String | Spark 服务ID | Yes |
| spark_nodes.n | String | 需要删除的 Spark worker 节点ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| spark_id | String | Spark 服务ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteSparkNodes
&spark=sk-aki0ug64
&spark_nodes.0=skn-a06ryhba
&spark_nodes.1=skn-gksklr8z
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSparkNodesResponse",
  "job_id":"j-t6lkz30c",
  "spark_id":"sk-aki0ug64",
  "ret_code":0
}
```
