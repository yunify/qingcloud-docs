---
title: "创建Kafka"
description: test
weight: 4
draft: false
---


创建Kafka集群前，您需要先创建一个VPC网络，并在QingCloud AppCenter中创建一个Zookeeper集群，其他地方创建的ZooKeeper集群识别不出来， 建议Kafka与ZooKeeper在一个私有网络中。

> 为了保障数据安全，Kafka集群需要运行在受管私有网络中。所以在创建一个Kafka集群之前，需要创建一个VPC和一个受管私有网络，受管私有网络需要加入VPC，并开启DHCP服务（默认开启）。

### 第一步：基本设置

![](../../_images/base_setup.png)

根据实际需求填写**名称**和**描述**，不影响集群的功能，版本一般建议选择最新版本。

**多可用区域**将节点分散部署在不同区，可用性高；**单可用区域**将节点部署在同一个区，网络延迟最低。

> **注意**：只有选择部署在『region』为**北京3区**时，才可以选择部署方式。如果您选择『多可用区部署』，则集群所有节点将分散部署在当前region中的所有zone；反之，如果选择『单可用区部署』，则集群所有节点将部署在当前region中的某一个zone中。

### 第二步：Kafka节点设置

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

### 第八步：Kafka-manager配置

#### 自动添加集群配置到Kafka-manager

Kafka创建完后，客户端节点预装的Kafka Manager会自动加载Kafka集群的相关配置。


#### 手动添加集群配置到Kafka-manager  

##### 详细步骤

配置[VPN](https://docs.qingcloud.com/product/network/vpn) 或[端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping)后，确保本地可以访问集群网络。如下图所示，在本地浏览器里输入```http://客户端节点IP:端口```，端口可以在集群配置参数进行设置，默认为9000。

> **提示**：如果使用的版本是Kafka 0.10.2.1 - QingCloud 1.1.6，可使用集群内任意节点的IP。

![](../../_images/clusters.png)

1. 如果配置时指定需要登录，请使用配置的帐号登录。

2. 选择**Cluster** -> **Add Cluster**。

3. 自定义一个名字，填写所连接的Kafka集群地址，青云提供的Kafka服务对应的命名空间路径为：zkhost1: port , zkhost2 : port… / kafka / 集群ID。

   > **例如**：Kafka集群id为 cl-j0yf8y1m, ZooKeeper地址 : 192.168.0.1:2181, 192.168.0.2:2181, 192.168.0.3:2181, 则填写192.168.0.1:2181, 192.168.0.2:2181, 192.168.0.3:2181/ kafka / cl-j0yf8y1m

4. 选择Kafka对应的版本，例如Kafka版本为1.1.1，可以选择1.1.1，勾选jmx配置。

5. 更改基本配置，点击**save**后可以使用kafka-manger来管理和监控Kafka集群了。

![](../../_images/add_cluster.png)

##### kafka-manager升级说明

若集群由老版本升级时，会出现kafka-manager的管理界面数据没有及时更新现象。这是由于kafka实际版本已经更新，而zookeeper中的注册数据未刷新，不影响正常使用。

操作步骤如下所示

1. Disable集群

   ![](../../_images/disable_cluster.png)

2. Enable集群

   ![](../../_images/enable_cluster.png)

3. 恢复正常数据

   ![](../../_images/recover_data.png)

##### 最终效果图

![](../../_images/cluster_info.png)