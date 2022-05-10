---
title: "ModifyEipAttributes"
description: 修改公网 IP 名称及描述。
draft: false
weight: 9
keyword: 公网 IP API,修改公网 IP
---

修改一个公网 IP 的名称和描述。

一次只能修改一个公网 IP，修改时不受公网 IP 状态限制。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| eip | String | 公网 IP 的 ID | Yes |
| eip_name | String | 公网 IP 名称 | No |
| description | String | 公网 IP 描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyEipAttributes
&eip=eip-rtyv0968
&eip_name=jenkins
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyEipAttributesResponse",
  "ret_code":0
}
```
