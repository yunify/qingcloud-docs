---
title: "Windows Server 无法访问 samba 服务"
description: Test description
weight: 60
draft: false
enableToc: false
---


## 问题背景

Windows Server 2019 默认关闭了 SMB 1.0，在安装了 SMB 服务后，客户端仍无法访问 samba 服务。

![](../../../_images/win2019_use_samba_1.png)

![](../../../_images/win2019_use_samba_2.png)
## 解决方案

需要修改客户端的本地组策略。

### 操作步骤

通过【win】+ R 打开【运行】，输入 gpedit.msc，打开【本地组策略编辑器】。

![](../../../_images/win2019_use_samba_3.png)

依次点击【计算机配置】---【管理模板】---【网络】---【Lanman工作站】，双击【启用不安全的来宾登录】，设置为已启用。

![](../../../_images/win2019_use_samba_4.png)

![](../../../_images/win2019_use_samba_5.png)
修改之后即可正常访问。

![](../../../_images/win2019_use_samba_6.png)