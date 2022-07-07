---
title: "接口约定"
description: SPI 接口约定
keyword:  AppCenter, 云应用开发平台, SaaS 
draft: false
weight: 20
---

1. 所有的 SPI 接口均为 GET 请求。
2. 所有的SPI接口都会在URL和请求头带上 **signature** 参数；query 路径中参数名为 **signature**  请求头中参数名为**app_signature**。
3. SPI 接口为同步请求，接入方需在 15 秒内响应请求。
4. 如果 SPI 接口操作成功
   - 响应状态码必须为 200。
   - 响应体需为 json 格式，响应头中带上 `Content-Type：application/json`
   - 不同的 action 必须按照青云平台给出的响应体结构返回
5. **以上 3、4 如未按照规范返回，青云平台即认定为操作失败**。
