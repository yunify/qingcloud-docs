---
title: "AddHadoopNodes"
description: 
draft: false
---



给 Hadoop 服务添加一个或多个 slave 节点。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| hadoop | String | Hadoop 服务ID | Yes |
| node_count | Integer | 新增 slave 节点个数 | Yes |
| hadoop_node_name | String | 节点的名字 | No |
| private_ips.n.role | String | 节点的角色，目前有效值为 “slave” | No |
| private_ips.n.private_ips | String | 为该角色节点指定的IP列表, 如果该角色存在多个节点，IP之间”,” 号分隔，例如 “192.168.1.21,192.168.1.22”。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| hadoop_id | String | Hadoop 服务ID |
| hadoop_new_node_ids | Array | 新建的 Hadoop 服务节点ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddHadoopNodes
&hadoop=hdp-aki0ug64
&node_count=2
&private_ips.0.private_ips=192.168.200.30,192.168.200.31
&private_ips.0.role=slave
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddHadoopNodesResponse",
  "ret_code":0,
  "job_id":"j-hb3x6fnl",
  "hadoop_id":"hdp-aki0ug64",
  "hadoop_new_node_ids":[
    "hadoop-a06ryhba",
    "hadoop-gksklr8z"
  ]
}
```
