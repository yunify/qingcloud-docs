---
title: "JoinVxnet"
description: 将云服务器加入到私有网络。
keyword: VPC, 私有网络
weight: 3
draft: false
---

将云服务器加入到私有网络。当需要云服务器加入私有网络时指定 IP 地址，只支持单台云服务器加入。

> **说明**
>
> 一台云服务器最多只能加入一个受管网络。



## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID (如果要指定 ip 地址，格式为'私有网络 ID\|IP 地址') | Yes |
| instances.n | String | 加入到网络的云服务器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=JoinVxnet
&vxnet=vxnet-q8f2bu7
&instances.1=i-opv1n2brh
&instances.2=i-m163jcqw1
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"JoinVxnetResponse",
  "job_id":"j-pp51vko0",
  "ret_code":0
}
```
