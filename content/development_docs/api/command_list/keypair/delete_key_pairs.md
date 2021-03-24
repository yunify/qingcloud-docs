---
title: "DeleteKeyPairs"
description: 
draft: false
---



删除一个或多个你拥有的密钥对。密钥对须在未使用的情况下才能被删除， 已加载到云服务器的密钥对需先卸载后才能删除， 关于卸载密钥对可参考 [_DetachKeyPairs_](../detach_key_pairs/)

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| keypairs.n | String | 密钥 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| keypairs | Array | 删除的密钥对 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteKeyPairs
&keypairs.1=kp-2yjg8qnj
&keypairs.2=kp-ld23cdzc
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteKeyPairsResponse",
  "keypairs":[
    "kp-2yjg8qnj",
    "kp-ld23cdzc"
  ],
  "ret_code":0
}
```
