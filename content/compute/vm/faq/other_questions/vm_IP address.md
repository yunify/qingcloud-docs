---
title: "为什么我的云服务器无法获取 IP 地址？"
description: Test description
draft: false
enableToc: false
weight: 60
---

青云官方提供的 Linux 映像使用 NetworkManager 来自动化云服务器的网络配置， 其默认配置是通过 DHCP 方式来获取 IP 地址，你需要保证 NetworkManager 相关的 daemon 正常运行。 如果工作不正常，你可以手动重启：

**RHEL/CentOS**

```
# service NetworkManager restart
```

**Fedora**

```
# systemctl restart NetworkManager
```

**Debian**

```
# service network-manager restart
```

**Ubuntu**

```
# service network-manager restart
```

必要时，你可能需要重启 messagebus daemon 后才能正常启动 NetworkManager：

**RHEL/CentOS**

```
# service messagebus restart
# service NetworkManager restart
```

**Fedora**

```
# systemctl restart messagebus
# systemctl restart NetworkManager
```

**Debian**

```
# service messagebus restart
# service network-manager restart
```

**Ubuntu**

```
# service dbus restart
# service network-manager restart
```
