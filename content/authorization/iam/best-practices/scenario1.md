---
title: "免密钥应用开发"
date: 2020-02-28T10:08:56+09:00
description: 
draft: false
weight: 51
---

当您准备自己在云上开发一款应用，需要在该应用中调用 QingCloud API/CLI （例如： StopInstances 停止云服务器）以完成某些功能时，过去您可能需要利用自己的账户 API 密钥作为该应用配置项在有需要时连接使用。

现在您可以通过配置 IAM 即可轻松实现免密钥访问，而无需担心配置项意外泄露的问题。

### 操作步骤

1.创建一个信任载体为云服务器的身份，并关联具备指定权限范围的策略（本例中将使用支持完全访问弹性云服务器服务的预置策略）

![demo1_CreateRole](../../_images/demo1_CreateRole.png)

2.将您准备用来部署和执行您开发的这款应用的云服务器，关联到新创建的身份上

![demo1_AssociateRole](../../_images/demo1_AssociateRole.png)

3.将 QingCloud 官方 SDK 引用到这款应用的身份鉴权代码中（本例中为 Python SDK）

![demo1_ConnectSDK](../../_images/demo1_ConnectSDK.png)

### 验证演示

根据上述操作步骤，由于应用所在云服务器绑定的身份具备弹性云服务器服务的完全权限，则在该云服务器上应可成功访问停止云服务器 API ： StopInstances ，但不可访问其他服务如删除私有网络 API ：DeleteVxnets 。

1.能操作停止云服务器 StopInstances ：

![demo1_ExcuteSDK1](../../_images/demo1_ExcuteSDK1.png)

![demo1_ExcuteCallback](../../_images/demo1_ExcuteCallback.png)

2.不能操作删除私有网络 DeleteVxnets ：

![demo1_ExcuteSDK2](../../_images/demo1_ExcuteSDK2.png)
