---

title: "怎样禁用SSH密码方式连接云服务器？"
date: 2021-01-30T00:38:25+09:00
description: Test description
weight: 90
draft: false
enableToc: false
---

**操作场景**

基于云服务器访问安全的考虑，云服务器的访问密钥需定期更换，有时需要禁用SSH密码登录方式。

>说明：
>本节操作介绍禁用SSH密码方式连接云服务器的操作步骤。

**操作步骤**

1.登录Linux云服务器，执行以下命令编辑云服务器SSH连接方式。

```
vi /etc/ssh/sshd_config
修改如下配置项：
把PasswordAuthentication yes改为PasswordAuthentication no

重启sshd使修改生效。
service sshd restart

重启云服务器，使用SSH密码方式连接云服务器，如果提示“Disconnected:No supported authentication methods available”，说明已成功禁用SSH密码访问方式。
```



