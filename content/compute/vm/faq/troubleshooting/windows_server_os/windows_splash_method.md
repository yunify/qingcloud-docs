---
title: "Windows  配置多用户登录后，登录出现闪屏怎么办？"
weight: 23
draft: false
enableToc: false
---
## 概述

 Windows 服务器配置多用户登录后，Administrator 登录正常，普通用户登录后出现闪屏，或者打开 **我的电脑** 出现自动关闭，不能正常使用。

## 操作步骤

1. 选择 **开始** > **管理工具** > **事件查看器** > **应用程序** 中查看相关事件

2. 查看事件日志信息，模块发送的错误及时间。
   ![windows_log](/compute/vm/_images/windows_log_11.png)

   

3. 打开 **运行** > **cmd**，进入到错误文件所在目录。

   本例执行如下命令：

   ```
   cd C:\Program Files (x86)\GifRecord
   ```

   

4. 通过命令清理异常文件

   ```regsvr32.exe /u```  文件名 ，进行移除，移除后恢复正常。

   本例执行如下命令：

   ```
   regsvr32.exe /u GifRecord64.dll
   ```

   
