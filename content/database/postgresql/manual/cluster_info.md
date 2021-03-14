---
title: "集群信息"
description: test
weight: 2
draft: false
---



#### 查看集群信息  

在集群创建完毕后，可以在控制台 `Appcenter 控制台-> 集群管理` 标签下看到目前已经创建的集群信息。

 集群列表
![集群列表](../../_images/cluster_info.png)

 点击集群 ID 可以查看该集群的详细信息
![集群信息](../../_images/nodes_info.png)

 集群基础资源监控信息
![基础资源监控信息](../../_images/cpu_info.png)

 集群节点监控信息
![集群资源监控信息](../../_images/app_info.png)

![集群资源监控信息](../../_images/app_info2.png)

#### 修改配置参数

  点击`配置参数`可以修改 `PostgreSQL 参数` ，修改部分参数会导致 PostgreSQL 服务重启，具体可以参考参数说明。
  ![参数配置](../../_images/params_set.png)

#### 查看当前主节点

  点开集群的`角色详情` tab 页即可查看。
  ![查看是否为主节点](../../_images/pg_ismaster1.png)

#### 扩容集群

  可以在集群性能不足时提高集群的配置：

  点击集群自定义服务-->扩容集群。
  ![集群扩容](../../_images/pg_cluster_resize.png)

  ![集群扩容](../../_images/pg_cluster_resize1.png)

#### 创建只读实例

  点击新增节点-->选中 `只读实例` 。
  ![创建只读实例](../../_images/add_ri.png)

#### 创建读写分离 Proxy 实例

  点击新增节点-->选中 `proxy 实例` 。
  ![创建proxy实例](../../_images/add_proxy.png)

#### 重建从节点

  当出现从节点复制异常的情况下，可以通过重建从节点修复：

  点击集群自定义服务-->重建从库。
  ![数据备份功能](../../_images/pg_rebuildStandby.png)

#### 切换私有网络 

  当需要改变集群节点 IP 或者改变私有网络时，可以通过 `切换私有网络` 服务来操作：

  点击集群自定义服务-->切换私有网络。
  ![切换私有网络](../../_images/change_vxnet.png)

#### 服务端口信息

集群提供三个高可用 IP ：

- 高可用写 IP ：始终指向 Primary 节点。

- 高可用读 IP ：可将请求在所有节点之间进行负载分担，提高读取性能，消除单点故障。

- 高可用 Proxy IP ：始终指向 Proxy 实例的 Primary 节点。

  ![查看VIP的信息](../../_images/vipinfo.png)   

#### 启动 Zabbix 客户端服务

  提供了zabbix agent服务（zabbix 4.2.8），当启动该服务后，用户只需要直接在Zabbix Server的web界面添加云服务器即可。请前往zabbix官方下载[监控模板](https://git.zabbix.com/projects/ZBX/repos/zabbix/browse/templates/db/postgresql)。

  ![启动 Zabbix 客户端服务](../../_images/start_zabbix_agent.png)