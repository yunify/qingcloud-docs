---
title: "DescribeAppVersions"
description: 
draft: false
---



获取一个或多个应用版本的信息

可根据应用版本ID，状态，应用ID，标签等作为过滤条件，来获取应用信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| app_ids.n | String | 应用ID，可以是一个或多个。app_ids和version_ids两者必须至少有一个 | No |
| version_ids.n | String | 应用版本ID，可以是一个或多个。app_ids和version_ids两者必须至少有一个 | No |
| name | String | 应用的名称 | No |
| sort_key | String | 结果排序的列 | No |
| owner | String | 按照用户账户过滤，只返回指定账户的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回集群相关其它资源信息 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| reverse | Integer | 是否逆序，1为逆序，0为正序 | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | Integer | 应用版本的总数量 |
| version_set | Array | 应用的版本集合 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| status | String | 状态，active，suspended |
| description | String | 应用版本描述 |
| resource_kit | String | 应用的配置文件ID |
| version_id | String | 应用版本的ID |
| app_id | String | 应用ID |
| create_time | TimeStamp | 应用版本的创建时间 |
| visibility | String | 应用版本的可见范围，public即为所有人可见，private为仅自己可见|
| name | String | 版本的名称 |
| console_id | String | 版本的console ID |

**Example**

下列返回结果为应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAppVersions
&app_ids.1=app-tg3lbp0a
&limit=20
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DescribeAppVersionsResponse",
  "total_count":1,
  "version_set":[
    {
      "status":"active",
      "description":"\u6b64\u7248\u672c\u63d0\u4f9b\u7684\u662f\u539f\u751f Apache ZooKeeper 3.4.9 \u53d1\u884c\u7248\uff0c\u540c\u65f6\u63d0\u4f9b ZooKeeper REST \u670d\u52a1",
      "resource_kit":"ca-nx8rerlv",
      "version_id":"appv-70gegwmp",
      "app_id":"app-tg3lbp0a",
      "create_time":"2017-04-21T02:34:24Z",
      "visibility":"public",
      "status_time":"2017-04-21T02:34:24Z",
      "console_id":"qingcloud",
      "name":"QingCloud 1.0 - ZooKeeper 3.4.9"
    }
  ],
  "ret_code":0
}
```


