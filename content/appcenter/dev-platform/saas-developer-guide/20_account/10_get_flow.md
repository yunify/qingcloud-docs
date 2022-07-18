---
title: "调用流程"
description: SaaS 应用调用青云平台接口主要流程。
keyword:  AppCenter, 云应用开发平台, SaaS
draft: false
weight: 10
---

您可以参照如下方式调用青云平台接口。

<img src="/appcenter/dev-platform/_images/um_spi_call.png">

访问青云平台，操作步骤如下所示。

1. 进入青云 [SSO](https://account.qingcloud.com/sso/oauth2) 登录页， 登录后获得授权码 code。

   SaaS 实例创建时 SPI 会带上 `cloud_info` 参数，cloud_info 中是访问云环境的地址。

   cloud_info.sso_server 是 SSO 的访问地址。

2. 请求获取 access_token。

   POST 请求`{cloud_info.sso_server}/sso/token/`

   <img src="/appcenter/dev-platform/_images/um_spi_token.png" style="zoom:50%;" />

3. 校验 access_token。

   POST 请求 `{cloud_info.sso_server}/sso/check_token/` 

   请求头中携带 {Authorization：access_token}

4. 访问用户数据。

   请求地址：`{cloud_info.api_server}/iam/` 

