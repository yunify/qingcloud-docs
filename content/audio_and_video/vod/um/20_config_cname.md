---
title: "配置 CNAME 解析"
keyword: 云计算, 青云, QingCloud, 配置CNAME解析
description: 本章节指导您如何快速配置CNAME解析。
draft: false
collapsible: false
weight: 20
---

云点播服务需要通过域名实现点播视频文件的加速播放。在使用云点播服务前，请设置域名。

您可以**使用自有域名**或者**青云默认域名**，推荐您**使用自有域名**。

- 自有域名

  自有域名为您在域名注册商购买的域名，域名需要完成备案。

- 青云默认域名

  青云QingCloud 为您提供默认域名服务，加速区域为中国大陆。若选择青云提供的默认域名，系统自动分配用户青云所属二级/三级域名，例如：*1302522583*.**vod.qingVideo.com**。

  若默认域名出现任何违规情况，青云QingCloud 有权收回该域名，请尽快配置您的自有域名。

> **说明**
>
> 设置的域名您可以在**分发播放配置** > **域名管理**中进行修改。

开通云点播服务时，若您使用自有域名，您需要前往 DNS 域名服务商处配置 CNAME 解析。

本章节介绍如何配置 CNAME 解析。

## 前提条件

- 已获取 QingCloud 管理控制台的账号和密码。

- 已开通云点播服务且添加自有域名。

## 操作步骤

如下**以在青云的云解析 DNS 服务中配置 CNAME 值为例**说明，更多关于 DNS 解析记录的配置，请参见[配置解析记录](/site/dns/quickstart/creatrecordset/)。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **云点播**，进入**云点播**的**音视频管理**页面。

3. 在左侧导航栏中，点击**域名管理**，进入**域名管理**页面。

   ![](/audio_and_video/vod/_images/qs_domain_cname.png)

4. 在域名所在行的 CNAME 列中，点击<img src="/audio_and_video/vod/_images/icon_copy.png" style="zoom:50%;" />，获取域名的 CNAME 值。

5. 选择**产品与服务** > **域名与网站** > **云解析 DNS** ，进入**云解析 DNS 服务**页面。

   ![](/audio_and_video/live_cdn/_images/um_dns_list.png)

6. 点击**添加**，将**已注册备案**的域名添加到云解析 DNS 服务列表中。

   ![](/audio_and_video/live_cdn/_images/um_add_domain.png)

7. 点击已添加的域名的名称，进入域名**解析记录**页面。

   ![](/audio_and_video/live_cdn/_images/um_add_parsing.png)

8. 点击**添加记录**，分别添加推流域名和播流域名对应的 CNAME 记录值。

   ![](/audio_and_video/live_cdn/_images/um_add_domainlist.png)

   配置说明，如下表所示。

   | 参数     | 参数说明                                                     |
   | -------- | ------------------------------------------------------------ |
   | 云服务器 | 云服务器名就是域名前缀。<ul><li>www：解析后的域名为：www.example.xyz。</li><li>@：直接解析主域名 example.xyz。</li><li>*：泛解析，匹配其他所有域名 *.example.xyz</li><li>mail：将域名解析为：mail.example.xyz，通常用于解析邮箱服务器。</li></ul> |
   | 线路     | 选择**全网默认**。                                           |
   | 类型     | 选择 **CNAME**。                                             |
   | 记录值   | 配置**步骤 3** 获取的 CNAME 值。                             |
   | 其他参数 | 您可以根据自己的实际情况填写。                               |

9. 配置完成后，点击**添加**。完成 CNAME 值的配置。

   配置的 CNAME 生效后，您的自有域名的所有请求都将通过青云的云点播服务进行加速播放。

## 验证 CNAME

### Windows

1. 在 Windows 系统的运行对话框中，输入 **cmd**，按 **Enter**，打开 DOS窗口。

   <img src="/audio_and_video/live_cdn/_images/um_cname_cmd_win.png" style="zoom:40%;" />

2. 执行以下命令，验证 CNAME 是否配置成功。

   若回显信息中，成功解析配置的 CNAME，则 CNAME 配置成功。

   **nslookup** *<域名>*

### Linux/Mac

1. 打开 Linux/Mac 窗口。

   <img src="/audio_and_video/live_cdn/_images/um_cname_cmd_linux.png" style="zoom:43%;" />

2. 执行以下命令，验证 CNAME 是否配置成功。

   若回显信息中，成功解析配置得 CNAME，则 CNAME 配置成功。

   **dig** *<域名>*



