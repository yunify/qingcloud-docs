---
title: "更改Windows云服务器系统语言"
date: 2021-04-09T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

## 背景信息

用户使用Windows云服务器系统语言版本不符合使用需求，需更改系统语言。本例为Windows Server 2019 英文版，更改为中文版语言。

## 操作步骤

1. 连接Windows云服务器，可使用控制台VNC窗口连接云服务器或远程桌面服务连接云服务器。

2. 在系统开始 Settings > Time & Language > Language > Add a language 中选择相应语言包，并点击添加安装

 ![cs_](../../../_images/windows-cs1.png )

 ![cs_](../../../_images/windows-cs2.png )

 ![cs_](../../../_images/windows-cs3.png )

 ![cs_](../../../_images/windows-cs4.png )

3. 添加完成语言包后点击options ，Language pack中点击Download下载语言包并安装
    ![cs_](../../../_images/windows-cs5.png )

    ![cs_](../../../_images/windows-cs6.png )

4. 重启windows云服务器，登录并查看系统语言

    ![cs_](../../../_images/windows-cs7.png )