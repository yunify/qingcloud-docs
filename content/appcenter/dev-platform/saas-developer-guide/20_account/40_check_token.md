---
title: "校验 access_token"
description: SaaS
draft: false
weight: 40
---

### 请求域

SSO

### 请求路径

/sso/token/

### 请求方式

POST

### 请求参数

| Parameter name | Type   | Description                                                  | Required |
| -------------- | ------ | ------------------------------------------------------------ | -------- |
| grant_type     | string | 授权模式，固定值：authorization_code                         | Yes      |
| code           | string | 授权码                                                       | Yes      |
| client_id      | string | 客户端 ID（app_id）                                          | Yes      |
| client_secret  | string | 客户端密钥                                                   | Yes      |
| Token_issuer   | string | 参数可选值：app、app_dev<br />app：已上架的 app 使用。<br />app_dev：处于测试阶段的 app 使用 | Yes      |

### 响应参数

| Parameter name   | Type   | Description                                     | Required |
| ---------------- | ------ | ----------------------------------------------- | -------- |
| access_token     | string | 访问令牌                                        | Yes      |
| Expires_in       | int    | 过期时间，单位（秒）                            | Yes      |
| Token_type       | string | 令牌类型（bear/JWT）                            | Yes      |
| Refresh_tokenYes | string | 更新令牌（token_issuer 为 iam_jwt，不返回此值） | No       |

![](/appcenter/dev-platform/_images/um_spi_post.png)
