---
title: "接口概述"
description: SaaS
draft: false
weight: 10
---

第三方 SaaS 应用接入青云云市场需要实现相关的接口定义，服务商通过提供接口，获得应用订购成功的信息，从而为购买者开通应用。

青云saas提供了以下及个spi接口，如下所示。

| 使用场景 | 事件名称           |
| -------- | ------------------ |
| 创建实例 | CreateAppInstance  |
| 续费实例 | RenewAppInstance   |
| 升级实例 | UpgradeAppInstance |
| 实例到期 | ExpireAppInstance  |
| 实例删除 | DeleteAppInstance  |
| 测试连接 | TestConnection     |

实现SPI接口需要开发者在配置应用时填入通知url，青云app平台将通过此url调用接入的saas应用。

**一个简单的 SPI 实现示例：** https://github.com/xiaoli9965/saas-demo
