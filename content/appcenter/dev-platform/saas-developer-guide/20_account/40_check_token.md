---
title: "校验 access_token"
description: 校验 access_token 接口说明
keyword:  AppCenter, 云应用开发平台, SaaS
draft: false
weight: 40
---

### 请求域

SSO

### 请求路径

/sso/check_token/

### 请求方式

POST

## HTTP Header

Authorization: Bearer **access_token**

### 请求参数

| Parameter name        | Type | Description                                                  | Required |
| --------------------- | ---- | ------------------------------------------------------------ | -------- |
| is_filter_user_verify | int  | 是否显示user_verify信息（不传，默认为0，即不显示user verify信息） | No       |

![](/appcenter/dev-platform/_images/um_spi_access_token01.png)

![](/appcenter/dev-platform/_images/um_spi_access_token02.png)
