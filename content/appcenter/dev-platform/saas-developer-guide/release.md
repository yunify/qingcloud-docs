---
title: "应用上架"
description: SaaS
draft: false
weight: 4
---

## 应用上架

### 创建应用

首先登录应用管理平台，点击“应用”部分的“+”号按钮，开始创建第一个应用：

![创建应用](/appcenter/dev-platform/saas-developer-guide/_image/create-saas-app.png)

输入应用名称，应用类型选择“集成应用”， 点击创建应用。

![应用类型](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-type.png)

在【应用设置】页面输入应用的基本信息：

应用URL： 您的Web应用URL，**必须是HTTPS地址**。

![HTTS 地址](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-url.png)

### 设置应用信息

在【应用信息】页面输入应用的详细信息：

![应用信息](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-info.png)

![应用信息](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-info2.png)

![应用信息](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-info3.png)

概述：应用的概述会出现在AppCenter首页，字数请勿超过 30 字。

应用描述: 应用的说明会出现在应用展示详情页面。

应用类别: 对应用进行分类, 会影响到应用在appcenter首页出现的位置。

网站: 应用说明网站。

使用说明: 《使用说明》支持 Markdown 编辑模式和外部链接模式(直接输入链接地址)。

服务条款: 《服务条款》支持 Markdown 编辑模式和外部链接模式(直接输入链接地址)。

应用图标: 应用图标尺寸为 96×96 px，格式支持 JPG 和 PNG。

应用截图: 应用截图尺寸为 1024×768 px，格式支持 JPG 和 PNG，一共可以上传 6 张截图。

删除应用: 没有用户使用时才能删除应用。

完整、准确的应用信息可以让您的应用更容易被用户搜索到，在应用提交审核的时候以上信息也是管理员严格审核的内容之一。

 

### 设置应用权限

在【应用权限】页面可勾选应用可以使用的青云默认提供的应用接口, 勾选之后, 应用的使用者将拥有访问对应 API的权限。

开发者勾选该应用接口后，可调用该接口进行再次封装，也就是未选中该应用权限的接口，则该应用权限接口不能被使用或导致调用失败。

若该应用无需获取用户的权限，则无需设置，可跳过此步骤。

![创建应用](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-permission.png)

开发者使用应用权限接口的方法如下：

开发者可通过发送post方法到http://appcenter.${环境名称}.com/api/

params: {"owner":"appCenter","action":"DescribeIAMApiActionsByTag"}

查看返回值中方法的具体信息：

结果包含json字符串

- appCenter: 根目录
- appCenter.eip: 服务类别
- appCenter.eip.ReleaseEips: 权限api名
- appCenter.eip.ReleaseEips.description: 权限api的描述
- appCenter.eip.ReleaseEips.description.keys: 权限api的传入参数
- appCenter.eip.ReleaseEips.description.keys.required: 必填参数
- appCenter.eip.ReleaseEips.description.keys.optional: 选填参数
- appCenter.eip.ReleaseEips.description.service_name: 权限api的服务名
- appCenter.eip.ReleaseEips.description.attributes: 权限api的服务名
- appCenter.eip.ReleaseEips.description. type: 权限api的调用类型
- appCenter.eip.ReleaseEips.description. id: 权限api的id

 

### 设置应用价格

在【应用价格】页面输入应用的价格，目前 AppCenter 集成应用内嵌云平台 Newbilling 计费系统，包含三种计费方式：

1. 包年包月：从订单支付成功开始计费，本次收所有合约期的费用，一直到合约期结束，根据产品属性和购买时间来收费。

2. 按需-按时长（预付费）：按实际开通时长以小时为单位进行收费，预付费模式。先收费再使用，例如：IP地址价格，在使用之前，先收一个小时的费用，用完一个小时后，再收未使用的后一个小时的费用。 IP地址价格:¥0.04每小时 X 1= ¥0.040每小时（合¥28.800每月）。

3. 按需-按使用量（后付费）：按实际使用量来收费，先使用再收费，例如IP按流量计费的流量费用。 例如：IP流量价格:¥0.96/GB (进/出流量取其中较大的值，进流量超出 10Mbps 才纳入计费）。

计费系统如下图：

![创建应用](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-nb.png)

## 测试开通

完成应用信息设置、应用权限设置、应用价格计费以及账户对接开发后，应用已完成跟云平台的接入。此时，可点击【测试应用】，测试该应用是否接入成功。

![创建应用](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-test-open.png)

如该应用有设置应用权限，则会提示先授权应用权限，才能访问该应用。


## 提交应用审核

若当前应用测试已通过，可以将此应用提交审核。但需要注意的是，提交审核之前请完善必要的应用信息，否则会影响审核结果。此情况下页面上也会有相应提示。

![创建应用](/appcenter/dev-platform/saas-developer-guide/_image/saas-app-audit.png) 

## 发布/上架应用

审核通过后，开发者上架该应用到应用市场，上架后，即可在应用市场查看到该应用的详细信息。用户通过应用市场，可查看、开通使用该应用。