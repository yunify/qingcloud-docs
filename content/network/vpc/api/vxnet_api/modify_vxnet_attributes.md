---
title: "ModifyVxnetAttributes"
description: 修改私有网络的名称和描述。
keyword: VPC, 私有网络
weight: 8
draft: false
---

修改私有网络的名称和描述。

一次只能修改一个私有网络。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| vxnet_name | String | 私有网络名称 | No |
| description | String | 私有网络描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyVxnetAttributes
&vxnet=vxnet-rtyv0968
&vxnet_name=sample
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyVxnetAttributesResponse",
  "ret_code":0
}
```
