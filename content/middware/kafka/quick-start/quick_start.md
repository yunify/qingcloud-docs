---
title: "创建Kafka"
description: 
draft: false
---

## 创建步骤

创建Kafka集群前，您需要先创建一个VPC网络，并在QingCloud AppCenter中创建一个Zookeeper集群，其他地方创建的ZooKeeper集群识别不出来，建议Kafka与ZooKeeper在一个私有网络中。

> 为了保障数据安全，Kafka集群需要运行在受管私有网络中。所以在创建一个Kafka集群之前，需要创建一个VPC和一个受管私有网络，受管私有网络需要加入VPC，并开启DHCP服务（默认开启）。

### 第一步：基本设置

![](../../_images/base_setup.png)

根据实际需求填写**名称**和**描述**，不影响集群的功能，版本一般建议选择最新版本。

**多可用区域**将节点分散部署在不同区，可用性高；**单可用区域**将节点部署在同一个区，网络延迟最低。

> **注意**：只有选择部署在『region』为**北京3区**时，才可以选择部署方式。如果您选择『多可用区部署』，则集群所有节点将分散部署在当前region中的所有zone；反之，如果选择『单可用区部署』，则集群所有节点将部署在当前region中的某一个zone 中。

### 第二步：Kafka 节点设置

![](../../_images/kafka_node.png)

CPU、内存、节点数量、节点类型和存储容量根据自己实际需求进行选择即可，生产环境建议使用至少3个节点。

### 第三步：客户端节点设置

![](../../_images/client_node.png)


### 第四步：网络设置

![](../../_images/network_setup.png)

出于安全考虑，所有的集群都需要部署在私有网络中，请选择自己创建的网络。

### 第五步：依赖服务设置

![](../../_images/dependence_service.png)

选择您所依赖的ZooKeeper集群。

> **提示**：初次使用Kafka，请在上图中点击**快捷创建**创建一个Zookeeper集群。

### 第六步：参数设置

![](../../_images/sevice_parameter.png)

> 注意：offsets.topic.replication.factor参数必须小于或者等于Kafka broker节点数，不能大于Kafka broker节点数，否则就会消费不了消息，直至集群中Kafka broker节点数大于或者等于此参数。

按照实际需求配置Kafka参数，同时也可以配置Kafka-manager是否需要登陆，登录帐号与密码和端口参数。

### 第七步：用户协议

阅读并同意青云AppCenter用户协议之后，点击**提交**，即可开始部署应用。
