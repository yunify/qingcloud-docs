---
title: "日志管理"
date: 2020-11-11T00:00:00+09:00
draft: false
collapsible: false
weight: 10
---

## 操作日志

在集群实例部署和运行过程中会产生日志信息，我们提供完整的日志列表给开发者。日志状态分： 成功、等待中、执行中、部分失败和失败几中。

![操作日志列表](/appcenter/dev-platform/cluster-images/app_logs.png)

当日志为“部分失败”或“失败时”我们会自动发送告警通知，并提供详细的错误日志内容给开发者，以定位问题原因。

![错误日志](/appcenter/dev-platform/cluster-images/app_log_failed.png)