---
title: "概述"
description: Test description
draft: false
weight: 2
collapsible: false
---


青云QingCloud向用户开放所有资源操作相关的API，我们的API是通过 HTTPS GET 方式来进行调用的。在调用我们的API之前，您需要先在我们的控制台申请API密钥，包括 API密钥ID ( access_key_id ) 和 API密钥的私钥 ( secret_access_key )。 API密钥ID 将作为参数包含在每一个请求中发送；而 API密钥的私钥 负责生成请求串的签名，API密钥的私钥 需要被妥善保管，请勿外传。

**API 请求限制**

>
>
> *   配额限制: 为了保证用户能合理地使用 API ，我们对每位用户的 API 访问配额进行了限制，初始用户： 2000次 / 3600秒，未来会开放更高的配额。
> *   返回数据集长度限制: 当获取资源列表时，系统返回的最大数据长度是 100 ，即便你传了更大的 limit ， 所以如果你需要获取很多的数据时，请根据返回的 total_sum （根据请求时的过滤参数，得到的数据集总数）分批获取。
>
>

**API 请求结构**

| Name | Description | Notes |
| --- | --- | --- |
| API入口 | API 调用的 webservice 入口 | 我们的API入口目前统一为：[https://api.qingcloud.com/iaas/](https://api.qingcloud.com/iaas/) |
| 公共参数 | 每个 API 调用都需要包含公共参数 | 详情可见 [_公共参数_](../parameters/) |
| 指令名称 | API指令的名称 ( action )，例如 DescribeInstances 等。 | 完整的指令名称列表请参见 [_API指令列表_](../command_list/instance/)。 |
| 指令参数 | 指令参数请参见每个指令的相关文档。 |   |

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

| Name | Description | Notes |
| --- | --- | --- |
| 指令名称 | API 返回的指令名称 ( action )，例如 DescribeInstancesResponse 等。 | API 返回的指令名称一般以 “API 请求指令名称” + “Response” 来表示。 |
| 返回码 | 返回码 ( ret_code ) 用来表示API请求的返回值，当ret_code = 0时表示API请求正常，ret_code != 0时表示API请求错误。 | 详情可见 [_错误码_](../error_code/) |
| 返回参数 | 返回参数请参见每个指令的相关文档。 |   |

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
> *   **延迟请求**: 对于耗时请求，无法实时返回执行结果，例如 RunInstances 等。这些请求将以任务形式提交给QingCloud后台执行，并会在API请求返回中返回任务ID ( job_id )。这种情况下，用户可以通过查看资源状态来判断任务是否执行完成。例如，在提交 RunInstances 操作之后，用户可以通过 DescribeInstances 来查看 Instance 的状态以确认 Instance 是否创建成功。
> *   **实时请求**: 对于非耗时请求，会直接返回操作结果。
>
>
