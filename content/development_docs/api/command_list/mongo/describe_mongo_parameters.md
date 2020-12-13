---
title: "DescribeMongoParameters"
description: 
draft: false
---



获取指定 Mongo 的配置信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| offset | Integer | 数据偏移量，默认为 0 | No |
| limit | Integer | 返回数据长度，默认为 20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| parameter_set | Array | JSON 格式的 Mongo 数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的路由器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| is_static | Integer | 是否是静态配置项；1 表示静态配置项，修改后会重启 MongoDB；0 表示动态配置项，修改后不会重启 MongoDB |
| parameter_value | String | 配置值 |
| parameter_type | String | 配置值数据类型；包括 string, int, bool 三种 |
| is_readonly | Integer | 该配置项是否为只读，1 表示只读配置项；0 表示非只读配置项 |
| opt_name | String | 配置项别名 |
| parameter_name | String | 配置项名称 |
| resource_type | String | 配置项所属资源类型 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeMongoParameters
&mongos.1=mongo-k9zmsesv
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeMongoParametersResponse",
  "total_count":0,
  "ret_code":0,
  "parameter_set":[
    {
      "is_static":1,
      "parameter_value":"/data/mongodb",
      "parameter_type":"string",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"dbpath",
      "value_range":"",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"foba",
      "parameter_type":"string",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"replSet",
      "value_range":"",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"true",
      "parameter_type":"bool",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"logappend",
      "value_range":"true,false",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"/data/mongodb/mongod.log",
      "parameter_type":"string",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"logpath",
      "value_range":"",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"true",
      "parameter_type":"bool",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"auth",
      "value_range":"true,false",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"2048",
      "parameter_type":"int",
      "is_readonly":0,
      "opt_name":"",
      "parameter_name":"oplogSize",
      "value_range":"3072-10240",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"/etc/mongodb-key",
      "parameter_type":"string",
      "is_readonly":1,
      "opt_name":"",
      "parameter_name":"keyFile",
      "value_range":"",
      "resource_version":"",
      "resource_type":"mongo3.0"
    },
    {
      "is_static":1,
      "parameter_value":"27017",
      "parameter_type":"int",
      "is_readonly":0,
      "opt_name":"",
      "parameter_name":"port",
      "value_range":"4096-32767",
      "resource_version":"",
      "resource_type":"mongo3.0"
    }
  ],
  "mongo":"mongo-k9zmsesv"
}
```
