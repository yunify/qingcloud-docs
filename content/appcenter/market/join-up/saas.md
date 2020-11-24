---
title: "集成（SaaS）应用"
description: SaaS
draft: false
weight: 2
---
青云QingCloud AppCenter 集成（SaaS） 应用可以让可为第三方公司为青云用户提供各种专业服务。用户通过安装应用，授权给服务提供商，让服务提供商为您提供专业的服务，比如监控、安全等。

## 接入流程

![接入流程](/appcenter/market/join-up/_images/saas-flow.png)

## SaaS 应用与平台账户对接

该SaaS 集成应用需与云平台进行账户对接，则需有一定的开发，如果不需要账户对接，可跳过此步。SaaS应用与系统交互主要分为以下两个部分：

1. SaaS 应用与SSO(Account)系统交互，用于云平台与SaaS 账户打通，如不需要账户打通则可不对接。
2. SaaS 应用与计费系统(NewBilling)系统交互，SaaS 应用内如涉及到服务项收费，需要对接newBilling 接口及SSO系统。

### 第一步: 校验access_token

开发者拿到access_token, 对access_token进行校验, 并换取id_token, access_key和secret_key。

在应用需要使用云平台 SSO 场景下, 用户登录云平台 SSO 成功后, 系统会重定向到应用配置的 URL, 并在URL中以?access_token=xxxxx&refresh_token=xxxx的方式带上access_token和refresh_token.

例如：http://sample_app/sample?refresh_token=xxxxx&access_token=xxxx


调用POST **/sso/check_token/**(SSO域) 校验access_token

**Header: {'Authorization': 'Bearer ${access_token}'}** 

例如: http://sso.alphacloud.com/sso/check_token/

注：alphacloud 为示意域名，真实域名需根据实际环境决定。

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

### 第二步: SaaS 应用收费项计费需要构建请求

### 构建请求到IAM

应用向Appcenter, IAM和New Billing请求时, 都需要通过IAM token校验, 校验通过后IAM会把请求转发到Appcenter, 再由Appcenter转发请求到New Billing。
 
将身份临时凭证中的 access_key 和 secret_key 按照[API 密钥签名](https://docs.qingcloud.com/product/api/common/signature#api-密钥签名)中的方法进行签名计算，然后在请求中附上第一步返回的id_token。

以 DescribeInstances 为例:

>https://api.qingcloud.com/iam/?access_key_id=0z7dO3oN03byx1CepBDTyl
&action=DescribeInstances
&req_id=35430c022b694133a6a758b62e21067b
&signature_method=HmacSHA256
&signature_version=2
&status.1=running
&status.2=stopped
&time_stamp=2020-05-25T07%3A20%3A28Z
&token=XXXXXX
&verbose=0
&version=1
&zone=pekt3
&signature=o8TW8DUQ3wyHz5YSkpMd9fSj4pJ24U7%2Buf7CeWKMoQw%3D

###  token过期的处理:

**如果请求返回401, 提示id_token过期, 则需要用refresh_token刷新access_token, 成功刷新后执行第一步校验access_token**

调用POST /sso/refresh_token/(SSO域)

例如: [http://sso.alphacloud.com/sso/refresh_token/](http://sso.alphacloud.com/sso/check_token/) （[alphacloud](http://sso.alphacloud.com/sso/check_token/) 根据实际部署环境）

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


## 应用上架

### 创建应用

首先登录应用管理平台，点击“应用”部分的“+”号按钮，开始创建第一个应用：

![创建应用](/appcenter/market/join-up/_images/create-saas-app.png)

输入应用名称, 应用类型选择“集成应用”, 点击创建应用。

![应用类型](/appcenter/market/join-up/_images/saas-app-type.png)

在【应用设置】页面输入应用的基本信息：

应用URL： 您的Web应用URL，**必须是HTTPS地址**。

![HTTS 地址](/appcenter/market/join-up/_images/saas-app-url.png)

### 设置应用信息

在【应用信息】页面输入应用的详细信息：

![应用信息](/appcenter/market/join-up/_images/saas-app-info.png)

![应用信息](/appcenter/market/join-up/_images/saas-app-info2.png)

![应用信息](/appcenter/market/join-up/_images/saas-app-info3.png)

概述：应用的概述会出现在AppCenter首页，字数请勿超过 30 字

应用描述: 应用的说明会出现在应用展示详情页面

应用类别: 对应用进行分类, 会影响到应用在appcenter首页出现的位置

网站: 应用说明网站

使用说明: 《使用说明》支持 Markdown 编辑模式和外部链接模式(直接输入链接地址)

服务条款: 《服务条款》支持 Markdown 编辑模式和外部链接模式(直接输入链接地址)

应用图标: 应用图标尺寸为 96×96 px，格式支持 JPG 和 PNG

应用截图: 应用截图尺寸为 1024×768 px，格式支持 JPG 和 PNG，一共可以上传 6 张截图

删除应用: 没有用户使用时才能删除应用

完整、准确的应用信息可以让您的应用更容易被用户搜索到，在应用提交审核的时候以上信息也是管理员严格审核的内容之一。

 

### 设置应用权限

在【应用权限】页面可勾选应用可以使用的青云默认提供的应用接口, 勾选之后, 应用的使用者将拥有访问对应 API的权限。

开发者勾选该应用接口后，可调用该接口进行再次封装，也就是未选中该应用权限的接口，则该应用权限接口不能被使用或导致调用失败。

若该应用无需获取用户的权限，则无需设置，可跳过此步骤。

![创建应用](/appcenter/market/join-up/_images/saas-app-permission.png)

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

在【应用价格】页面输入应用的价格，目前 AppCenter 集成应用内嵌云平台Newbilling 计费系统，包含三种计费方式：

包年包月：从订单支付成功开始计费，本次收所有合约期的费用，一直到合约期结束，根据产品属性和购 买时间来收费。

1. 按需-按时长（预付费）：按实际开通时长以小时为单位进行收费，预付费模式。先收费再使用，例如：IP地址价格，在使用之前，先收一个小时的费用，用完一个小时后，再收未使用的后一个小时的费用。 IP地址价格:¥0.04每小时 X 1= ¥0.040每小时（合¥28.800每月）。

2. 按需-按使用量（后付费）：按实际使用量来收费，先使用再收费，例如IP按流量计费的流量费用。 例如：IP流量价格:¥0.96/GB (进/出流量取其中较大的值，进流量超出10Mbps才纳入计费。

如需更详细了解 New billing 计费与操作，请查看计费文档：*（待补充 New billing 文档链接）*

计费系统如下图：

![创建应用](/appcenter/market/join-up/_images/saas-app-nb.png)

## 测试开通

完成应用信息设置、应用权限设置、应用价格计费以及账户对接开发后，应用已完成跟云平台的接入。此时，可点击【测试开通】该应用是否接入成功。

![创建应用](/appcenter/market/join-up/_images/saas-app-test-open.png)

如该应用有设置应用权限，则会提示先授权应用权限，才能访问该应用。


## 提交应用审核

若当前应用测试已通过，可以将此应用提交审核。但需要注意的是，提交审核之前请完善必要的应用信息，否则会影响审核结果。此情况下页面上也会有相应提示。

![创建应用](/appcenter/market/join-up/_images/saas-app-audit.png) 

## 发布/上架应用

审核通过后，开发者上架该应用到应用市场，上架后，即可在应用市场查看到该应用的详细信息。用户通过应用市场，可查看、开通使用该应用。