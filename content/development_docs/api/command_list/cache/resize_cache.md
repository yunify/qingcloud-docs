---
title: "ResizeCaches"
description: 
draft: false
---



修改缓存服务节点内存大小。缓存服务状态必须是关闭的 stopped ，不然会返回错误。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| caches.n | String | 缓存服务ID | Yes |
| cache_size | Integer | 缓存服务节点内存大小，单位 GB。 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ResizeCaches
&caches.1=c-55dwkqew
&cache_size=2
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeCachesResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
