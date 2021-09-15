---
title: " Linux 系统因开启 SELinux 导致登录错误"
description: Test description
weight: 40
draft: false
enableToc: false
---


## 问题描述 

​    在 SSH 远程连接 Linux 实例时，即便密码正确输入后，在命令行或 secure 日志中也会出现如下错误信息。
****
```
Permission denied, please try again.
error: Could not get shadow infromation for root.
```
## 问题原因
该问题通常是由于系统启用了 SELinux 服务所致。

## 解决方法
可以根据现场环境需求，选择临时或永久关闭 SELinux 服务解决 SSH 连接异常问题。

### 检查 SELinux 服务状态
通过 vnc 登录 Linux 实例，执行`/usr/sbin/sestatus -v` 命令，查看当前 SELinux 服务状态。

系统显示类似如下。
```
SELinux status:       enabled
```

> **说明**
>
> 如果 `SELinux status`参数是 `enabled`即处于开启状态，是 `disabled`即处于关闭状态。

### 临时关闭 SELinux 服务

登录 Linux 实例，执行`setenforce 0`命令，临时关闭 SELinux 。

> **说明**
>
> 临时修改 SELinux 服务状态，属于实时生效无需重启系统或实例。

### 永久关闭 SELinux 服务

登录 Linux 实例，执行`sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config`命令，永久关闭 SELinux 服务。

> **说明**
>
> 永久性修改 SELinux 服务状态，需重启系统或实例方可生效。
>
> 此命令只适用当前 SELinux 服务为`enforcing`状态时使用。