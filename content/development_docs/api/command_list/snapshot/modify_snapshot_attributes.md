---
title: "ModifySnapshotAttributes"
description: 
draft: false
---



修改指定备份的相关属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | 备份 ID | Yes |
| snapshot_name | String | 新的备份名称 | No |
| description | String | 新的备份描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifySnapshotAttributes
&snapshot=ss-ijzkgq6r
&snapshot_name=test
&description=test
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySnapshotAttributesResponse",
  "ret_code":0
}
```
