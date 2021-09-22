---
title: "端口无法连接"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 背景信息

访问端口失败，telnet端口不通，服务无法连接。

![](/compute/vm/_images/telnet.png)

## 操作步骤

### 查看云服务器服务端口是否正常启动，端口处于监听状态

以下均以常见的80端口为例：

通过netstat命令进行端口验证，如图：

![](/compute/vm/_images/netstat80no.png)

### 未发现80端口处于监听状态，http服务未启动，需先将http服务启动

![](/compute/vm/_images/starthttpd.png)

启动完成后再次通过netstat进行验证

![](/compute/vm/_images/netstat80yes.png)

如上图标识行，80端口处于LISTEN状态，表示端口处于活跃状态。



**查看云服务器是否启用iptables或firewall，如启用是否端口不在放行规则**

虚机镜像默认是未开启iptables规则和firewall规则，部分第三方软件（如docker,宝塔等）会自动将系统防火墙拉起来，并启用部分规则，导致部分应用端口被系统防火墙拦截。

iptables规则查看：

![](/compute/vm/_images/iptables.png)

firewall规则查看

![](/compute/vm/_images/firewall.png)



系统防火墙iptables和firewall相关服务启停命令及规则添加命令可参考：

https://www.cnblogs.com/zxg-blog/p/9835263.html



**查看安全组规则是否添加**

登录青云console，选择访问云服务器所属安全组：

![](/compute/vm/_images/anquanzu.png)

查看安全组下行规则是否有80端口的放行规则

![](/compute/vm/_images/showanquanzu.png)

添加80端口下行规则并提交



![](/compute/vm/_images/add80.png)

点应用修改生效

![](/compute/vm/_images/applay.png)