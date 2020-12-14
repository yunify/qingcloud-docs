---
title: "CreateSpark"
description: 
draft: false
---



创建 Spark 集群服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| spark_version | String | Spark 版本号 | Yes |
| node_count | Integer | 节点个数 | Yes |
| enable_hdfs | Integer | 是否使用hdfs作为存储 | Yes |
| spark_type | Integer | 集群节点所使用的 cpu-memory 配置类型, 值为 1是指 1c2g, 2为2c4g, 3为2c8g, 4为4c8g, 5为8c16g | Yes |
| storage_size | Integer | 节点存储大小，单位为G | Yes |
| vxnet | String | 集群要加入的私有网络id | Yes |
| description | String | 集群的描述 | No |
| spark_name | String | 服务的名字 | No |
| spark_class | Integer | 节点使用的主机类型，0 是指 高性能， 1 是指超高性能 | No |
| private_ips.n.role | String | 节点的角色，目前有效值为 “spark-master”“hadoop-master”“slave” | No |
| private_ips.n.private_ips | String | 为该角色节点指定的IP列表, 如果该角色存在多个节点，IP之间”,” 号分隔，例如 “192.168.1.21,192.168.1.22”。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| spark_id | String | Spark 服务ID |
| spark_name | String | Spark 服务名称 |
| spark_version | String | Spark 服务版本号 |
| vxnet_id | String | Spark 服务加入的私有网络ID |
| spark_node_ids | Array | 新建的 Spark 服务包含的节点ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateSpark
&spark_version=1.6.0
&node_count=5
&spark_name=test-spark
&enable_hdfs=1
&spark_type=1
&storage_size=10
&vxnet=vxnet-ir7df6x
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSparkResponse",
  "ret_code":0,
  "job_id":"j-yzoi9ysq",
  "spark_id":"sk-isdi2f3y",
  "vxnet_id': "vxnet-ir7df6x",
  "spark_version": "1.6.0",
  "spark_node_ids": [
        "skn-wrbwkrrw", "skn-ur0rl82w",
        "skn-ypbqy0wr", "skn-0x250o2d"
   ],
  "spark_type": 1,
  "node_count": 5,
  "parameter_group_id": "skpg-sl0865fn",
  "spark_name": "test-spark"
}
```
