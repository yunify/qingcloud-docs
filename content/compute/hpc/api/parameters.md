---
title: "公共参数"
description: 本小节主要介绍如何进行 MySQL Plus 集群 api 公共参数。 
keyword: mysql plus 公共参数；api 公共参数
draft: false
weight: 30
collapsible: false
---

公共参数是指所有接口调用都需要用到的公共请求参数。

## 请求参数

| <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:320px">描述</span>   | <span style="display:inline-block;width:240px">说明</span>   |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                     | 每个 API 都有自己的 action，用来标识所请求指令。例如 `/cluster/list`。 | 完整的指令名称列表请参见 [API 指令列表](../cluster/listcluster/)。 |
| zone                                                       | 区域 ID，当 API 请求是需要在某个具体的区域执行时，需要加上该参数。例如 `jinan1a`。 | 目前支持的区域 ID 有：<br/>jinan1a：济南1区-A<br/>jinan1：济南1区 |
| time_stamp                                                 | 请求串生成时间，格式为 YYYY-MM-DDThh：mm：ssZ，例如 "2022-4-11T14:40:45Z"。 | 这个时间为 UTC 时间，假设您的本地时间为北京时间 `UTC+8` ，您需要将其转化为 `UTC+0` 的时间。 |
| access_key_id                                              | 申请的 API 密钥 ID，例如 `XLSIKCQIOCNYEVURTYVN`。            | -                                                            |
| version                                                    | API的版本号，目前只支持版本号为 `1`。                        |                                                              |
| signature_method                                           | 签名所用哈希算法，目前支持 `HmacSHA256` 。                   | -                                                            |
| signature_version                                          | 签名函数的版本号，目前只支持版本号为 `1`。                   | -                                                            |
| signature                                                  | 请求消息的签名，请参见[签名方法](../get_api/signature/)。    | -                                                            |

### 请求示例

```url
https://hpc.api.qingcloud.com/api/cluster/list?access_key_id=XLSIICQIGCNVEVURUYVN
&signature_method=HmacSHA256
&signature_version=1
&timestamp=2022-04-11T15%3A00%3A13Z
&version=1
&zone=jinan1a
&signature=MU1miP6YRr%252B%252FFRQoQjDeDwK6SW6Eqz4DJZiK0vh6KxE%253D
```
