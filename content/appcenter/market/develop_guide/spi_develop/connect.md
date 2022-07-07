---
title: "测试连接"
description: 
keyword: 云市场,SaaS 商品接入,SPI
weight: 30
draft: false
---

## 接口描述

接口名称：TestConnection 

接口功能： 云市场将调用该接口测试服务商提供的商品发货 URL 是否成功连接。

## 请求参数

| 参数      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| action    | 固定值：TestConnection。                                     |
| signature | 签名。                                                       |
| timestamp | UNIX 时间戳。单位：秒。                                      |
| debug     | 是否为调试模式。<br/>取值：<ul><li>1：调试模式</li><li>0：非调试模式</li></ul>实际生产场景调用时，云市场会先采用调试模式调用一次，成功后再进行非调试模式下的调用。调试模式下服务商只需进行数据及资源校验，不需要进行实例相关的操作。 |



## 请求示例

#### query_params

```
{
  "action": "TestConnection",
  "debug": 1
}
```

#### Url 示例

```
https://{url}?action=TestConnection&debug=1&timestamp=1652328684&signature=6Op7O2nhUN1SZfIAimszI5qy%2Bb%2F0wU39zdztfxSEAJI%3D
```

> **说明**
>
> 请求示例里的` {url}`需替换为服务商发货地址。

## 响应参数

| 参数名称   | 是否必选 | 类型   | 描述                 |
| ---------- | -------- | ------ | -------------------- |
| spiVersion | 否       | string | SPI 版本。默认为 1。 |
| success    | 是       | bool   | 操作是否成功。       |

## 响应示例

```
{
   "spiVersion": "1",
   "success":true
}
```

