---
title: "添加域名"
keyword: 添加域名, 自有域名
description: 本章节指导您如何添加域名。
draft: false
collapsible: false
weight: 20
---

添加域名后，您可以设为默认域名，您在云点播中的所有资源将默认使用该域名。您也可以登录 [云解析DNS](http://console.staging.com/demand/domain#) 自定义添加并解析域名。

## 前提条件

已获取 QingCloud 管理控制台的账号和密码。

## 约束限制

首次添加域名且没有使用青云默认域名时，必须强制设置该域名为默认分发域名。

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **音视频服务** > **云点播**，进入云点播的**音视频管理**页面。

   ![](/audio_and_video/vod/_images/um_video_list.png)

3. 点击**域名管理**，进入域名管理页面。

   ![](/audio_and_video/vod/_images/um_domain_list.png)

4. 点击**添加域名**，弹出**添加域名**窗口。

   <img src="/audio_and_video/vod/_images/um_domain_win.png" style="zoom:50%;" />

5. 根据需要配置参数。

   | 参数             | 参数说明 |
   | ---------------- | -------- |
   | 域名             |          |
   | 加速区域         |          |
   | 存储区域         |          |
   | 设为默认分发域名 |          |

6. 点击确认，完成域名添加操作。

   在域名列表页面，您可以查看**域名**、**状态**、**CNAME** 以及**域名类型**。

## 相关操作

[配置 CNAME](../20_config_cname) 
