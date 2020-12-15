---
title: "DescribeS2DefaultParameters"
description: 
draft: false
---



获取共享存储目标缺省参数。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| service_type | String | 共享存储服务类型 | No |
| target_type | String | 共享存储目标类型 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| s2_default_parameters_set | Array | JSON 格式的共享存储缺省参数，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的共享存储服务器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| service_type | String | 共享存储服务类型 |
| target_type | String | 共享存储目标类型 |
| param_name | String | 共享存储目标参数名称 |
| default_value | String | 共享存储目标参数缺省值 |
| description | String | 参数描述 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2DefaultParameters
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2DefaultParametersResponse",
  "s2_default_parameters_set":[
    {
      "service_type":"vsan",
      "param_name":"DataPDUInOrder",
      "default_value":"Yes",
      "target_type":"ISCSI",
      "description":"The DataPDUInOrder parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"DataSequenceInOrder",
      "default_value":"Yes",
      "target_type":"ISCSI",
      "description":"The DataSequenceInOrder parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"DefaultTime2Retain",
      "default_value":"20",
      "target_type":"ISCSI",
      "description":"The DefaultTime2Retain parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"DefaultTime2Wait",
      "default_value":"2",
      "target_type":"ISCSI",
      "description":"The DefaultTime2Wait parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"ErrorRecoveryLevel",
      "default_value":"0",
      "target_type":"ISCSI",
      "description":"The ErrorRecoveryLevel parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"FirstBurstLength",
      "default_value":"65536",
      "target_type":"ISCSI",
      "description":"The FirstBurstLength parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"HeaderDigest",
      "default_value":"CRC32C,None",
      "target_type":"ISCSI",
      "description":"The HeaderDigest parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"IFMarkInt",
      "default_value":"2048~65535",
      "target_type":"ISCSI",
      "description":"The IFMarkInt parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"IFMarker",
      "default_value":"No",
      "target_type":"ISCSI",
      "description":"The IFMarker parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"ImmediateData",
      "default_value":"Yes",
      "target_type":"ISCSI",
      "description":"The ImmediateData parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"InitialR2T",
      "default_value":"Yes",
      "target_type":"ISCSI",
      "description":"The InitialR2T parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"MaxBurstLength",
      "default_value":"262144",
      "target_type":"ISCSI",
      "description":"The MaxBurstLength parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"MaxConnections",
      "default_value":"1",
      "target_type":"ISCSI",
      "description":"The MaxConnections parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"MaxOutstandingR2T",
      "default_value":"1",
      "target_type":"ISCSI",
      "description":"The MaxOutstandingR2T parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"MaxRecvDataSegmentLength",
      "default_value":"8192",
      "target_type":"ISCSI",
      "description":"The MaxRecvDataSegmentLength parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"OFMarkInt",
      "default_value":"2048~65535",
      "target_type":"ISCSI",
      "description":"The OFMarkInt parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"OFMarker",
      "default_value":"No",
      "target_type":"ISCSI",
      "description":"The OFMarker parameter"
    },
    {
      "service_type":"vsan",
      "param_name":"DataDigest",
      "default_value":"CRC32C,None",
      "target_type":"ISCSI",
      "description":"The OFMarker parameter"
    },
    {
              "default_value":"no_root_squash",
              "param_name":"squash",
              "description":"The Squash parameter",
      "value_set":"root_squash,all_squash,no_root_squash",
              "target_type":"NFS",
              "service_type":"vnas"
    },
    {
              "default_value":"async",
              "param_name":"sync",
              "description":"The Sync parameter",
              "value_set":"sync,async",
              "target_type":"NFS",
              "service_type":"vnas"
    }
  ],
  "ret_code":0
}
```
