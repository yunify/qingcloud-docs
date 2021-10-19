---
title: "云服务器绑定了公网 IP 之后，为什么我无法通过 IP SSH 登录，也不能 ping 通该 IP？ "
description: Test description
draft: false
enableToc: false
weight: 40
---

为了加强位于基础网络 vxnet-0 中的云服务器的安全性， 青云在云服务器之前放置了一个防火墙（Security Group）。 初始状态下，每个防火墙都不包含任何规则，即，全部端口都是封闭的， 您需要建立规则以打开相应的端口。

>**说明**
>如果你的云服务器使用的是默认防火墙，那么 ping 和 ssh 的端口都是默认打开的，你无需再进行操作。

例如您需要访问云服务器的22号端口，需要手动为云服务器的防火墙添加一条 接受 tcp 22 端口 的下行规则，然后再点击 更新规则 使其应用到云服务器。

同理，如果你想开启 ping 功能， 需要在防火墙里头添加 接受 ICMP echo request 的下行规则。

