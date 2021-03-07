---

title: "关闭SeLinux"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 关闭SeLinux

一、临时关闭，但重启后失效。

```
setenforce 0
```

二、永久关闭，修改/etc/selinux/config 文件，编辑SELINUX=disabled,重启后生效。

```
vi /etc/selinux/config
```

![selinux_config](../_images/selinux_config.jpg)

