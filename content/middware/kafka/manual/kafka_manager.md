---
title: "Kafka-manager配置"
description: test
weight: 4
draft: false
---

## 自动添加集群配置到Kafka-manager

Kafka创建完后，客户端节点预装的Kafka Manager会自动加载Kafka集群的相关配置。


## 手动添加集群配置到Kafka-manager  

### 详细步骤

配置[VPN](https://docs.qingcloud.com/product/network/vpn) 或[端口转发](https://docs.qingcloud.com/product/network/appcenter_network_config/config_portmapping)后，确保本地可以访问集群网络。如下图所示，在本地浏览器里输入```http://客户端节点IP:端口```，端口可以在集群配置参数进行设置，默认为9000。

> **提示**：如果使用的版本是Kafka 0.10.2.1 - QingCloud 1.1.6，可使用集群内任意节点的IP。

![](../../_images/clusters.png)

1. 如果配置时指定需要登录，请使用配置的帐号登录。

2. 选择**Cluster** -> **Add Cluster**。

3. 自定义一个名字，填写所连接的Kafka集群地址，青云提供的Kafka服务对应的命名空间路径为：zkhost1: port , zkhost2 : port… / kafka / 集群ID。

   > **例如**：Kafka集群id为 cl-j0yf8y1m, ZooKeeper地址 : 192.168.0.1:2181, 192.168.0.2:2181, 192.168.0.3:2181, 则填写192.168.0.1:2181, 192.168.0.2:2181, 192.168.0.3:2181/ kafka / cl-j0yf8y1m

4. 选择Kafka对应的版本，例如Kafka版本为1.1.1，可以选择1.1.1，勾选jmx配置。

5. 更改基本配置，点击**save**后可以使用Kafka-manger来管理和监控Kafka集群了。

![](../../_images/add_cluster.png)

## Kafka-manager升级说明

若集群由老版本升级时，会出现Kafka-manager的管理界面数据没有及时更新现象。这是由于Kafka实际版本已经更新，而Zookeeper中的注册数据未刷新，不影响正常使用。

操作步骤如下所示

1. **Disable集群**

   ![](../../_images/disable_cluster.png)

2. **Enable集群**

   ![](../../_images/enable_cluster.png)

3. **恢复正常数据**

   ![](../../_images/recover_data.png)

### 最终效果图

![](../../_images/cluster_info.png)