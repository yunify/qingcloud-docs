---
title: "SSO API"
description: 
draft: false
---

## OAuth 2.0（授权码模式）

### 获取授权码

**请求域** : SSO

**请求路径**：/sso/oauth2/

**请求方式**：GET

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| client_id | string | 客户端ID | Yes |
| state | string | 客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值 | No |
| response_type | string | 授权类型，固定值：code | Yes |
| redirect_uri | string | 重定向URI | Yes |


### 获取ACCESS_TOKEN

**请求域**: SSO

**请求路径**：/sso/token/

**请求方式**：POST

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| grant_type | string | 授权模式，固定值：authorization_code | Yes |
| code | string | 授权码 | Yes |
| redirect_uri | integer | 重定向的URI | Yes |
| client_id | string | 客户端ID | Yes |
| client_secret | string | 客户端密钥 | Yes |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| access_token | string | 访问令牌 | Yes |
| expires_in | int | 过期时间，单位（秒） | Yes |
| token_type | string | 令牌类型(Bearer/JWT) | Yes |
| refresh_token | string | 更新令牌(token_issuer为iam_jwt，不返回此值) | No |


### 校验ACCESS_TOKEN

**请求域**: SSO

**请求路径**：/sso/check_token/

**请求方式**：POST

**HTTP Header**:

**Authorization**: Bearer ***

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| is_filter_user_verify | int | 是否显示user_verify信息（不传，默认为0，即不显示user verify信息）参数可选值：0/1 | No |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| access_key | String | 身份临时 access key | Yes |
| secret_key | String | 身份临时 secret key | Yes |
| token | String | 身份临时 token | Yes |
| user | data |  | Yes |

### 更新ACCESS_TOKEN

**请求域**: SSO

**请求路径**：/sso/refresh_token/

**请求方式**：POST

**HTTP Header**:

**Authorization**: Bearer ***

**Request Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| grant_type | string | 授权模式，固定值：refresh_token | Yes |
| refresh_token | string | 更新令牌 | Yes |

**Response Parameters**


| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| access_token | string | 访问令牌 | Yes |
| expires_in | int | 过期时间，单位（秒） | Yes |
| token_type | string | 令牌类型(Bearer) | Yes |
| refresh_token | string | 更新令牌 | Yes |
