---
title: "修改域名服务器"
description: dns域名服务器。
date: 2021-04-28T00:38:25+09:00
weight: 2
draft: false
---

QingCloud DNS 解析管理，仅针对 QingCloud 提供的 DNS 服务器生效。

本小节主要介绍如何修改域名 DNS 服务器。

## 操作步骤

1. 登录 QingCloud 管理控制台。查看并复制 QingCloud DNS 服务器。

    > **说明**
    >
    > QingCloud DNS 会采取一定的规则将域名划分到不同的 NameServer 平台，具体服务器地址请以对应域名解析页面的提示为准。

    ![qingcloud dns](../_images/dns_ns_list.png)

    如上图，当前域名需将 DNS 服务器修改为 `ns3.routewize.com` 和 `ns4.routewize.com` ，QingCloud DNS 才会接管。

2. 登录域名注册商后台，找到对应域名的 NameServer 填写处。

    * 国内注册商以阿里云为例：

        ![阿里云修改DNS](../_images/dns_modify_aliyun.png)

    * 海外注册商以 Godaddy 为例：

        ![Godaddy修改NS入口](../_images/dns_modify_godaddy_1.png)

   子域托管方法请参考：[管理子域名](../subzone)。

3. 修改 DNS 服务器。

    一般注册商的 NameServer 填写处会提示域名正在使用其默认的 DNS 服务器地址，需切换到其他 NameServer ，并填入已复制的 `ns3.routewize.com`和`ns4.routewize.com` ，并保存。

    ![Godaddy修改NS](../_images/dns_modify_godaddy_2.png)

4. QingCloud 接管域名最长不超过72小时，请耐心等待。

> **说明**
>
> 为了保证域名在变换 DNS 服务器过程中的解析完整，**修改 DNS 前**需要确保本系统中的域名解析配置正确有效。
