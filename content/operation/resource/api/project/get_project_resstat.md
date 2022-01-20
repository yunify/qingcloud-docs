---
title: "GetProjectResourceStat"
description: 本小节主要介绍获取项目资源统计接口。 
keyword: 创建项目
weight: 180
collapsible: false
draft: false

---



获取项目资源统计。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | GetProjectResourceStat（获取项目资源统计）                   | true                                                         |
| console_id                                                   | String                                                   | 控制台id                                                     | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | true                                                         |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为60                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items                 | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | --------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
|                                                              | console_id            | String                                                     | 控制台id                                                     |
|                                                              | duration              | Integer                                                    | 持续时长                                                     |
|                                                              | eip_bandwidth         | Integer                                                    | eip带宽                                                      |
|                                                              | eip_count             | Integer                                                    | eip统计                                                      |
|                                                              | end_time              | TimeStamp                                                  | 统计结束时间                                                 |
|                                                              | instance_count        | Integer                                                    | 主机统计                                                     |
|                                                              | memory_sum            | Integer                                                    | 内存统计                                                     |
|                                                              | resource_group_id     | String                                                     | 资源组id                                                     |
|                                                              | vcpus_count           | Integer                                                    | cpu统计                                                      |
|                                                              | volume_count          | Integer                                                    | 磁盘统计                                                     |
|                                                              | wan_connect_bandwidth | Integer                                                    | sd_wan链接带宽                                               |
|                                                              | wan_connect_count     | Integer                                                    | sd_wan连接数统计                                             |
|                                                              | wan_cpe_count         | Integer                                                    | 没能理解的参数                                               |
|                                                              | wan_line_bandwidth    | Integer                                                    | sd_wan 在线带宽                                              |
|                                                              | wan_line_count        | Integer                                                    | sd_wan 在线数统计                                            |
|                                                              | wan_vpc_bandwidth     | Integer                                                    | sd_wan带宽                                                   |
|                                                              | wan_vpc_count         | Integer                                                    | sd_wan统计                                                   |
| action                                                       |                       | String                                                     | GetProjectResourceStatResponse                               |
| elapsed_time                                                 |                       | Integer                                                    | 查询耗时                                                     |
| total_count                                                  |                       | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| ret_code                                                     |                       | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |
| data                                                         |                       | Array                                                      | 告警数据体                                                   |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?owner=usr-WantwZJ8
&project_id=pj-xzvlxlb5
&action=GetProjectResourceStat
&offset=0
&limit=60
&console_id=alphacloud
```

### 响应示例

```json
{
    "elapsed_time": 0.0023250579833984375,
    "total_count": 1,
    "data": [
        {
            "resource_group_id": "rg-h9v3ucnq",
            "vcpus_count": 0,
            "volume_count": 0,
            "wan_vpc_count": 0,
            "instance_count": 0,
            "eip_count": 0,
            "wan_vpc_bandwidth": 0,
            "console_id": "alphacloud",
            "wan_cpe_count": 0,
            "volume_size": 0,
            "wan_cpe_bandwidth": 0,
            "wan_line_count": 0,
            "memory_sum": 0,
            "duration": "daily",
            "wan_connect_count": 0,
            "eip_bandwidth": 0,
            "wan_line_bandwidth": 0,
            "wan_connect_bandwidth": 0,
            "end_time": "2021-12-27T17:50:14"
        }
    ],
    "action": "GetProjectResourceStatResponse",
    "ret_code": 0
}
```