---
title: "产品系列"
description: 本小节主要介绍 MySQL Plus 版本规格。 
keywords: mysql plus 版本规格, 版本应用场景 
weight: 20
collapsible: false
draft: false
---



QingCloud MySQL Plus 根据 QingCloud AppCenter 功能特点定制了三个功能系列：基础版、高可用版、金融版。

## 系列介绍

|<span style="display:inline-block;width:60px">系列</span> |<span style="display:inline-block;width:320px">版本说明</span>|<span style="display:inline-block;width:240px">适应场景</span> |
|:----|:----|:----|
|基础版   |面向个人用户或中小型团队用户推出的单节点数据库版本，成本低，可实现极高的性价比。   |适用于个人学习、小型网站、开发测试等使用场景。|
|高可用版  |面向企业级生产环境推出的双节点数据库版本，采用一主两从的高可用架构，提供数据库的高可用保障。|适用于大中型企业生产库、互联网、电商零售、物流、游戏等行业应用。|
|金融版   |面向金融级生产环境推出的三节点数据库版本，采用多主单写的三主节点架构，保证数据的强一致性，提供金融级可靠性。|适用于对数据安全性要求非常高的金融、证券、保险等行业的核心数据库。|


## 系列规格

各系列实例规格如下。
|<span style="display:inline-block;width:60px">系列</span>|<span style="display:inline-block;width:60px">vCPU </span>|<span style="display:inline-block;width:80px">内存</span> |<span style="display:inline-block;width:100px">vCPU/内存比</span> |<span style="display:inline-block;width:100px">最大IOPS</span> |<span style="display:inline-block;width:220px">存储空间</span> |
|:----|:----|:----|:----|:----|:----|
|基础版	|1~8|	1GB~32GB|	1:1，1:2，1:4|	500~2500|	基础型：10G~2000G|
|高可用版|	2~32|	4GB~128GB|	1:2，1:4，1:8|	2000~30000	|SSD企业型：10G~2000G <br> NeonSAN：100G~10000G|
|金融版	|2~32	|8GB~256GB|	1:4，1:8	| 2000~30000|	SSD企业型：10G~2000G <br> NeonSAN：100G~10000G|

## 支持版本

|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">内核版本</span>|<span style="display:inline-block;width:120px">产品版本</span> |<span style="display:inline-block;width:220px">约束限制</span> |
|:----|:----|:----|:----|
|基础版   |<li>MySQL 5.7 <li>MySQL 5.6   |<li>1.0.9<li>1.0.8  <li>1.0.1|   -    |
|高可用版 |<li>MySQL 8.0  <li>MySQL 5.7 <li>MySQL 5.6 |<li>1.0.9<li>1.0.8  <li>1.0.7 <li>1.0.6 <li>1.0.1 |<li>不支持使用 MEMORY 存储引擎，否则将导致复制异常。<li>不支持修改同步状态或直接连上从节点执行写操作。|
|金融版   |<li>MySQL 8.0  <li>MySQL 5.7     |  <li>1.0.9 <li>1.0.8  <li>1.0.7 <li>1.0.6 <li>1.0.1|<li>仅支持 InnoDB 存储引擎。<li>每个表必须显示提供主键。<li>不支持 savepoints。 <li>不支持修改同步状态或直接连上从节点执行写操作。|

<!-- 
|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:240px">磁盘性能</span>|<span style="display:inline-block;width:140px">内核</span>|
|:----|:----|:----|:----|
|   金融版     |  <li>2核8G <li> 2核16G  <li>4核16G <li> 4核32G  <li>8核32G <li> 8核64G <li> 16核64G<li> 16核128G <li> 32核128G<li> 32核256G <li> 64核256G |  SSD 企业级 <li> 容量 10GB～2000GB <li>I/O 吞吐 128~320MB/s <li>IOPS 2000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 128~350MB/s <li>IOPS 2000~50000  |  <li> MySQL 8.0 <li> MySQL 5.7   | 
|   高可用版     | <li>2核4G <li>2核8G <li> 2核16G  <li>4核8G <li>4核16G <li> 4核32G  <li>8核16G <li>8核32G <li> 8核64G <li> 16核32G <li> 16核64G<li> 16核128G <li> 32核128G   |  SSD 企业级 <li> 容量 10GB～2000GB <li>I/O 吞吐 128~320MB/s <li>IOPS 2000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 128~350MB/s <li>IOPS 2000~50000  | <li> MySQL 8.0 <li> MySQL 5.7 <li> MySQL 5.6     | 
|   基础版     | <li>1核1G <li>1核2G<li>2核4G <li>2核8G  <li>4核8G <li>4核16G <li>8核16G <li>8核32G  |  基础型 <li> 容量 10GB～2000GB <li>I/O 吞吐 36~100MB/s <li>IOPS 500~2500  | <li> MySQL 8.0 <li> MySQL 5.7 <li> MySQL 5.6     | 
-->
