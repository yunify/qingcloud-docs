---
title: "删除账号"
description: 本小节主要介绍如何删除 MySQL Plus 数据库账号。 
keywords: mysql plus 删除账号；
weight: 15
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持删除已创建的 MySQL Plus 数据库账号。

> 注意
> - 数据库账号删除后不可找回，请谨慎操作。
> - 请勿以任何方式删除 `root` 、`qc_check` 、 `qc_repl` 等运维账号，以免数据库系统异常。


## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** >**关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 选择**账号**页签，点击**删除账号**，弹出删除账号窗口。
   
   <img src="../../../_images/del_user.png" alt="删除账号" style="zoom:50%;" />

5. 输入待删除数据库名和授权主机。
6. 确认配置信息无误后，点击**提交**，返回账号列表页面，刷新即成功删除账号。

## 其他删除账号方式

您也可以选择其他数据库管理客户端或者执行命令方式，删除已有数据库账号。

例如，执行命令方式删除数据库账号及权限：

 ```
 mysql>drop user <userName>@<localhost> 
 ```
 