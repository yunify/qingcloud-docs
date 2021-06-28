---
title: "查询远程登录日志"
date: 2021-03-30T00:38:25+09:00
description: Test description
weight: 11
draft: false
enableToc: false
---



1. 通过[远程连接](https://help.aliyun.com/document_detail/25435.htm?spm=a2c4g.11186623.2.7.338b5961kgQ7yx)登录Windows实例，点击 **开始** > **运行**，输入`eventvwr.msc`并点击键盘的 **Enter** 回车按键，打开 **事件查看器**。
   ![](../../../_images/windowsloginlog1.png)

2. 点击**Windows 日志**，选中 **安全** 并右击，点击 **查找**，打开 **查找** 框。
   ![](../../../_images/windowsloginlog2.png)

3. 在 **查找内容（N）** 处，输入**登录**进行快速查找登录相关事件。
   ![](../../../_images/windowsloginlog3.png)

4. 双击查找到的事件，点击详细信息，查看 IpAddress 字段和 IpPort 字段信息。

   > 注：
   >
   > - IpAddress字段记录的是登录过本机的IP地址。
   > - IpPort字段记录的是登录过本机的端口。

   

   

   ![](../../../_images/windowsloginlog4.png)

   ![](../../../_images/windowsloginlog5.png)