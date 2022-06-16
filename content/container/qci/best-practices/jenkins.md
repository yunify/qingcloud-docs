---
title: "使用 QCI 搭建 Jenkins 服务器"
description: 使用青云弹性容器实例 (QCI) 搭建一个Jenkins服务器
keyword: 青云, QingCloud, 云计算, QCI, 容器, 弹性容器实例
draft: false
weight: 10
---

 Jenkins 是一个开源的、提供友好操作界面的持续集成工具，主要用于持续、自动的构建及测试软件项目、监控外部任务的运行。本文将指导您如何使用青云弹性容器实例 (QCI) 部署一个 Jenkins 服务器。

## 准备工作

- 知识储备：基本了解 Jenkins 服务器的配置和使用。
- 注册青云账号：您需要注册一个青云账户并充值来购买资源。
- 创建相关资源：您提前创建好一个 VPC 网络及一个公网 IP，并将公网 IP 与 VPC 网络绑定。详情参考[准备工作](/container/qci/quickstart/qs_prepare/)。

## 背景知识

Jenkins 的前身是 Hudson 是一个可扩展的持续集成引擎。Jenkins 是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。Jenkins 支持各种运行方式，可通过系统包、容器或者通过一个独立的 Java 程序运行。

主要特色功能：

- 流水线
- 多种类型的计算节点支持（ SSH 、 JNLP 等）
- 丰富的插件扩展机制

## 操作步骤

### 步骤一：使用 QCI 创建 Jenkins 容器服务

1. 在**弹性容器实例**页面中，点击**创建**。

   ![img](/container/qci/_images/ksnip_20201122-162547.png)

2. 在弹性容器实例创建页面中指定容器镜像，点击**下一步**。

   ![img](/container/qci/_images/ksnip_20201122-163431.png)

3. 如果需要挂载外部硬盘，可以在卷挂载页面指定，这里直接点击**下一步**。

   ![img](/container/qci/_images/ksnip_20201122-165257.png)

4. 选择已创建好的 VPC 及私有网络，点击**下一步**。

   ![img](/container/qci/_images/ksnip_20201122-165438.png)

5. 指定容器组的基本信息并创建。

   ![img](/container/qci/_images/ksnip_20201122-165612.png)

   待容器组创建完成，从容器组列表中查看容器组私有网段 IP 。

   ![img](/container/qci/_images/ksnip_20201122-170802.png)

### 步骤二：设置访问控制规则

1. 在页面左侧导航栏选择**关联服务** > **VPC 网络**，在 VPC 网络列表，点击上述 QCI 实例所使用的 VPC，进入详情页  。

2. 点击**管理配置** > **端口转发** > **添加规则**，添加端口转发规则。

   ![img](/container/qci/_images/ksnip_20201122-170956.png)

3. 添加完成后，点击**应用修改**。

4. 回到弹性容器实例页面中，在关联服务中选择**安全组**，进入安全组页面。

   ![img](/container/qci/_images/ksnip_20201122-155246.png)

5. 找到 VPC 所属安全组，点击安全组 ID，进入详情页。

6. 点击**添加规则**，如下图所示。

   由于 Jenkins 服务对外需要暴露 8080 和 9000 端口，这里需要添加相关规则。

   ![img](/container/qci/_images/ksnip_20201122-155859.png)

7. 添加完成后，点击**应用修改**。

### 步骤三：外网访问 Jenkins

1. 切换到弹性容器实例详情页，点击**日志**页签，查看管理员初始密码。

   ![img](/container/qci/_images/ksnip_20201122-171740.png)

2. 通过 `http://VPC公网IP:8080`的方式直接访问 Jenkins。

   ![img](/container/qci/_images/ksnip_20201122-171940.png)

