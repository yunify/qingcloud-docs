---
title: "产品动态"
description: 本小节主要介绍 ClickHouse 产品动态
keyword: 数据库，ClickHouse，数据仓库，产品动态
weight: 05
collapsible: false
draft: false

product:
    - time: 2022-06-05
      title: ClickHouse 1.1.9 版本正式上线
      content: ClickHouse 1.1.9 新上线。<br>- 支持在线数据迁移。<br>- 内核版本升级到 ClickHouse-22.3.6.5。<br>- DDL 性能优化，自动清理过期 DDL。<br>- 引入 clickhouse-keeper ，function 等新特性。<br>- csv 导入支持多分隔符。<br>- os 升级至 ubuntu 20.4版本 ，充分发挥 <b>e3</b> 性能。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全区域

    - time: 2022-03-02
      title: ClickHouse 1.1.8 版本正式上线
      content: ClickHouse 1.1.8 新上线。<br>- 默认开启 Prometheus 监控配置，提供基于 `system.asynchronous_metrics`、`system.metrics`、`system.events` 表的 ClickHouse 监控服务。<br>- 集群添加节点，新支持分片权重自动均衡。<br>- 新开放 `max_partitions_per_insert_block` 参数，支持修改最大分区数。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全区域

    - time: 2021-11-03
      title: ClickHouse 1.1.7 版本正式上线
      content: ClickHouse 1.1.7 新上线。<br>- 新增 MaterializeMySQL 引擎，支持实时从 MySQL 同步数据。<br>- 新增对象存储服务策略，支持多磁盘数据存储和冷热数据分层存储。<br>- 新开放 max_concurrent_queries 参数，支持修改最大连接数。<br>- 新增日志服务功能，支持在线查看数据库服务日志。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全区域

    - time: 2021-08-23
      title: ClickHouse 1.1.6 版本正式上线
      content: ClickHouse 1.1.6 新上线。<br>- 内核版本升级到 ClickHouse-21.1.3.32。<br>- 支持使用 SQL 管理用户。<br>- 支持 `query-log` 数据库查询日志。 <br>- 开放 system 库。
      url: ../../intro/version/

    - time: 2021-06-30
      title: ClickHouse 1.1.5 版本正式上线
      content: ClickHouse 1.1.5 新上线。<br>- 内核版本升级到 ClickHouse-19.17.6.36。<br>- 新增私网切换功能，支持管理私有网络和节点 IP。
      url: ../../manual/mgt_connect/mgt_vxnet/

    - time: 2021-01-22
      title: ClickHouse 1.1.4 版本上线
      content: ClickHouse 1.1.4 新上线。<br>- 增强备份恢复功能。
      url: ../../intro/version/
    
    - time: 2020-08-31
      title: ClickHouse 1.1.2 版本上线
      content: ClickHouse 1.1.2 新上线.<br>- Distributed 引擎支持 currentDatabase 函数。
      url: ../../intro/version/

    - time: 2019-06-06
      title: ClickHouse 正式上线 AppCenter
      content: 分布式实时分析型列式存储数据库 ClickHouse 服务正式发布。ClickHouse 是一款高性能的、面向联机分析处理(OLAP)的、开源的、列式数据库。
      url: ../../intro/introduction/

---

<!-- 设置上述参数可生成产品动态页  

-->
