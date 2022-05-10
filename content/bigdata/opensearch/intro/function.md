---
title: "功能特性"
description: 本小节主要介绍 OpenSearch 简要主要功能特性。 
keyword: 功能特性,OpenSearch,搜索引擎,大数据
weight: 15
collapsible: false
draft: false
---

OpenSearch 集群服务具备以下功能特点：

## 架构与资源

- 支持热温冷（Hot-Warm-Cold）架构
- 支持一键集群安装部署
- 支持节点横向和纵向扩容
- 支持 OpenSearch 节点滚动升级和重启，最小化对业务的影响
- 配置通用型 SSD 云盘，单节点最大 50T 容量

## 服务性

- 支持 Logstash 自定义插件能力
- Dashboard 节点集成 haproxy 和 keepalive，提供负载均衡和的故障转移能力
- 所有节点内置日志查看工具，支持通过浏览器直接访问日志文件，方便定位
- 支持集群关键指标监控
- 集成 IK Analysis 中文分词插件，支持强大的分词功能

## 稳定性

- 支持多区域和可用区资源配置
- 支持在同一区域的两个或三个可用区之间多可用区分配的节点
- 支持通过**专有主节点**卸载集群管理任务
- 支持 S3、HDFS、本地存储等多种快照存储，提供灵活的备份和恢复

## 安全性

- 支持 IAM 访问控制
- 支持与 VPC 轻松集成
- 支持静态数据加密、节点到节点加密
- 支持针对 OpenSearch Dashboard 的 HTTP 基本身份验证和 SAML 身份验证
- 支持索引级、文档级和字段级安全性
- 支持审核访问日志
- 支持控制面板多租户

## 弹性

- SQL 支持与商业智能 (BI) 应用程序集成
- 自定义程序包以改善搜索结果

## 与热门服务的集成

- 支持 OpenSearch Dashboard 和 Cerebro 可视化管理
- 支持云监控 CloudSat 和 Prometheus 监控服务，提供 OpenSearch 服务与资源的监控告警
- 支持与 QingStor 对象存储数据集成，提供强大的备份后端
