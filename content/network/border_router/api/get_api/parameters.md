---
title: "公共参数"
description: api 请求公共参数。 
keyword: 边界路由器, API 调用, 请求参数, 公共参数
draft: false
weight: 20
---

公共参数是指所有接口调用都需要用到的请求参数。

## 请求参数

| <span style="display:inline-block;width:120px">参数</span> | 描述                                                         | 说明                                                         |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                     | 每个 API 都有自己的 action，用来标识所请求指令。例如 `RunInstances`。 | 完整的指令名称列表请参见 [API 指令列表](../../api_list/allocate_eips/)。 |
| zone                                                       | 区域 ID，当 API 请求是需要在某个具体的区域执行时，需要加上该参数。例如 `pek3a`。 | 目前支持的区域 ID 有：<br/>pek3a：北京3区-A<br/>pek3：北京3区(包括 pek3b/pek3c/pek3d)<br/>sh1a：上海1区-A<br/>gd2：广东2区(包括 gd2a/gd2b)<br/>ap2a：亚太2区-A |
| time_stamp                                                 | 请求串生成时间，格式为 `YYYY-MM-DDThh:mm:ssZ`，例如 `”2013-08-27T13:58:35Z”`，具体格式可以参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime)。 | 这个时间为 UTC 时间，假设您的本地时间为北京时间 `UTC+8` ，您需要将其转化为 `UTC+0` 的时间。 |
| access_key_id                                              | 申请的 API 密钥 ID，例如 `QYACCESSKEYIDEXAMPLE`。            | -                                                            |
| version                                                    | API的版本号，目前只支持版本号为 `1`。                        |                                                              |
| signature_method                                           | 签名所用哈希算法，目前支持 `HmacSHA256` 和 `HmacSHA1`。      | -                                                            |
| signature_version                                          | 签名函数的版本号，目前只支持版本号为 `1`。                   | -                                                            |
| signature                                                  | 请求消息的签名，请参见签名方法。                             | -                                                            |

## 请求示例

```url
[https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE](https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE)
&action=RunInstances
&count=1
&time_stamp=2013-08-27T13%3A58%3A35Z
&image_id=centos64x64
&instance_type=small_b
&signature_method=HmacSHA256
&signature_version=1
&version=1
&zone=pek3a
&signature=xMFvKenlbAAc0jGJ0iBHUhzh/wOBu3B8hypk+fTThFY=
```
