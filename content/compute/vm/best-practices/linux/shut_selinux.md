---

title: "关闭SeLinux"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 问题背景
初学者配置Linux服务器时不成功，却没有头绪，那是因为在Linux操作系统中默认开启了防火墙，SeLinux也处于启动状态，一般状态为Enforing。致使很多服务端口默认是关闭的。所以好多服务初学者明明配置文件正确，等验证时有时连ping也ping不通,建议初学者配置服务器把SeLinux这项关掉。

## SeLinux状态释义
SeLinux有三种状态，分别如下：

1、Enforcing：强制模式，表示SeLinux运作当中，所有违反其规则的操作都会被阻止执行；

2、Permissive：宽容模式， 表示SeLinux运作当中，不会限制违反其规则的操作，只会给出警告信息；

3、Disabled：禁用模式，不使用SeLinux机制。

## 关闭SeLinux

一、临时关闭，但重启后失效。

```
setenforce 0
```

二、永久关闭，修改/etc/selinux/config 文件，编辑SELINUX=disabled,重启后生效。

```
vi /etc/selinux/config
```

![selinux_config](../../_images/selinux_config.jpg)

