---
title: "DescribeAppVersions"
description: 本小节主要介绍 ChronusDB 获取集群应用版本的接口。 
keyword: ChronusDB 集群应用版本，获取集群应用版本
weight: 24
collapsible: false
draft: false
---



获取一个或多个应用版本的信息。

可根据应用版本 ID，状态，应用 ID，标签等作为过滤条件，来获取应用信息。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| app_ids.n | String | 应用 ID，可以是一个或多个。`app_ids` 和 `version_ids` 两者必须至少有一个。 | No |
| version_ids.n | String | 应用版本 ID，可以是一个或多个。`app_ids` 和`version_ids` 两者必须至少有一个。 | No |
| name | String | 应用的名称。 | No |
| sort_key | String | 结果排序的列。 | No |
| owner | String | 按照用户账户过滤，只返回指定账户的资源。 | No |
| verbose | Integer | 是否返回冗长的信息。若为 `1`，则返回集群相关其它资源信息。 | No |
| offset | Integer | 数据偏移量。默认为 0。 | No |
| limit | Integer | 返回数据长度。默认为 20，最大 100。 | No |
| reverse | Integer | 是否逆序。1 为逆序，0 为正序。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| total_count | Integer | 应用版本的总数量。 |
| version_set | Array | 应用的版本集合。 |
| ret_code | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。  |

### 响应项 

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| status | String | 状态，`active`，`suspended`。|
| description | String | 应用版本描述。 |
| resource_kit | String | 应用的配置文件 ID。 |
| version_id | String | 应用版本的 ID。 |
| app_id | String | 应用 ID。 |
| create_time | TimeStamp | 应用版本的创建时间。 |
| visibility | String | 应用版本的可见范围，`public` 即为所有人可见；`private`为仅自己可见。|
| name | String | 版本的名称。 |
| console_id | String | 版本的 console ID。 |

## 示例 

### 请求示例

```
https://api.qingcloud.com/iaas/?action=DescribeAppVersions
&app_ids.1=app-tg3lbp0a
&limit=20
&COMMON_PARAMS
```

### 响应示例

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
      "name":"v1.0 - ZooKeeper 3.4.9"
    }
  ],
  "ret_code":0
}
```
