---
title: "返回结构"
description: 本小节主要介绍 ClickHouse API 返回结构。 
keyword: ClickHouse 返回结构；API 返回结构
draft: false
weight: 30
collapsible: false
---



## 返回结构

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:200px">说明</span>|
| :--- | :--- | :--- | 
| 指令名称 | API 返回的指令名称 ( action )，例如 `DescribeInstancesResponse` 。 | API 返回的指令名称一般以 “API 请求指令名称” + “Response” 来表示。 |
| 返回码 | 返回码 ( ret_code ) 用来表示API请求的返回值。`ret_code = 0` 表示 API 请求正常；`ret_code != 0` 表示 API 请求错误。 | 详情可见 [错误码](../../error_code) |
| 返回参数 | 返回参数响应消息。 |  - |

### 返回示例

API 的返回结果为 JSON 结构，这是一个 `DescribeInstances` 的 API 请求返回：

```json
{
  "action":"DescribeInstancesResponse",
  "instance_set":[
    {
      "vcpus_current":1,
      "instance_id":"i-ogbndull",
      "vxnets":[
        {
          "vxnet_name":"primary vxnet",
          "vxnet_type":1,
          "vxnet_id":"vxnet-0",
          "nic_id":"52:54:ef:0c:ed:66",
          "private_ip":"10.50.13.54"
        }
      ],
      "memory_current":1024,
      "sub_code":0,
      "transition_status":"",
      "instance_name":"",
      "instance_type":"c1m1",
      "create_time":"2013-08-28T14:26:03Z",
      "status":"running",
      "status_time":"2013-08-28T14:26:03Z",
      "image":{
        "processor_type":"64bit",
        "platform":"linux",
        "image_size":20,
        "image_name":"CentOS 6.4 64bit",
        "image_id":"centos64x64",
        "os_family":"centos",
        "provider":"system"
      },
      "description":null
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
