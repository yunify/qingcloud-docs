---
title: "DescribeMongoNodes"
description: 
draft: false
---



获取 Mongo 节点相关的信息。

获取指定 Mongo 的所有节点信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| offset | Integer | 数据偏移量，默认为 0 | No |
| limit | Integer | 返回数据长度，默认为 20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| mongo_node_set | Array | JSON 格式的 Mongo 数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的 Mongo 节点总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| status | String | Mongo 节点状态 |
| mongo_id | String | Mongo ID |
| vxnet_id | String | 私有网络 ID |
| ip | String | IP 地址 |
| primary | Integer | 是否为 primary 节点 |
| mongo_node_id | String | Mongo 节点 ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeMongoNodes
&mongos.1=mongo-k9zmsesv
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeMongoNodesResponse",
  "mongo_node_set":[
    {
      "status":"active",
      "mongo_id":"mongo-k9zmsesv",
      "vxnet_id":"vxnet-dls87x2",
      "ip":"192.168.100.133",
      "transition_status":"",
      "controller":"self",
      "primary":false,
      "console_id":"qingcloud",
      "instance_id":"i-3urz105i",
      "mongo_role":"priority0",
      "root_user_id":"usr-cTQiMLu8",
      "create_time":"2015-06-24T07:13:03Z",
      "pg_id":"mpg-btvm5kax",
      "volume_id":"vol-5dx1girg",
      "owner":"usr-cTQiMLu8",
      "status_time":"2015-06-24T07:13:20Z",
      "mongo_node_id":"mi-95q9krud",
      "vm_instance_id":"i-3urz105i"
    },
    {
      "status":"active",
      "mongo_id":"mongo-k9zmsesv",
      "vxnet_id":"vxnet-dls87x2",
      "ip":"192.168.100.122",
      "transition_status":"",
      "controller":"self",
      "primary":true,
      "console_id":"qingcloud",
      "instance_id":"i-qnyzcx56",
      "mongo_role":"replica",
      "root_user_id":"usr-cTQiMLu8",
      "create_time":"2015-06-24T07:13:03Z",
      "pg_id":"mpg-o3qnzfe1",
      "volume_id":"vol-pjmrcsl5",
      "owner":"usr-cTQiMLu8",
      "status_time":"2015-06-24T07:13:17Z",
      "mongo_node_id":"mi-ggya1vix",
      "vm_instance_id":"i-qnyzcx56"
    }
  ],
  "mongo":"mongo-k9zmsesv",
  "ret_code":0
}
```
