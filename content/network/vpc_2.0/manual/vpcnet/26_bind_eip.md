---
title: "VPC 网络绑定公网 IP"
linkTitle: "VPC 网络绑定公网 IP"
date: 2021-05-19T10:08:56+09:00
description:
draft: false
weight: 26
---

## 操作场景

您可以为您的VPC 网络绑定一个公网 IP，实现 VPC 网络中的云资源对公网的访问。

> **说明**：
>
> **免费型** VPC 不支持绑定公网 IP。

## 操作步骤

1. 登录[管理控制台](https://console.qingcloud.com/pek3)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC网络**，进入**VPC网络**页面。

3. 在 VPC 名称下方的**管理路由器属性**区域，可查看到当前VPC网络的**公网 IPV4**。

   <img src="/network/vpc_2.0/_images/501025_mdy_route_para.png" alt="501025_mdy_route_para" style="zoom:50%;" />

4. 将鼠标移至公网IPv4，点击<img src="/network/vpc_2.0/_images/501020_add_icon.png" alt="501020_add_icon" style="zoom:50%;" />图标。
5. 选择需要绑定的公网 IP，点击**提交**完成绑定。

## 后续操作

- 修改公网IP：在VPC网络的**管理路由器属性**区域，将鼠标移至**公网 IPv4**，点击<img src="/network/vpc_2.0/_images/501020_mdfy_icon.png" alt="501020_mdfy_icon" style="zoom:50%;" />图标，选择其他公网 IP，点击**提交**完成修改。

- 解绑公网IP：在VPC网络的**管理路由器属性**区域，将鼠标移至**公网 IPv4**，点击<img src="/network/vpc_2.0/_images/501020_del_icon.png" alt="501020_del_icon" style="zoom:50%;" />图标，弹出提示框，点击**确认**完成解绑。

