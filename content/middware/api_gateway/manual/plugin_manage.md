---

title: "插件管理"
linkTitle: "插件管理"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 50
---

插件管理目前支持通过插件配置黑白名单等规则，阻断、仅记录或放行指定 IP 或域名的访问请求，即设置 IP/域名黑白名单等。

## 新建插件

按照以下操作，新建插件。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 在控制台导航栏中，选择**产品与服务** > **消息队列与中间件** > **API 网关** ，进入**API 网关**页面。
3. 点击**插件管理**，进入插件管理页，插件管理支持配置 IP 策略、限流策略。

### 创建 IP 策略

1. 点击 **IP 策略**，进入 IP 策略管理页，IP 策略管理支持创建 IP 黑名单、IP 白名单。

   ![plugin_manage1](../_images/plugin_manage1.png)

2. 点击**新建 IP 策略**，根据需要创建 IP 黑名单或 IP 白名单。

   若需创建 IP 黑名单，点击**IP 黑名单**，页面出现 IP 黑名单创建弹框，需填写**插件名称**、**描述**、**IP 黑名单**。

   ![plugin_manage2](../_images/plugin_manage2.png)

   若需创建 IP 白名单，点击**IP 白名单**，页面出现 IP 白名单创建弹框，需填写**插件名称**、**描述**、**IP 白名单**。

   ![plugin_manage3](../_images/plugin_manage3.png)

### 创建限流策略

1. 点击**限流策略**，进入限流策略管理页，限流策略包含：速率限制、请求限制、并发限制。

   ![plugin_manage4](../_images/plugin_manage4.png)

2. 点击**新建限流策略**，根据需要创建限流策略。

   若需创建速率限流策略，点击**速率限制**，页面出现速率限制策略创建弹窗，需填写**插件名称**、**描述**、**请求速率**、**突发值**、**Key**、**HTTP 状态码**。

   ![plugin_manage5](../_images/plugin_manage5.png)

   若需创建请求限制策略，点击**请求限制**，页面出现请求限制策略创建弹窗，需填写**插件名称**、**描述**、**请求数**、**时间长度**、**Key**、**HTTP 状态码**。

   ![plugin_manage6](../_images/plugin_manage6.png)

   若需创建并发限制策略，点击**并发限制**，页面出现并发限制策略创建弹窗，需填写**插件名称**、**描述**、**最大并发请求数**、**突发值**、**延迟时间**、**Key**、**HTTP 状态码**。

   ![plugin_manage7](../_images/plugin_manage7.png)

   若需创建 URI 拦截策略，点击**URI 拦截**，页面出现 URI 拦截策略创建弹窗，需填写**插件名称**、**描述**、**拦截规则**、**HTTP 状态码**。

   ![plugin_manage8](../_images/plugin_manage8.png)

## 查看插件

### 查看插件列表

进入插件管理页切换 tab，可以查看以创建的 IP 策略插件列表和限流策略列表。

![plugin_manage9](../_images/plugin_manage9.png)

### 查看插件详情

在插件列表中，点击插件名称可跳转插件详情页，详情页会显示当前插件已绑定的所有 API，并进行 API 绑定和解绑操作。

![plugin_manage10](../_images/plugin_manage10.png)

## 管理插件

### 绑定 API 

1. 在插件详情页，点击**绑定 API**，页面出现绑定插件弹窗，弹窗中显示所有已创建的 API 列表。

   ![plugin_manage11](../_images/plugin_manage11.png)

2. 选择弹窗中的 API（仅可单选），已绑定 API 不可选，点击 **绑定**，插件绑定成功。

   ![plugin_manage12](../_images/plugin_manage12.png)

3. 页面出现发布确认弹窗，若点击**稍后发布**，弹窗直接关闭，当前运行 API 为绑定插件前版本。若填写描述后，点击**发布 API**，API发布成功，当前运行 API 为绑定插件后版本。

### 解绑 API 

1. 在插件详情页，选择一个 API 点击**解绑 API**，页面出现确认解绑弹窗。

   ![plugin_manage13](../_images/plugin_manage13.png)

2. 点击弹窗中的**解绑**按钮，插件解绑成功。

   ![plugin_manage14](../_images/plugin_manage14.png)

3. 页面出现发布确认弹窗，若点击**稍后发布**，弹窗直接关闭，当前运行 API 为解绑插件前版本。若填写描述后，点击**发布 API**，API 发布成功，当前运行 API 为解绑插件后版本。

### 编辑插件

在插件详情页，点击**编辑插件**，页面出现编辑插件弹窗，支持修改插件名称、描述、IP 白名单列表。

![plugin_manage15](../_images/plugin_manage15.png)

### 删除密钥

在插件详情页，点击**删除插件**。

- 若插件已绑定 API，提示不可删除，需要先解绑所有 API。

  ![plugin_manage16](../_images/plugin_manage16.png)

- 若插件未绑定任何 API，插件可直接删除。

  ![plugin_manage17](../_images/plugin_manage17.png)

