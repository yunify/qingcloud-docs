---
title: "管理 IP 白名单"
description: 本小节主要介绍如何修改 MySQL Plus 集群访问白名单。 
keywords: mysql plus 白名单管理,
weight: 20
collapsible: false
draft: false
---

为了保障 MySQL Plus 数据库安全，建议您定期修改外网连接 IP 白名单，提高集群外网访问安全。

本小节主要介绍如何修改外网访问 IP 白名单。

## 约束限制

- IP 白名单不支持为空，不支持重复 IP 地址。
- 单个集群最多支持10个 IP 地址或 IP 地址段。
- IP 白名单添加0.0.0.0/0，表示任何外网 IP 地址均可连接数据库，请谨慎使用。
- IP 白名单添加127.0.0.1，表示任何 IP 地址均无法连接数据库。

## 前提条件

- 已获取 QingCloud 管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群，且集群状态为**活跃**。
- 已获取允许访问的服务器 IP 地址清单。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**连接信息**模块，在 **IP 白名单**下方，点击**修改**，弹出白名单配置窗口。
   
    <img src="../../../_images/set_whitelist.png" alt="修改 IP 白名单" style="zoom:50%;" />

5. 输入允许访问的 IP 地址。
   
   可输入 IP 地址、IP 段；多个 IP 之间换行分隔。
   
6. 点击**提交**，返回集群详情页面，即可查看修改后的 IP 白名单。
   
   <img src="../../../_images/check_access_info.png" alt="查看连接信息" style="zoom:50%;" />
