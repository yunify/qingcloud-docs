---
title: "负载均衡后端不可用排查方法"
description:
draft: false
weight: 40
---




## 问题描述

通过控制台看到监听器后端不可用状态。

![](../../_images/afterendmissing.png)

## 排查方法

1、确认lb和后端云服务器网络相同（属于同一私有网）。

2、查看本地服务是否正常，端口是否处于监听状态。

![](../../_images/end_netstat.png)

3、查看云服务器是否绑定安全组，安全组是否放行相应端口。

![](../../_images/group.png)

4、通过其他网络相同云服务器测试主机网络和端口是否正常。

![](../../_images/ping_telnet.png)

如均未问题可[提交工单](https://console.qingcloud.com/tickets/)找青云工程师协助排查。