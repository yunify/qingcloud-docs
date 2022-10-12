---
title: "创建并配置 opensearch exporter 访问用户"
description: 本小节主要介绍如何创建并配置 opensearch exporter 访问用户。 
keyword: opensearch exporter,访问用户,OpenSearch,文档数据库,数据库
weight: 30
collapsible: false
draft: false

---

## 背景介绍

在使用云平台 OpenSearch 1.2.4 - v1.0.x 提供的 opensearch exporter 时，需要指定访问用户。使用者在配置访问用户时，需要为用户配置特定权限，如果权限配置不当，则无法从 opensearch exporter 获取监控数据。

本文以一个 opensearch 测试集群为例，介绍 opensearch exporter 访问用户的创建以及用户权限的配置。

## 前提条件

* 已安装 dashboard。
* 已获取管理控制台登录账号和密码，且已获取集群操作权限。

## 步骤 1：创建 opensearch exporter 的专属用户

1. 浏览器登录 Dashboard，详细操作请参见[访问 Dashboard](/bigdata/opensearch/os_manual/dashboard/dashboard_login/)。

2. 在左侧导航栏点击图标，选择 **OpenSearch Plugins** > **Security**。

   ![security](../../_images/exporter_01.png)

3. 选择 **Internal users**，点击右上角的 **Creater intenal user**，创建专属用户。

   ![create](../../_images/exporter_02.png)

4. 在 **Username** 下输入专属用户名称，点击 **Create**。

   ![create](../../_images/exporter_03.png)

## 步骤 2：创建角色

1. 在 **Security** 页面选择 **Roles**，并点击右上角的 **Create role**。

   ![create](../../_images/exporter_04.png)

2. 为角色设置权限。输入角色 **name** 并在 **Cluster permissions** 选择权限。

   ![选择权限](../../_images/exporter_05.png)

3. 输入 **Index** 信息和选择 **Index persimissions**，点击页面右下角的 **Create**。

   ![create](../../_images/exporter_06.png)

## 步骤 3：关联角色与用户

1. 点击创建的角色名称。

   ![create](../../_images/exporter_07.png)

2. 选择 **Mapped users** 页签，并点击 **Map users**。

   ![map](../../_images/exporter_08.png)

3. 选择步骤1中创建的专属用户名，点击 **Map**。

   ![map](../../_images/exporter_09.png)

## 步骤 4：验证

1. 登录 OpenSearch 集群任意节点服务器。

2. 执行以下命令验证专属用户是否创建配置成功。

   ```bash
   curl -s -u exporter-monitor:<yourpass> <nodeip>:9200/_prometheus/metrics
   ```

   其中 **yourpass** 为创建集群时设置的密码，**nodeip** 可为该 OpenSearch 集群任意节点的 IP 地址。

   显示以下类似信息表示创建并配置 opensearch exporter 访问用户成功。

   ![验证](../../_images/exporter_10.png)

