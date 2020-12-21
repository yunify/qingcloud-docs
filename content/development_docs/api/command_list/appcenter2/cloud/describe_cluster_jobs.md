---
title: "DescribeClusterJobs"
description: 
draft: false
---



获取一个或多个集群操作日志

可根据应用ID，日志ID，动作，状态来获取日志列表。如果不指定任何过滤条件，默认返回你触发的所有操作日志。 如果指定不存在的日志ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| app | String | 应用ID | Yes |
| jobs.n | String | 操作日志ID | No |
| status.n | String | 日志状态: pending, working, failed, successful | No |
|verbose | Integer | 是否返回冗长的信息，目前 verbose 只支持为 0。 | No
|offset | Integer | 数据偏移量，默认为0 | No
|limit | Integer | 返回数据长度，默认为20，最大100 | No　|

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_set | Array | JSON 格式的日志数据列表，每项参数可见下面 Response Item
| total_count | Integer | 根据过滤条件得到的日志总数
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| job_id | String | 日志ID |
| create_time | TimeStamp | 日志创建时间，为UTC时间，格式可参见 ISO8601. |
| directive | String |
| resource_ids | String | 此操作日志所涉及的资源信息，多个资源以空格分隔 |
| owner | String | 日志提供者ID |
| status | String | 日志状态，有效值为 pending, working, failed, successful<br>pending：等待被执行<br> working：执行中<br> failed：执行失败<br> successful：执行成功 |
| status_time | TimeStamp | 日志最近一次状态变更时间，为UTC时间，格式可参见 ISO8601. |
| resource_ids | String | 资源ID，一个或多个 |
| resources | Dict | 操作资源的ID，格式为`{"clusters":["cl-ddssvafd"]}` |

**Example**

以应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)为例

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeClusterJobs
&app=app-tg3lbp0a
&jobs.1=j-etkt94ebqra
&limit=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DescribeClusterJobsResponse",
  "total_count":1,
  "job_set":[
    {
      "status":"successful",
      "job_id":"j-etkt94ebqra",
      "directive":"{\"sender\":{\"lang\":\"en\",\"user_id\":\"system\",\"console_id\":\"system\",\"root_user_id\":\"system\",\"role\":\"global_admin\",\"privilege\":10,\"channel\":\"internal\"},\"zone\":\"pek3a\",\"expires\":\"2018-03-04T05:38:58Z\",\"action\":\"CeaseResources\",\"clusters\":[\"cl-xi3aoihf\"],\"resource_ids\":[\"cl-xi3aoihf\"]}",
      "job_action":"CeaseResources",
      "create_time":"2018-03-04T05:37:58Z",
      "owner":"system",
      "status_time":"2018-03-04T05:38:05Z",
      "error_codes":"",
      "resource_ids":"cl-xi3aoihf",
      "resources":{
        "clusters":[
          "cl-xi3aoihf"
        ]
      },
      "extras":{}
    }
  ],
  "ret_code":0
}

```


