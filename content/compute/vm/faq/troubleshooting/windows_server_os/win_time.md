---
title: "Windows 时间不同步解决办法"
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

Windows 系统默认的时间同步间隔是7天，不能自由选择。我们也可以通过修改注册表来手动修改它的自动同步间隔以提高同步精度

## 操作步骤

1.键盘上按 Win+R 键(也可以在开始菜单右键然后选择运行)，在运行的输入框里输入"regedit"命令，然后点击确定

![win_time01](../../../_images/win_time01.jpg)

2.展开  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time\TimeProviders\NtpClient 分支，并双击 SpecialPollInterval 键值，将对话框中的“基数栏”选择到“十进制”上。

![win_time02](../../../_images/win_time02.jpg)

3.对话框中显示的数字正是自动对时的间隔(以秒为单位)，比如默认的604800就是由7(天)×24(时)×60(分)×60(秒)计算来的。设定时间同步周期（建议设为900=15分钟或3600=1小时等周期值），填入对话框，点击确定保存关闭对话框

![win_time03](../../../_images/win_time03.jpg)