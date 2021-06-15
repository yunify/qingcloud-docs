---

title: "远程连接报错：两台计算机无法在分配的时间内连接"
date: 2020-04-10T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

#### 问题描述

远程登录报错提示：两台计算机无法在分配的时间内连接。

图1 两台计算机无法在分配的时间内连接

![](../../../_images/win_cant_loggin3.png)

#### 解决方法

在cmd命令窗口输入**netsh winsock reset**后根据提示重启云服务器后，重新连接云服务器。

