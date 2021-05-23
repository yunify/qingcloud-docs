---
title: "节点管理"
description: 本小节主要介绍如何管理 Redis Standalone 集群节点。 
keywords: redis standalone 节点管理
data: 2021-05-14T00:38:25+09:00
weight: 20
collapsible: false
draft: false
---

## 增加节点

您可以从单节点增加到三节点，增加节点的过程中服务不会停止。从单节点增加到三节点后，集群将自动拥有主从切换的能力，无需任何额外操作。

> `Redis 5.0.8 - QingCloud 3.0.0` 允许单节点增加至三节点或多节点，最高支持九节点，可以满足您大量读的需求

![伸缩节点](../../_images/add_node_1.png)

![伸缩节点](../../_images/add_node_2.png)    

## 删除节点

您可以从三个节点减少到一个节点，需要注意的是：

- 仅 `Redis 5.0.3 - QingCloud 1.2.2` 支持单节点、双节点、三节点之间的伸缩

- 包括 `Redis 5.0.3 - QingCloud 1.2.2` 以及该版本以前的版本由于您可能删除主节点，会造成服务的短暂不可用，所以请在服务压力较小的情况下减少节点，剩下的节点就会以主节点继续提供服务。

- `Redis 5.0.3 - QingCloud 1.2.2` 版本的用户可以先根据 `节点实时角色` 判断集群的节点角色，防止删掉主节点，造成集群服务的短暂不可用。

- `Redis 5.0.5 - QingCloud 2.0.0` 及其之后的版本对待删除节点增加了限制：禁止删除主节点，防止造成服务的短时间不可用。

- `Redis 5.0.8 - QingCloud 3.0.0` 允许删除的节点可以从「节点实时角色」获取。

![伸缩节点](../../_images/delete_node_1.png)

![伸缩节点](../../_images/delete_node_2.png)

![伸缩节点](../../_images/delete_node_3.png)

![伸缩节点](../../_images/delete_node_stat.png)
