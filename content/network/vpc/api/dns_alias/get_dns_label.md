---
title: "GetDNSLabel"
description: 获取内网域名标记和域名名称。
keyword: API, 内网域名别名
weight: 1
draft: false
---

获取内网域名标记 (Label) 和域名名称 (Domain 参数)。

当给资源绑定内网域名时，此标记会与 prefix 一起组成内网域名，即： 内网域名 ＝ prefix + domain name。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| dns_label | String | 内网域名标记 |
| domain_name | String | 内网域名名称，此名称已包括了标记 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=GetDNSLabel
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action": "GetDNSLabelResponse",
  "dns_label": "xwxjic",
  "domain_name": "xwxjic.gd2.qingcloud.com",
  "ret_code":0
}
```
