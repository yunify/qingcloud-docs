---
title: "构造请求"
description: 本小节主要介绍如何构造 MySQL Plus API 请求。 
keyword: mysql plus 请求；api 请求，构造请求
draft: false
weight: 20
collapsible: false
---

## API 密钥

调用 API 之前，必须在控制台创建密钥，获得 API 密钥ID（access_key_id）和 API 密钥私钥（secret_access_key）。
密钥 ID 将作为参数包含在每一个请求中发送，密钥私钥将生成请求的签名串。请妥善保管密钥私钥，请勿外传。

## 请求方法

HPC API 通过HTTPS GET/POST方式进行调用。

## 请求类型

API 请求主要分为 **延迟请求** 和 **实时请求** 两种。

- 延迟请求
  
  耗时请求，无法实时返回执行结果。存在的这种情况的请求将以任务形式提交到后台执行，会在 API 请求返回中返回任务ID（job_id）。用户可根据查看资源状态来判断任务是否执行成功。
  
- 实时请求
  
  实时请求，会直接返回操作结果。

## 请求限制

- 配额限制
  
  为了保证用户能合理地使用 API，目前初始用户 API 访问配额限制为 2000次 / 3600秒，未来会开放更高的配额。

- 返回数据集长度限制
  
  当获取资源列表时，系统返回的最大数据长度是 100 ，即便配置了 `limit`。若需要获取很多的数据时，请根据返回的 `total_sum` （根据请求时的过滤参数，得到的数据集总数）分批获取。

## 请求结构

请求 URL 由如下部分组成，如下所示。

| 参数     | 描述                                        | 说明                                   |
| -------- | ------------------------------------------- | -------------------------------------- |
| API 入口 | API 调用的 webservice 入口。                | 统一为：https://hpc.api.qingcloud/api/ |
| 公共参数 | 每个 API 调用都需要包含公共参数。           | 详情见 [公共参数](../../parameters/)。 |
| 指令名称 | API **action** 指令名称，例如：cluster/list | -                                      |
| 指令参数 | 指令相关配置参数                            | -                                      |

## 请求示例

典型的 API 请求如下所示，这是一个 `/cluster/list` 的 API 请求。

```
https://hpc.api.qingcloud.com/api/cluster/list?access_key_id=XLSIICQIGCNVEVURUYVN&signature_method=HmacSHA256&signature_version=1×tamp=2022-04-11T15%3A00%3A13Z&version=1&zone=jinan1a&signature=MU1miP6YRr%252B%252FFRQoQjDeDwK6SW6Eqz4DJZiK0vh6KxE%253D
```

转换成便于查看的模式，如下所示。

```
https://hpc.api.qingcloud.com/api/cluster/list?access_key_id=XLSIICQIGCNVEVURUYVN
&signature_method=HmacSHA256
&signature_version=1×tamp=2022-04-11T15%3A00%3A13Z
&version=1
&zone=jinan1a
&signature=MU1miP6YRr%252B%252FFRQoQjDeDwK6SW6Eqz4DJZiK0vh6KxE%253D
```

