---
title: "DeleteDnatRules"
description:
draft: false
---

删除DNAT规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| natgw_id | String | NAT网关的ID 。 | Yes |
| dnat_ids.n | String | 一个或多个待删除的DNAT ID。 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| dnat_ids | String | 被删除的DNAT规则ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteDnatRules
&natgw_id=nfv-1234abcd
&dnat_ids.1=dnat-p8zf9ytc
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteDnatRulesResponse",
  "dnat_ids":[
    "dnat-p8zf9ytc"
  ],
  "ret_code":0
}
```
