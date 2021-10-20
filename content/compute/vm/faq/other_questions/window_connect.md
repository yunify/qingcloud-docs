---
title: "为何我的 Windows 主机无法向外发起 远程桌面连接 或 SQL Server连接？"
description: Test description
draft: false
enableToc: false
weight: 220
---

青云系统判定了一些高危端口，默认将其加入了【青云防火墙】并禁止。 对于加入到【基础网络】的 Windows 主机，青云系统默认限制了几个“上行防火墙”规则：

>**说明**
>
>协议tcp，端口3389,1433,445,135,139;
>
>协议udp，端口1434,445,135,137,138。
>

Windows 主机向外发起 远程桌面连接，您需要在【青云防火墙】放行规则 tcp 上行 3389端口;

Windows 主机向外发起 SQL Server连接，您需要在【青云防火墙】放行规则 tcp 上行 1433端口。
