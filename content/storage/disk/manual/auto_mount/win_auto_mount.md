---
title: "自动挂载 Windows 硬盘"
description: 本小节主要介绍Windows系统如何配置云硬盘的自动自动挂载。
draft: false
weight: 20
keyword: 云计算, 青云, QingCloud, 云硬盘, Windows,自动挂载
---


Windows 云服务器挂载硬盘之后，如果云服务器发生重启，硬盘可能没法自动挂载，需要人工登录并进行手动“联机”操作， 以下方法可设置硬盘自动挂载。

1. 打开 Windows 命令行工具, 即 cmd。

   ![win_auto_mount_1](/storage/disk/_images/win_auto_mount_1.png)

2. 运行 `diskpart`，进入diskpart交互模式。

   ![win_auto_mount_2](/storage/disk/_images/win_auto_mount_2.png)

3. 输入`san policy=OnlineAll`：
   ![win_auto_mount_3](/storage/disk/_images/win_auto_mount_3.png)

   至此， Windows 硬盘自动挂载设置完成。

