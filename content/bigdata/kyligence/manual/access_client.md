---
title: "连接集群"
description: 本小节主要介绍如何连接 Kyligence。 
keywords: Kyligence 访问,
weight: 05
collapsible: false
draft: false
---



Kyligence 支持通过客户端节点 IP 地址连接。

本小节主要介绍如何连接 Kyligence 数据库，以终端命令行方式连接数据库。

## 前提条件

- 已获取 QingCloud 管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建 Kyligence 集群，且集群状态为**活跃**。
- 集群所在 VPC 网络已绑定公网 IP。
- 集群所在 VPC 网络已开启 VPN 服务，并已配置**安全组**规则。在安全组对集群所在网络添加如下规则：**方向**选择`下行规则`，**行为**选择`接受`，**协议**选择 `UDP`，**起始端口**和**结束端口**配置为 `1194`。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问 Kyligence](#访问-kyligence)。

### 获取连接信息

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **大数据服务** > **Kyligence 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，获取客户端节点 IP 地址。

   <img src="../../_images/check_access_info.png" alt="客户端节点 IP " style="zoom:50%;" />

### 访问 Kyligence

1. 在浏览器输入`<客户端 IP>:7070`，进入 Kyligence Enterprise 登录页面。

2. 输入默认账号和密码。默认用户名**ADMIN**和默认密码**KYLIN**。

3. 登入系统并修改密码。重新登录系统即可使用 Kyligence 平台功能。

更多 Kyligence 登录前后注意事项，请参见[使用 Kyligence Enterprise](https://cn.kyligence.io/blog/tutorial-about-how-to-use-kyligence-enterprise-on-qingyun-appcenter/?utm_source=qingcloud&utm_medium=marketplace)。
