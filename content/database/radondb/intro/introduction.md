---
title: "什么是RadonDB"
description: Test description
draft: false
weight: 3
enableToc: false
keyword: RadonDB, QingCloud, 数据库
---

RadonDB 是一款基于 MySQL 研发的新一代分布式关系型数据库 (MyNewSQL)。旨在向用户提供具备金融级高可用、强一致、超大容量的数据库服务，RadonDB 高度兼容 MySQL 语法，自动水平分表，智能化扩容。

**RadonDB 的优势:**

* 自动水平分表，一键即可开启智能化扩容，扩容过程业务不中断。
* 数据多副本，率先使用 GTID 并行复制和 Raft 一致性协议确保副本间数据强一致、零丢失。
* 主副本故障自动秒级切换，实现自动化运维，无需人工干预。
* 存储副本使用 MySQL(5.7.29) 存储，稳定可靠的存储能力与强大的计算能力并存。
* 提供分布式事务能力，保证跨节点操作的数据一致性。
* 同时支持 OLTP (高并发事务需求)和 OLAP (复杂分析需求)。
* 高度兼容 MySQL 语法，数据可快速导入、导出，简单易用。
* 多可用区部署，提供 SQL 审计和 IP 白名单功能，安全可靠。