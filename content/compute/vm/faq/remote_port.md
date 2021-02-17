```
---
title: "修改远程桌面端口"
date: 2021-02-17T10:15:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---
```

### 1.打开windows主机远程桌面，关闭自带防火墙

### 2.修改注册表

2.1.开始-运行-regedit，打开注册表，进入以下注册表项“HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/Terminal Server/Wds/rdpwd/Tds/tcp”，在右侧找到PortNamber，可以看见其默认值是3389，修改成所希望的端口(2000-65535间选择)即可。

2.2修改注册表项HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/Terminal Server/WinStations/RDP-Tcp]，将PortNumber的值修改成其他端口，注意使用十进制。

### 3.重启主机

### 4.放行青云安全组的对应端口，并点击应用修改

### 5.测试新端口的远程桌面ip:port