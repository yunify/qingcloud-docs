---
title: "启动 WebConsole 服务"
description: 本小节主要介绍如何启动 WebConsole 日志服务。 
keyword: WebConsole,启动服务,访问服务,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---



WebConsole 服务默认关闭。若需下载日志文件、RDB 数据文件和 AOF 文件，您需先开启集群 WebConsole 服务，再在 HTTP 服务端预览或下载文件。

本小节主要介绍如何启动 WebConsole 服务。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Redis Standalone 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 点击**修改属性**，公共参数**值**进入可编辑状态。
6. 找到 WebConsole 服务参数，并配置相应参数值。

   -**开启文件查看控制台**：设置为 `true`。默认为 `false`。

   -**文件查看用户名**：自定义访问用户名。默认为 `admin`。

   -**文件查看密码**：自定义访问密码。默认为空，即默认访问不需要密码。

   <img src="../../../_images/enable_webconsole.png" alt="启动 WebConsole 服务" style="zoom:50%;" />

7. 确认配置信息无误后，点击**保存**。

   待集群状态切换为**活跃**，即服务启动完毕。在浏览器访问 `http://<Redis_IP>:80`，即可查看文件。

  <img src="../../../_images/check_webconsole.png" alt="访问 WebConsole 服务" style="zoom:50%;" />
