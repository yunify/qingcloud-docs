---
title: "网络连通方案"
description: 本小节主要介绍大数据工作台如何保证在数据集成和数据开发工作时，数据源与计算集群的网络连通性。 
keywords: 大数据工作台,网络连通
weight: 15
collapsible: false
draft: false
aliases:
    - /bigdata/dataomnis/manual/data_up_cloud/connect/
---

大数据工作台通过**计算集群**进行数据集成和数据开发工作。在进行数据集成或数据开发之前，请确保计算集群与来源数据源、目标数据源之前网络互通。

<img src="/bigdata/dataomnis/_images/net_connect.png" alt="网络连通" style="zoom:50%;" />

目前在大数据工作台中：

- 计算集群仅支持 Flink Session 集群模式，用户独享。
- 计算集群仅支持部署在 VPC 私有网络中。

您可以根据数据源所在的网络环境，选择相应的网络连接方案来实现计算集群与数据源的网络连通性。

| 数据源所在网络环境        | 网络连通方案                                |
| :------------- | ------------------------------------------------------------ |
| 具备公网访问能力 |为计算集群绑定的 VPC 配置公网 IP，保证公网连通性。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br>如果使用青云 MySQL Plus 的公网访问功能，还需将 VPC 绑定的公网 IP 添加到数据库白名单中。详细操作请参见[MySQL 白名单管理](/database/mysql/manual/mgt_connect/mgt_whitelist/)。</span>              |
| 在青云 **VPC 私有网络**（与工作空间在同一区域）  |<li>（**推荐**）计算集群绑定与数据源相同的 VPC，内网互通。  <li>计算集群绑定不同的 VPC，需要通过[IP Sec 隧道](/network/vpc/manual/tunnel/ipsec/)、[GRE 隧道](/network/vpc/manual/tunnel/gre/)或[边界路由器](/network/border_router/manual/border_user_guide/)的方式连通两个 VPC。 |
| 在青云 **VPC 私有网络**（与工作空间在不同区域）  |通过[IP Sec 隧道](/network/vpc/manual/tunnel/ipsec/)、[GRE 隧道](/network/vpc/manual/tunnel/gre/)或[边界路由器](/network/border_router/manual/border_user_guide/)的方式，使计算集群与数据源网络互通。 |
| 在青云**基础网络**    |**暂不支持在基础网络**中的数据源。 |
| 在本地 IDC 机房，或其他云环境     | 通过 [VPN](/network/vpc/manual/vpn/) 或[边界路由器](/network/border_router/manual/border_user_guide/)方式，使计算集群与本地 IDC 或其他云环境网络互通。  |

