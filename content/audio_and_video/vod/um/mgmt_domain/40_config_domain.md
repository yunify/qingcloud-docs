---
title: "Referer 防盗链"
keyword: 云计算, 防盗链,referer
description: 本章节指导您如何 Referer 防盗链。
draft: false
collapsible: false
weight: 40
---

本章节介绍如何通过配置 referer 防盗链的方式对访问者身份进行识别和过滤。

Referer 防盗链默认为“关闭”状态。

## 前提条件

- 已获取 QingCloud 管理控制台的账号和密码。
- 域名处于“启用”状态。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **云点播**，进入**云点播**的**音视频管理**页面。

3. 在左侧导航栏中，点击**域名管理**，进入**域名管理**页面。

   ![](/audio_and_video/vod/_images/um_domain_open.png)

4. 在待配置防盗链的域名所在行的**操作**列中，点击**配置**，弹出域名配置页面。

   <img src="/audio_and_video/vod/_images/um_domain_config_refer.png" style="zoom:50%;" />
   
5. 点击<img src="/audio_and_video/vod/_images/icon_closed.png" style="zoom:40%;" />，弹出 **Referer 防盗链**配置区域。

   <img src="/audio_and_video/vod/_images/um_config_refer_win.png" style="zoom:50%;" />

6. 配置白名单和黑名单。

   - 白名单

     只允许所填路径访问 CDN。

     每行输入一个域名，只允许域名或者头部为 `*. ` 的通配域名，例如：*.example.com。

     允许空 Referer，HTTP 请求 referer 为空或无此字段时，允许访问。

   - 黑名单

     禁止所填路径访问 CDN。

     每行输入一个域名，只允许域名或者头部为 `*. ` 的通配域名，例如：*.example.com。

     允许空 Referer，HTTP 请求 referer 为空或无此字段时，允许访问。

7. 配置完成后，点击**确定**，完成 Referer 防盗链的配置。



