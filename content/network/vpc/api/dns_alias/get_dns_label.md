---
title: "GetDNSLabel"
description: 获取内网域名标记和域名名称。
keyword: QingCloud, 青云, 云计算, API, 内网域名别名
weight: 1
draft: false
---

获取内网域名标记 (Label) 和域名名称 (Domain Name)。

当给资源绑定内网域名时，此标记会与 prefix 一起组成内网域名，即： 内网域名 ＝ prefix + domain name。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| dns_label | String | 内网域名标记 |
| domain_name | String | 内网域名名称，此名称已包括了标记 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=GetDNSLabel
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action": "GetDNSLabelResponse",
  "dns_label": "xwxjic",
  "domain_name": "xwxjic.gd2.qingcloud.com",
  "ret_code":0
}
```
