---
title: "连接问题"
description: Kafka 连接常见问题。
keyword: 云计算,大数据,消息队列,中间件,Kafka,连接Kafka,访问 Kafka,跨VPC访问
weight: 10
draft: false
---

## 如何跨 VPC 访问？

为了达到最高的性能，建议 Kafka 集群和客户端（生产者、消费者）工作同一个 VPC。

若在实际使用中出现 producer、consumer 与 broker 都不在一个 VPC，此时需要跨 VPC 使用。

本节主要介绍 Kafka 如何实现跨 VPC 访问。

- 方法一

   通过[边界路由器](/network/border_router/manual/border_user_guide/)、[IP Sec 隧道](/network/vpc/manual/tunnel/ipsec/)、[GRE 隧道](/network/vpc/manual/tunnel/gre/) 等方式打通网络。   

   **适用场景**：这种方式适合于大规模复杂网络的情况。

- 方法二

   配置 [VPN](/network/vpc/manual/vpn/)。   

   **适用场景**：这种方法通常用于本地开发测试。

- 方法三

   通过集群参数 **advertised.host.name** 和 **advertised.port** 对外暴露出来。  

   **适用场景**：这种方式只适用于单节点 Kafka 集群。

   **操作步骤**

   **1**. 在 broker 所在的路由器上配置 [端口转发](/network/vpc/faq/methods_of_port_forwarding/) 。   
   **2**. 点击**配置参数**，点击**参数**右侧的**修改属性**按钮，修改 broker 的 **advertised.host.name** 与 **advertised.port** 为路由器转发的源地址和源端口。     

   > **说明**
   > 
   > Kafka 各节点（broker、producer、consumer）之间是靠 advertised host 与 advertised port 通讯的。

   **示例**：   
   假设路由器的 IP 地址是 207.226.141.61，端口 9080 转发到 Kafka broker 192.168.0.10 端口 9092。   
   修改 **advertised.host.name** 为 207.226.141.61，修改 **advertised.port** 为 9080。
   ![](../../_images/modify_parameter.png)

