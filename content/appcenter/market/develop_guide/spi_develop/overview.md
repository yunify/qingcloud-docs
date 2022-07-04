---
title: "接口概述"
description: 
keyword: QingCloud, 青云, 云计算, 云市场, 商品接入
weight: 1
draft: false
---

服务商接入 SaaS 类商品到云市场，需要进行 SPI 对接，根据本指南实现 SPI 相关的接口定义。

## 调用场景

客户购买商品后，云市场通过调用 SaaS 服务商提供的 SPI 以满足实例创建、续费、删除等场景。

SPI 所需覆盖的场景与对应事件名称如下表所示。

| 场景                    | 事件名称        |
| ----------------------- | --------------- |
| [实例创建](../create/)  | CreateInstance  |
| [实例续费](../renewal)  | RenewInstance   |
| [实例升级](../upgrade/) | UpgradeInstance |
| [实例过期](../expire/)  | ExpireInstance  |
| [实例删除](../delete/)  | DeleteInstance  |
| [测试连接](../connect/) | TestConnection  |

## 调用方式

#### 通信协议

支持通过 HTTP 或 HTTPS 通道进行请求通信。为了获得更高的安全性，推荐使用 HTTPS 通道发送请求。

#### 请求地址

创建商品时输入的通知 URL。

#### 请求方法

请求方法为 **GET**。

#### 请求参数

所有参数均使用 **Query Params** 进行传递，其中 `action` 参数用于区分场景事件，`signature`、`timestamp` 参数用于校验请求合法性，详见[接口安全](../security/)。

#### 响应规则

“响应时间 <=15s  && 响应码 == 200 && 响应体格式 == json ”时判定为调用成功，否则判定为调用失败。

## 重试机制

接口调用失败时，云市场会按照以下规则进行重试。

> **说明**
>
> 服务商可根据去重字段来保障接口的幂等性。

| 事件名称        | 重试次数 | 去重字段    |
| --------------- | -------- | ----------- |
| CreateInstance  | 3        | order_id    |
| RenewInstance   | 3        | order_id    |
| UpgradeInstance | 3        | order_id    |
| ExpireInstance  | 3        | instance_id |
| DeleteInstance  | 3        | instance_id |
| TestConnection  | 2        | 无          |

