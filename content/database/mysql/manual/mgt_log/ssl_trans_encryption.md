---
title: "SSL 传输加密"
description: 本小节主要介绍如何开启。 
keywords: mysql plus 下载日志
weight: 40
collapsible: false
draft: false
---


MySQL Plus 支持开启 SSL 传输加密服务。开启该服务后，获取 SSL 证书仅可通过 wget 下载单个目录 `mysql-cert`。

更多详细信息，可参考 [MySQL SSL](https://dev.mysql.com/doc/refman/5.7/en/creating-ssl-rsa-files.html)。

> **注意**
> 
> 开启或关闭 SSL 将导致数据库重启，请在业务空闲期执行。
> 开启 SSL 传输加密后，配置数据库账号时，需同时开启账号**加密认证**，否则该账号不能正常连接数据库。

本小节主要介绍如何开启 SSL 传输加密。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**SSL 传输加密**，进入传输加密配置窗口。

   <img src="../../../_images/ssl_trans_encryption.png" alt="SSL 传输加密" style="zoom:50%;" />

7. 加密认证选择`开启`。
   
   默认为`关闭`。

8.  确认配置信息无误后，点击**提交**，返回集群页面。

   待集群状态切换为**活跃**，即日志服务启动完毕。
