---
title: "系列和版本"
description: 本小节主要介绍 时序数据库 ChronusDB 主要系列和版本。 
keywords: chronusdb 版本介绍,系列介绍 
weight: 20
collapsible: false
draft: false
---

时序数据库 ChronusDB 基于 ClickHouse 定制，并根据QingCloud AppCenter 功能特点定制`基础版`和`企业版`两个功能系列。

## 版本介绍

|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:240px">磁盘规格</span>|<span style="display:inline-block;width:140px">适用范围</span>|
|:----|:----|:----|:----|
|   企业版     |  企业型 e2 <li>2核8G <li> 4核16G  <li>8核32G <li> 16核64G <li> 32核128G|  SSD 企业级 <li> 容量 10GB～2000GB <li>I/O 吞吐 128~320MB/s <li>IOPS 2000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 128~350MB/s <li>IOPS 2000~50000  | 面向企业级生产环境，提供更高更稳定的性能配置，满足企业高性能业务要求。     | 
|   基础版     | 基础型  <li> 2核4G  <li>1核2G  |  基础型 <li> 容量 10GB～2000GB <li>I/O 吞吐 36~100MB/s <li>IOPS 500~2500 | 面向个人用户或中小型团队用户，提供稳定性能基础配置，高性价比。    | 

## 版本历程

目前 ChronusDB 基于 RadonDB ClickHouse 17.19.6.36 内核开发。

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:520px">版本说明</span>|
|:----|:----|
|   <li>企业版-1.0.6<li> 基础版-1.0.6  |  新增私网切换功能。  |
|   <li>企业版-1.0.5<li> 基础版-1.0.5    |  提升备份恢复功能。  |
|   <li>企业版-1.0.4<li> 基础版-1.0.4   |  Distributed 引擎新增支持 `currentDatabase` 函数。  |
|   <li>企业版-1.0.3<li> 基础版-1.0.3   |  <li>禁用交换空间。<li> 选择数据库后，使用 DDL 和 DQL 语句无需指定数据库。 |
|   <li>企业版-1.0.2<li> 基础版-1.0.2    |  <li>优化集群内存自适应能力。<li> 优化数据可排序查找功能。  |
|   <li>企业版-1.0<li> 基础版-1.0   |  <li>支持横向增加节点。<li>支持升降集群节点硬件资源配置。<li> 支持数据的逻辑一致和物理一致两种分布方式。 <li> 集群无主协议，业务可连接集群任意 IP 或高可用 IP。<li> 支持毫秒级查询千亿条结构化数据，并支持自定义图形化结果。  |
