---
title: "应用版本管理"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 2
---

## 基本介绍

“应用版本”对于一款应用来说是非常重要和关键的概念。一款应用从创建、发布到更新，整个过程中很可能需要提交多个应用版本，每个版本中都包括完整的应用服务功能，其主要属性如下:

- **版本名称**: 用数字或者字符表示应用的版本号，例如 1.0、2.1.20。若没有提供版本名称，系统将自动指定一个；
- **版本状态**: 包括准备提交、审核中、被拒绝、已通过、已上架、已下架和已删除几种状态，不同的状态对应不同的操作；
- **配置文件**: 用于描述应用具体服务的各类文件，文件格式支持 TAR，TAR.GZ，ZIP 和 TAR.BZ，后面将详细介绍配置文件及其制作方法和步骤；
- **版本描述**: 此描述内容主要用来记录此版本的具体更新，便于用户在升级应用时做详细了解。

## 版本管理

### 创建应用版本

了解了应用版本的主要属性之后，我们开始创建应用的第一个版本。如果是新创建的应用，那么在第一次进入“应用版本”页面时便可直接创建应用的第一个版本，默认版本名称为“新版本1”，版本状态为“准备提交”。若已有一个或多个版本存在，可以点击“创建新版本”按钮来创建。

![创建版本](/appcenter/dev-platform/cluster-images/create_app_version.png)

### 创建配置文件

配置文件包是一组根据应用开发模板规范描述应用实例的文件组成，描述内容包括应用实例基础架构、生命周期及监控告警等，比如说创建应用实例时需要的参数，每个参数的可选项，以及各个节点的镜像等。完整的配置文件包需要打包以下几个文件：

- config.json 该文件包含最终用户创建此应用实例时通过 UI 需设置的参数等信息；
- cluster.json.mustache 该文件包含创建此应用需要用到的镜像、多少类节点、服务启动命令等信息；
- locale/en.json 英文翻译文件；
- locale/zh-cn.json 中文翻译文件。

config.json 中定义的参数，在青云QingCloud 控制台上由用户设置，控制台支持语言国际化，默认情况下，所有语言都会按配置项中的 label 和 description 展示，如果您想要适应不同的语言，需要在提交的应用中包含一个 locale 文件夹，并添加对应语言的翻译文件，如上所述。

将以上几个文件压缩打包成 TAR，TAR.GZ，ZIP 或 TAR.BZ 格式并上传。

镜像制作请参考：[镜像制作](/appcenter/dev-platform/cluster-developer-guide/image-build/build)

我们提供了从简单到复杂的应用配置文件样例，详情请参看[云应用开发模板规范 - 完整版](/appcenter/dev-platform/cluster-developer-guide/specifications/specifications)，也提供一些[范例](https://github.com/search?q=topic%3Aqingcloud-sample-apps+org%3AQingCloudAppcenter&type=Repositories)供参考。


### 测试应用版本

输入完版本名称、配置文件以及版本描述之后可以点击“保存”按钮更新版本所有信息。提交审核之前需要对此版本进行完善测试，点击版本编辑表单最下方的“去控制台测试”按钮，可以前往控制台实际部署集群实例并进行各方面测试。值得注意的是测试区必须是您应用镜像所在区，只有当发布以后镜像才会复制到其它区。

![测试版本按钮](/appcenter/dev-platform/cluster-images/btn_test_app.png)

![测试版本](/appcenter/dev-platform/cluster-images/test_app.png)

在测试部署集群实例时需要填写创建表单，提交之后便开始部署过程，部署完成之后可在“集群列表”页面看到刚刚创建的集群实例，进入其详情页面可以查看到“基本信息”、“节点列表”以及“配置参数”等信息，同时可对集群实例做各项操作以测试其可用性等。

![应用集群列表](/appcenter/dev-platform/cluster-images/app_cluster_list.png)

![应用集群详情](/appcenter/dev-platform/cluster-images/app_cluster.png)

### 提交应用版本

若当前版本各方面测试已通过，可以将此应用版本提交审核。但需要注意的是，提交审核之前请完善必要的应用信息，否则会影响审核结果。此情况下页面上也会有相应提示。

![提交审核之前](/appcenter/dev-platform/cluster-images/before_submit_app.png)

提交之后，应用版本的状态将更新为“审核中”。

![已提交审核](/appcenter/dev-platform/cluster-images/app_submitted.png)

审核工作将在 5 个工作日内完成。当审核被拒绝时页面上会显示详细的拒绝原因，请调整后重新提交审核。

![审核被拒绝](/appcenter/dev-platform/cluster-images/reject_app_version.png)

### 上架版本

审核通过之后，服务商可以根据自己的计划来选择时间上架此应用。应用一旦上架则意味着应用会出现在“应用中心”的应用列表中，用户可以随时浏览、购买并部署应用。且**上架的应用版本不允许再做任何修改**，如有问题需要修复或服务需要升级请按上面的步骤提交新版本，等待审核通过后可以上架新版本，再将旧版本下架或删除。

![上架版本](/appcenter/dev-platform/cluster-images/release_app_version.png)

### 下架版本

下架需要工单联系青云管理员，提交下架申请并等待青云管理员审核，下架的应用版本因为还有用户在使用，所以对于这些用户提交的工单开发者依旧要给予及时的响应和服务。当所有版本都下架时该应用也会自动下架。

### 版本记录

开发者可以查看所有创建过的版本列表，以及每个版本详细的审核记录。