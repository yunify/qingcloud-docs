---
title: "实例类型"
description: 介绍 TiDB 不同实例类型的规格及性能参数
draft: false
weight: 7
enableToc: false
keyword: TiDB, QingCloud, 分布式数据库
---

TiDB 数据库提供了`测试型`、`基础性`、`分析增强型`三种类型的实例，不同实例类型使用的节点配置、本地存储和最大组件数量不同，以满足您不同场景下的业务需求。



| 实例类型            | 测试型                                                | 基础型                                                       | 分析增强型                                                   |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 包含组件            | <li>TiDB</li><li>PD</li><li>TiKV</li><li>Monitor</li> | <li>TiDB</li><li>PD</li><li>TiKV</li><li>Monitor</li>        | <li>TiDB</li><li>PD</li><li>TiKV</li><li>TiFlash</li><li>Monitor</li> |
| 节点数量            | 1                                                     | 7～13，其中：<br/><li>TiDB&PD：3</li><li>Monitor：1</li><li>TiKV：3～9</li> | 8～16，其中：<br/><li>TiFlash：1～3</li><li>TiDB&PD：3</li><li>Monitor：1</li><li>TiKV：3～9</li> |
| 节点配置(CPU，内存) | 2核，2048GB                                           | <li>TiDB&PD：2核，2048GB</li><li>Monitor：2核，2048GB</li><li>TiKV ：4核，2048GB</li> | <li>TiFlash ： 4核，2048GB</li><li>TiDB&PD：2核，2048GB</li><li>Monitor：2核，2048GB</li><li>TiKV ：4核，2048GB</li> |
| QPS 参考（次/秒）   | 100000                                                | 80000 ～ 230000                                              | 80000 ～ 230000                                              |
| 存储空间（GB）      | 50                                                    | 600 ～ 1800                                                  | 600 ～ 1800                                                  |
| 列寸容量（GB）      | -                                                     | -                                                            | 500 ～ 1500                                                  |
| 适用场景            | 研发测试及功能体验                                    | 中等规模的生产环境<br/>适合联机交易场景，如购物、缴费、转账  | 中等规模的生产环境<br/>适合联机交易场景与联机分析场景，如企业财务报表与经营分析 |

> **说明**
>
> 相关组件说明请参考[名词解释](../term/)。

