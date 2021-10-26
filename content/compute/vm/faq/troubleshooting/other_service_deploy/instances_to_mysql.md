---
title: "活动主机内网连接活动数据库"
date: 2021-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

实现数据库与云服务器网络互通

## 操作步骤

1. 通过 **Appcenter**  >  **集群管理**，找到购买的Mysql Plus数据库。

   ![instances_to_mysql01](../../../_images/instances_to_mysql01.jpg)

2. 进入集群详情页面查看集群绑定的私有网络,从下图可以看见此集群的私有网络为Mysql_Plus

   ![instances_to_mysql02](../../../_images/instances_to_mysql02.jpg)

3. 通过登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

4. 在左侧的**计算基础服务**导航栏选择 **计算**  >  **云服务器**，找到购买的云服务器

    ![instances_to_mysql03](../../../_images/instances_to_mysql03.jpg)

5. 右键**云服务器id**  >  **网络**  >  **加入**  >  **Mysql_plus**(上面集群详情页面查看到的)。

   ![instances_to_mysql04](../../../_images/instances_to_mysql04.png)

6. 当云服务器与Mysql Plus处于同一私有网络下后，通过**计算基础服务**  ->  **网络**  ->  **vpc网络**  ->  rtr-xxxxxxx  ->    **Mysql_Plus**，查看配置成功，此时云服务器与Mysql Plus数据库网络互通，可以在云服务器上通过私有网络直接登录数据库

   ![instances_to_mysql05](../../../_images/instances_to_mysql05.jpg)