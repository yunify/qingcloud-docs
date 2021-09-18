---
title: "配置IP/端口集合"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false 
---

## 产品概述

IP/端口集合功能可以把具有相同特征的一组 IP 或者一组端口设置成为IP/端口集合，并且在安全组规则中进行添加，实现批量管理功能，以下介绍IP/端口集合的配置方法。

## 操作步骤

### 配置ip集合

1. 创建IP集合。

   登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

   在左侧的**计算基础服务**导航栏，选择**计算基础服务**  >  **安全**  >  **安全组**  >  **IP/端口集合**  >  创建，类型选择IP地址,注意：IP地址不要重复定义。
   
   ![ipandport01](../../../_images/ipandport01.jpg)
   
2. 修改IP集合。右键**集合ID**  >  **修改**  >  **提交**  >  **右键集合ID**  >  **应用修改**

   ![ipandport02](../../../_images/ipandport02.jpg)

   ![ipandport03](../../../_images/ipandport03.jpg)

   ![ipandport04](../../../_images/ipandport04.jpg)

3. 安全组绑定IP集合。

   登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

   在左侧的**计算基础服务**导航栏，选择 **安全**  >  **安全组**  >  **sg-xxxxxxx** >  **添加规则**  >  **源IP绑定IP集合**  >  **提交**  >  **应用修改**，绑定后只有IP集合里面的源地址才能通过该安全组。

   ![ipandport05](../../../_images/ipandport05.jpg)

   ![ipandport06](../../../_images/ipandport06.jpg)

   ![ipandport07](../../../_images/ipandport07.jpg)

### 配置端口集合

1. 创建端口集合。

   登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

   在左侧的**计算基础服务**导航栏，选择 **安全**  >  **安全组**  >  **IP/端口集合**  >  **创建**，类型选择端口，注意：端口不要重复定义。
   
   ![ipandport08](../../../_images/ipandport08.jpg)
   
2. 修改端口集合。

   右键**集合ID**  >  **修改**  >  **提交**  >  **右键集合ID**  >  **应用修改**。

   ![ipandport09](../../../_images/ipandport09.jpg)

   ![ipandport10](../../../_images/ipandport10.jpg)

   ![ipandport11](../../../_images/ipandport11.png)

3. 安全组绑定端口集合。

   登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

   在左侧的**计算基础服务**导航栏，选择 **安全**  >  **安全组**  >  **sg-xxxxxxx**  >  **添加规则**  >  **起始端口处绑定端口集合**  >  **提交**  >  **应用修改**，绑定后只有端口集合里面的端口会被放行。

   ![ipandport05](../../../_images/ipandport05.jpg)

   ![ipandport12](../../../_images/ipandport12.png)

   ![ipandport13](../../../_images/ipandport13.png)