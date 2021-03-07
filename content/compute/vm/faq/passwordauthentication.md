---
title: "ssh密钥开启密码登录"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

若在绑定密钥时，未取消勾选 "加载ssh密钥以后，禁止密码登录。" 需要在主机内部开启密码登陆，以cent os为例。

```shell
vi /etc/ssh/sshd_config
```

将配置文件中的 PasswordAuthentication 的参数改为yes，然后重启ssh服务。

```shell
service ssh restart  #重启ssh服务；
```

