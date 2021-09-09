---
title: "Linux 操作系统安全设置"
description: Test description
weight: 50
draft: false
enableToc: false

---

## 账号和口令

### 禁用或删除无用账号

减少系统无用账号，降低安全风险。

- 使用命令 `userdel <用户名>` 删除不必要的账号。
- 使用命令 `passwd -l <用户名>` 锁定不必要的账号。
- 使用命令 `passwd -u <用户名>` 解锁必要的账号。

### 检查特殊账号

检查是否存在空口令和 root 权限的账号。

1. 查看空口令和 root 权限账号，确认是否存在异常账号：

- 使用命令 `awk -F: '($2=="")' /etc/shadow` 查看空口令账号。
- 使用命令 `awk -F: '($3==0)' /etc/passwd` 查看 UID 为零的账号。

2. 加固空口令账号：

- 使用命令 `passwd <用户名>` 为空口令账号设定密码。

- 确认 UID 为零的账号只有 root 账号。


### 禁止 root 用户直接登录

限制 root 用户直接登录。

创建普通权限账号并配置密码,防止无法远程登录;

使用命令 `vi /etc/ssh/sshd_config`修改配置文件将 PermitRootLogin 的值改成 no，并保存，然后使用`service sshd restart`重启服务

   ## SSH服务安全

   对 SSH 服务进行安全加固，防止暴力破解成功。

   使用命令 `vim /etc/ssh/sshd_config` 编辑配置文件。

   - 不允许root账号直接登录系统。
     设置 PermitRootLogin 的值为 no。
   - 修改 SSH 使用的协议版本。
     设置 Protocol 的版本为 2。
   - 修改允许密码错误次数（默认6次）。
     设置 MaxAuthTries 的值为 3。

   配置文件修改完成后，重启 sshd 服务生效。