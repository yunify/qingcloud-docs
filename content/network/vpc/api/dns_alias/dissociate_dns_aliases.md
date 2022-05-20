---
title: "DissociateDNSAliases"
description: 从资源上解绑一个或多个内网域名。
keyword: API, 内网域名别名
weight: 15
draft: false
---

从资源上解绑一个或多个内网域名。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| dns_aliases | Array | 内网域名别名 ID 列表 | Yes |
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
https://api.qingcloud.com/iaas/?action=DissociateDNSAliases
&dns_alias.1=da-q8f2bu7
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DissociateDNSAliasesResponse",
  "job_id":"j-pp51vko0",
  "ret_code":0
}
```
