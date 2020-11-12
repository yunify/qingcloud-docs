---
title: "云应用"
description: test
draft: false
---

青云 QingCloud 物理主机服务，提供高性能、资源独享、安全隔离的专属物理主机群组，满足各类核心应用对高性能及稳定性的需求，同时提供完整的设备管理权限及运维服务。 用户可以像使用其他云资源一样，快速、灵活的部署及管理物理主机，并可按需弹性购买。

## 应用管理

登录[应用管理平台](https://appcenter.qingcloud.com/developer)之后，便可开始创建、管理您的应用了。本节将详细介绍应用的基本概念以及创建步骤。

![应用管理首页](../../images/home.png)

### 基本介绍

创建一个应用的基本流程：

- [创建一个应用](#创建应用)
- [创建该应用的第一个版本](../app-version-mgmt/create-app-version.html)
- [完善应用的详细信息](#应用信息)
- [提交应用版本审核](../app-version-mgmt/submit-app-version.html)或直接发布到个人应用中心(内部使用的应用)


### 创建应用

首先登录[应用管理平台](https://appcenter.qingcloud.com/developer)，点击“应用”部分的“+”号按钮，开始创建第一个应用。

![创建应用](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/home_create_app.png)

进入创建页面之后，输入应用名称，例如：HBase 1.2.2。

![输入应用名称](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/create_app.png)

点击“创建应用”按钮，您的第一个应用便创建成功，成功之后将直接进入[应用版本](../app-version-mgmt/create-app-version.html)中创建该应用的第一个版本，完善应用详细信息的步骤可暂时跳过。

### 应用信息

用户在浏览、搜索和查看应用时是通过基本信息来了解应用的各个方面的，主要包括以下几种信息：

- **应用名称**: 为您的应用起一个简洁明了的名称，便于用户浏览和搜索；
- **概述**: 简单介绍应用的主要功能及特性，让用户进一步了解该应用；
- **应用描述**: 可在应用描述中详细介绍应用的各个功能以及特性，当用户想进一步了解应用时，描述内容的完整将变成尤为重要；
- **应用类别**: 目前支持的应用类别主要有：基础服务、企业软件、研发管理、运维管理、安全管理和行业增值几大类，请根据应用的功能特性选择适合的应用类别；
- **使用说明**: 用户如何使用本应用的详细说明，[语法说明](../faq/README.html#tos_and_usage_desc)；
- **服务条款**: 若用户在使用应用过程中需要同意一些特殊条款请在此声明，用户在部署安装时我们会告知用户，[语法说明](../faq/README.html#tos_and_usage_desc)；
- **应用图标**: 为您的应用设计一枚美观的图标，以代表您的应用并突出应用特点；
- **应用截图**: 清晰的界面截图可以辅助以上信息帮助用户直观了解应用的各个方面。

完整、准确的应用信息可以让您的应用更容易被用户搜索到，在应用提交审核的时候以上信息也是管理员严格审核的内容之一。

需要强调的是：若对于已发布的应用需要更新其中部分内容，需要等下次版本发布成功后才可体现在应用中心中。

完善的 HBase 1.2.2 应用信息如下：

![应用信息](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/app_info.png)

在应用中心中呈现给最终用户的效果如下：

![应用信息预览](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/app_preview.png)

### 发布应用

应用(版本)通过审核之后，您可以选择适当的时间发布应用，发布之后用户便可通过 [AppCenter](https://appcenter.qingcloud.com/) 浏览、搜索查看到此款应用，并购买应用从而部署自己的应用实例。

### 管理应用

应用发布之后则需要您及时的管理好应用的各个方面，包括快速有效的回复用户对于应用的各类问题，查看用户的具体使用情况，了解应用的销售数据，必要时给相关用户发送应用更新通知等等。这些管理功能陆续都会完善上线并提供完整的使用指南。

### 下架应用

当您的应用不再对用户开放，或出现严重问题时可以选择将应用下架。应用下架意味着应用将不会出现在应用中心，用户也不会浏览搜索到此款应用。

决定下架应用之后，需要您在应用信息页面提出“下架申请”并写明下架原因，我们审核通过之后应用才下架成功。 已下架的应用如果还有用户在使用，开发者必须继续对应用进行必要的维护，以及回复用户提出的相关问题。

### 删除应用

当应用没有任何用户部署的情况下允许开发者将应用删除，从此不再需要进行任何维护与管理。

## 应用版本管理

### 基本介绍

“应用版本”对于一款应用来说是非常重要和关键的概念。一款应用从创建、发布到更新，整个过程中很可能需要提交多个应用版本，每个版本中都包括完整的应用服务功能，其主要属性如下:

- **版本名称**: 用数字或者字符表示应用的版本号，例如 1.0、2.1.20。若没有提供版本名称，系统将自动指定一个；
- **版本状态**: 包括准备提交、审核中、被拒绝、已通过、已上架、已下架和已删除几种状态，不同的状态对应不同的操作；
- **配置文件**: 用于描述应用具体服务的各类文件，文件格式支持 TAR，TAR.GZ，ZIP 和 TAR.BZ，后面将详细介绍配置文件及其制作方法和步骤；
- **版本描述**: 此描述内容主要用来记录此版本的具体更新，便于用户在升级应用时做详细了解。

### 版本记录

开发者可以查看所有创建过的版本列表，以及每个版本详细的审核记录。

注：此功能将在AppCenter 2.1 发布时提供。

### 创建配置文件

配置文件包是一组根据应用开发模版规范描述应用实例的文件组成，描述内容包括应用实例基础架构、生命周期及监控告警等，比如说创建应用实例时需要的参数，每个参数的可选项，以及各个节点的映像等。完整的配置文件包需要打包以下几个文件：

- config.json 该文件包含最终用户创建此应用实例时通过 UI 需设置的参数等信息；
- cluster.json.mustache 该文件包含创建此应用需要用到的映像、多少类节点、服务启动命令等信息；
- locale/en.json 英文翻译文件；
- locale/zh-cn.json 中文翻译文件。

config.json 中定义的参数，在青云QingCloud 控制台上由用户设置，控制台支持语言国际化，默认情况下，所有语言都会按配置项中的 label 和 description 展示，如果您想要适应不同的语言，需要在提交的应用中包含一个 locale 文件夹，并添加对应语言的翻译文件，如上所述。

将以上几个文件压缩打包成 TAR，TAR.GZ，ZIP 或 TAR.BZ 格式并上传。

我们提供了从简单到复杂的应用配置文件样例，详情请参看[应用开发模版规范-完整版](../specifications/specifications.html)，也提供一些[范例](https://github.com/search?q=topic%3Aqingcloud-sample-apps+org%3AQingCloudAppcenter&type=Repositories)供参考。

### 创建应用版本

了解了应用版本的主要属性之后，我们开始创建应用的第一个版本。如果是新创建的应用，那么在第一次进入“应用版本”页面时便可直接创建应用的第一个版本，默认版本名称为“新版本1”，版本状态为“准备提交”。若已有一个或多个版本存在，可以点击“创建新版本”按钮来创建。

![创建版本](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/create_app_version.png)

### 上架版本

审核通过之后，服务商可以根据自己的计划来选择时间上架此应用。应用一旦上架则意味着应用会出现在“应用中心”的应用列表中，用户可以随时浏览、购买并部署应用。且**上架的应用版本不允许再做任何修改**，如有问题需要修复或服务需要升级请按上面的步骤提交新版本，等待审核通过后可以上架新版本，再将旧版本下架或删除。

![上架版本](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/release_app_version.png)

### 下架版本

下架需要工单联系青云管理员，提交下架申请并等待青云管理员审核，下架的应用版本因为还有用户在使用，所以对于这些用户提交的工单开发者依旧要给予及时的响应和服务。当所有版本都下架时该应用也会自动下架。

### 提交应用版本

若当前版本各方面测试已通过，可以将此应用版本提交审核。但需要注意的是，提交审核之前请完善必要的应用信息，否则会影响审核结果。此情况下页面上也会有相应提示。

![提交审核之前](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/before_submit_app.png)

提交之后，应用版本的状态将更新为“审核中”。

![已提交审核](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/app_submitted.png)

审核工作将在10个工作日内完成。当审核被拒绝时页面上会显示详细的拒绝原因，请调整后重新提交审核。

![审核被拒绝](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/reject_app_version.png)

### 测试应用版本

输入完版本名称、配置文件以及版本描述之后可以点击“保存”按钮更新版本所有信息。提交审核之前需要对此版本进行完善测试，点击版本编辑表单最下方的“去控制台测试”按钮，可以前往控制台实际部署集群实例并进行各方面测试。值得注意的是测试区必须是您应用镜像所在区，只有当发布以后镜像才会复制到其它区。

![测试版本按钮](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/btn_test_app.png)

![测试版本](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/test_app.png)

在测试部署集群实例时需要填写创建表单，提交之后便开始部署过程，部署完成之后可在“集群列表”页面看到刚刚创建的集群实例，进入其详情页面可以查看到“基本信息”、“节点列表”以及“配置参数”等信息，同时可对集群实例做各项操作以测试其可用性等。

![我的应用](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/my_apps.png)

![应用集群列表](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/app_cluster_list.png)

![应用集群详情](C:/Users/qing/qingcloud-product-docs/_content/appcenter/images/app_cluster.png)