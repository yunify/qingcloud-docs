---
title: "CloneInstances"
description: 
draft: false
weight: 20
---

拷贝一台或多台机器。

拷贝云服务器的前提，是此云服务器对应的镜像可用、没有被删除掉。云服务器处于运行或关机状态。

提醒

拷贝后的云服务器处于运行状态。原云服务器的硬盘等也会拷贝并挂载到目标云服务器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个云服务器ID | Yes |
| vxnets.n | String | 一个或多个云服务器克隆生成的新云服务器的vxnet或ip地址<br/>格式是: 'instance_id\|vxnet_id\|ip_addr'  | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CloneInstances
&instances.1=i-xrvfi3jx
&instances.2=i-w2kcs8vb
&vxnets.1='i-xrvfi3jx|vxnet-q57edqv|172.30.10.21'
&vxnets.2='i-w2kcs8vb|vxnet-3m9hetp'
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
recv: {
  "action":"CloneInstancesResponse",
  "instance_set":{
    "i-w2kcs8vb":{
      "instance_map":{
        "i-w2kcs8vb":"i-fckrkm13"
      }
    },
    "i-xrvfi3jx":{
      "instance_map":{
        "i-xrvfi3jx":"i-ebnp872h"
      },
      "volumes_map":{
        "vol-hl83huq8":"vol-635nsvoh",
        "vol-ttgud6t1":"vol-tl0y9w2f"
      }
    }
  },
  "ret_code":0,
  "job_id":"j-nlxw1url8uw",
  "instances":[
    "i-ebnp872h",
    "i-fckrkm13"
  ]
}
```
