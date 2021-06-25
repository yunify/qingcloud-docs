---

title: "远程登录提示“内部错误”"
date: 2020-04-08T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

#### 问题描述

使用MSTSC方式登录Windows云服务器时，系统报错提示“内部错误”。

#### 处理方法

1. 在本地主机以管理员身份运行cmd。

2. 执行

   netsh winsock reset

   ![](../../../_images/win_cant_loggin.png)

3. 重启本地主机。

如果您使用上述方法仍无法登录云服务器，我们首先建议您排查本地的网络是否正常，您可以尝试更换网络（例如：手机热点）测试是否可以远程登录。

如果通过上述排查，仍然无法登录云服务器，请记录资源信息和问题时间，然后点击管理控制台右上方的“工单”，填写工单信息，获取技术支持。