---
title: "产品架构"
description: 介绍 TiDB 的产品架构
draft: false
weight: 5
enableToc: false
keyword:   TiDB,分布式数据库,架构设计
---



分布式数据库 TiDB 后台服务运行于 AppCenter 基础之上，AppCenter 屏蔽了底层虚拟化实现的感知 ，使用户通过可视化管理界面可以轻松便捷地管理集群。

TiDB 的后台服务分为资源计算层、集群管理层以及资源调度层：

- 资源计算层：根据创建时传递的性能需求分析出所需要的节点角色数量与配置的配比。
- 集群管理层：调用基础资源层的 API 完成创建、关闭、删除等集群管理操作。
- 资源调度层：实时分析当前集群负载情况，发起扩容请求。

<img src="../../_images/tidb_architecture_1.png" alt="产品架构"  />

在内核设计上，分布式数据库 TiDB 将整体架构拆分成了 TiDB 、TiKV、PD 等多个模块，各模块之间互相通信，组成完整的 TiDB 系统。同时，多个 TiKV 节点和 TiDB 节点可通过 VPC 网络工作在同一区域 (Region) 的不同可用区 (AZ) 下，实现同城多活的部署模式，保证了系统的健壮性。

<img src="../../_images/tidb_architecture_2.png" alt="产品架构"  />

