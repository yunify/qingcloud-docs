---
title: "CreateVolumes"
description: 
draft: false
---



创建一块或多块硬盘，每块硬盘都可加载到任意一台云服务器中。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| size | Integer | 硬盘容量: <br/>* (超高)性能型大小范围是 10-1000GB, 步长是10GB <br/>* 容量型硬盘大小是 100-5000GB, 步长是50GB <br/>* 基础型硬盘大小范围是 10-2000GB, 步长是 10GB <br/> * SSD企业级硬盘大小是 10-2000GB, 步长是 10GB <br/>* 企业级分布式 SAN(NeonSAN)的大小是 100GB-5TB, 步长 100GB | Yes |
| volume_name | String | 硬盘名称 | No |
| volume_type | Integer | 硬盘类型:<br/>* 性能型是 0 <br/>* 容量型是 2 <br/>* 超高性能型是 3 (只能被超高性能云服务器挂载)，<br/>* 基础型硬盘是 100 (只能被基础型云服务器挂载)，<br/>* SSD 企业级硬盘是 200 (只能被企业型云服务器挂载)，<br/>* 企业级分布式 SAN (NeonSAN) 是 5, <br/>  上面的每个类型的硬盘并不是每个区都有，具体可以通过前端查看  | No |
| count | Integer | 创建硬盘的数量，默认是1<br/>注解: 每块硬盘的容量是相同的 | No |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |
| encryption | Boolean | 创建加密硬盘 | No |
| cipher_alg | String | 加密使用的算法类型:<br/>目前仅支持 aes256，默认 aes256 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| volumes | Array | 创建的硬盘 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateVolumes
&volume_name=demo
&size=20
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateVolumesResponse",
  "job_id":"j-bm6ym3r8",
  "volumes":["vol-j38f2h3h"]
  "ret_code":0
}
```
