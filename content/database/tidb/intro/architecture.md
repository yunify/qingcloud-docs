---
title: "产品架构"
description: 介绍 TiDB 的产品架构
draft: false
weight: 5
enableToc: false
keywords: TiDB, QingCloud, 分布式数据库
---

TiDB 分布式数据库将整体架构拆分成了多个模块，各模块之间互相通信，组成完整的 TiDB 系统。

TiDB 的服务架构图如下：

<img src="../../_images/tidb_architecture_1.png" alt="产品架构" style="zoom:35%;" />

TiDB 的后台服务分为资源计算层、集群管理层以及资源调度层：

- 资源计算层：根据创建时传递的性能需求分析出所需要的节点角色数量与配置的配比。
- 集群管理层：调用基础资源层的 API 完成创建、扩容等请求。
- 资源调度层：实时分析当前集群负载情况，发起扩容请求。

TiDB 后台服务运行于 AppCenter 基础之上，AppCenter 基于 etcd 实现集群配置信息的实时更新以及整个集群生命周期的管控。AppCenter 屏蔽掉底层虚拟化实现的感知 ，使用户可以轻松便捷的管理集群。

<img src="../../_images/tidb_architecture_2.png" alt="产品架构" style="zoom:20%;" />



