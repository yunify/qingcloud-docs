---
title: "ResizeNFV"
description: 
draft: false
---



扩容或缩容一个网络组件。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID 。 | Yes |
| nfv_spec | Integer | 网络组件的规则，可以是 1-3 。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 缩容或者扩容网络组件的job ID号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ResizeNFV
&nfvs.1=nfv-1234abcd
&nfv_spec=2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeNFVResponse",
  "ret_code":0,
  "job_id":"j-0om6hgcokm5"
}
```
