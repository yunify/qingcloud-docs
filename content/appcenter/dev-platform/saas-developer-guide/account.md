---
title: "平台账户对接"
description: SaaS
draft: false
weight: 2

---

## SaaS 应用与平台账户对接

该SaaS 集成应用需与云平台进行账户对接，则需有一定的开发，如果不需要账户对接，可跳过此步。SaaS应用与系统交互主要分为以下两个部分：

1. SaaS 应用与SSO(Account)系统交互，用于云平台与SaaS 账户打通，如不需要账户打通则可不对接。
2. SaaS 应用与计费系统(NewBilling)系统交互，SaaS 应用内如涉及到服务项收费，需要对接newBilling 接口及SSO系统。

### 第一步: 使用授权码获取access_token

在应用需要使用云平台 SSO 场景下, 用户登录云平台 SSO 成功后, 系统会重定向到应用配置的 URL, 并在URL中以?code=xxxx的方式附带上授权码, 从Appcenter的开发者页面找到 client_id 和 client_secret. 

调用POST **/sso/token/**(SSO域) 使用授权码获取access_token

**Request Parameters**

| **Parameter name** | **Type** | **Description**                      | **Required** |
| ------------------ | -------- | ------------------------------------ | ------------ |
| grant_type         | string   | 授权模式，固定值：authorization_code | Yes          |
| code               | string   | 授权码                               | Yes          |
| client_id          | string   | 客户端ID                             | Yes          |
| client_secret      | string   | 客户端密钥                           | Yes          |


**Response Parameters**

| **Parameter name** | **Type** | **Description**                             | **Required** |
| ------------------ | -------- | ------------------------------------------- | ------------ |
| access_token       | string   | 访问令牌                                    | Yes          |
| expires_in         | int      | 过期时间，单位（秒）                        | Yes          |
| token_type         | string   | 令牌类型(Bearer/JWT)                        | Yes          |
| refresh_token      | string   | 更新令牌(token_issuer为iam_jwt，不返回此值) | No           |


### 第二步: 校验access_token

开发者拿到access_token后, 需要对access_token进行校验, 并换取id_token, access_key和secret_key。

调用POST **/sso/check_token/**(SSO域) 校验access_token

例如：http://sample_app/sample?refresh_token=xxxxx&access_token=xxxx

**Header: {'Authorization': 'Bearer ${access_token}'}** 

例如: http://account.qingcloud.com/sso/check_token/

注：qingcloud 为示意域名，真实域名需根据实际环境决定。

返回值中会包含如下信息:

**Response Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| access_key         | String   | 身份临时 access key | Yes          |
| secret_key         | String   | 身份临时 secret key | Yes          |
| token              | String   | 身份临时 id_token   | Yes          |
| user               | data     |                     | Yes          |

**User Data**

| **Parameter name** | **Type** | **Description** | **Required** |
| ------------------ | -------- | --------------- | ------------ |
| lang               | string   |                 | Yes          |
| user_id            | string   |                 | Yes          |
| user_name          | string   |                 | Yes          |
| email              | string   |                 | Yes          |
| phone              | string   |                 | Yes          |

从返回值中拿到access_key, secret_key, token和user信息保存起来, 在后面的请求中会用到

### 第三步: SaaS 应用收费项计费需要构建请求

### 构建请求到IAM

应用向Appcenter, IAM和New Billing请求时, 都需要通过IAM token校验, 校验通过后IAM会把请求转发到Appcenter, 再由Appcenter转发请求到New Billing。

将身份临时凭证中的 access_key 和 secret_key 按照[API 密钥签名](/development_docs/api/signature/)中的方法进行签名计算，然后在请求中附上第一步返回的id_token。

以 DescribeInstances 为例:

>https://api.qingcloud.com/iam/?access_key_id=0z7dO3oN03byx1CepBDTyl
>&action=DescribeInstances
>&req_id=35430c022b694133a6a758b62e21067b
>&signature_method=HmacSHA256
>&signature_version=2
>&status.1=running
>&status.2=stopped
>&time_stamp=2020-05-25T07%3A20%3A28Z
>&token=XXXXXX
>&verbose=0
>&version=1
>&zone=pekt3
>&signature=o8TW8DUQ3wyHz5YSkpMd9fSj4pJ24U7%2Buf7CeWKMoQw%3D

###  token过期的处理:

**如果请求返回401, 提示id_token过期, 则需要用refresh_token刷新access_token, 成功刷新后执行第一步校验access_token**

调用 POST /sso/refresh_token/(SSO域)

例如: http://account.qingcloud.com/sso/refresh_token/（ QingCloud 根据实际部署环境）

**Request Parameters**

| **Parameter name** | **Type** | **Description**                 | **Required** |
| ------------------ | -------- | ------------------------------- | ------------ |
| grant_type         | string   | 授权模式，固定值：refresh_token | Yes          |
| refresh_token      | string   | 更新令牌                        | Yes          |

**Response Parameters**

| **Parameter name** | **Type** | **Description**     | **Required** |
| ------------------ | -------- | ------------------- | ------------ |
| access_key         | String   | 身份临时 access key | Yes          |
| secret_key         | String   | 身份临时 secret key | Yes          |
| token              | String   | 身份临时 token      | Yes          |
| user               | data     |                     | Yes          |

