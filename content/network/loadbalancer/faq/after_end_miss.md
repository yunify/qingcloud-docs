---
title: "如何排查负载均衡后端不可用问题？"
description: 介绍负载均衡后端不可用排查方法。
keyword: 负载均衡器, 排查
weight: 40
---

## 问题现象

通过控制台看到到后端服务器的状态为`不可用`，如下图。

![](../../_images/afterendmissing.png)

## 排查方法

1. 确认lb和后端云服务器网络相同（属于同一私有网）。

2. 运行命令`netstat -an | grep 80`查看本地服务是否正常，服务端口是否处于监听状态。

   ![](../../_images/end_netstat.png)

3. 查看云服务器是否绑定安全组，且安全组是否放行相应端口。

   ![](../../_images/group.png)

4. 通过其他网络相同云服务器测试主机网络和端口是否正常。

   ![](../../_images/ping_telnet.png)

5. 若以上排查均无问题依然显示不可用，可[提交工单](https://console.qingcloud.com/tickets/)联系技术支持协助排查。

