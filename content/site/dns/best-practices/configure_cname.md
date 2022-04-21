---
title: "配置 CNAME"
keyword: 云计算, 云解析DNS, 配置 CNAME
description: 本章节介绍如何配置 CNAME。
draft: false
collapsible: false
weight: 30

---

本小节主要介绍如何在云解析 DNS 平台配置 CNAME 并进行验证。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已获取待配置的 CNAME 域名，且状态为**已启用**。
- 待配置的 CNAME 的域名已备案成功。

## 配置 CNAME

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **网络服务** > **云解析 DNS** ，进入**云解析 DNS 服务**页面。

   ![](../../../../audio_and_video/live_cdn/_images/um_dns_list.png)

3. 点击**添加**，将**已注册备案**的域名添加到云解析 DNS 服务列表中。

   ![](../../../../audio_and_video/live_cdn/_images/um_add_domain.png)

4. 点击已添加的域名的名称，进入域名**解析记录**页面。

   ![](../../../../audio_and_video/live_cdn/_images/um_add_parsing.png)

5. 点击**添加记录**，添加域名对应的 CNAME 记录值。

   ![](../../../../audio_and_video/live_cdn/_images/um_add_domainlist.png)

   配置说明，如下表所示。

   | 参数     | 参数说明                                                     |
   | -------- | ------------------------------------------------------------ |
   | 云服务器 | 若您使用的为该域名的子域名生成的域名，则配置子域名前缀（例如：play.mylivecom，前缀为 play）。<br />若您使用的为不同的一级域名生成的域名，则此处配置@。 |
   | 线路     | 选择**全网默认**。                                           |
   | 类型     | 选择 **CNAME**。                                             |
   | 记录值   | 配置获取的 CNAME 值。                                        |
   | 其他参数 | 您可以根据自己的实际情况填写。                               |

6. 配置完成后，点击**添加**。完成 CNAME 值的配置。

   配置的 CNAME 生效后，可执行以下操作进行验证。

## 验证 CNAME

### Windows

1. 在 Windows 系统的运行对话框中，输入 **cmd**，按 **Enter**，打开 DOS窗口。

   <img src="../../../../audio_and_video/live_cdn/_images/um_cname_cmd_win.png" style="zoom:40%;" />

2. 执行以下命令，验证 CNAME 是否配置成功。

   若回显信息中，成功解析配置的 CNAME，则 CNAME 配置成功。

   **nslookup** *<域名>*

### Linux/Mac

1. 打开 Linux/Mac 窗口。

   <img src="../../../../audio_and_video/live_cdn/_images/um_cname_cmd_linux.png" style="zoom:43%;" />

2. 执行以下命令，验证 CNAME 是否配置成功。

   若回显信息中，成功解析配置得 CNAME，则 CNAME 配置成功。

   **dig** *<域名>*



