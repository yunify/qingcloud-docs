---
title: "Linux 服务器登录缓慢"
description: Test description
weight: 40
draft: false
enableToc: false
---

## 问题描述 

​     Linux 服务器登录，su 命令到其他用户或 sudo 命令涉及到用户鉴权相关的操作均非常慢，花费20多秒或以上的时间。

## 排查方法

1. 安装 strace，通过 strace su 查看是哪一步花费较长时间。

   CentOS 安装命令：```yum install strace```

   Ubuntu 安装命令： ```apt-get install strace -y```

2. 查看 systemd-logind 服务是否正常。

   执行命令```Systemctl status systemd-logind``` 可以查看服务状态，这种情况服务一般是假死状态（服务是 active ，但一直在重启且启动未成功）或有明显异常报错。

   参考异常案例：

   ![](../../../_images/logintimeout1.png)

3. 通过 ```journalctl -xe``` 查看微服务异常点。

   执行命令```journalctl -xe```，查看具体哪个微服务异常，从而查找解决办法，常见错误为：

   [system] Failed to activate service 'org.freedesktop.login1': timed out

4. 问题解决方案

   1. 此问题是因为**放弃**用户会话（ session ）未关闭而导致。

      执行`systemctl | grep 'of user'| grep 'abandoned'`命令。

   2. 检查被遗弃的用户

      执行 `rm -rf /run/systemd/system/sessionscope`命令。

   3. 删除会话目录

      执行 `systemctl daemon-reexec`命令。

   4. 重新执行守护进程

      如仍未未解决可执行`kill 1`命令。

      kill登录相关进场从而达到释放所以登录相关sesson。
