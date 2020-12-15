---
title: "DescribeSecurityGroupSnapshots"
description: 
draft: false
---



获取某个防火墙的备份信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙ID | Yes |
| security_group_snapshots.n | String | 防火墙备份ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_snapshot_set | Array | JSON 格式的防火墙备份数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的防火墙备份总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| group_id | String | 防火墙ID |
| security_group_snapshot_id | String | 防火墙备份ID |
| rules | Array | 规则列表 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeSecurityGroupSnapshots
&security_group=sg-n43jh2pq
&direction=0
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSecurityGroupSnapshotsResponse",
  "total_count":4,
  "security_group_snapshot_set":[
    {
      "description":"",
      "rules":[
        {
          "disabled":0,
          "direction":0,
          "protocol":"tcp",
          "priority":2,
          "val3":"",
          "action":"accept",
          "val2":"22",
          "val1":"22",
          "security_group_rule_name":""
        },
        {
          "disabled":0,
          "direction":0,
          "protocol":"icmp",
          "priority":1,
          "val3":"",
          "action":"accept",
          "val2":"0",
          "val1":"8",
          "security_group_rule_name":""
        }
      ],
      "root_user_id":"usr-T5OfrfRb",
      "create_time":"2015-12-14T06:34:21Z",
      "security_group_snapshot_id":"sgs-hycrez7a",
      "owner":"usr-T5OfrfRb",
      "group_id":"sg-q36kwq5r",
      "name":"sg_snapshot"
    }
  ],
  "ret_code":0
}
```
