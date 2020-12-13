---
title: "弹性容器实例 (QCI) 的使用"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: 青云
---

## 容器组的使用指南

### 1. 创建 EIP

在弹性容器页面中选择关联服务中的公网 IP， 进入 EIP 的服务页面。

![img](../Quick-start.assets/ksnip_20201122-154457.png)

点击申请，创建出指定规格的 EIP。

![img](../Quick-start.assets/ksnip_20201122-154827.png)

### 2. 创建防火墙

回到之前的弹性容器实例页面中，在关联服务中选择防火墙，进入防火墙的服务页面。

![img](../Quick-start.assets/ksnip_20201122-155246.png)

![img](../Quick-start.assets/ksnip_20201122-155407.png)

点击创建，指定防火墙名称并确认以后，跳转到防火墙的详情页。这里可以根据业务需要添加相关规则并应用防火墙。

![img](../Quick-start.assets/ksnip_20201122-155859.png)

### 3. 创建私有网络

再次回到弹性容器实例页面中，点击关联服务中的私有网络，进入私有网络服务页面。

![img](../Quick-start.assets/ksnip_20201122-161214.png)

点击创建，进入私有网络创建页面。

![img](../Quick-start.assets/ksnip_20201122-161214.png)

创建一个单可用区的私有网络。

![img](../Quick-start.assets/ksnip_20201122-161614.png)

### 4. 创建 VPC 网络

切回弹性容器实例页面中，点击关联服务中的 VPC 网络， 进入VPC 网络服务页面。

![img](../Quick-start.assets/ksnip_20201122-152647.png)

点击创建 VPC 网络进入 VPC 网络创建页面。

![img](../Quick-start.assets/ksnip_20201122-153608.png)

选择之前创建的防火墙并点击创建。

![img](../Quick-start.assets/ksnip_20201122-160638.png)

进入 VPC 网络详情页，进入图形化页面，绑定 EIP ，加入上面创建的私有网络，点击应用修改。

![img](../Quick-start.assets/ksnip_20201122-162123.png)

### 5. 创建容器服务

在弹性容器实例页面中，点击创建。

![img](../Quick-start.assets/ksnip_20201122-162547.png)

在弹性容器实例创建页面中指定容器镜像。

![img](../Quick-start.assets/ksnip_20201122-163431.png)

点击下一步。

![img](../Quick-start.assets/ksnip_20201211-135657.png)

如果需要挂载外部硬盘，可以在卷挂载页面指定，这里直接点击下一步。

![img](../Quick-start.assets/ksnip_20201122-165257.png)

指定上面创建的私有网络。

![img](../Quick-start.assets/ksnip_20201122-165438.png)

指定容器组的基本信息并创建。

![img](../Quick-start.assets/ksnip_20201122-165612.png)

### 6. 查看创建后的容器实例的状态

![img](../Quick-start.assets/ksnip_20201122-210956.png)

## 镜像缓存的使用指南

### 1. 进入镜像缓存页面，点击创建

![img](../Quick-start.assets/ksnip_20201122-211616.png)

### 2. 指定需要缓存的容器镜像，点击下一步

![img](../Quick-start.assets/ksnip_20201122-211824.png)

### 3. 选择上面已经创建的私有网络，点击下一步

![img](../Quick-start.assets/ksnip_20201122-211954.png)

### 4. 指定镜像缓存的基本信息，点击创建

![img](../Quick-start.assets/ksnip_20201122-212113.png)

### 5. 查看创建的镜像缓存状态

![img](../Quick-start.assets/ksnip_20201122-212651.png)

> 在创建弹性容器实例的高级选项参数中可以指定镜像缓存
