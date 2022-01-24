---
title: "产品动态"
description: 本小节主要介绍 Redis Standalone 产品动态
keyword: 数据库，Redis Standalone，键值数据库，Redis，产品动态
weight: 05
collapsible: false
draft: false

product:
    - time: 2022-01-18
      title: Redis 6.2.5 - v1.0.0 发布上线
      content: Redis Standalone 全新版本形态上线，基于 Redis 6.2.5 版本构建。<br>-  新增四种资源配置类型，适配研发测试及生产环境。支持 I/O 多线程，显著提升性能。<br>- 新增 TLS 加密传输功能，有效防止数据传输被监听。<br>- 新增 ACL 管理功能，可针对不同用户授予不同的命令及数据权限。<br>- 新增 Redis Exporter 配置参数和组件，支持对接 Prometheus，提供基于 Exporter 的 Redis 服务状态监控功能。<br>- 新增 Node Exporter 配置参数和组件，支持对接 Prometheus，提供基于 Exporter 的资源状态监控功能。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全区域

    - time: 2021-10-09
      title: Redis 5.0.11 - QingCloud 3.1.1 正式发布
      content: 1.Redis 升级到5.0.11版本，增强了服务稳定性。<br>2.集成第三方监控，增加 Zabbix 5.x 监控支持。<br>3.修复由于部分情况下的脑裂, 导致的主节点掉线、无法自动故障转移等问题。
      url: ../../intro/version/
      
    - time: 2020-12-28
      title: Redis 5.0.10 - QingCloud 3.0.1 正式发布
      content: 1.升级到 Redis 5.0.10 版本。<br>2.修复某些情况下切换私网后服务异常的问题。<br>3.修复某些情况下升级到 Redis 5.0.8 - QingCloud 3.0.0 版本后服务异常的问题。
      url: ../../intro/version/

    - time: 2020-04-07
      title: Redis 5.0.8 - QingCloud 2.3.0 正式发布
      content: 1.增加“主从复制落后字节数”监控项。<br>2.增加“节点角色”告警项。
      url: ../../intro/version/

    - time: 2019-10-19
      title: Redis 5.0.5 - QingCloud 2.2.1 正式发布
      content: 1.升级到 Redis 5.0.5。<br>2.新增支持自助查看和下载日志文件。<br>3.支持 Region 多可用区部署，同城多活。<br>4.关闭 OpenSSH Server 服务以提高安全性。<br>5.提升三节点集群主从切换稳定性。<br>6.优化日志轮转，节省硬盘空间。<br>7.负增加新主机类型供用户选择。<br>8.增加切换单双核 CPU 的选项。
      url: ../../intro/version/

---

