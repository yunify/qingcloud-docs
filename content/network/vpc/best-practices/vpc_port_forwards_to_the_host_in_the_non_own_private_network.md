---
title: "通过 VPC 端口转发实现本地提供公网服务"
keyword: VPC, VPC 网络, 端口转发
description: 使用 VPC 端口转发功能将流量转发至非云上服务器。
draft: false
weight: 15
---

本文介绍如何通过 VPC 的端口转发功能实现将外网访问 VPC 的流量转发至本地数据中心。

## 场景示例

客户通过专线实现了云平台 VPC 和本地数据中心的通信，希望通过 VPC 的公网 IP 直接访问部署在数据中心内网的 TCP 服务。此时，利用 VPC 端口转发功能便可实现。

本文以云平台的不同区域来模拟上述客户场景进行操作演示。

**环境信息**：

客户在上海 1 区（sh1）部署了一个 HTTP 服务，通过北京 3 区（pek3） VPC 的公网 IP 来访问上海区的服务。

- sh1 区 VPC A（模拟客户本地数据中心）

    - 公网 IP：139.198.179.62
    - 私有网段：172.16.0.0/24
    - 云服务器 IP：172.16.0.2

- pek3 区 VPC B

    - 公网 IP：139.198.19.98
    - 私有网段：192.168.0.0/24
    - 云服务器 IP：192.168.0.4

## 操作步骤

1. 通过 IPSEC 隧道实现两个 VPC 之间的互通。

    ​可以参考[搭建ipsec隧道](/network/vpc/manual/tunnel/ipsec/)进行配置。

    ![](../_images/private_network_1.png)

2. 执行以下命令，在 VPC B 的云服务器中（192.168.0.4）设置 DNAT 规则。

    ```shell
    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -t nat -A PREROUTING -d 192.168.0.4 -p tcp --dport 80 -j DNAT --to-destination 172.16.0.2:8080
    iptables -t nat -A POSTROUTING -d 172.16.0.2 -p tcp --dport 8080 -j SNAT --to 192.168.0.4
    ```

    ![](../_images/private_network_2.png)

3. 在 VPC B 上配置端口转发，然后在安全组上放行相应下行规则，并点击**应用修改**。
 
    ![](../_images/private_network_4.png)

    ![](../_images/private_network_3.png)

4. 通过 “VPC B 公网 IP:源端口” 方式进行访问验证。

    ![](../_images/private_network_5.png)