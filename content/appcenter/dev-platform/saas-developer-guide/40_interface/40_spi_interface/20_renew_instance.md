---
title: "续费实例"
description: SaaS
draft: false
weight: 20
---

本章节介绍续费实例的请求参数、响应参数和示例说明。

### 请求参数

| 字段         | 类型   | 是否必选 | 描述                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| action       | string | true     | RenewAppInstance                                             |
| instance_id  | string | true     | 实例 ID                                                      |
| spec         | string | true     | spec 定价规格名称（base64 编码）                             |
| spec_package | string | true     | spec_package 定价规格套餐（base64  编码）                    |
| period       | string | true     | 定价-套餐有效期<br />参数组成：值_时间单位<br />例如：<li>1_year</li><li>1_day</li><li>1_month</li> |
| time_stamp   | string | true     | 时间戳，格式：ISO8601<br />示例：2021-06-22T09:15:03Z<br />URL 编码后：2021-06-22T09%3A15%3A03Z |
| signature    | String | true     | 签名                                                         |

### 响应参数

| 参数    | 是否必选 | 类型    | 说明     |
| ------- | -------- | ------- | -------- |
| success | true     | boolean | 是否成功 |

### 示例说明

```
参数：  
{
  ``"period"``: ``"1_day"``,
  ``"instance_id"``: ``"a0ec8245-d3f4-11eb-b8c6-acde48001122"``,
  ``"signature"``: ``"/nKR9+6PqJKkdJAoqvEeYhhQm8u2KhdwKnJ8LOf0rSg="``,
  ``"action"``: ``"RenewAppInstance"``,
  ``"time_stamp"``: ``"2021-06-23T07:28:39Z"``,
  ``"spec"``: ``"5aWX6aSQ5ZCN56ewMQ=="
}
```

```
GET请求： 
http:``//127.0.0.1/test/spi?period=1_day&instance_id=a0ec8245-d3f4-11eb-b8c6-acde48001122&signature=%2FnKR9%2B6PqJKkdJAoqvEeYhhQm8u2KhdwKnJ8LOf0rSg%3D&action=RenewAppInstance&time_stamp=2021-06-23T07%3A28%3A39Z&spec=5aWX6aSQ5ZCN56ewMQ%3D%3D  
```

```
响应：
{
 ``"success"``: ``true
}
```

 

