---
title: "VPC 和私有网络 Vxnet 的网络 ACL 配置和操作"
description: manual
draft: false
weight: 30
---

为了方便您使用网络 ACL，我们在 VPC 和私有网络 Vxnet 页面中也增加了网络 ACL ，您可以查看相关的网络 ACL 配置，并进行一定的操作。因为网络 ACL 可以绑定多个私有网络 Vxnet，所以在网络 ACL 绑定给多个私有网络时，请您谨慎增删或者修改规则，建议您在复制后的网络 ACL 中修改。

>网络 ACL 绑定多个私有网络时，网络 ACL 的应用修改会同步给所有绑定的私有网络。

## 在 VPC 下私有网络页面中配置和操作

在 VPC 的**私有网络**界面下，每个私有网络都新增了**网络 ACL** 页面，您可以在资源列表中查看当前 ACL 中的全部资源。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **网络** > **VPC 网络**，进入**VPC 网络**页签。

2. 在**VPC 网络**页签中，选择**私有网络**界面，每个私有网络都新增了**网络 ACL** 页面，您可以在资源列表中查看当前 ACL 中的全部资源。

   <img src="../../_images/create_acl_13.png" style="zoom:19%;" />

3. 点击**网络 ACL** ，就进入私有网络的网络 ACL 页面，您可以查看、添加、修改、禁用、删除当前绑定的网络 ACL 中的规则。

   <img src="../../_images/create_acl_14.png" style="zoom:23%;" />

   您还可以点击提示中的**创建或管理 ACL** 快速跳转到网络 ACL 页面。

   当有规则没有应用修改时，您可以点击**应用修改**将规则的修改应用到所有关联的 Vxnet。

## 在私有网络页面中绑定和解绑网络 ACL

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **网络** > **VPC 网络**，进入**VPC 网络**页签。

2. 在**VPC 网络**页签中，选择**私有网络**界面，每个私有网络都新增了**网络 ACL** 页面，您可以在资源列表中查看当前 ACL 中的全部资源。

   <img src="../../_images/create_acl_13.png" style="zoom:19%;" />

3. 右键点击私有网络名称，选择**网络 ACL** ，选择**绑定 / 解绑**来对私有网络的 ACL 进行操作。

   <img src="../../_images/create_acl_15.png" style="zoom:23%;" />

