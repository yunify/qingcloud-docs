---
title: "跨账号管理协作"
date: 2020-02-28T10:08:56+09:00
description: 
draft: false
weight: 52
---

当您需要授权他人辅助您管理资源、处理账单等运维操作时，过去您可能是将自己的账号密码直接提供给身边的人使用，或者是将您的资源通过组合成项目的方式共享给他人操作。

现在您可以通过 IAM 直接提供您账号中部分资源或操作权限给他人来使用，而无需考虑资源组合的问题。

### 操作步骤

1. 向您需要授权的人获取到他的 QingCloud 账户 ID 。例如对方账户为 `claudiawang@yunify.com` ，ID 为 `usr-2Ly2c31J`

    ![demo2_AnotherAccount](../../_images/demo2_AnotherAccount.png)

    > 注：此 ID 需要他人自行查看并主动发送给您，否则您将无法为对方设置访问权。

2. 创建一个青云账户类的身份，信任载体填写为对方发送给您的这个 ID ，并关联具备指定权限范围的策略（本例中将使用支持完全访问虚拟专用网服务的预置策略）

    ![demo2_CreateRole](../../_images/demo2_CreateRole.png)

3. 在身份上备注对方信息，并为其配置访问控制台时的可操作模块

    ![demo2_ConfigRole](../../_images/demo2_ConfigRole.png)

    > 注：设置访问模块是为了让对方更聚焦操作，是对对方可操作权限的双重保险设定。

### 验证演示

根据上述操作步骤，由于您给他人赋予的身份具备虚拟专用网服务的完全权限，则他人登陆 QingCloud 控制台后可通过切换身份成功帮您创建私有网络，但不可访问您的其他服务例如云服务器。

`claudiawang@yunify.com`的前提操作：**切换身份**

![demo2_SwitchRole](../../_images/demo2_SwitchRole.png)

1. 导航栏处显示全部模块入口，已配置了访问权限的VPC和路由表可成功查看和创建，未配置访问权限的模块则没有权限执行操作（如云服务器）

    ![demo2_Dashboard](../../_images/demo2_Dashboard.png)

    ![demo2_Dashboard](../../_images/demo2_Dashboard1.png)

2. 能成功查看和创建 VPC

    ![demo2_CreateVPC](../../_images/demo2_CreateVPC.png)
