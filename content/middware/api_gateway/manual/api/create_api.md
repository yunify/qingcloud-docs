---

title: "创建 API"
linkTitle: "创建 API"
date: 2021-05-25T10:08:56+09:00
description:
draft: false
weight: 41
---

创建 API 时，需设置的 API 的后端服务、请求格式、接收格式、返回格式等规则内容。本小节主要介绍如何快速创建 API。

> **说明**
>
> API 网关服务基于 REST 的 API 架构，API 的开放和调用需要遵循 RESTful 相关规范。



## 前提条件

- 已创建 API 服务。如果未创建 API 服务，请先[创建 API 服务](../../create_apiservice/)。
- 如果需要使用 VPC，请先[创建 VPC 网络](/../../../../network/vpc/manual/vpcnet/10_create_vpc/)。

## 操作步骤

按照以下步骤，创建 API 服务。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **消息队列与中间件** > **API 网关** ，进入**API 网关**页面。

3. 点击 **API 服务**，API 创建方式支持三种：

   a. 点击服务卡片上的**新建 API**。

   ![create_api1](../_images/create_api1.png)

   b. 进入服务的 API 管理页面，服务详情右上角点击**新建 API** 或点击页面中**创建API**。

   ![create_api2](../_images/create_api2.png)

   c. 在 API 服务菜单中选择 API tab，直接点击页面上的**创建API**。

   ![create_api3](../_images/create_api3.png)

4. 进入新建 API 页面，新建 API 分为三步，分别是：

   1. 填写 API 基本信息，包括 API 所属服务、API 名称、API 描述。

      > **说明**
      >
      > 若 API 是通过上述新建 API 途径中的1、2方式创建，API 服务默认填写且不可修改。
      >
      > 若 API 是通过上述新建 API 途径中的 3 方式创建，API 服务可下拉选择。

      ![create_api4](../_images/create_api4.png)

   2. 填写 API 请求配置，包括鉴权类型、请求协议、请求路径、节点 IP、服务参数。

      **鉴权类型**：有免鉴权和 QingCloud-Auth。若选择 QingCloud-Auth，API 创建成功后需要绑定密钥，在请求该 API 时需要同时传递密钥。

      **请求协议**：目前支持 HTTP、HTTPS、WEBSOCKET。

      **请求路径**：可配置 API 的请求方式，当前支持 GET、POST、PUT、DELETE、PATCH 方法。Body 数据类型当选择 POST、PUT、PATCH 时会显示，并支持 JSON 和 From 格式。

      **节点 IP**：可配置多个并分配权重，用于进行负载均衡。

      > **说明**
      >
      > 当 Body 数据类型为 Form 时，服务参数中的参数位置可选 query、path、header、body。其他情况，参数位置均只可选query、path、header。

      ![create_api5](../_images/create_api5.png)

   3. 填写返回示例。包括请求实例、正常返回示例、失败返回示例（示例信息选填）。

      ![create_api6](../_images/create_api6.png)

