---
title: "DescribeClusterDisplayTabs"
description: 本小节主要介绍 MySQL Plus 彻底删除集群的接口。 
keywords: mysql plus 彻底删除集群，删除集群
weight: 26
collapsible: false
draft: false
---



获取集群 Display Tabs 的信息，前提需要集群所属的应用配置了 Display Tabs，可以通过 查看应用是否配置 Display Tabs。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群 ID。 | Yes |
| display_tabs | String | Display Tabs 的名称。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| display_tabs | Dict |　JSON 格式的 Display Tabs 返回。`label`和`data`表示返回的标题和结果。|
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?
action=DescribeClusterDisplayTabs
&cluster=cl-2gi2b3oc
&display_tabs=roles
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

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
