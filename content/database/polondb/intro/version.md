---
title: "系列和版本"
description: 本小节主要介绍 PolonDB 主要系列和版本。 
keywords: polondb 版本介绍,系列介绍 
weight: 20
collapsible: false
draft: false
---

分布式数据库 PolonDB 根据 QingCloud AppCenter 功能特点定制`基础版`和`企业版`两个功能系列。

## 系列介绍

|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:240px">磁盘性能</span>|<span style="display:inline-block;width:140px">适用范围</span>|
|:----|:----|:----|:----|
|   企业版     | 企业型 e2 <li>4核8G <li> 4核16G <li>4核32G <li>8核16G<li>8核32G <li>16核32G<li> 16核64G <li>16核128G <li> 32核64G <li> 32核128G <li> 32核256G|  SSD 企业级 <li> 容量 100GB～2000GB <li>I/O 吞吐 178~320MB/s <li>IOPS 5000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 178~350MB/s <li>IOPS 7000~50000  | 面向企业级生产环境，适用于大型业务系统。     | 
|   基础版     | 基础型 <li> 2核4G <li> 2核8G <li> 4核8G <li> 4核16G <li>8核16G <li>8核32G |  基础型 <li> 容量 100GB～2000GB <li>I/O 吞吐 51~100MB/s <li>IOPS 1300~2500 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 178~350MB/s <li>IOPS 7000~50000 | 面向个人用户或中小型团队用户，适用于小型业务系统。    | 

## 版本介绍

|<span style="display:inline-block;width:140px">版本</span> |<span style="display:inline-block;width:140px">内核版本</span>|<span style="display:inline-block;width:380px">版本说明</span>|
|:----|:----|:----|
|   <li>企业版-2.1<li> 基础版-2.1   |  PostgreSQL 12.2 <br> Citus 9.3.2 |  <li>新增误操作数据找回功能。<li>支持按集群角色配置参数。<li> 新增监控项，包括未使用连接数量、插入的条数、更新的条数、删除的条数、启动小时数、长事务数量、事务年龄超过1亿的库、最小数据库缓存命中率、死锁的次数、临时文件大小 |
|   <li>企业版-2.0 <li> 基础版-2.0    |  PostgreSQL 12.2 <br> Citus 9.2.4 |  <li>支持分布式函数、聚合函数。<li>支持生成列，并支持 `smallserial` 和 `serial` 自增列类型。<li>支持参考表可建立外键，参考表的任何内连接。<li>新增 **local execute** 执行器。<li>CTE 分布式查询、INSERT..SELECT 、re-partition join 性能提升。<li>优化 SQL 覆盖率。  |
|   <li>企业版-1.0<li> 基础版-1.0   |  PostgreSQL 11.5 <br> Citus 8.3.2 |  <li>支持业务不间断的在线横向扩容缩容服务。<li>支持云服务化的 Citus 数据库服务。<li> 支持安全的数据库服务和超高资源利用率的计算服务。  |
