---
title: "产品动态"
collapsible: false
weight: 10

product:

    - time: 2022-01-19
  
      title: Kafka 1.1.1 - v1.6.0 版本正式上线
      content: 为了提升产品性能，增强用户体验，该版本做了如下改动： <br>- 修改健康检查逻辑，解决健康监测引起的性能占用问题。<br>- 提升了高负载场景下 Kafka 的稳定性。<br>- 最大文件打开数 Max Open Files 增加到 500000。<br>- 优化 replica 同步相关参数。    
      url: /middware/kafka/manual/config_para/config_para_info/ 
      tags:
      - 新规格
      - 体验优化
      zone: 全区域

    - time: 2021-11-23
  
      title: Kafka 2.3.1 - v2.0.2 版本正式上线
      content: 为了提升产品性能，增强用户体验，该版本做了如下改动： <br>- 支持 e3 类型计算实例。<br>- 优化 Kafka 健康检查逻辑。<br>- 提升了高负载场景下 Kafka 的稳定性。<br>- 支持在线查看 Kafka Manager 日志。    
      url: /middware/kafka/manual/view_log/  
      tags:
      - 新规格
      - 体验优化
      zone: 全区域
    
    - time: 2019-07-06
      title: 支持 Region 跨可用区多活
      content: 该版本新增支持 Region 多可用区，支持同城多活，并做了如下优化：<br>- 优化健康检查，防止 JVM 假阴性。 <br>- 加强集群操作稳定性。 <br>- 关闭 OpenSSH 服务提高安全性。<br>- 优化数据清理参数，节省硬盘空间。<br>- 最大文件打开数 Max Open Files 增加到 500000。<br>- 开启 JVM Heap Dump 及新增日志文件查看器以更高效定位问题。 
      url: /middware/kafka/quickstart/create_cluster/
      tags:
      - 新功能
      - 体验优化
  

    - time: 2019-03-30
      title: 支持节点和磁盘容量自动伸缩
      content: Kafka 新增支持自动伸缩框架，实现根据规则自动扩容磁盘和新增节点功能。
      url: /middware/kafka/manual/mgt_cluster/cluster_expansion/
      tags:
      - 新功能
      - 体验优化


---

