---
title: "AssociateDNSAlias"
description: 
draft: false
---



绑定内网域名别名到资源，资源可以是处于基础网络的云服务器，以及路由器。

警告

一个内网域名只能绑定到一台资源上，同一个资源可绑多个不同的域名

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| prefix | String | 域名别名前缀，此前缀会跟 [_GetDNSLabel_](../get_dns_label/) 一起组成内网域名 | Yes |
| resource | String | 资源 ID | Yes |
| dns_alias_name | String | 域名别名名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| dns_alias_id | String | 内网域名别名 ID |
| domain_name | String | 内网域名 |
| job_id | String | 操作日志 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AssociateDNSAlias
&prefix=database
&resource=i-opv1n2brh
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AssociateDNSAliasResponse",
  "dns_alias_id":"da-ivgvz1cb"
  "domain_name":"database.xwxjic.pek3a.qingcloud.com"
  "job_id":"j-pp51vko0",
  "ret_code":0
}
```
