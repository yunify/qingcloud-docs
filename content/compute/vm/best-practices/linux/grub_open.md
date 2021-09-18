---
title: "开启 Linux 启动项"
date: 2020-08-19T17:08:56+09:00
description: test
weight: 20
draft: false
---

有时需要修改内核参数来进行调试或者优化，但是修改不当又容易导致云服务器启动失败，下面举例说明几个操作系统如何在启动的时候进入启动项，临时修改一些内核的参数

## CentOS 6.8

先正常登陆云服务器，修改/etc/grub.conf，修改timeout参数为30，并将hiddenmenu参数注释，保存退出。如下图所示：

![gurb](../../_images/grub_1.png)

重启云服务器，并在20秒内重新连接云服务器的VNC，此时可以看到选择启动项的界面

![gurb](../../_images/grub_2.png)

在这个界面按下 e ，然后按键盘↓键，选择第二个内核选项

![gurb](../../_images/grub_3.png)

再按下 e

![gurb](../../_images/grub_4.png)

现在按键盘的←→键就可以移动光标并进行内核参数的临时修改了，修改好之后，按回车键，返回到 GURB界面，再按下 b，就会启动云服务器。


## CentOS 7.9

先正常登陆云服务器，修改/etc/default/grub，修改timeout =30，保存退出。
修改/boot/grub2/grub.cfg，修改两处set timeout=30，保存退出。

```
···
　　if [ x$feature_timeout_style = xy ] ; then
　　　　set timeout_style=menu
　　　　set timeout=30
　　　　# Fallback normal timeout code in case the timeout_style feature is
　　　　# unavailable.
　　else
　　　　set timeout=30
　　fi
···
```

重启云服务器，并在20秒内重新连接云服务器的VNC，此时可以看到选择启动项的界面

![gurb](../../_images/grub_5.png)

在这个界面按下 e 之后，就可以临时修改内核参数

![gurb](../../_images/grub_6.png)

修改完之后直接按下Ctrl+x建，就可以启动云服务器了。



>>注意：如果修改之后主机无法正常启动，只需再控制台右键云服务器 ID，选择重启即可恢复至正常状态。