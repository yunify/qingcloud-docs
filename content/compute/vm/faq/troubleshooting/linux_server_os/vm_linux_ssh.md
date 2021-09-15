---
title: "如何启用 SSH 密码登录 Linux 云服务器？ "
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 100
---

为了安全方面的考量，青云官方提供的 Linux 映像都禁用了 SSH 密码登录。 当然，您完全可以自行启用密码登录， 但请一定记得修改操作系统用户密码为复杂字串，否则极不安全。

## 操作步骤

以下步骤启用 SSH 密码登录。

```
# vi /etc/ssh/sshd_config
PasswordAuthentication yes
```

重启 ssh daemon 使之生效。

**RHEL/CentOS**

```
# service sshd restart
```

**Fedora**

```
# systemctl restart sshd
```

**Debian/Ubuntu**

```
# service ssh restart
```

> **警告**
>
> 强烈建议不要使用密码方式 SSH 登录！
