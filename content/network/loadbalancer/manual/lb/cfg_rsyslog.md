---
title: "配置 rsyslog"
description: 
keyword: 负载均衡器,实例,
draft: false
weight: 35
aliases:
  - /network/loadbalancer/manual/lb_user_guide/#rsyslog-远端云服务器
---

本文介绍如何配置 rsyslog 远端云服务器。

## 操作场景

配置  rsyslog 远端云服务器可以将负载均衡器的日志流输出到指定的云服务器。

> **说明**
>
> 日志格式请参考: [HAProxy文档 8.2.1 Default log format](https://www.haproxy.org/download/1.5/doc/configuration.txt)。

## 前提条件

配置 rsyslog 之前，需要准备好一台 Linux（推荐 ubuntu）云服务器，并满足以下要求：

*   对于公网负载均衡器，云服务器可以加入 VPC 或者基础网络，同时配置成负载均衡器的后端。
*   对于私网负载均衡器，云服务器和负载均衡器需属于同一网络。

## 操作步骤

1. 登录准备好的 rsyslog 远端云服务器，修改 `/etc/rsyslog.conf`配置文件。

   在配置中添加如下几行：

   ```
   $ModLoad imudp
   $UDPServerAddress 0.0.0.0
   $UDPServerRun 514
   ```

   > **说明**
   >
   > `UDPServerAddress` 必须在 `UDPServerRun`前面。

2. 创建 `/etc/rsyslog.d/haproxy.conf` 文件，并添加如下内容。

   ```
   local0.* /var/log/haproxy.log
   ```

3. 重启服务。

   ```
   service rsyslog restart
   ```

4. 在 rsyslog 云服务器的安全组下放行 UDP 514 端口。

   

5. 在**负载均衡器**页面，右键点击待配置的负载均衡器，选择**配置 rsyslog**，弹出配置窗口。

6. 输入rsyslog 远端云服务器的 IP 地址，点击**提交**。

   <img src="../../../_images/cfg_rsyslog.png" style="zoom:50%;" />

7. 勾选负载均衡器，然后选择**更多操作** > **应用修改**，使配置生效。

