---
title: "管理监控配置"
description: gslb监控配置。
weight: 3
draft: false
---

本小节主要介绍如何管理监控配置，包括查看监控配置、修改监控规则、修改调度策略。

## 查看监控配置

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **网络服务** > **云解析 DNS**，进入域名列表页。
3. 在左侧导航栏选择**全局负载均衡**，进入实例列表页面。
   
   ![GSLB 实例列表](../_image/gslb_policy_list.png)

4. 点击实例名称，进入实例详情页面。
5. 选择**监控配置**页签，即可分别查看监控方式、监控参数、调度策略的配置信息。
   
   ![监控配置](../_image/check_monitor_config.png)

## 修改监控规则

1. 进入实例列表页面。
   
   ![GSLB 实例列表](../_image/gslb_policy_list.png)

2. 勾选目标实例，点击**更多操作** > **修改监控规则**。
3. 在修改监控规则窗口，可修改监控方式和监控参数。
   
    修改 TCP 监控配置
  
      ![修改 TCP 监控配置](../_image/modify_tcp_monitor.png)

    修改 HTTP 监控配置
    
      ![修改 HTTP 监控配置](../_image/modify_http_monitor.png)

4. 点击**确认修改**，返回实例列表，即成功修改监控配置。

## 修改调度策略

1. 进入实例列表页面。
   
   ![GSLB 实例列表](../_image/gslb_policy_list.png)

2. 勾选目标实例，点击**更多操作** > **修改调度策略**。
3. 在修改调度策略窗口，可修改调度方式和主 IP 池在线率阈值。
   
   ![修改调度策略](../_image/modify_scheduling_rules.png)

4. 点击**确认修改**，返回实例列表，即成功修改监控配置。
