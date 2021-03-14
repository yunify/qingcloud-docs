---
title: "ModifyImageAttributes"
description: 
draft: false
---



修改镜像的名称和描述。

修改时不受镜像状态限制。

一次只能修改一个镜像。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| image | String | 镜像 ID | Yes |
| image_name | String | 镜像名称 | No |
| description | String | 镜像描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyImageAttributes
&image=img-rtyv0968
&image_name=sample
&description=staging_env
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyImageAttributesResponse",
  "ret_code":0
}
```
