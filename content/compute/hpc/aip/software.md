---
title: "集群管理"
linkTitle: "集群管理"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 1
---

### 查看节点作业状态

aip host info主机太多，仅截取部分

![img](../_images/node.png)

节点状态说明：

```
"OK"： 正常
"Unavail"： 主机异常，无法通讯
"Unreach"： 主机上的 cbjm 异常，无法分发作业
"Closed-Admin"： 主机被管理员关闭，处于运维状态
"Closed-Excl"： 主机上运行独占作业，不接受其他作业
"Closed-Lock"： 主机由于调度策略被锁，不接受其他作业
"Closed-LS"： 主机上的 cbls 工作异常，无法分发作业
"Closed-Wind"： 主机由于配置的时间窗关闭，不接受新的作业
"Closed-Full"： 主机所有 CPU 核都被占用，不接受新的作业
"Closed-Busy"： 主机负载超过配置的阈值，不接受新的作业
"Resuming"： 主机电源开机中（管理员通过命令 csadmin 开机, 或节电调度唤醒中）
"Suspending"： 主机关闭过程中（管理员通过 csadmin 关机，或节电调度停机中）
"Restarting"： 主机关闭过程中（管理员通过 csadmin 重启主机中）
"OK-Power"： 主机处于节电调度停机状态
"Closed-Power"： 主机已被管理员通过 csadmin 关机
"Unknown"：未知
```
