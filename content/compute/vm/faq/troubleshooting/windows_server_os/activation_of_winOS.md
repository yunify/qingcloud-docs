---
title: "激活 Windows 系统云服务器"
weight: 1
draft: false
enableToc: false
---

## 操作步骤

### 通过图形化界面激活

1. 登录 Windows 系统云服务器之后，右键【此电脑】-【属性】

   ![此电脑-属性](/compute/vm/_images/activation_of_winOS_1.png)

2. 点击右下角的【激活 Windows 】
   ![激活Windows](/compute/vm/_images/activation_of_winOS_2.png)

3. 之后我们可以看到系统成功激活
   ![图形化激活完成](/compute/vm/_images/activation_of_winOS_3.png)

### 通过 cmd 命令行界面激活

打开 cmd 命令行，输入`slmgr /ato`命令进行激活。

![cmd激活完成](/compute/vm/_images/activation_of_winOS_4.png)

>**说明**
>通常情况下，Windows 云服务器会自动进行系统激活，如果没有自动激活，或者通过上述2个方法无法进行激活，提示类似“错误：0xC004F074 软件授权服务报告无法激活该计算机。秘钥管理服务（KMS）不可用”的报错信息，可以先通过如下方法进行操作

### 获取云服务器所在大区的 KMS 服务器的 IP 地址

cmd 中执行`ping windows-kms-server.ks.qingcloud.com`命令来获取返回的基础网络，例如：10.130.1.13
>**说明**
>返回的 IP 地址会根据大区的不同会有差别，实际操作中请以实际返回结果为准。

![获取ksm服务器ip](/compute/vm/_images/activation_of_winOS_5.png)

### 修改 hosts 文件

1. 将这个 IP 地址及 windows-kms-server.ks.qingcloud.com 域名写到C:\Windows\System32\drivers\etc\hosts文件的最后边，保存退出

   ![修改hosts文件](/compute/vm/_images/activation_of_winOS_6.png)

2. 再次打开 Windows 的 cmd 窗口，然后输入 slmgr /ato 就可以激活了

3. 如果执行slmgr /ato还是提示0xC004F074，先执行slmgr /skms windows-kms-server.ks.qingcloud.com设置kms服务器，然后再执行slmgr /ato 就可以激活了。

如果仍然无法激活 Windows 云服务器，可以通过工单系统联系我们的工程师，我们会竭诚为您服务。