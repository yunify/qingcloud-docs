---
title: "查看告警日志"
description: 负载均衡告警、告警日志
weight: 5
draft: false
---

开启健康检查后，GSLB 向多点监控服务系统发送健康检查任务，并返回健康检查日志。

本小节主要介绍如何查看 GSLB 实例告警日志。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **网络服务** > **云解析 DNS**，进入域名列表页。
3. 在左侧导航栏选择**全局负载均衡**，进入实例列表页面。
   
   ![GSLB 策略列表](../_image/gslb_policy_list.png)
   
4. 点击策略名称，进入策略详情页面。
5. 选择告警日志页签，查看近期告警日志。
   
   可筛选查看今日、最近7天、最近30天的日志，并可根据 IP 查询日志。
   
   ![查看策略日志列表](../_image/gslb_alarmlog.png)

6. 选择目标日志，点击**查看**，展开日志详情。
   
   可查看该 IP 各监控节点，检测状态和日志详情。
   
   ![查看策略日志详情](../_image/gslb_alarmlog_detail.png)

## 日志参数详情

TCP 和 HTTP（S)日志具体包括如下参数。

- TCP 健康检查
   {"type": "tcp", "ip": "%(content)s", "port": 80, "callback": "%(url)", "fall_rate": 50, "monitor_node": "pek3,sh1a,gd2", "interval": 60, "timeout": 5, "fall": 3, "rise": 5}

- HTTP/HTTPS 健康检查
   {"type": "http", "ip": "%(content)s", "url": "http://%(host)/%(uri)", "port": 80, "callback": "%(url)", "status_code": 500, "fall_rate": 50, "monitor_node": "pek3,sh1a,gd2", "interval": 60, "timeout": 5, "fall": 3, "rise": 5}