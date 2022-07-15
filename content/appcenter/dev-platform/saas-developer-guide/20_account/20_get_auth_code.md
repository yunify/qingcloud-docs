---
title: "获取授权码"
description: 获取授权码的接口说明
keyword:  AppCenter, 云应用开发平台, SaaS
draft: false
weight: 20
---

### 请求域

SSO

### 请求路径

/sso/oauth2/

### 请求方式

GET

### 请求参数

| Parameter     | Type   | Description          | Required | 说明                                   |
| ------------- | ------ | -------------------- | -------- | -------------------------------------- |
| response_type | string | 授权类型             | Yes      | 固定值：code                           |
| client_id     | string | 客户端 ID            | Yes      | 与 app id 相同                         |
| state         | string | 状态                 | No       | 可以指定任意值，认证服务器会返回这个值 |
| redirect_url  | string | 登录成功后跳转的连接 | Yes      | -                                      |

### 示例说明

**请求**

sso 访问地址可通过 cloud_info.sso_server 获取。

```
https://account.qingcloud.com/sso/oauth2?response_type=code&client_id=app-8r2f7oyr
```

**登录成功**

URL 会携带 code 参数

```
http://console.qingcloud.com/app/app-8r2f7oyr/apply?code=FPNRDSJGKEZZPFIDIWTA
```

<img src="/appcenter/dev-platform/_images/um_spi_success.png" style="zoom:50%;" />

