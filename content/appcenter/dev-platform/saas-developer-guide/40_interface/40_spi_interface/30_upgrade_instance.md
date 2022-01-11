---
title: "升级实例"
description: 介绍升级实例的请求参数、响应参数和示例说明。
keyword: QingCloud, 青云, AppCenter, 云应用开发平台, SaaS
draft: false
weight: 30
---

本章节介绍升级实例的请求参数、响应参数和示例说明。

### 升级规则

可以任意升级，低级别的套餐升高级别的套餐、高级别的套餐升低级别的套餐均不受限制。

### 请求参数

| 字段         | 类型   | 是否必选 | 描述                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| action       | string | true     | UpgradeAppInstance                                           |
| instance_id  | string | true     | 实例 ID                                                      |
| spec         | string | true     | spec 定价规格名称（base64 编码）                             |
| spec_package | string | true     | spec_package 定价规格套餐（base64  编码）                    |
| period       | string | true     | 定价-套餐有效期<br />参数组成：值_时间单位<br />例如：<li>1_year</li><li>1_day</li><li>1_month</li> |
| order_id     | string | true     | 订单 ID，可用于接口重试时的去重处理                          |
| time_stamp   | string | true     | 时间戳，格式：ISO8601<br />示例：2021-06-22T09:15:03Z<br />URL 编码后：2021-06-22T09%3A15%3A03Z |
| signature    | String | true     | 签名                                                         |

### 响应参数

| 参数    | 是否必选 | 类型    | 说明     |
| ------- | -------- | ------- | -------- |
| success | true     | boolean | 是否成功 |

### 示例说明

```
// 参数：
{
    "period": "1_day",
    "instance_id": "ff0f3b68-d3f3-11eb-aa00-acde48001122",
    "signature": "FDylNIKrzn5/IAAIghBQtr3IZxoXtyVizExghkF01EA=",
    "action": "UpgradeAppInstance",
    "time_stamp": "2021-06-23T07:24:07Z",
    "order_id": "appor-xxxxx",
    "spec": "5aWX6aSQ5ZCN56ewMQ=="
}
```

```
GET 请求：
http://127.0.0.1/test/spi?period=1_day&instance_id=ff0f3b68-d3f3-11eb-aa00-acde48001122&signature=FDylNIKrzn5%2FIAAIghBQtr3IZxoXtyVizExghkF01EA%3D&action=UpgradeAppInstance&time_stamp=2021-06-23T07%3A24%3A07Z&spec=5aWX6aSQ5ZCN56ewMQ%3D%3D
```

```
// 响应：
{
  "success": true
}
```
