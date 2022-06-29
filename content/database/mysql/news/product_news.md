---
title: "产品动态"
description: 本小节主要介绍 MySQL Plus 产品动态
keyword: 数据库，MySQL PLus，关系型数据库，MySQL，产品动态
weight: 05
collapsible: false
draft: false

product:
    - time: 2022-06-29
      title: MySQL Plus 1.1.2 版本正式上线
      content: MySQL Plus 1.1.2 版本基于 MySQL 5.6、5.7、8.0 内核构建。<br>- MySQL 5.6 内核版本升级到 5.6.51，MySQL 5.7 内核版本升级到5.7.35，MySQL 8.0 引擎支持 InnoDB 和 RocksDB(MyRocks)；<br>- 新增备份失败的消息提示；<br>- 调整 IaaS 层物理机相关参数值，提升了集群的高并发能力；<br>- 修复创建集群或重启集群时启动失败的问题，增强了集群创建的稳定性；<br>- 支持 e3 主机，并针对用户扫描出的关键漏洞进行系统层库版本升级；<br>- 规避`Lower_case_table_names`参数值修改导致集群故障的问题，支持创建时修改生效；<br>- 新增`Character_set_server`下拉选择框和`Collation_server`配置参数；<br>- 新增<b>数据在线迁移</b>和<b>灾备</b>时不能进行逻辑备份的限制；<br>- 升级ProxySQL版本至 2.3.2，新增使用caching_sha2_password 密码插件账户检查，系统可动态修改ProxySQL客户端参数，使ProxySQL 自适应端MySQL参数和客户端参数与后端保持一致，提升了集群的稳定性和可用性；<br>- 新增<b>启动秒数</b>、<b>客户端未正确关闭连接次数</b>等十项监控项；<br>- 针对原有修复维护灾备状态的灾备集群新增极端场景，使灾备集群所有主机都在重启后可自动修复灾备端状态，增强灾备端的稳定性。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全部

    - time: 2022-04-12
      title: MySQL Plus 1.1.1 版本正式上线
      content: MySQL Plus 1.1.1 版本基于 MySQL 5.6、5.7、8.0 内核构建。<br>- 新增慢日志预览功能；<br>- 新放开 `Logical_backup_exec_timeout`、`Log_slave_updates`参数；<br>- 新增<b>集群状态切换</b>监控项；<br>- 修复旧形态1.6.1等版本升级到1.1.0版本失败问题；<br>- 修复集群自动化运维问题，加强集群服务稳定性。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全部

    - time: 2021-12-21
      title: MySQL Plus 1.1.0 版本正式上线
      content: MySQL Plus 1.1.0 版本基于 MySQL 5.6、5.7、8.0 内核构建。<br>- 新增逻辑备份和备份回档功能；<br>- 新增分析实例日志查询和下载功能；<br>- 新放开 `Block_encryption_mode`、`Binlog_transaction_dependency_tracking`、`Group_replication_transaction_size_limit`参数；<br>- 支持动态设定 `Max_connections` 参数值；<br>- `Sql_mode` 参数新增 NULL 值选项；<br>- 修复集群自动化运维问题，加强集群高可用稳定性。
      url: ../../intro/version/
      tags:
      - 新功能
      - 体验优化
      zone: 全部

    - time: 2021-12-21
      title: MySQL Plus 支持逻辑备份
      content: MySQL Plus 1.1.0 版本全新支持基于数据库对象级的逻辑备份，并支持恢复集群到指定时间点。
      url: ../../manual/backup_restoration/backup_info/
      tags:
      - 新功能
      zone: 全部

    - time: 2021-07-12
      title: MySQL Plus 支持外网地址连接
      content: MySQL Plus 通过在管理控制台申请外网地址和设置 IP 白名单，支持使用外网地址连接数据库。
      url: ../../manual/mgt_connect/enable_external_network/
      tags:
      - 新功能
      - 体验优化
      zone: 全部

    - time: 2021-07-09
      title: MySQL Plus 1.0.9 版本正式上线
      content: MySQL Plus 1.0.9版本基于 MySQL 5.6、5.7、8.0内核构建。<br>- 新增分析实例节点，支持 HTAP 方案将 ClickHouse 作为 MySQL Plus 的一个分析实例，实现从主节点同步并分析数据；<br>- 新增重启节点功能，支持重启单个节点服务；<br>- 新增指定 Master 节点功能；<br>- 新增服务地址模块，支持一键查询节点日志服务地址。
      url: ../../intro/version/
    
    - time: 2021-01-31
      title: MySQL Plus 1.0.8 版本正式上线
      content: MySQL Plus 1.0.8版本基于 MySQL 5.6、5.7、8.0内核构建。<br>- 支持自动重建复制异常从库或只读实例；<br>- 新增 innodb_adaptive_hash_index、performance_schema、innodb_autoinc_lock_mode 配置参数管理；<br>- 优化 max_allowed_packet、slave_pending_jobs_size_max、innodb_log_file_size 配置参数默认值。
      url: ../../intro/version/

    - time: 2020-12-25
      title: MySQL Plus 1.0.7 版本正式上线
      content: MySQL Plus 1.0.7版本基于 MySQL 5.6、5.7、8.0内核构建。<br>- 支持从旧形态升级到新形态；<br>- 支持创建三节点主实例；<br>- 支持灾备功能和 zabbix_agent 功能；<br>- 支持连接控制插件；<br>- 新增 election-timeout、semi-sync timeout 配置参数管理；<br>- 新增 Innodb_row_lock_waits、Innodb_row_lock_time_avg 监控项；<br>- sql_mode 支持 PIPES_AS_CONCAT, IGNORE_SPACE；<br>- 取消高级权限用户个数限制，支持创建多个高级权限账号；<br>- 高可用读 IP 支持指定分发请求的角色；<br>- 修复集群自动化运维问题，加强集群高可用稳定性。
      url: ../../intro/version/
   
    - time: 2020-09-19
      title: MySQL Plus 1.0.6 版本正式上线
      content: MySQL Plus 1.0.6版本基于 MySQL 5.6、5.7、8.0内核构建。<br>- 新增兼容 MySQL 8.0内核；<br>- 支持 xtrabackup 在线迁移服务；<br>- 支持关闭 SSL 传输加密时，自动清空 FTP 目录下 SSL 配置文件；<br>- 支持通过 HTTP 服务预览、下载日志；<br>- 支持在管理控制台重建只读实例；<br>- 支持磁盘大小最小默认为 20GB；<br>- 优化 audit_log_rotations 配置参数最高可配置48个文件；<br>- 修复集群自动化运维问题。
      url: ../../intro/version/

    - time: 2020-06-03
      title: MySQL Plus 1.0.3 版本正式上线
      content: MySQL Plus 1.0.3版本基于 MySQL 5.6和5.7内核构建。<br>- 新增在线迁移后交换预留 IP 功能；<br>- 优化集群扩容流程，并缩小主丢失时间窗口；<br>- 支持选用企业型e2 主机；<br>- 新增  innodb_flush_method 和 innodb_use_native_aio 配置参数管理；<br>- 支持自动订正 root 和 proxy 节点账号；<br>- 支持串行升级功能；<br>- 修复集群自动化运维问题。
      url: ../../intro/version/

    - time: 2019-12-08
      title: MySQL Plus 1.0.1 版本正式上线
      content: MySQL Plus 1.0.1版本基于 MySQL 5.6和5.7内核构建。<br>- 新增 MySQL 审计功能；<br>- 新增密码强度规则配置参数；<br>- 新增 Innodb_row_lock_time_avg 监控项；<br>- 新增自动订正运维账号功能；<br>- 新增主节点只读状态的自动检测和订正功能；<br>- 新增云服务器 64核256G 规格；<br>- 修复集群自动化运维问题。
      url: ../../intro/version/

    - time: 2019-07-26
      title: MySQL Plus 全新形态上线
      content: MySQL Plus 为了提高用户使用体验和提供更多的优惠，发布了全新的版本，支持基础版、高可用版、金融版三个产品系列；同时为提高使用性能，新增读写分离和只读实例节点。
      url: ../../intro/list/

    - time: 2017-06-29
      title: MySQL Plus 上线 AppCenter
      content: MySQL Plus 通过 AppCenter 管理平台以独立应用方式提供服务。<br>MySQL Plus 是一款具备金融级强一致性、主从秒级切换，集 InnoDB+TokuDB 双存储引擎支持的增强型 MySQL 集群应用。作为关系型数据库 RDB 的升级版本，MySQL Plus 主要面向对数据一致性和高可用性有着强烈需求的高端企业级用户。
      url: ../../intro/introduction/

---

<!-- 设置上述参数可生成产品动态页  -->
