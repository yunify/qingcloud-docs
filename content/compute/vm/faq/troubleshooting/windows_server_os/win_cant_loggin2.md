---

title: "远程连接报错：您的连接已丢失"
date: 2020-04-08T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false

---

#### 问题描述

远程桌面链接Windows云服务器报错：您的远程桌面会话已结束，另一用户已连接到此远程计算机，因此您的连接已丢失。

图1 远程桌面会话已结束

![win_cant_loggin2.1](../../../_images/win_cant_loggin2.1.png)

#### 2008操作系统处理方法

1.打开“管理工具 > 远程桌面服务 > 远程桌面会话主机配置”，进入远程桌面会话主机配置页面。

图2 远程桌面会话主机配置

![image-20210409102238068](../../../_images/win_cant_loggin2.2.png)

2.双击打开，取消勾选“限制每个用户只能进行一个会话”，点击“确定”。

图3 修改配置

![image-20210409104014992](../../../_images/win_cant_loggin2.3.png)

#### 2012操作系统处理方法

1.打开“开始 > 运行”，输入 gpedit.msc，进入本地组策略编辑器。

2.打开“计算机配置 > 管理模板 > Windows组件 > 远程桌面服务 > 远程桌面会话主机 > 连接”。

图4 连接

![image-20210409104144139](../../../_images/win_cant_loggin2.4.png)

3.双击打开“将远程桌面服务用户限制到单独的远程桌面服务会话”，修改配置为“已禁用”，点击“确定”保存。

图5 修改配置

![image-20210409104438625](../../../_images/win_cant_loggin2.5.png)

4.在命令窗口执行**gpupdate/force**，更新组策略。

图6 更新组策略

![win_cant_loggin2.6](../../../_images/win_cant_loggin2.6.png)