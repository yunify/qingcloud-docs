---
title: "产品动态"
collapsible: false
weight: 10

product:
    - time: 2021-09-10
      title: ELK 7.10.2 - QingCloud 3.0.3 上线
      content: ELK 7.10.2 - QingCloud 3.0.3 版本基于原生 ELK 7.10.2 构建；<br>- 支持三方告警对接，集成 Prometheus Node 和 Elasticsearch Exporter；<br>- 优化 ES 线程池参数，减少写入被拒绝的可能；<br>- 修复滚动重启不生效、超时等问题。
      url: ../../intro/version/


    - time: 2020-03-03
      title: ELK 7.5.1 - QingCloud 3.0.0 上线
      content: ELK 7.5.1 - QingCloud 3.0.0 版本基于 ELK 7.5.1 构建。
      url: ../../intro/version/

    - time: 2020-03-03
      title: ELK 6.8.6 - QingCloud 2.1.5上线
      content: ELK 6.8.6 - QingCloud 2.1.5 版本基于 ELK 6.8.6 构建；<br>- 提高 Logstash 最大节点数到 50；<br>- 修复 Kibana Timelion 页面显示异常的问题；<br>- 新增支持 VIP 9300 端口，方便 Java Transport Client 使用；<br>- 修复偶然情况下两个 Kibana 节点同时创建索引时引起死锁的问题。
      url: ../../intro/version/

    - time: 2020-03-03
      title: ELK 5.6.16 - QingCloud 1.6.5 上线
      content: 提高 Logstash 最大节点数到 50；<br>- 新增支持  VIP 9300 端口，方便 Java Transport Client 使用；<br>- 允许降级到 Logstash 5.4.3 以使用 qingstor input/output 插件；<br>-修复偶然情况下两个 Kibana 节点同时创建索引时引起死锁的问题。
      url: ../../intro/version/

    - time: 2019-07-05
      title: ELK 5.6.16 - QingCloud 1.5.3 上线
      content: ELK 5.6.16 - QingCloud 1.5.3 版本基于 ELK 5.6.16 构建；<br>- 新增 ES 专有主节点（Dedicated Master）；<br>- 新增两组 ES 节点，支持热温冷（Hot-Warm-Cold）架构；<br>- 支持企业级分布式 SAN（NeonSAN）存储，最大 50T 容量；<br>- 新增支持 ES 节点共挂载三块数据硬盘，提高读写性能；<br>- 新增支持 ES 节点滚动重启，最小化对业务的影响；<br>-新增支持滚动升级（升级前请完整备份数据）；<br>- 新增 ES VIP 并支持高可用；<br>-新增支持自动扩容硬盘空间；<br>-新增支持自助清理 Heap Dump 文件。
      url: ../../intro/version/

   

---

<!-- 设置上述参数可生成产品动态页  -->
