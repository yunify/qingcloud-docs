---
title: "如何配置 NTP 服务"
description: Test description
weight: 50
draft: false
enableToc: false
---


## 1.启动/关闭 NTP 服务

Windows Server 操作系统默认开启 Windows Time 服务。为了保证 NTP 服务配置成功后能正常同步时间，实例中必须开启 NTP 服务。请按以下步骤检查并开启 NTP 服务：

1、 远程连接Windows实例。

2、 单击开始图标，在底部单击下拉按钮，然后单击“运行”，在运行对话框中执行命令 `services.msc`

3、 在“服务”对话框中，找到并双击“Windows Time”服务。将启动类型设置为“自动”，然后点击启动“若需停止NTP服务则单击停止”，然后单击确定按钮退出。

<img src="../../_images/ntp/windows_time_server.png" width="60%" height="60%">

## 2.修改默认 NTP 服务器地址

Windows Server 操作系统默认配置微软 NTP 服务器（time.windows.com），但是可能经常同步出错。您也可以修改为其它 NTP 时间服务器。

1、 远程连接Windows实例。

2、 打开控制面板并点击时钟和区域按钮。

<img src="../../_images/ntp/kongzhimianban.png" width="60%" height="60%">

3、点击“添加不同时区的时钟”会弹出如下对话框，然后选择“Internet 时间”栏，再点击下方的“更改设置”最后将需要修改的 ntp 服务器输入进去并单击 “立即更新”。

<img src="../../_images/ntp/date_time.png" width="60%" height="60%">

## 3.修改 NTP 服务时间同步间隔

NTP 服务的时间同步间隔默认是5分钟，您可以根据业务需求自定义同步间隔。请按以下步骤修改时间同步间隔：

1、远程连接 Windows 实例。

2、单击开始图标，在底部单击下拉按钮，然后单击“运行”按钮，在运行对话框中执行命令`regedit`

3、在“注册表编辑器”的左侧目录树中，选择“HKEY_LOCAL_MACHINE> SYSTEM> CurrentControlSet>Services> W32Time> TimeProviders> NtpClient” ，并双击 SpecialPollInterval 键值

4、编辑 DWORD （32 位）值对话框中，在“基数”栏里选择“十进制”，并按需要填写数值数据。填入的数值即是您需要的同步时间间隔（单位为秒）

<img src="../../_images/ntp/ntptime.png" width="60%" height="60%">

5、 重启服务器或者重启 NTP 服务【重启方法见上文：启动/关闭 NTP 服务】**

