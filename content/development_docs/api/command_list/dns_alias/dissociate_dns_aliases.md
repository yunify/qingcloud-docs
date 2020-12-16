---
title: "DissociateDNSAliases"
description: 
draft: false
---



从资源上解绑一个或多个内网域名。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| dns_aliases | Array | 内网域名别名 ID 列表 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

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
https://api.qingcloud.com/iaas/?action=DissociateDNSAliases
&dns_alias.1=da-q8f2bu7
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DissociateDNSAliasesResponse",
  "job_id":"j-pp51vko0",
  "ret_code":0
}
```
