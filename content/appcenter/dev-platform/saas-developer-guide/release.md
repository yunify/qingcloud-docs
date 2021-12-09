---
title: "应用上架"
description: SaaS
draft: false
weight: 3
---

本章节介绍如何创建应用、设置应用信息、设置应用权限、应用价格，以及将应用上架。

### 创建应用

如果需要做账户对接，需开启 【是否免密】开关。

1. 登录[应用开发平台](https://appcenter.qingcloud.com/developer/)，点击“应用”部分的“+”号，开始创建第一个应用。

   <img src="/appcenter/dev-platform/_images/um_app_devop.png" style="zoom:50%;" />

2. 应用类型选择 **SaaS 应用**， 输入**应用名称**和**应用概述**。

   <img src="/appcenter/dev-platform/_images/um_app_create.png" style="zoom:50%;" />

3. 点击**创建应用**，进入**应用设置**页面。

4. 输入应用的基本信息。

   **密钥**：自动生成，用于 SSO 登录，为一组密钥ID、密钥串。

   **app_key** ：自动生成，用于 SPI 接口签名编码。

   **通知 URL**： 实现 SPI 接口的地址，**必须是HTTPS地址**。购买应用、应用续费、应用过期、资源释放、套餐升级的通知 URL 地址需要保持一致。

   **价格**：此处为 SaaS 价格，可以定义最多 20 种价格计划，有效期支持按月或者按年设置。

   <img src="/appcenter/dev-platform/_images/um_app_set.png" style="zoom:50%;" />

### 设置应用信息

1. 点击**应用信息**页签，进入**应用信息**页面。

   ![](/appcenter/dev-platform/_images/um_app_info01.png)

2. 输入应用相关详细信息。

   完整、准确的应用信息可以让您的应用更容易被用户搜索到，在应用提交审核的时候以上信息也是管理员严格审核的内容之一。

   相关参数说明，如下所示。

   **概述**：应用的概述会出现在AppCenter首页，字数请勿超过 30 字。

   **应用描述**：应用的说明会出现在应用展示详情页面。

   **商品描述**：应用的说明会出现在应用展示页面，字数请勿超过 300 字。

   **用户案例**：应用的说明会出现在应用展示详情页面，字数请勿超过 300 字。

   **使用说明**：《使用说明》支持 Markdown 编辑模式和外部链接模式（直接输入链接地址）。

   **服务支持**：填写用户使用中遇到的问题可以寻求支持的联系方式。

   **产品附件说明**：用于告知用户该产品对用户履行的责任或注意事项。支持 Markdown 编辑模式和外部链接模式（直接输入链接地址）。

   **应用分类**：对应用进行分类, 会影响到应用在 appcenter 首页出现的位置。

   **应用图标**：应用图标尺寸为 96×96 px，格式支持 JPG 和 PNG。

   **应用截图**：应用截图尺寸为 1024×768 px，格式支持 JPG 和 PNG，一共可以上传 6 张截图。

   **网站（可选）**：应用说明网站。

   **删除应用**：没有用户使用时才能删除应用。

### 设置应用权限

创建应用时，选择免密登录才能配置应用权限。

#### 接口授权

1. 点击**应用权限**，进入**应用权限**页面。

   <img src="/appcenter/dev-platform/_images/um_app_auth.png" style="zoom:50%;" />

2. 可在左侧菜单栏中选择**服务类别**，然后勾选应用可以使用的青云默认提供的应用接口。

   勾选之后，应用的使用者将拥有访问对应 API 的权限。

   开发者勾选该应用接口后，可调用该接口进行再次封装，也就是未选中该应用权限的接口，则该应用权限接口不能被使用或导致调用失败。

   若该应用无需获取用户的权限，则无需设置，可跳过此步骤。

   <img src="/appcenter/dev-platform/_images/um_app_auth_choose.png" style="zoom:50%;" />

#### 应用权限接口使用方法

开发者使用应用权限接口的方法，如下所示。

开发者可通过发送 post 方法到 http://appcenter.${环境名称}.com/api/

params: {"owner":"appCenter","action":"DescribeIAMApiActionsByTag"}

查看返回值中方法的具体信息：

结果包含 json 字符串

- appCenter：根目录
- appCenter.eip：服务类别
- appCenter.eip.ReleaseEips：权限 api 名称
- appCenter.eip.ReleaseEips.description：权限 api 的描述
- appCenter.eip.ReleaseEips.description.keys：权限 api 的传入参数
- appCenter.eip.ReleaseEips.description.keys.required：必填参数
- appCenter.eip.ReleaseEips.description.keys.optional：选填参数
- appCenter.eip.ReleaseEips.description.service_name：权限 api 的服务名称
- appCenter.eip.ReleaseEips.description.attributes：权限 api 的服务名称
- appCenter.eip.ReleaseEips.description. type：权限 api 的调用类型
- appCenter.eip.ReleaseEips.description. id：权限 api的 id

## 测试开通

完成应用设置、应用信息设置、应用权限设置以及账户对接开发后，应用已完成跟云平台的接入。

此时，可点击**测试应用**，测试该应用是否接入成功。

<img src="/appcenter/dev-platform/_images/um_app_testing.png" style="zoom:50%;" />

如该应用有设置应用权限，则会提示先授权应用权限，才能访问该应用。

## 上传测试报告

需要按照要求完成自测报告后，并上传自测报告。点击下载 [SaaS 自测报告](https://marketplace.pek3a.qingstor.com/Self-testReport/SaaS%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E6%B5%8B%E6%8A%A5%E5%91%8AV0.1.docx)。

<img src="/appcenter/dev-platform/_images/um_saas_selftest.png" style="zoom:50%;" />

## 提交应用审核

若当前应用测试已通过，可以将此应用提交审核。但需要注意的是，提交审核之前请完善必要的应用信息，否则会影响审核结果。此情况下页面上也会有相应提示。

![](/appcenter/dev-platform/_images/um_app_review.png)

## 发布/上架应用

审核通过后，开发者上架该应用到应用市场，上架后，即可在应用市场查看到该应用的详细信息。用户通过应用市场，可查看、开通使用该应用。