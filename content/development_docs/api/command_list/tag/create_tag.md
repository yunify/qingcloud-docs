---
title: "CreateTag"
description: 
draft: false
---



创建标签，每个标签可以绑定多个资源。

**注意**: 标签名称少于15个字符, 不可重复.

标签数据可以随时通过 [_DescribeTags_](../describe_tags/) 得到。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| tag_name | String | 标签名称, 名称不可重复 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| tag_id | String | 创建成功的标签 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateTag
&tag_name=test
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateTagResponse",
  "tag_id":"tag-axbkmf20",
  "ret_code":0
}
```
