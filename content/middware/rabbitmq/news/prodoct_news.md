---
title: "产品动态"
collapsible: false
weight: 10

product:
    - time: 2021-09-15
      title: RabbitMQ 3.8.19 版本正式上线
      content: 升级到 RabbitMQ 3.8.19 版本，并进行以下功能更新：<br>1.新增集群节点发现功能：将集群节点信息放入etcd中，服务启动时集群从etcd集群中获取集群节点信息。<br>2.为系统服务systemd、rabbitmq、appctl、keepalived、haproxy和rabbitmq加上日志信息，统一放到挂载盘固定位置。<br>3.增加caddy服务，通过caddy能够获取访问服务日志。<br>4.去掉ram角色。<br>5.若干优化。
      url: ../../intro/artic/
      tags: 
      - 新功能
      - 修复问题


    - time: 2021-05-24
      title: RabbitMQ 3.7.23 - QingCloud 1.5.0 版本正式上线
      content: 1.提升网络性能。将集群节点信息放入etcd中，服务启动时集群从etcd集群中获取集群节点信息。多个rabbitmq集群支持使用同一个etcd。<br>2.提升计算性能。<br>3.提升安全性。<br>4.用户体验改进。
      url: ../../quickstart/quick_start/

    - time: 2021-05-01
      title: RabbitMQ 3.7.23 - QingCloud 1.4.3 版本正式上线
      content: 本次版本主要做了节点调整，以提升性能。
      url: ../../quickstart/quick_start/

    - time: 2020-08-12
      title: RabbitMQ 3.7.23 - QingCloud 1.4.1 版本正式上线
      content: 1.升级至 RabbitMQ 3.7.23。<br>2.优化集群启动逻辑，修复某些情况下集群创建时发生脑裂的问题。<br>3.新增支持通过浏览器自助查看日志等文件。<br>4.优化横向扩容时不重启现有节点的服务。
      url: ../../manual/cluster_use/

    - time: 2019-05-15
      title: RabbitMQ 3.6.10 - QingCloud 1.2.2 版本正式上线
      content: 1.新增 Region 跨区部署功能，实现同城多活，增强业务容灾能力。<br>2.修复了 VIP 偶尔丢失的问题。
      url: ../../manual/morezone_test/

    - time: 2019-03-30
      title: RabbitMQ 3.6.10 - QingCloud 1.2.1 版本正式上线
      content: 1.修复 hipe compile 启动时间过长导致健康检查脚本不断重启服务的问题。<br>2.修复关闭集群再开启后延迟队列插件失效的问题。
      url: ../../quickstart/quick_start/

---

