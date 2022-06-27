---
title: "LeaveVxnet"
description: 将云服务器从私有网络中断开。
keyword: VPC, 私有网络
weight: 4
draft: false
---



将云服务器从私有网络中断开。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| instances.n | String | 要离开的云服务器 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=LeaveVxnet
&vxnet=vxnet-q8f2bu7
&instances.1=i-opv1n2brh
&instances.2=i-m163jcqw1
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"LeaveVxnetResponse",
  "job_id":"j-pp51vko0",
  "ret_code":0
}
```
