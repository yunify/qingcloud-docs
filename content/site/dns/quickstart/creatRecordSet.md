---
title: "配置域名解析记录"
description: test
weight: 1
draft: false
---



本小节主要主要介绍如何快速配置解析记录。

## 步骤一：添加域名

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。
2. 选择**产品与服务** > **网络服务** > **云解析 DNS**，进入域名列表页。

   ![DNS域名列表](../_images/create_domain_1.png)
   
3. 点击**添加**，在下方弹窗中输入您在注册商处申请的域名。

   ![添加域名](../_images/create_domain_2.png)

   > **注意**
   >
   > 您的域名必须真实有效且未被纳入工信部备案黑名单。
   >
   > QingCloud DNS 将定期同步[IANA 域名后缀列表](https://www.iana.org/domains/root/db)，若您发现新的域名后缀无法添加，请及时与我们联系。

## 步骤二：创建解析记录

1. 在域名列表页面，点击需要解析的域名，进入**解析记录**页面。

   ![点击域名](../_images/dns_parse_1.png)

2. 点击**添加记录**，显示添加记录输入框。

   ![添加记录](../_images/dns_parse_3.png)

   也可以在对应的云服务器名中右键**添加记录**。

   ![右键创建记录](../_images/right_menus_create.png)

3. 按对话框指引，填写云服务器名和记录值，选择线路、记录类型、模式和 TTL 后提交即可。

    示例：将 www.eg.com 默认解析指向网站服务器 IP 地址 1.1.1.1 。

    ![添加解析信息](../_images/dns_A.png)
    
    > **说明**
    >
    > QingCloud DNS 默认提供5条线路，包括**全网默认、中国电信、中国联通、中国移动、港澳台及海外**。若需自定义解析线路，可参考[配置解析线路](../../manual/dnsrecord/setresolline)。

