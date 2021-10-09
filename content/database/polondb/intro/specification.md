---
title: "产品系列"
description: 本小节主要介绍 PolonDB 性能规格。 
keywords: PolonDB, QingCloud, 性能规格
weight: 20
collapsible: false
draft: false
---


分布式数据库 PolonDB 根据 QingCloud AppCenter 功能特点定制`基础版`和`企业版`两个资源类型，并可自定义各资源类型的规格。

- `基础版`采用基础型主机，拥有高可用特性，面向个人用户或中小型团队用户开发，适用于小型业务系统。

- `企业版`采用企业型主机，非常高的硬件稳定性，面向企业级生产环境开发，适用于大型业务系统。

## 资源类型规格

`基础型`服务器配备`基础型本地盘`和`通用型 SSD 云盘`，`企业型 e2`服务器配备`企业型 SSD 本地盘`和`通用型 SSD 云盘`。

|<span style="display:inline-block;width:140px">系列</span> |<span style="display:inline-block;width:140px">云服务器规格</span>|<span style="display:inline-block;width:240px">磁盘性能</span>|<span style="display:inline-block;width:140px">节点数量</span>|
|:----|:----|:----|:----|
|   企业版     | 企业型 e2 <li>4核8G <li> 4核16G <li>4核32G <li>8核16G<li>8核32G <li>16核32G<li> 16核64G <li>16核128G <li> 32核64G <li> 32核128G <li> 32核256G|  SSD 企业级 <li> 容量 100GB～2000GB <li>I/O 吞吐 178~320MB/s <li>IOPS 5000~30000 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 178~350MB/s <li>IOPS 7000~50000  | <li>协调器节点 1 个，副本 1 个 <li> Worker 节点 2～64 个，副本 1 个  <li> 高可用节点 1 个    | 
|   基础版     | 基础型 <li> 2核4G <li> 2核8G <li> 4核8G <li> 4核16G <li>8核16G <li>8核32G |  基础型 <li> 容量 100GB～2000GB <li>I/O 吞吐 51~100MB/s <li>IOPS 1300~2500 <br> <br>企业级分布式 SAN（NeonSAN) <li> 容量 100GB～2000GB <li>I/O 吞吐 178~350MB/s <li>IOPS 7000~50000 | <li>协调器节点 1 个，副本 1 个 <li> Worker 节点 2～64 个，副本 1 个  <li> 高可用节点 1 个   |

> **说明**
> 
> 副本数量是指对所有节点进行整体备份的次数。
