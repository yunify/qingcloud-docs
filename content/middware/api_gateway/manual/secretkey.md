---

title: "密钥管理"
linkTitle: "密钥管理"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 60
---

API 密钥用于 API 网关验证用户的身份，保障服务访问安全。密钥可由 API 网关自动生成 , 也可由用户手动创建，密钥需绑定到 API 才能生效。

## 新建密钥

按照以下操作，新建密钥。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **消息队列与中间件** > **API 网关** ，进入**API 网关**页面。

3. 点击**密钥管理**，进入密钥管理页。

4. 点击**新建密钥**，页面出现密钥创建弹窗，需填写密钥名称并选择密钥类型，密钥类型支持自动生成密钥和自定义密钥。

   **自动生成密钥**：无需填写密钥信息，填写密钥名称并点击确定即可创建成功。

   ![secretkey2](../_images/secretkey2.png)

   **自定义密钥**：用户需自定义密钥信息，密钥信息最长 50 个字符，仅支持输入字母、数字、下划线、中划线。

   ![secretkey3](../_images/secretkey3.png)

## 查看密钥

### 查看密钥列表

密钥管理页可查看已创建的所有密钥，密钥列表中展示密钥信息、密钥类型、已绑定的 API 数量。

![secretkey1](../_images/secretkey1.png)

### 查看密钥详情

在密钥列表中点击需查看详情的密钥名称，页面跳转到密钥详情页。支持查看密钥信息、以及密钥已绑定的 API 列表，进行 API 绑定和解绑操作。

![secretkey4](../_images/secretkey4.png)

## 管理密钥

### 绑定 API 

在密钥详情页，点击**绑定 API**，页面出现绑定密钥弹窗，弹窗中显示所有已创建的 API 列表。选择弹窗中的 API（仅可单选），点击**绑定**。

> **说明**
>
> 已绑定 API 不可选。
>
> 若 API 鉴权类型为免鉴权无法绑定，弹窗上方显示黄条将提示需要先开通 API 鉴权。若 API 鉴权类型为 QingCloud-Auth，则绑定成功。

![secretkey5](../_images/secretkey5.png)

### 解绑 API 

在密钥详情页，选择 API 点击**解绑 API**，页面出现解绑弹窗提示，确认后解绑。

![secretkey6](../_images/secretkey6.png)

### 编辑密钥

在密钥详情页，点击**编辑密钥**，页面出现编辑密钥弹窗，弹窗样式与新建时一致。编辑时不可修改密钥类型。

![secretkey7](../_images/secretkey7.png)

### 删除密钥

在密钥详情页，点击**删除密钥**。

- 若密钥已绑定 API，提示不可删除，需要先解绑所有 API。

  ![secretkey8](../_images/secretkey8.png)

- 若密钥未绑定任何 API，密钥可直接删除。

  ![secretkey9](../_images/secretkey9.png)

