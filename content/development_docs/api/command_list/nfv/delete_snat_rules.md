---
title: "DeleteSnatRules"
description:
draft: false
---

删除SNAT规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| natgw_id | String | NAT网关的ID 。 | Yes |
| snat_ids.n | String | 一个或多个待删除的SNAT ID。 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| snat_ids | String | 被删除的SNAT规则ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteSnatRules
&natgw_id=nfv-1234abcd
&snat_ids.1=snat-p8zf9ytc
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSnatRulesResponse",
  "snat_ids":[
    "snat-p8zf9ytc"
  ],
  "ret_code":0
}
```
