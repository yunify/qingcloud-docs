---
title: "DescribeClusterJobs"
description: 本小节主要介绍 ChronusDB 获取集群操作日志的接口。 
keyword: ChronusDB 获取集群操作日志，获取集群操作日志
weight: 32
collapsible: false
draft: false
---



获取一个或多个集群操作日志.

可根据应用 ID，日志 ID，动作，状态来获取日志列表。

- 若不指定任何过滤条件，默认返回你触发的所有操作日志。

- 若指定不存在的日志 ID，或非法状态值，则会返回错误信息。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| app | String | 应用 ID。 | Yes |
| jobs.n | String | 操作日志 ID。| No |
| status.n | String | 日志状态。<li>pending<li> working<li>failed<li>successful | No |
|verbose | Integer | 是否返回冗长的信息。目前 verbose 只支持为 0。 | No
|offset | Integer | 数据偏移量。默认为 0。 | No
|limit | Integer | 返回数据长度。默认为20，最大100。 | No　|

[_公共参数_](../../../../parameters/)

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_set | Array | JSON 格式的日志数据列表。|
| total_count | Integer | 根据过滤条件得到的日志总数。|
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。|

### 响应项

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| job_id | String | 日志 ID |
| create_time | TimeStamp | 日志创建时间，为 UTC 时间。格式可参见 ISO8601。 |
| directive | String | -
| resource_ids | String | 此操作日志所涉及的资源信息，多个资源以空格分隔。 |
| owner | String | 日志提供者 ID。 |
| status | String | 日志状态。有效值为 `pending`、`working`、`failed`、`successful`。<br>`pending`：等待被执行<br>` working`：执行中<br> `failed`：执行失败<br> `successful`：执行成功 |
| status_time | TimeStamp | 日志最近一次状态变更时间，为 UTC 时间，格式可参见 ISO8601。|
| resource_ids | String | 资源 ID，一个或多个。 |
| resources | Dict | 操作资源的 ID。格式为`{"clusters":["cl-ddssvafd"]}`。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DescribeClusterJobs
&app=app-tg3lbp0a
&jobs.1=j-etkt94ebqra
&limit=1
&zone=pek3a
&COMMON_PARAMS
```

### 响应示例

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
