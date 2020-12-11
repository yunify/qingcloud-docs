---
title: "使用青云弹性容器实例 (QCI) 搭建一个Jenkins服务器"
description: test
draft: false
---

## 项目概览

在本项目中，您将了解如何使用青云弹性容器实例 (QCI) 部署一个 Jenkins 服务器。 Jenkins 是一个开源的、提供友好操作界面的持续集成工具，主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。

## 准备事项

青云账号：您需要注册一个青云账户并充值来购买资源。

技能水平：基本了解 Jenkins 服务器的配置和使用

## 前期小知识

Jenkins 的前身是 Hudson 是一个可扩展的持续集成引擎。Jenkins 是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。Jenkins 支持各种运行方式，可通过系统包、容器或者通过一个独立的 Java 程序运行。

主要特色功能：

- 流水线
- 多种类型的计算节点支持（ SSH 、 JNLP 等）
- 丰富的插件扩展机制

## 具体操作

借助于青云云平台，可以方便地将弹性容器实例部署在青云私有网络当中，而私有网络本身需要提前接入青云 VPC 网络当中。在青云云平台产品与服务下拉菜单中选择容器服务中的弹性容器实例 (QCI) 。

![img](../Build-Jenkins.assets/ksnip_20201122-152209.png)

在弹性容器界面中，可以很方便地看到 QCI 的关联资源，右边展示的是 QCI 的实例列表。

![img](../Build-Jenkins.assets/ksnip_20201122-153125.png)


### 1. 创建 EIP

对于 QCI 实例中指定的镜像地址为公网地址或者实例本身需要通过公网对外暴露服务以及实例内部需要通过公网访问外部资源的情况，需要事先在云平台中申请一个 EIP。在弹性容器页面中选择关联服务中的公网 IP， 进入 EIP 的服务页面。

![img](../Build-Jenkins.assets/ksnip_20201122-154457.png)

点击申请，创建出指定规格的 EIP。

![img](../Build-Jenkins.assets/ksnip_20201122-154827.png)

### 2. 创建防火墙

回到之前的弹性容器实例页面中，在关联服务中选择防火墙，进入防火墙的服务页面。

![img](../Build-Jenkins.assets/ksnip_20201122-155246.png)

![img](../Build-Jenkins.assets/ksnip_20201122-155407.png)

点击创建，指定防火墙名称并确认以后，跳转到防火墙的详情页。由于Jenkins服务对外需要暴露 8080 和 9000 端口，这里需要添加相关规则并应用防火墙。

![img](../Build-Jenkins.assets/ksnip_20201122-155859.png)

### 3. 创建私有网络

再次回到弹性容器实例页面中，点击关联服务中的私有网络，进入私有网络服务页面。

![img](../Build-Jenkins.assets/ksnip_20201122-161214.png)

点击创建，进入私有网络创建页面。

![img](../Build-Jenkins.assets/ksnip_20201122-161214.png)

创建一个单可用区的私有网络。

![img](../Build-Jenkins.assets/ksnip_20201122-161614.png)

### 4. 创建 VPC 网络

切回弹性容器实例页面中，点击关联服务中的 VPC 网络， 进入VPC 网络服务页面。

![img](../Build-Jenkins.assets/ksnip_20201122-152647.png)

点击创建 VPC 网络进入 VPC 网络创建页面。

![img](../Build-Jenkins.assets/ksnip_20201122-153608.png)

选择之前创建的防火墙并点击创建。

![img](../Build-Jenkins.assets/ksnip_20201122-160638.png)

进入 VPC 网络详情页，进入图形化页面，绑定 EIP ，加入上面创建的私有网络，点击应用修改。

![img](../Build-Jenkins.assets/ksnip_20201122-162123.png)

### 5. 创建Jenkins容器服务

在弹性容器实例页面中，点击创建。

![img](../Build-Jenkins.assets/ksnip_20201122-162547.png)

在弹性容器实例创建页面中指定容器镜像。

![img](../Build-Jenkins.assets/ksnip_20201122-163431.png)

点击下一步。

![img](../Build-Jenkins.assets/ksnip_20201211-135657.png)

如果需要挂载外部硬盘，可以在卷挂载页面指定，这里直接点击下一步。

![img](../Build-Jenkins.assets/ksnip_20201122-165257.png)

指定上面创建的私有网络。

![img](../Build-Jenkins.assets/ksnip_20201122-165438.png)

指定容器组的基本信息并创建。

![img](../Build-Jenkins.assets/ksnip_20201122-165612.png)

待容器组创建完成，从容器组列表中查看容器组私有网段 IP 。

![img](../Build-Jenkins.assets/ksnip_20201122-170802.png)

### 6. 设置 VPC 网络的端口转发规则

切换到之前的 VPC 网络详情页，点击管理配置，添加端口转发规则，最后应用修改。

![img](../Build-Jenkins.assets/ksnip_20201122-170956.png)

### 7. 查看Jenkins相关日志并获取管理员初始密码

切换到弹性容器实例详情页，点击日志查看管理员初始密码。

![img](../Build-Jenkins.assets/ksnip_20201122-171740.png)

### 8. 外网访问并解锁 Jenkins

因为上面已经设置好了相应的端口转发规则，这里可以通过 EIP + 8080 端口的方式直接访问Jenkins。

![img](../Build-Jenkins.assets/ksnip_20201122-171940.png)


