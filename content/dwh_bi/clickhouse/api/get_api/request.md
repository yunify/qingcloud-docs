---
title: "构造请求"
description: 本小节主要介绍如何构造 ClickHouse API 请求。 
keywords: ClickHouse 请求；api 请求，构造请求
draft: false
weight: 20
collapsible: false
---


## 请求类型

API 请求主要分为 **延迟请求** 和 **实时请求** 两种。

- 延迟请求
  
  对于耗时请求，无法实时返回执行结果。这些请求将以任务形式提交给后台执行，并会在 API 请求返回中返回任务 ID ( job_id )。这种情况下，用户可以通过查看资源状态来判断任务是否执行完成。
  
  例如，在提交 `RunInstances` 操作之后，用户可以通过 `DescribeInstances` 查看 Instance 的状态确认 Instance 是否创建成功。

- 实时请求
  
  对于非耗时请求，会直接返回操作结果。

## 请求限制

- 配额限制
  
  为了保证用户能合理地使用 API，目前初始用户 API 访问配额限制为 2000次 / 3600秒，未来会开放更高的配额。

- 返回数据集长度限制
  
  当获取资源列表时，系统返回的最大数据长度是 100 ，即便配置了 `limit`。若需要获取很多的数据时，请根据返回的 `total_sum` （根据请求时的过滤参数，得到的数据集总数）分批获取。

## 请求结构

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:200px">说明</span>|
| :--- | :--- | :--- | 
| API入口 | API 调用的 webservice 入口。| 统一为 [https://api.qingcloud.com/iaas/](https://api.qingcloud.com/iaas/) |
| 公共参数 | 每个 API 调用都需要包含公共参数 。| 详情可见 [公共参数](../../parameters) |
| 指令名称 | API **action** 指令的名称，例如 `DescribeInstances` 。 | - |
| 指令参数 | 指令相关配置参数。 |  - |

### 请求示例

一个典型的API请求如下所示，这是一个 `DescribeInstances` 的 API 请求：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE&action=DescribeInstances&expires=2013-08-29T07%3A42%3A25Z&limit=20&signature_method=HmacSHA256&signature_version=1&status.1=running&time_stamp=2013-08-29T06%3A42%3A25Z&version=1&zone=pek3b&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```

方便查阅模式：

```url
https://api.qingcloud.com/iaas/?access_key_id=QYACCESSKEYIDEXAMPLE
&action=DescribeInstances
&expires=2013-08-29T07%3A42%3A25Z
&limit=20
&signature_method=HmacSHA256
&signature_version=1
&status.1=running
&time_stamp=2013-08-29T06%3A42%3A25Z
&version=1
&zone=pek3b
&signature=ihPnXFgsg5yyqhDN2IejJ2%2Bbo89ABQ1UqFkyOdzRITY%3D
```
