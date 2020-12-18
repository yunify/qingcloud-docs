---
title: "DeleteTags"
description: 
draft: false
---



删除一个或多个你拥有的标签，该标签绑定的所有资源自动解除绑定关系 关于解绑标签可参考 [_DetachTags_](../detach_tags/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| tags.n | String | 标签 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| tags | Array | 删除的标签 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteTags
&tags.1=tag-axbkmf20
&tags.2=tag-axbkmf21
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteTagsResponse",
  "tags":[
    "tag-axbkmf20",
    "tag-axbkmf21"
  ],
  "ret_code":0
}
```
