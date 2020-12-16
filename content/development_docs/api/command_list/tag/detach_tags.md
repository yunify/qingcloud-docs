---
title: "DetachTags"
description: 
draft: false
---



将标签从资源上解绑，

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource_tag_pairs.n | String | 资源标签对, 每项参数可见下面 [Resource Tag Pairs Item](#resource-tag-pairs-item) | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

**Resource Tag Pairs Item**

| Name | Type | Description |
| --- | --- | --- |
| tag_id | String | 标签 ID |
| resource_type | String | 资源类型 |
| resource_id | String | 资源 ID |

[_公共参数_](../../../parameters/) **Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DetachTags
&resource_tag_pairs.1.tag_id=tag-hp55o9i5
&resource_tag_pairs.1.resource_type=instance
&resource_tag_pairs.1.resource_id=i-5yn6js06
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DetachTagsResponse",
  "ret_code":0
}
```
