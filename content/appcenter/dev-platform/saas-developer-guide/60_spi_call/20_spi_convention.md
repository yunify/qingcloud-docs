---
title: "接口约定"
description: SaaS
draft: false
weight: 20
---

1. 所有的 SPI 接口均为 GET 请求
2. 所有的SPI接口都会在URL和请求头带上**signature**参数； query路径中参数名为**signature** 请求头中参数名为**app_signature**；
3. SPI接口为同步请求，接入方需在15S内响应请求；
4. 如果spi接口操作成功
   - 响应状态码必须为200
   - 响应体需为json格式，响应头中带上 `Content-Type：application/json`
   - 不同的action必须按照青云平台给出的响应体结构返回
5. **以上 3、4 如未按照规范返回，青云平台即认定为操作失败**。
