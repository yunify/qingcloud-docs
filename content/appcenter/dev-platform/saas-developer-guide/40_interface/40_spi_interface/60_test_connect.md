---
title: "测试连接"
description: 介绍测试连接的请求参数、响应参数和示例说明。
keyword: QingCloud, 青云, AppCenter, 云应用开发平台, SaaS, SPI
draft: false
weight: 60
---

在调用其他 SPI 前都会先调用测试连接，网络通畅后会进行后续 SPI 调用， 接入方需实现这个 SPI。

### 请求参数

| 字段       | 类型   | 是否必选 | 描述                                                         |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| action     | string | true     | TestConnection                                               |
| time_stamp | string | true     | 时间戳，格式：ISO8601<br />示例：2021-06-22T09:15:03Z<br />URL 编码后：2021-06-22T09%3A15%3A03Z |
| signature  | String | true     | 签名                                                         |

### 响应参数

| 参数    | 是否必选 | 类型    | 说明     |
| ------- | -------- | ------- | -------- |
| success | true     | boolean | 是否成功 |

### 示例说明

```
// 参数：
{
    "action": "TestConnection",
    "time_stamp": "2021-06-23T07:11:23Z",
    "signature": "MB/9ZhsVQkeAe016lrZuSwjN14lWnfRjakaL29IjiQ0="
}
```

```
GET 请求
http://127.0.0.1/test/spi?action=TestConnection&time_stamp=2021-06-23T07%3A10%3A45Z&signature=ng%2B9i4PSisUNB8W74OcQkH4DfcyyVenSfTw4tmmbJso%3D
```

```
// 响应：
{
  "success": true
}
```
