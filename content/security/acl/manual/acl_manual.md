---
title: "网络 ACL 基本操作"
description: manual
draft: false
weight: 10
---

## 创建网络 ACL

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **安全** > **网络访问控制**，进入**网络访问控制**页签。

2. 在**网络访问控制**页签中，点击**创建**进入创建界面。

   <img src="../../_images/create_acl_1.png" style="zoom:25%;" />

3. 在创建页面，您可以自定义网络 ACL 的名称。

   <img src="../../_images/create_acl_2.png" style="zoom:30%;" />

4. 点击**提交**，ACL 创建成功，页面自动转到新创建的网络 ACL 的详情页面，可以看到网络 ACL 的所有规则。

   <img src="../../_images/create_acl_3.png" style="zoom:23%;" />

   为了避免网络 ACL 影响网络的连通，所以新创建的网络 ACL 默认对所有地址开放。您可以在网络 ACL 的详情页面查看、添加、修改、删除、禁用 ACL 规则、应用修改。在左上角`基本属性`栏，可以看到网络 ACL 的名称 / ID / 绑定的资源和创建时间。

## 修改网络 ACL 配置

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **安全** > **网络访问控制**，进入**网络访问控制**页签。

2. 在**网络访问控制**页签中，点击需要修改配置的 网络ACL 。

3. 进入网络 ACL 详情页面，点击**添加规则**，您可以定义要添加的规则。

   <img src="../../_images/create_acl_4.png" style="zoom:23%;" />

   **新增网络 ACL 规则**

   填写规则名称、优先级（数字越小优先级越高，最多可添加 100 条规则），选择方向（上行或者下行），行为(允许或者拒绝)、IP 版本( IPv4 / IPv6 )，源 IP (下行) / 目的 IP （上行）。

   <img src="../../_images/create_acl_5.png" style="zoom:33%;" />

   >**说明**
   >
   >IP 地址不填时，系统将默认为所有 IP 地址。

4. 点击规则右侧的**修改**按钮可以修改现有的规则。

   <img src="../../_images/create_acl_6.png" style="zoom:23%;" />

   <img src="../../_images/create_acl_7.png" style="zoom:33%;" />

5. 点击**禁用/启用**按钮可以将相应的规则禁用或启用。

   <img src="../../_images/create_acl_8.png" style="zoom:23%;" />

6. 点击**应用修改**使配置修改生效。

   <img src="../../_images/create_acl_9.png" style="zoom:23%;" />

## 网络 ACL 绑定到私有网络 Vxnet

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **安全** > **网络访问控制**，进入**网络访问控制**页签。

2. 在**网络访问控制**页签中，右键点击需要绑定到私有网络的 网络ACL 。

   <img src="../../_images/create_acl_10.png" style="zoom:23%;" />

3. 选择 VPC 网络及私有网络 Vxnet。

   <img src="../../_images/create_acl_11.png" style="zoom:33%;" />

   <img src="../../_images/create_acl_12.png" style="zoom:33%;" />

4. 点击**提交**，成功绑定网络 ACL 到私有网络 Vxnet。

   
