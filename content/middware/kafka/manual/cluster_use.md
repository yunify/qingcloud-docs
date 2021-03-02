---
title: "集群使用"
description: test
weight: 8
draft: false
---

## 集群信息

在集群创建完毕后，可以在控制台`Appcenter -> 集群管理`标签下看到目前已经创建的集群信息：

 **集群列表**：

![](../../_images/cluster_list.png)

 点击**集群 ID**可以查看该集群的详细信息：

![](../../_images/cluster_allinfo.png)

 集群基础资源监控信息：

![](../../_images/cluster_monitor.png)

## 配置参数

  点击**配置参数**，可以修改**Kafka参数**，**Kafka-manager参数**。

![](../../_images/config_parameter.png)

## 扩容集群

  点击集群**基本属性**右侧按钮里的**扩容集群**，在集群性能不足时提高集群的配置。

> **提示**：硬盘扩容不会导致服务重启，扩容CPU，内存等核心资源则会导致服务重启

![](../../_images/expand_cluster.png)

## 跨网访问

青云提供灵活的网络配置，一般建议Kafka集群和客户端（生产者、消费者）都在同一个VPC下工作，来达到最高的性能。如果Kafka在实际使用中会出现producer，consumer与broker都不在一个网段之中需要跨VPC，可以考虑以下方法：

1. 通过[边界路由器](https://docs.qingcloud.com/product/network/border)、[IP Sec 隧道](https://docs.qingcloud.com/product/network/ipsec)、[GRE隧道](https://docs.qingcloud.com/product/network/gre) 等方式把网络打通，这种方式适合于大规模复杂网络的情况。

2. 配置[VPN](https://docs.qingcloud.com/product/network/vpn)，这种方法通常用于本地开发测试。

3. 通过集群参数`advertised.host.name`和`advertised.port`对外暴露出来，这种方式只适合于单节点kafka集群。需要在broker所在的路由器上配置 [端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping) ，并且需要修改broker的`advertised.host.name`与`advertised.port`为路由器转发的源地址和源端口。这是因为Kafka各节点（broker、producer、consumer）之间是靠advertised host与advertised port通讯的。假设路由器的IP地址是207.226.141.61，端口9080转发到Kafka broker 192.168.0.10端口9092，点击**配置参数**，点击**参数**右侧的**修改属性**按钮，修改advertised.host.name为 207.226.141.61，修改advertised.port为9080。

   ![](../../_images/modify_parameter.png)


## Kafka-manager创建Topic

点击**Topic**，点击**Create**，若不单独给Topic配置参数，会使用集群级别默认参数：

![](../../_images/create_topic.png)

## Kafka-manager管理Topic

点击**Topic**，可以在**List**里找到Topic进行管理，修改topic参数：

![](../../_images/manage_topic.png)

## Kafka-manager平衡分区leader

点击**Preferred Replica Election**，通过**Run**执行。

> **提示**：分区内必须有数据时才能使用。

![](../../_images/replica_election.png)

## 日志及文件查看

为了更好的获取节点使用情况，青云提供了方便快捷的文件日志获取服务。配置[VPN](https://docs.qingcloud.com/product/network/vpn)或[端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping)后，确保本地可以访问集群网络。即可在本地浏览器里查看或下载相应节点的日志和文件。

在控制台`Appcenter -> 集群列表`标签下可以看到集群每个节点的信息，如节点角色，节点IP。对于Kafka-manager节点，在浏览器输入`http://节点IP`，可查看Kafka Manager的日志文件。

![](../../_images/file_viewer_1.png)

对于Kafka节点，只需要获取其中一个节点IP，在本地浏览器输入`http://节点IP`，可查看全部Kafka节点的Heap Dump文件（dump目录）、数据文件（kafka-logs目录）和日志文件（logs目录）。

![](../../_images/file_viewer_2.png)

点击对应标题即可获取详细信息：

![](../../_images/kafka_log.png)
