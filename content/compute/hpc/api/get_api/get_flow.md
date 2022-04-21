---
title: "调用流程"
description: 本小节主要介绍 API 调用流程。 
keyword: mysql plus API 调用流程；调用流程
draft: true
weight: 05
collapsible: false
---

参照下图，调用 AppCenter 平台接口，更多说明请参见 AppCenter。

<img src="/appcenter/dev-platform/_images/um_spi_call.png">

## 基本步骤

1. 登录 [SSO](https://account.qingcloud.com/sso/oauth2) API 管理平台。
2. 获取授权码 code。

   SaaS 实例创建时 SPI 会带上 `cloud_info` 参数，cloud_info 中是访问云环境的地址。

   `cloud_info.sso_server` 是 SSO 的访问地址。

3. 请求获取 **access_token**。

   POST 请求`{cloud_info.sso_server}/sso/token/`

   <img src="/appcenter/dev-platform/_images/um_spi_token.png" style="zoom:50%;" />

4. 校验 **access_token**。

   POST 请求 `{cloud_info.sso_server}/sso/check_token/` 

   请求头中携带 {Authorization：access_token}

5. 访问用户数据。

   请求地址：`{cloud_info.api_server}/iam/` 