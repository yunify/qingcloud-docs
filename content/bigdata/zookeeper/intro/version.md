---
title: "系列和版本"
description: 本小节主要介绍 ZooKeeper 主要系列和版本。 
keywords: ZooKeeper 版本介绍,系列介绍 
weight: 20
collapsible: false
draft: false
---

QingCloud ZooKeeper 基于原生 ZooKeeper版本构建，适配全新 AppCenter 框架，将开源 ZooKeeper 封装成应用，提供高可用的分布式数据管理与系统协调软件服务。

## QingCloud 2.0.0 - ZooKeeper 3.4.14

基于原生 Apache ZooKeeper 3.4.14 构建，同时提供 ZooKeeper REST 服务。

- 新增支持集群数据备份和恢复功能。
- 新增支持自助查看和下载日志等文件。
- 新增支持自助开启或关闭 REST 服务。
- 禁止删除主节点，以防止极端情况下数据丢失。

## QingCloud 1.3.1 - ZooKeeper 3.4.13

基于原生 Apache ZooKeeper 3.4.13 构建，同时提供 ZooKeeper REST 服务。

- 支持在 Region 多可用区区域部署，同城多活。

## QingCloud 1.3 - ZooKeeper 3.4.13

基于原生 Apache ZooKeeper 3.4.13 构建，同时提供 ZooKeeper REST 服务。

- 新增了开启管理员帐号来允许管理访问权限。
- 开放了 tickTime 等常用的配置项供用户开发测试使用。
- 对 HealthCheck 和监控做了一些优化。

## QingCloud 1.0 - ZooKeeper 3.4.9

基于原生 Apache ZooKeeper 3.4.9 构建，同时提供 ZooKeeper REST 服务。
