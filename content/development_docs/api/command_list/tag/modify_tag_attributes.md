---
title: "ModifyTagAttributes"
description: 
draft: false
---



修改标签的名称和描述。

一次只能修改一个标签。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| tag | String | 标签 ID | Yes |
| tag_name | String | 标签名称 | No |
| description | String | 标签描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyTagAttributes
&tag=tag-axbkmf21
&tag_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyTagAttributesResponse",
  "ret_code":0
}
```
