---
title: "防火墙"
description: test
draft: false
collapsible: false
weight: 15
keyword: 错误码, QingCloud, 青云, 客户端错误码, API
---

为了加强位于基础网络 vxnet-0 中的云服务器或路由器的安全性， 可以在云服务器或路由器之前放置一个防火墙 (Security Group)。 青云系统为每个用户提供了一个缺省防火墙（ID 之后带有星标）。当然， 您也可以新建更多的防火墙。初始状态下，每个防火墙都不包含任何规则， 即，任何端口都是封闭的，您需要建立规则以打开相应的端口。

注解

如果你的云服务器使用的是默认防火墙，那么 ping 和 ssh 的端口都是默认打开的，你无需再进行操作。

详情请参见[云防火墙API接口](/security/firewall/api/command_list/add_security_group_rules/)