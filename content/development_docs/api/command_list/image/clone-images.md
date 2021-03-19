---
title: "CloneImages"
description: 
draft: false
---



从一个镜像克隆多个镜像。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| image | String | 需要克隆的原始镜像 ID | Yes |
| count | Integer | 克隆镜像的数量，默认是1 | No |
| image_name | String | 镜像名称<br/>注解<br/>如果不指定，则和原始镜像名称一致 | No |
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
https://api.qingcloud.com/iaas/?action=CloneImages
&image=img-rtyv0968
&count=1
&image_name=clone
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CloneImagesResponse",
      "images":[
      "img-0qdcwle5"
      ],
      "job_id":"j-vrh2lpwt",
  "ret_code":0
}
```
