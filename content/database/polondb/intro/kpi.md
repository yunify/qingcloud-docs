---
title: "性能指标"
description: 本小节主要介绍 QingCloud PolonDB 的性能指标。 
keywords: polondb 性能指标,TPC-C,TPC-B
weight: 40
collapsible: false
draft: false
---



## TPC-C 标准性能

测试环境：qingcloud 公有云[北京三区]

测试规格：企业型 e2

cpu：32 核心

内存：64G

存储类型：企业级存储

测试工具：benchmarkSQL 5.0

TPMC：每分钟事务处理数

仓库数量：5000

磁盘数据量：530G

测试时长：10 分钟

模拟环境：模拟实际生产环境的数据可用性（polondb 默认设置）

节点数量：1 协调器 + 4 Worker 节点 + 1 benchmarkSQL 节点

### TPMC 性能数据

| 连接数 | PolonDB           | PostgreSQL 单机   |
| :----- | :---------------- | :---------------- |
| 100    | 8.2万（82374.26） | 5.3万（53326.85） |
| 200    | 9.9万（98180.61） | 4.6万（46151.3）  |
| 400    | 9.7万（97623.09） | 3.4万（34089.88） |
| 800    | 8.5万（85497.77） | 1.9万（19651.36） |

## TPC-B 标准性能

测试环境：qingcloud 公有云[北京三区]

测试规格：企业型 e2

cpu：32 核心

内存：64G

存储类型：企业级存储

测试工具：pgbench (原始模式，未作任何提升性能的修改)

TPMC：每分钟事务处理数

QPM：每分钟查询数

数据量：30 亿条

磁盘数据量：400G

测试时长：10 分钟

模拟环境：模拟实际生产环境的数据可用性（polondb 默认设置）

节点数量：1 协调器 + 8 Worker 节点 + 1 pgbench 节点

### TPMC 性能数据

|<span style="display:inline-block;width:100px">连接数</span>| <span style="display:inline-block;width:240px">PolonDB</span>|<span style="display:inline-block;width:240px">PostgreSQL 单机</span>|
|:------ |:---------------- |:---------------- |
| 200    | 52.0 万（520440） | 12.4 万（124680） |
| 400    | 54.7 万（547020） | 14.0 万（140160） |
| 800    | 61.4 万（614160） | 13.8 万（138360） |
| 1000   | 59.7 万（597120） | 9.2 万（92100）   |

### QPM 性能数据
  
> 只读节点可以充分发挥硬件加倍查询性能。

| <span style="display:inline-block;width:100px">连接数</span> | <span style="display:inline-block;width:240px">PolonDB</span>| <span style="display:inline-block;width:240px">PostgreSQL 单机</span> |
|:------ |:-------------------|:---------------- |
| 200    | 351.7 万（3517320） + 只读节点 = 703.4 万        | 15.8 万（158940） |
| 400    | 386.9 万（3869700） + 只读节点 = 773.3 万        | 16.2 万（162720） |
| 800    | 355.2 万（3552060） + 只读节点 = 710.4 万        | 16.5 万（165300） |
| 1000   | 339.5 万（3395460） + 只读节点 = 679.0 万        | 16.3 万（163860） |

### 4 个 Worker 节点数据

| <span style="display:inline-block;width:300px">测试项</span>          | <span style="display:inline-block;width:300px">PolonDB</span>           |
| ---------------- | ----------------- |
| 800 连接（TPMC） | 32.3 万（323340） |
| 800 连接（QPM）  | 94.2 万（942600） |

