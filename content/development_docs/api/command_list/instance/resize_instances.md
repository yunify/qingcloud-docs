---
title: "ResizeInstances"
description: 
draft: false
weight: 9
---

修改云服务器配置，包括 CPU 和内存。云服务器状态必须是关闭的 stopped ，不然会返回错误。

如果使用预设的 instance_type ，参数中就不需再指定 CPU 或内存，配置列表请参考 [_Instance Types_](../../../common/instance_type/) 。

如果参数中没有指定 instance_type ，则必须指定 cpu 和 memory。

如果参数中既指定 instance_type ，又指定了 cpu 和 memory ， 则以指定的 cpu 和 memory 为准。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 云服务器ID | Yes |
| instance_type | String | 云服务器类型，有效值请参考 [_Instance Types_](../../../common/instance_type/)<br/>如果请求中指定了 instance_type，cpu 和 memory 参数可略过。<br/>如果请求中没有 instance_type，则 cpu 和 memory 参数必须指定。<br/>如果请求参数中既有 instance_type，又有 cpu 和 memory，则以 cpu, memory 的值为准。 | No |
| cpu | Integer | CPU core，有效值为: 1, 2, 4, 8, 16 | No |
| memory | Integer | 内存，有效值为: 1024, 2048, 4096, 6144, 8192, 12288, 16384, 24576, 32768 | No |
| os_disk_size | Integer | 系统盘大小，单位GB。<br>Linux操作系统的有效值为：20-100，默认值为：20<br>Windows操作系统的有效值为：50-100，默认值为：50 | No |
| cpu_model | String | CPU 指令集, 有效值: Westmere, SandyBridge, IvyBridge, Haswell, Broadwell | No |
| cpu_topology | String | CPU 拓扑结构: 插槽数, 核心数, 线程数; 插槽数 * 核心数 * 线程数 应等于您应选择的CPU数量。 | No |
| gpu | Integer | GPU 个数 | No |
| zone | String | 区域 ID，注意要小写 | No |

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
https://api.qingcloud.com/iaas/?action=ResizeInstances
&instance_type=medium_a
&instances.1=i-r4jnbhui
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeInstancesResponse",
  "job_id":"j-cT9nUFvT",
  "ret_code":0
}
```
