---
title: "什么是 Harbor 镜像仓库"
draft: false
enableToc: false
keyword: Harbor, 私有镜像仓库，镜像仓库，容器
weight: 10
---

## 产品概述

[Harbor](https://goharbor.io/) 是一个开源的企业级 Docker Registry 镜像仓库服务，用于存储和分发 Docker 镜像，并提供基于角色的权限控制、仓库间 Image 异步复制、LDAP/AD 支持、图形界面等功能。

QingCloud Harbor 私有云镜像仓库将 Harbor 制作成了 App，能直接在 AppCenter 进行一键部署，并提供了一个高可用、高安全、高性能的解决方案。

## 产品特点

QingCloud Harbor 私有云镜像仓库具有如下特点：

* 镜像存储同时支持 QingStor 对象存储和本地挂盘存储。
  > **说明**：
  >
  > * 推荐使用 QingStor 对象存储来保证高可用和无限容量。（QingStor 对象存储是 QingCloud 提供的通用海量非结构化数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。）
  > * 本地存储不支持高可用，且受单磁盘容量限制，仅建议测试使用。
* 支持应用节点横向和纵向伸缩。
* 具备高可用性。
* 支持一键部署。
