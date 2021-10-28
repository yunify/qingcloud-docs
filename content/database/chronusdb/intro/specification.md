---
title: "产品规格"
description: 本小节主要介绍 ChronusDB 规格。 
keywords: ChronusDB, 产品规格
weight: 25
collapsible: false
draft: false
---


时序数据库 ChronusDB 基于 ClickHouse 定制，并根据QingCloud AppCenter 功能特点定制`基础版`和`企业版`两个功能系列。

## 版本规格

|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:240px">磁盘规格</span>|<span style="display:inline-block;width:140px">适用范围</span>|
|:----|:----|:----|:----|
|   企业版     |  企业型 e2 <li>2核8G <li> 4核16G  <li>8核32G <li> 16核64G <li> 32核128G|  SSD 企业级 <li> 容量 10GB～2000GB <li>I/O 吞吐 128~320MB/s <li>IOPS 2000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 128~350MB/s <li>IOPS 2000~50000  | 面向企业级生产环境，提供更高更稳定的性能配置，满足企业高性能业务要求。     | 
|   基础版     | 基础型  <li> 2核4G  <li>1核2G  |  基础型 <li> 容量 10GB～2000GB <li>I/O 吞吐 36~100MB/s <li>IOPS 500~2500 | 面向个人用户或中小型团队用户，提供稳定性能基础配置，高性价比。    | 
