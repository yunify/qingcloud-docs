---
title: "IAM V1.0发布"
description: 
draft: false
weight: 3
---

## 关于 QingCloud IAM
**访问鉴权管理（Identity and Access Management，IAM）** 是一款在 QingCloud 平台上提供身份识别和访问控制的 Web 服务。通过使用 IAM 来统一管理和控制接入实体的认证和授权，能更安全地自主管控本账户下的任意资源访问权限。

日前，青云 QingCloud IAM 服务 V1.0 版（qingcloud.com/products/iam/）已发布至公有云平台供广大客户试用。

## 本版已发布的主要功能列表
## 一、身份信任载体

&nbsp;&nbsp;&nbsp;&nbsp;1.  支持 QingCloud 账户作为身份信任载体，使得被信任的账户能访问到自己的视图来参与运维

&nbsp;&nbsp;&nbsp;&nbsp;2. 支持 QingCloud 云主机作为身份信任载体，使得云主机上的应用开发可以不必使用账户 API 密钥就能按需访问到自己的账户资源

![图片](../../_images/iamV11.png)

使用详情请参见：[帮助中心 – 访问鉴权管理 – 信任载体](../../faq/principal)

## 二、身份管理

&nbsp;&nbsp;&nbsp;&nbsp;1. 支持设定身份凭证会话有效期

![图片](../../_images/iamV12.png)

&nbsp;&nbsp;&nbsp;&nbsp;2. 支持管理身份上附加的策略权限

![图片](../../_images/iamV13.png)

&nbsp;&nbsp;&nbsp;&nbsp;3. 支持为账户类信任载体配置控制台 UI 访问模块

![图片](../../_images/iamV14.png)

&nbsp;&nbsp;&nbsp;&nbsp;4. 支持为主机类信任载体更换同类身份

![图片](../../_images/iamV15.png)

## 三、策略权限配置

&nbsp;&nbsp;&nbsp;&nbsp;1. 支持为弹性云主机、虚拟专用网、弹性负载均衡和资源云监控四大服务配置策略。参见：[帮助中心 – 访问鉴权管理 – 支持的服务列表](../../faq/supported_services)

&nbsp;&nbsp;&nbsp;&nbsp;2. 支持为弹性云主机、虚拟专用网和弹性负载均衡服务配置策略时限定到特定资源

![图片](../../_images/iamV16.png)

&nbsp;&nbsp;&nbsp;&nbsp;3. 支持策略多重预期效力叠加，支持复合策略

&nbsp;&nbsp;&nbsp;&nbsp;4. 支持可视化和代码编辑模式无缝切换

![图片](../../_images/iamV17.png)

## 四、策略管理

&nbsp;&nbsp;&nbsp;&nbsp;1. 支持为任意策略引用身份或离开身份

![图片](../../_images/iamV18.png)

&nbsp;&nbsp;&nbsp;&nbsp;2. 支持修改自定义策略，并可视化管理版本

![图片](../../_images/iamV19.png)

## 五、策略模拟器

&nbsp;&nbsp;&nbsp;&nbsp;1. 支持为身份上的复合策略模拟测试和调整

![图片](../../_images/iamV20.png)

&nbsp;&nbsp;&nbsp;&nbsp;2. 支持针对策略列表中的任意策略单一或复合模拟测试

![图片](../../_images/iamV21.png)


更多关于 IAM V1.0 的版本信息，请查看帮助文档：[帮助中心 – 访问鉴权管理](https://docs.qingcloud.com/product/iam/)