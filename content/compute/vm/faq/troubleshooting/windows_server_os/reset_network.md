---
title: "Windows 重置网络"
weight: 6
draft: false
enableToc: false
---

## 概述

经常遇到局域网无法互相访问、网络连接上但无法上网的问题。如果找不到原因，可以重置一下网络

## 操作步骤

1、用管理员身份，打开 cmd 窗口执行以下命令

```
netsh winsock reset
```

![reset_network01](../../../_images/reset_network01.jpg)

2、重启服务器





