---
title: "如何开启 Windows 的共享功能？ "
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 160
---

Windows SMB (Server Message Block) 很容易感染病毒和被黑客袭击，请谨慎使用。 推荐使用 FTP 方式传文件，如果一定要用共享，建议复制完文件就关闭共享。

修改注册表：

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\lanmanserver\parameters
Dword: AutoShareServer 1

HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetBT\Parameters
Dword: SMBDeviceEnabled 1
```

如果是 window 2008，还需要：

1. 打开 **控制面板** > **网络和Internet** > **网络和共享中心**。

2. 点击左侧的 **更改适配器设**置 ，右键点击 **网卡** ，并选择 **属性**。

3. 在弹出的对话框中勾中 Microsoft网络的文件和打印机共享并确定。

4. 回到 **网络和共享中心**。

5. 点击左侧的 **更改高级共享设置** ，确保 **公用（当前配置文件）** 项下的各个与共享相关的选项都启用了，并确定。

最后重启你的 Windows 即可。
