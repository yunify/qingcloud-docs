---
title: "Windows未激活云服务器激活方式"
description: test
weight: 20
draft: false
---



# 1.通过图形化界面激活

登陆Windwos系统云服务器之后，右键【此电脑】-【属性】

![此电脑-属性](../../_images/activation_of_winOS_1.png)

点击右下角的【激活Windows】
![激活Windows](../../_images/activation_of_winOS_2.png)

之后我们可以看到系统成功激活
![图形化激活完成](../../_images/activation_of_winOS_3.png)

# 2.通过cmd命令行界面激活

打开cmd命令行，输入如下命令进行激活
```
slmgr /ato
```
![cmd激活完成](../../_images/activation_of_winOS_4.png)

>注解
>通常情况下，Windows云服务器会自动进行系统激活，如果没有自动激活，或者通过上述2个方法无法进行激活，提示类似“错误：0xC004F074 软件授权服务报告无法激活该计算机。秘钥管理服务（KMS）不可用”的报错信息，可以先通过如下方法进行操作

## 获取云服务器所在大区的KMS服务器的IP地址

cmd中执行如下命令来获取返回的基础网络，例如：10.130.1.13
```
ping windows-kms-server.ks.qingcloud.com
```

>注解
>返回的IP地址会根据大区的不同会有差别，实际操作中请以实际返回结果为准。

![](../../_images/activation_of_winOS_5.png)

## 修改hosts文件

将这个IP地址及windows-kms-server.ks.qingcloud.com域名写到C:\Windows\System32\drivers\etc\hosts文件的最后边，保存退出

![修改hosts文件](../../_images/activation_of_winOS_6.png)

再次打开Windows的 cmd 窗口，然后输入 slmgr /ato 就可以激活了

如果仍然无法激活Windwos云服务器，可以通过工单系统联系我们的工程师，我们会竭诚为您服务。