---
title: "DescribeSparks"
description: 
draft: false
---



获取 Spark 服务的详细信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| sparks.n | String | Spark服务ID | Yes |
| status.n | String | Spark服务状态: pending, active, deleted, suspended, ceased | No |
| search_word | String | 搜索关键词，支持Spark 服务ID，Spark 服务名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回 Spark 服务相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| spark_set | Array | JSON 格式的 Spark 服务数据列表 |
| total_count | Integer | 根据过滤条件得到的 Spark 服务总数 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeSparks
&sparks.0=sk-5r22wf7v
&verbose=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action": "DescribeSparksResponse",
  "total_count": 1,
  "spark_set": [
      {
          "features": 0,
          "spark_id": "sk-5r22wf7v",
          "console_id": "admin",
          "owner": "usr-lwe9MKFL",
          "create_time": "2016-08-18T06: 15: 24Z",
          "spark_class": 0,
          "spark_type": 1,
          "place_group_id": "plg-00000000",
          "spark_name": "test-sparksdk003",
          "zk_connect": "",
          "sub_code": 0,
          "spark_version": "1.6.0",
          "status_time": "2016-08-18T06: 17: 05Z",
          "spark_master_type": 1,
          "vxnet": {
              "vxnet_name": "test-hdp1",
              "vxnet_id": "vxnet-ir7df6x'
          },
          "status": "active",
          "description": "",
          "tags": [

          ],
          "transition_status": "",
          "hadoop_master_type": 1,
          "storage_size": 20,
          "controller": "self",
          "nodes": [
              {
                  "status": "active",
                  "spark_id": "sk-5r22wf7v",
                  "server_id": "",
                  "spark_node_name": "",
                  "vxnet_id": "vxnet-ir7df6x",
                  "transition_status": "",
                  "controller": "self",
                  "console_id": "admin",
                  "instance_id": "i-ztlcvde6",
                  "root_user_id": "usr-lwe9MKFL",
                  "create_time": "2016-08-18T06: 15: 24Z",
                  "alarm_status": "",
                  "private_ip": "192.168.100.9",
                  "volume_id": "vol-xyes652a",
                  "owner": "usr-lwe9MKFL",
                  "status_time": "2016-08-18T06: 16: 45Z",
                  "pub_key": None,
                  "role": "slave",
                  "spark_node_id": "skn-b3tvf8bs'
              },
              {
                  "status": "active",
                  "spark_id": "sk-5r22wf7v",
                  "server_id": "",
                  "spark_node_name": "",
                  "vxnet_id": "vxnet-ir7df6x",
                  "transition_status": "",
                  "controller": "self",
                  "console_id": "admin",
                  "instance_id": "i-wq7dj1x1",
                  "root_user_id": "usr-lwe9MKFL",
                  "create_time": "2016-08-18T06: 15: 24Z",
                  "alarm_status": "",
                  "private_ip": "192.168.100.4",
                  "volume_id": "vol-3nwt9z2j",
                  "owner": "usr-lwe9MKFL",
                  "status_time": "2016-08-18T06: 16: 22Z",
                  "pub_key": None,
                  "role": "slave",
                  "spark_node_id": "skn-ctyp0vdo'
              },
              {
                  "status": "active",
                  "spark_id": "sk-5r22wf7v",
                  "server_id": "",
                  "spark_node_name": "",
                  "vxnet_id": "vxnet-ir7df6x",
                  "transition_status": "",
                  "controller": "self",
                  "console_id": "admin",
                  "instance_id": "i-0f58m1ft",
                  "root_user_id": "usr-lwe9MKFL",
                  "create_time": "2016-08-18T06: 15: 24Z",
                  "alarm_status": "",
                  "private_ip": "192.168.100.13",
                  "volume_id": "vol-avq2rxtr",
                  "owner": "usr-lwe9MKFL",
                  "status_time": "2016-08-18T06: 15: 58Z",
                  "pub_key": None,
                  "role": "slave",
                  "spark_node_id": "skn-ljpqumqp'
              },
              {
                  "status": "active",
                  "spark_id": "sk-5r22wf7v",
                  "server_id": "",
                  "spark_node_name": "",
                  "vxnet_id": "vxnet-ir7df6x",
                  "transition_status": "",
                  "controller": "self",
                  "console_id": "admin",
                  "instance_id": "i-33af8jgq",
                  "root_user_id": "usr-lwe9MKFL",
                  "create_time": "2016-08-18T06: 15: 24Z",
                  "alarm_status": "",
                  "private_ip": "192.168.100.10",
                  "volume_id": "vol-xz20h5fe",
                  "owner": "usr-lwe9MKFL",
                  "status_time": "2016-08-18T06: 16: 48Z",
                  "pub_key": "ssh-dssAAAAB3NzaC1kc3MAAAC...ay/VGTM27n8EfACnINac=root@skn-1g2sgyqb-hadoop-master",
                  "role": "hadoop-master",
                  "spark_node_id": "skn-1g2sgyqb'
              },
              {
                  "status": "active",
                  "spark_id": "sk-5r22wf7v",
                  "server_id": "",
                  "spark_node_name": "",
                  "vxnet_id": "vxnet-ir7df6x",
                  "transition_status": "",
                  "controller": "self",
                  "console_id": "admin",
                  "instance_id": "i-37byx6ze",
                  "root_user_id": "usr-lwe9MKFL",
                  "create_time": "2016-08-18T06: 15: 24Z",
                  "alarm_status": "",
                  "private_ip": "192.168.100.14",
                  "volume_id": "vol-rihosvjs",
                  "owner": "usr-lwe9MKFL",
                  "status_time": "2016-08-18T06: 15: 56Z",
                  "pub_key": "ssh-dssAAAAB3NzaC1kc3MAAACBAMRvmT8ueZWjZq...1o=root@skn-3xh1qthu-spark-master",
                  "role": "spark-master",
                  "spark_node_id": "skn-3xh1qth"
              }
          ],
          "node_count": 5,
          "enable_hdfs": 1,
          "parameter_group_id": "skpg-sl0865fn",
          "spark_master_storage_size": 10,
          "root_user_id": "usr-lwe9MKFL",
          "hadoop_master_storage_size": 10
      }
  ],
  "ret_code": 0
}
```
