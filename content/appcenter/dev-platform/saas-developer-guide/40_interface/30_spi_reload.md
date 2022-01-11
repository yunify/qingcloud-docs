---
title: "接口重试机制"
description: SPI 接口重试机制
keyword: QingCloud, 青云, AppCenter, 云应用开发平台, SaaS 
draft: false
weight: 30
---

所有 SPI 接口都有重试机制，如请求时网络通信异常或服务端响应不符合约定即会触发重试机制。

> 说明：
>
> 服务商接入以下SPI接口时，需注意数据幂等问题。

| 接口名称 | 重试接口           | 重试次数 | 去重字段    |
| -------- | ------------------ | -------- | ----------- |
| 创建实例 | CreateAppInstance  | 3        | order_id    |
| 续费实例 | RenewAppInstance   | 3        | order_id    |
| 升级实例 | UpgradeAppInstance | 3        | order_id    |
| 实例到期 | ExpireAppInstance  | 3        | instance_id |
| 实例删除 | DeleteAppInstance  | 3        | instance_id |
| 测试连接 | TestConnection     | 2        | 无          |

