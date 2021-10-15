---

title: "使用 SSH 命令登录 Linux 系统时出现报错"
description: Test description
weight: 40
draft: false
enableToc: false

---

## 问题描述

当使用 SSH 命令登录 Linux 系统的云服务器时，即便使用了正常的账号和密码也会连接失败，在命令行或 secure 日志中也会出现类似如下的错误信息：
```
This account is currently not available.  
Connection to 127.0.0.1 closed.
Received disconnect from 127.0.0.1: 11: disconnected by user.
pam_unix(sshd:session): session closed for user test.
```

## 问题原因

该问题通常是由于相应用户的默认 Shell 被修改导致。

## 解决方法

1. 通过救援主机查看和修改云服务器配置文件，救援主机可参考文档[如何使用救援主机](/compute/vm/faq/common_operations/server_func/rescue_instance/)。

2. 通过救援主机进入源主机系统盘的根目录下，执行`cat etc/passwd | grep test`命令，查看相应用户的默认 Shell。

   系统显示类似如下，登录相应用户的 Shell 被修改成 nologin 。

   ```
   test:x:1000:1000::/home/test:/sbin/nologin
   ```

3. 如果需要修改相关策略配置，操作之前建议先进行文件备份。

4. 执行命令`vi /etc/passwd`，编辑文件，将相应用户的默认 Shell 修改为 bash ，即将 /sbin/nologin 修改为 /bin/bash ，然后保存并退出即可。

5. 在客户端再次尝试连接服务器，确认能正常连接。

