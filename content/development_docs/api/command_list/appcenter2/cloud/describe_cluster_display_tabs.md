---
title: "DescribeClusterDisplayTabs"
description: 
draft: false
---



获取集群display tabs的信息，前提需要集群所属的应用配置了Display tabs，可以通过 查看应用是否配置display tabs

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster | String | 集群ID | Yes |
| display_tabs | String | display tabs的名称 | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| display_tabs | Dict |　JSON格式的 display tabs 返回，`label`和`data`表示返回的标题和结果|
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用 [Redis Cluster](https://appcenter.qingcloud.com/apps/app-jwq1fzqo/Tomcat%20Cluster%20on%20QingCloud) 为例，获取名称为 `roles` 的display tabs信息

_Example Request_:

```
https://api.qingcloud.com/iaas/?
action=DescribeClusterDisplayTabs
&cluster=cl-2gi2b3oc
&display_tabs=roles
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DescribeClusterDisplayTabsResponse",
  "display_tabs":{
    "labels":[
      "ip",
      "role"
    ],
    "data":[
      [
        "192.168.0.13",
        "Master"
      ],
      [
        "192.168.0.14",
        "Master"
      ],
      [
        "192.168.0.9",
        "Master"
      ],
      [
        "192.168.0.10",
        "Slave"
      ],
      [
        "192.168.0.11",
        "Slave"
      ],
      [
        "192.168.0.12",
        "Slave"
      ]
    ]
  },
  "ret_code":0
}

```


