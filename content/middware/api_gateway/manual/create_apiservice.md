---

title: "创建 API 服务"
linkTitle: "创建 API 服务"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 30
---

API 服务相当于 API 的集合，API 提供者以 API 服务为单位，管理该 API 服务内的所有 API。创建 API 之前您需要先创建 API 服务。

## 创建服务

按照以下步骤，创建 API 服务。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **消息队列与中间件** > **API 网关** ，进入**API 网关**页面。

3. 点击**API 服务** > **创建服务**，出现创建 API 服务弹窗。

   ![create_apiservice1](../_images/create_apiservice1.png)

4. 填写 API 服务基础信息：API 服务名称及描述，下拉选择实例，可选择当前用户下所有正在运行中的实例。

   ![create_apiservice2](../_images/create_apiservice2.png)

## 查看服务列表

API 服务创建完成后，可在服务列表中查看已创建的服务信息。支持查看服务下的 API 数量，绑定的实例名称，绑定的域名，以及创建时间。

![create_apiservice3](../_images/create_apiservice3.png)

## 管理服务

鼠标放置到 API 服务卡片上即可查看横向服务操作，包含：查看监控、API 管理、新建 API；点击服务右上角按钮可查看纵向的相关操作，包含：编辑 API 服务、绑定域名、新建 API、删除 API 服务。

![create_apiservice4](../_images/create_apiservice4.png)

### 查看监控

点击**查看监控**，页面右侧显示监控页面。监控信息中展示了当前服务在不同时间段内的请求数和流量曲线。用户可切换时间 tab 选择监控时间范围，也可以点击自定义按钮，设定其他时间范围后查看监控数据。

![create_apiservice5](../_images/create_apiservice5.png)

### API 管理

点击**API 管理**，页面跳转到当前服务的 API 管理页面，显示当前服务下的所有 API 信息。

![apiservice6](../_images/apiservice6.png)

### 新建 API

点击**新建 API**，进入新建 API 页面，根据页面指引正确填写 API 信息，即可创建该服务下的 API。详细步骤参考：[创建 API](../api/create_api/)。

### 编辑 API 服务

点击**编辑 API 服务**，页面出现编辑服务弹窗，目前仅支持修改服务名称和描述。

![apiservice7](../_images/apiservice7.png)

### 绑定域名

点击**绑定域名**，页面出现绑定域名弹窗，填写域名地址，点击选择 DNS 域名下拉框，选择已创建的 DNS 域名。

![apiservice8](../_images/apiservice8.png)

> **说明**
>
> 若下拉中无 DNS 域名可选，请进入[QingCloud 管理控制台](https://console.qingcloud.com/login)点击 **域名与网站** > **云解析 DNS**，新建 DNS 域名，操作流程可参考：[云解析 DNS](../../../../../site/dns/quickstart/creatgslbpolicy/)。
>
> 若用户不绑定域名，服务会默认被绑定一个以 [apig.qingcloud.com](http://apig.qingcloud.com/)为后缀的域名，绑定新的域名后，域名数据刷新。
>
> ![apiservice8-1](../_images/apiservice8-1.png)

## 删除服务

点击服务卡片右上角按钮，点击**删除 API  服务**， 出现删除 API 服务弹窗。

- 已添加 API 的服务不支持直接删除，如需删除，请先删除服务下所有的 API 信息。

  ![apiservice9](../_images/apiservice9.png)

- 未添加 API 的服务可删除。

  ![apiservice10](../_images/apiservice10.png)
