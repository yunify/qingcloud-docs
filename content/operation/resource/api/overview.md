---
title: "概述"
description: 本小节主要介绍项目 api 概述。 
keyword: 项目 概述；api 概述
draft: false
weight: 05
collapsible: false

---

青云QingCloud向用户开放所有项目操作相关的API，API通过HTTPS GET方式来进行调用。

在调用 API 前，需要先申请API 密钥，获取 API 密钥 ID ( access_key_id ) 和 API 密钥私钥 ( secret_access_key )。

- API **密钥 ID** 将作为参数包含在每一个请求中发送；

- API **密钥私钥**负责生成请求串的签名进行鉴权。

>API密钥的私钥 需要被妥善保管，请勿外传。

本文档提供对项目进行相关操作，如对项目、项目角色进行增、删、改、查等。

**API 请求结构**

| Name     | Description                                           | Notes                                                        |
| -------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| API入口  | API 调用的 webservice 入口                            | 我们的API入口目前统一为：[https://api.qingcloud.com/iaas/](https://api.qingcloud.com/iaas/) |
| 公共参数 | 每个 API 调用都需要包含公共参数                       | 详情可见 [公共参数](/operation/resource/api/parameters/)     |
| 指令名称 | API指令的名称 ( action )，例如 DescribeInstances 等。 | 完整的指令名称列表请参见 [项目接口](/operation/resource/api/project/create_project/)。 |
| 指令参数 | 指令参数请参见每个指令的相关文档。                    |                                                              |

**API 请求样例**

一个典型的API请求如下所示，这是一个 DescribeInstances 的API请求:

```
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeInstances&expires=2013-08-29T07%3A42%3A25Z&limit=20&signature_method=HmacSHA256&signature_version=1&status.1=running&time_stamp=2013-08-29T06%3A42%3A25Z&version=1&zone=pek3b&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```

为了方便查看，我们将文档中的请求都进行换行来显示:

```
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE
&action=DescribeInstances
&expires=2013-08-29T07%3A42%3A25Z
&limit=20
&signature_method=HmacSHA256
&signature_version=1
&status.1=running
&time_stamp=2013-08-29T06%3A42%3A25Z
&version=1
&zone=pek3b
&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```

**API 返回结构**

| Name     | Description                                                  | Notes                                                        |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 指令名称 | API 返回的指令名称 ( action )，例如 DescribeInstancesResponse 等。 | API 返回的指令名称一般以 “API 请求指令名称” + “Response” 来表示。 |
| 返回码   | 返回码 ( ret_code ) 用来表示API请求的返回值，当ret_code = 0时表示API请求正常，ret_code != 0时表示API请求错误。 |                                                              |
| 返回参数 | 返回参数请参见每个指令的相关文档。                           |                                                              |

**API 返回样例**

API的返回结果为 JSON 结构，这是一个 DescribeInstances 的API请求返回:

```
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

**API 请求类型**

我们的API请求主要分为 **延迟请求** 和 **实时请求** 两种。

>
>
>*   **延迟请求**: 对于耗时请求，无法实时返回执行结果，例如 RunInstances 等。这些请求将以任务形式提交给QingCloud后台执行，并会在API请求返回中返回任务ID ( job_id )。这种情况下，用户可以通过查看资源状态来判断任务是否执行完成。例如，在提交 RunInstances 操作之后，用户可以通过 DescribeInstances 来查看 Instance 的状态以确认 Instance 是否创建成功。
>*   **实时请求**: 对于非耗时请求，会直接返回操作结果。
>